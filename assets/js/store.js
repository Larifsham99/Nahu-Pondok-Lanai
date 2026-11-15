/* =========================================================================
   NAHU PONDOK — Storan Tempatan (localStorage)
   Semua data pelajar disimpan dalam peranti sahaja. Tiada pelayan.
   ========================================================================= */
window.NP = window.NP || {};

NP.Store = (function () {
  const KEY = 'nahupondok:v1';
  const DAY = 86400000;
  const LEITNER = [0, 1, 2, 4, 7, 15]; // hari sehingga ulang kaji seterusnya
  let mem = null;
  let canPersist = true;

  const uid = () => 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

  function blankProfile(nama) {
    return { id: uid(), nama: nama || 'Pelajar', dibuat: Date.now(), bab: {}, soalan: {}, konsep: {}, hafazan: {}, ujian: [], log: [], irab: {}, streak: { last: null, n: 0 }, lastBab: null, sesi: 0 };
  }
  function blankState() {
    const p = blankProfile('Pelajar');
    return { v: 1, active: p.id, profiles: { [p.id]: p }, guru: { pin: null, tugasan: [], keputusan: [] }, settings: { fontScale: 1, theme: 'auto', onboard: false } };
  }

  function load() {
    if (mem) return mem;
    try {
      const raw = localStorage.getItem(KEY);
      mem = raw ? JSON.parse(raw) : blankState();
    } catch (e) { canPersist = false; mem = blankState(); }
    // Migrasi ringan / pembaikan medan yang hilang
    const base = blankState();
    mem.guru = Object.assign({}, base.guru, mem.guru || {});
    mem.settings = Object.assign({}, base.settings, mem.settings || {});
    if (!mem.profiles || !Object.keys(mem.profiles).length) { mem.profiles = base.profiles; mem.active = base.active; }
    Object.values(mem.profiles).forEach(p => {
      const b = blankProfile(p.nama);
      Object.keys(b).forEach(k => { if (p[k] === undefined) p[k] = b[k]; });
    });
    if (!mem.profiles[mem.active]) mem.active = Object.keys(mem.profiles)[0];
    return mem;
  }
  function save() {
    if (!canPersist) return false;
    try { localStorage.setItem(KEY, JSON.stringify(mem)); return true; }
    catch (e) { canPersist = false; return false; }
  }

  const state = () => load();
  const profile = () => load().profiles[load().active];

  function touchStreak(p) {
    const t = today();
    if (p.streak.last === t) return;
    const y = new Date(Date.now() - DAY);
    const ys = y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
    p.streak.n = p.streak.last === ys ? p.streak.n + 1 : 1;
    p.streak.last = t;
  }

  function log(icon, msg) {
    const p = profile();
    p.log.unshift({ i: icon, m: msg, at: Date.now() });
    if (p.log.length > 60) p.log.length = 60;
  }

  /* ---- Bab ---- */
  function bab(id) { const p = profile(); return p.bab[id] || (p.bab[id] = { dibaca: false, best: 0, cubaan: 0, selesai: false }); }
  function markRead(id) {
    const b = bab(id);
    profile().lastBab = id;
    if (!b.dibaca) { b.dibaca = true; const B = NP.findBab(id); log('📖', 'Selesai membaca ' + (B ? B.ms : id)); }
    b.selesai = b.dibaca && b.best >= 70;
    touchStreak(profile()); save();
  }
  function setLastBab(id) { profile().lastBab = id; save(); }

  /* ---- Jawapan ---- */
  function recordAnswer(qid, konsep, ok) {
    const p = profile();
    const s = p.soalan[qid] || (p.soalan[qid] = { c: 0, w: 0, box: 0, due: 0 });
    if (ok) { s.c++; s.box = Math.min(s.box + 1, LEITNER.length - 1); }
    else { s.w++; s.box = 0; }
    s.due = Date.now() + LEITNER[s.box] * DAY;
    s.last = Date.now();
    if (konsep) {
      const k = p.konsep[konsep] || (p.konsep[konsep] = { c: 0, w: 0 });
      ok ? k.c++ : k.w++;
    }
    touchStreak(p);
    save();
  }

  function recordSession(sum) {
    // sum: {title, score, total, src:{type, bab, tahap, tugasan}, wrongKonsep:[]}
    const p = profile();
    const pct = sum.total ? Math.round(sum.score * 100 / sum.total) : 0;
    p.sesi++;
    p.ujian.unshift({ t: sum.title, s: sum.score, n: sum.total, pct, at: Date.now(), src: sum.src && sum.src.type });
    if (p.ujian.length > 100) p.ujian.length = 100;
    if (sum.src && sum.src.type === 'bab') {
      const b = bab(sum.src.bab);
      b.cubaan++;
      if (pct > b.best) b.best = pct;
      b.selesai = b.dibaca && b.best >= 70;
      if (pct >= 70 && !b.dibaca) { b.dibaca = true; b.selesai = true; }
    }
    if (sum.src && sum.src.type === 'irab') {
      const r = p.irab[sum.src.tahap] || (p.irab[sum.src.tahap] = { best: 0, cubaan: 0 });
      r.cubaan++; if (pct > r.best) r.best = pct;
    }
    const icon = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : '📝';
    log(icon, `${sum.title}: ${sum.score}/${sum.total} (${pct}%)`);
    save();
    return pct;
  }

  /* ---- Hafazan ---- */
  function hafazan(babId) { const p = profile(); return p.hafazan[babId] || (p.hafazan[babId] = {}); }
  function setHafazan(babId, idx, pct) {
    const h = hafazan(babId);
    const r = h[idx] || (h[idx] = { st: 0, best: 0, cubaan: 0 });
    r.cubaan++;
    if (pct > r.best) r.best = pct;
    const was = r.st;
    r.st = r.best >= 90 ? 2 : 1;
    if (r.st === 2 && was !== 2) {
      const B = NP.findBab(babId);
      log('🕌', `Hafaz perenggan ${Number(idx) + 1} — ${B ? B.ms : babId}`);
    }
    touchStreak(profile()); save();
  }

  /* ---- Statistik ---- */
  function stats(pArg) {
    const p = pArg || profile();
    const babs = NP.BAB;
    let dibaca = 0, selesai = 0, sumBest = 0;
    babs.forEach(b => { const r = p.bab[b.id]; if (r) { if (r.dibaca) dibaca++; if (r.selesai) selesai++; sumBest += r.best || 0; } });
    let c = 0, w = 0;
    Object.values(p.soalan).forEach(s => { c += s.c; w += s.w; });
    let hafazTotal = 0, hafazDone = 0;
    babs.forEach(b => {
      const paras = b.matan.filter(m => !m.pembuka).length;
      hafazTotal += paras;
      const h = p.hafazan[b.id] || {};
      Object.values(h).forEach(r => { if (r.st === 2) hafazDone++; });
    });
    return {
      dibaca, selesai, totalBab: babs.length,
      penguasaan: Math.round(sumBest / babs.length),
      ketepatan: c + w ? Math.round(c * 100 / (c + w)) : 0,
      dijawab: c + w, betul: c, sesi: p.sesi,
      hafazDone, hafazTotal, hafazPct: hafazTotal ? Math.round(hafazDone * 100 / hafazTotal) : 0,
      streak: p.streak.last === today() || isYesterday(p.streak.last) ? p.streak.n : 0
    };
  }
  function isYesterday(d) {
    if (!d) return false;
    const y = new Date(Date.now() - DAY);
    return d === y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
  }

  function weakKonsep(min, pArg) {
    const p = pArg || profile();
    return Object.entries(p.konsep)
      .map(([k, v]) => ({ k, c: v.c, w: v.w, n: v.c + v.w, acc: Math.round(v.c * 100 / Math.max(1, v.c + v.w)) }))
      .filter(x => x.n >= (min || 3) && x.acc < 70)
      .sort((a, b) => a.acc - b.acc);
  }
  function frequentMistakes(limit) {
    const p = profile();
    return Object.entries(p.soalan).filter(([, s]) => s.w > 0)
      .sort((a, b) => b[1].w - a[1].w).slice(0, limit || 5).map(([id, s]) => ({ id, w: s.w, c: s.c }));
  }
  function dueReview() {
    const p = profile(); const now = Date.now();
    return Object.entries(p.soalan).filter(([id, s]) => s.w > 0 && s.box < 4 && s.due <= now && NP.Engine.exists(id)).map(([id]) => id);
  }

  /* ---- Profil ---- */
  function addProfile(nama) { const p = blankProfile(nama); load().profiles[p.id] = p; mem.active = p.id; save(); return p; }
  function switchProfile(id) { if (load().profiles[id]) { mem.active = id; save(); } }
  function removeProfile(id) {
    const s = load();
    if (Object.keys(s.profiles).length <= 1) return false;
    delete s.profiles[id];
    if (s.active === id) s.active = Object.keys(s.profiles)[0];
    save(); return true;
  }
  function rename(nama) { profile().nama = (nama || '').trim().slice(0, 40) || 'Pelajar'; save(); }

  /* ---- Sandaran ---- */
  function exportJSON() { return JSON.stringify({ app: 'nahu-pondok', exported: new Date().toISOString(), data: load() }, null, 1); }
  function importJSON(text) {
    const obj = JSON.parse(text);
    const data = obj && obj.app === 'nahu-pondok' ? obj.data : null;
    if (!data || !data.profiles) throw new Error('Fail sandaran tidak sah.');
    mem = data; load(); save();
  }
  function resetAll() { mem = blankState(); save(); }

  return {
    state, profile, save, log, bab, markRead, setLastBab, recordAnswer, recordSession,
    hafazan, setHafazan, stats, weakKonsep, frequentMistakes, dueReview,
    addProfile, switchProfile, removeProfile, rename, exportJSON, importJSON, resetAll,
    persistent: () => canPersist, today
  };
})();
