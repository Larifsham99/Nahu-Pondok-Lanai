/* =========================================================================
   NAHU PONDOK — Enjin Soalan & Sesi Latihan
   - Indeks soalan bab, penjana soalan I'rab & Hafazan (berasaskan data sahih)
   - Kod tugasan / keputusan (tanpa pelayan)
   - Pemapar & penyemak 13 jenis latihan
   ========================================================================= */
window.NP = window.NP || {};

/* ---------- Utiliti ---------- */
NP.U = (function () {
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // [[teks Arab]] → <bdi> RTL. Untuk data aplikasi (dipercayai).
  const fmt = (s) => String(s == null ? '' : s).replace(/\[\[(.+?)\]\]/g, '<bdi class="ari" dir="rtl" lang="ar">$1</bdi>');
  // Untuk teks luar (nama, kod import): escape dahulu.
  const fmtSafe = (s) => fmt(esc(s));
  const ar = (s, cls) => `<div class="ar ${cls || ''}" dir="rtl" lang="ar">${s}</div>`;
  const HARAKAT = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;
  const norm = (s) => String(s || '').replace(HARAKAT, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/[«»،.:؛؟!()\[\]"']/g, '').trim().toLowerCase();
  function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { let a = typeof seed === 'number' ? seed : hash(String(seed)); return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffle(arr, r) { r = r || Math.random; const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const pick = (arr, n, r) => shuffle(arr, r).slice(0, n);
  const uniq = (arr) => Array.from(new Set(arr));
  function b64e(str) { const bytes = new TextEncoder().encode(str); let bin = ''; bytes.forEach(b => bin += String.fromCharCode(b)); return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function b64d(s) { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const bin = atob(s); const bytes = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i); return new TextDecoder().decode(bytes); }
  const fmtDate = (t) => { try { return new Date(t).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return new Date(t).toDateString(); } };
  const fmtTime = (t) => { try { return new Date(t).toLocaleString('ms-MY', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); } catch (e) { return new Date(t).toString(); } };
  return { esc, fmt, fmtSafe, ar, norm, hash, rng, shuffle, pick, uniq, b64e, b64d, fmtDate, fmtTime };
})();

NP.findBab = (id) => NP.BAB.find(b => b.id === id);
/* Nombor perenggan untuk paparan (basmalah pembuka tidak dinomborkan) */
NP.paraNo = (b, i) => Number(i) + (b.matan[0] && b.matan[0].pembuka ? 0 : 1);

/* ---------- Enjin Soalan ---------- */
NP.Engine = (function () {
  const U = NP.U;
  let index = null;
  function idx() {
    if (index) return index;
    index = {};
    NP.BAB.forEach(b => (b.soalan || []).forEach(q => { q.bab = b.id; index[q.id] = q; }));
    return index;
  }
  const jenisOf = (q) => q.j || q.t; // kategori jenis latihan

  /* ---- Soalan bab ---- */
  function fromBab(babIds, opt) {
    opt = opt || {};
    let qs = [];
    (babIds || NP.BAB.map(b => b.id)).forEach(id => { const b = NP.findBab(id); if (b) qs = qs.concat(b.soalan.map(q => (q.bab = b.id, q))); });
    if (opt.d) qs = qs.filter(q => q.d === opt.d);
    if (opt.jenis) qs = qs.filter(q => jenisOf(q) === opt.jenis);
    if (opt.konsep) qs = qs.filter(q => q.k === opt.konsep);
    qs = opt.keepOrder ? qs : U.shuffle(qs);
    if (opt.n) qs = qs.slice(0, opt.n);
    return qs;
  }

  /* ---- Penjana I'rab ---- */
  const O = () => NP.IRAB_OPSYEN;
  const jLabel = (j) => O().j[j];
  const sentenceAr = (s) => s.disp || s.ar;
  function hl(s, wi) { return s.w.map((w, i) => i === wi ? `<mark>${w.w}</mark>` : w.w).join(' ').replace(/ـ\s+/g, ''); }

  function irabQ(sid, tahap, wi) {
    const s = NP.IRAB.find(x => x.id === sid); if (!s) return null;
    const r = U.rng(sid + ':' + tahap + ':' + wi);
    const base = { bab: 'irab', d: s.d, sid, ref: s.ref, ms: s.ms, gen: true, k: 'irab-t' + tahap };
    if (tahap === 1) {
      return Object.assign(base, { id: `ir:${sid}:1`, t: 'jenis', q: 'Kenal pasti jenis setiap kalimah dalam ayat:', ar: sentenceAr(s), w: s.w.map(w => [w.w, w.j]), e: s.w.map(w => `[[${w.w}]] — ${jLabel(w.j)}`).join('; ') + (s.note ? '. ' + s.note : '.') });
    }
    if (tahap === 6) {
      const pool = NP.IRAB.flatMap(x => x.w);
      return Object.assign(base, { id: `ir:${sid}:6`, t: 'irab', q: 'Pilih i\'rab yang lengkap dan tepat bagi setiap kalimah:', ar: sentenceAr(s),
        w: s.w.map((w, i) => {
          const r2 = U.rng(sid + ':6:' + i);
          const same = U.uniq(pool.filter(p => p.x !== w.x && p.j === w.j).map(p => p.x));
          const other = U.uniq(pool.filter(p => p.x !== w.x).map(p => p.x));
          const dis = U.uniq(U.pick(same, 2, r2).concat(U.pick(other, 3, r2))).filter(x => x !== w.x).slice(0, 2);
          return { w: w.w, o: [w.x].concat(dis), a: 0 };
        }),
        e: s.w.map(w => `[[${w.w}]]: [[${w.x}]]`).join('<br>') + (s.note ? '<br>' + s.note : '') });
    }
    const w = s.w[wi]; if (!w) return null;
    const ar = hl(s, wi);
    let o, a, q, e;
    if (tahap === 2) {
      const pool = U.uniq(NP.IRAB.flatMap(x => x.w).filter(x => x.j === w.j && x.m !== w.m).map(x => x.m));
      o = [w.m].concat(U.pick(pool, 3, r)); q = `Apakah kedudukan/fungsi kalimah [[${w.w}]] dalam ayat ini?`;
      e = `[[${w.w}]]: [[${w.m}]]. ${w.s}`;
    } else if (tahap === 3) {
      o = O().h.slice(); q = `Apakah hukum i'rab kalimah [[${w.w}]]?`;
      o = o.map(x => O().hLabel[x]); const corr = O().hLabel[w.h];
      e = `[[${w.w}]] ${w.h === 'مبني' ? 'mabni' : 'mu\'rab'} — [[${corr}]]. ${w.s} I'rab penuh: [[${w.x}]]`;
      return Object.assign(base, { id: `ir:${sid}:${wi}:3`, t: 'mcq', j: 'hukum', q, ar, o, a: o.indexOf(corr), e, arOpt: true });
    } else if (tahap === 4) {
      const pool = O().t.filter(x => x !== w.t);
      o = [w.t].concat(U.pick(pool, 3, r)); q = `Apakah tanda i'rab kalimah [[${w.w}]]?`;
      e = `Tanda: [[${w.t}]]. ${w.s} I'rab penuh: [[${w.x}]]`;
    } else if (tahap === 5) {
      const pool = U.uniq(NP.IRAB.flatMap(x => x.w).filter(x => x.m !== w.m && x.t !== w.t && x.s !== w.s).map(x => x.s));
      o = [w.s].concat(U.pick(pool, 3, r)); q = `Mengapakah kalimah [[${w.w}]] di-i'rab sebagai [[${w.m}]] ${w.h !== 'مبني' ? '([[' + O().hLabel[w.h] + ']])' : ''}?`;
      e = `${w.s} I'rab penuh: [[${w.x}]]`;
      return Object.assign(base, { id: `ir:${sid}:${wi}:5`, t: 'mcq', j: 'irab', q, ar, o, a: 0, e });
    }
    return Object.assign(base, { id: `ir:${sid}:${wi}:${tahap}`, t: 'mcq', j: tahap === 2 ? 'kedudukan' : 'tanda', q, ar, o, a: 0, e, arOpt: true });
  }

  function irabSet(tahap, opt) {
    opt = opt || {};
    let ss = NP.IRAB.slice();
    if (opt.d) ss = ss.filter(s => s.d === opt.d);
    const out = [];
    ss.forEach(s => {
      if (tahap === 1 || tahap === 6) out.push(irabQ(s.id, tahap, 0));
      else s.w.forEach((w, i) => {
        if ((tahap === 4 || tahap === 5) && w.h === 'مبني') return;
        out.push(irabQ(s.id, tahap, i));
      });
    });
    let qs = U.shuffle(out.filter(Boolean));
    if (opt.n) qs = qs.slice(0, opt.n);
    return qs;
  }

  /* ---- Penjana Hafazan (daripada teks matan sahaja) ---- */
  function tokens(text) { return text.split(/\s+/).filter(Boolean); }
  const core = (tok) => tok.replace(/[،.:؛«»]/g, '');
  function hafazCandidates(babId, p) {
    const b = NP.findBab(babId); const m = b && b.matan[p]; if (!m) return [];
    return tokens(m.ar).map((t, i) => ({ i, c: core(t) })).filter(x => U.norm(x.c).length >= 3);
  }
  function hafazQ(babId, p, wi) {
    const b = NP.findBab(babId); if (!b || !b.matan[p]) return null;
    const toks = tokens(b.matan[p].ar); const tok = toks[wi]; if (!tok) return null;
    const ans = core(tok);
    const r = U.rng(`hf:${babId}:${p}:${wi}`);
    const allWords = U.uniq(b.matan.flatMap(m => tokens(m.ar).map(core)).filter(w => U.norm(w).length >= 2 && U.norm(w) !== U.norm(ans)));
    const dis = U.pick(allWords, 3, r);
    const shown = toks.map((t, i) => i === wi ? t.replace(ans, '___') : t).join(' ');
    return { id: `hf:${babId}:${p}:${wi}`, bab: babId, t: 'fill', j: 'hafaz', d: 2, k: 'hafazan', gen: true, hafaz: { bab: babId, p },
      q: `Lengkapkan matan (${b.ms}, perenggan ${NP.paraNo(b, p)}):`, ar: shown, o: [ans].concat(dis), a: 0, e: 'Matan penuh: [[' + b.matan[p].ar + ']]' };
  }
  function hafazSet(babId, paras, perPara) {
    const b = NP.findBab(babId); if (!b) return [];
    const list = (paras && paras.length ? paras : b.matan.map((m, i) => i).filter(i => !b.matan[i].pembuka));
    let out = [];
    list.forEach(p => {
      const cands = hafazCandidates(babId, p);
      const n = Math.min(perPara || Math.max(2, Math.ceil(cands.length / 4)), cands.length);
      // sebarkan sepanjang perenggan
      const step = cands.length / n;
      for (let k = 0; k < n; k++) out.push(hafazQ(babId, p, cands[Math.floor(k * step + Math.random() * step * 0.8)].i));
    });
    return out.filter(Boolean);
  }

  /* ---- Carian mengikut id (untuk ulang kaji & tugasan) ---- */
  function byId(id) {
    if (idx()[id]) return idx()[id];
    let m;
    if ((m = /^ir:([^:]+):1$/.exec(id))) return irabQ(m[1], 1, 0);
    if ((m = /^ir:([^:]+):6$/.exec(id))) return irabQ(m[1], 6, 0);
    if ((m = /^ir:([^:]+):(\d+):(\d)$/.exec(id))) return irabQ(m[1], +m[3], +m[2]);
    if ((m = /^hf:([^:]+):(\d+):(\d+)$/.exec(id))) return hafazQ(m[1], +m[2], +m[3]);
    return null;
  }
  const exists = (id) => !!byId(id);
  function countByJenis() {
    const c = {};
    Object.values(idx()).forEach(q => { const j = jenisOf(q); c[j] = (c[j] || 0) + 1; });
    return c;
  }
  function byJenis(jenis, n) {
    if (jenis === 'irab') return irabSet(6, { n: n || 6 });
    if (jenis === 'hafaz') {
      const babs = U.pick(NP.BAB.map(b => b.id), 4);
      return U.shuffle(babs.flatMap(b => hafazSet(b, null, 1))).slice(0, n || 10);
    }
    let qs = fromBab(null, { jenis });
    // tambah soalan i'rab terjana untuk kategori berkaitan
    const extra = { jenis: 1, kedudukan: 2, hukum: 3, tanda: 4 }[jenis];
    if (extra) qs = qs.concat(irabSet(extra, { n: 8 }));
    return U.shuffle(qs).slice(0, n || 10);
  }

  /* ---- Kod Tugasan / Keputusan ---- */
  const SALT = 'nahu-pondok-1';
  const sig = (s) => (U.hash(SALT + s) % 1679616).toString(36).padStart(4, '0');
  function encode(prefix, obj) { const body = U.b64e(JSON.stringify(obj)); return `${prefix}.${body}.${sig(body)}`; }
  function decode(prefix, code) {
    code = String(code || '').trim().replace(/\s+/g, '');
    const parts = code.split('.');
    if (parts.length !== 3 || parts[0] !== prefix) throw new Error('Format kod tidak sah.');
    if (sig(parts[1]) !== parts[2]) throw new Error('Kod rosak atau telah diubah.');
    return JSON.parse(U.b64d(parts[1]));
  }

  return { idx, fromBab, irabQ, irabSet, hafazQ, hafazSet, hafazCandidates, byId, exists, jenisOf, countByJenis, byJenis, encode, decode, tokens };
})();

/* ---------- Sesi Latihan (Quiz) ---------- */
NP.Quiz = (function () {
  const U = NP.U;
  let S = null;      // sesi semasa
  let timer = null;
  const CAT = { i: 'اسم', f: 'فعل', h: 'حرف' };

  function prep(q) {
    const st = { ans: null, checked: false, first: null, tries: 0 };
    if (q.t === 'mcq' || q.t === 'fill') st.order = q.noShuffle ? q.o.map((_, i) => i) : U.shuffle(q.o.map((_, i) => i));
    if (q.t === 'match') { st.right = U.shuffle(q.p.map((_, i) => i)); st.ans = {}; st.sel = null; }
    if (q.t === 'jenis') st.ans = {};
    if (q.t === 'irab') { st.ans = {}; st.orders = q.w.map(w => U.shuffle(w.o.map((_, i) => i))); }
    if (q.t === 'order') {
      let sh = U.shuffle(q.w.map((_, i) => i));
      let guard = 0; while (sh.every((v, i) => v === i) && q.w.length > 1 && guard++ < 10) sh = U.shuffle(sh);
      st.bank = sh; st.ans = [];
    }
    return st;
  }

  function start(cfg) {
    // cfg: {title, questions, src, minutes}
    const qs = (cfg.questions || []).filter(Boolean);
    if (!qs.length) { NP.App.toast('Tiada soalan yang sepadan dengan pilihan ini.'); return false; }
    stopTimer();
    S = { title: cfg.title, qs, st: qs.map(prep), i: 0, src: cfg.src || {}, startAt: Date.now(), minutes: cfg.minutes || 0, done: false, recorded: false };
    if (S.minutes) S.endAt = Date.now() + S.minutes * 60000;
    location.hash = '#/sesi';
    if (NP.App.route() === 'sesi') NP.App.render();
    return true;
  }
  const active = () => S;

  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function tick() {
    const el = document.getElementById('np-timer');
    if (!S || S.done || !S.endAt) { stopTimer(); return; }
    const left = Math.max(0, S.endAt - Date.now());
    if (el) { const m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000); el.textContent = `${m}:${String(s).padStart(2, '0')}`; el.classList.toggle('warn', left < 60000); }
    if (left <= 0) { NP.App.toast('Masa tamat. Jawapan anda dihantar.'); finish(); }
  }

  /* ---- Kesediaan jawapan ---- */
  function ready(q, st) {
    switch (q.t) {
      case 'mcq': case 'fill': case 'tf': case 'error': return st.ans !== null;
      case 'match': return Object.keys(st.ans).length === q.p.length;
      case 'jenis': return Object.keys(st.ans).length === q.w.length;
      case 'irab': return Object.keys(st.ans).length === q.w.length;
      case 'order': return st.ans.length === q.w.length;
    }
    return false;
  }

  /* ---- Semakan + penerangan ---- */
  function evaluate(q, st) {
    const L = (s) => `[[${s}]]`;
    const optTxt = (i) => q.arOpt || /[؀-ۿ]/.test(q.o[i]) ? L(q.o[i]) : `«${q.o[i]}»`;
    switch (q.t) {
      case 'mcq': case 'fill': {
        const ok = st.ans === q.a;
        return { ok, user: optTxt(st.ans), correct: optTxt(q.a), why: ok ? '' : `Pilihan ${optTxt(st.ans)} tidak tepat untuk soalan ini.` };
      }
      case 'tf': {
        const ok = st.ans === q.a;
        const t = (v) => v ? 'Betul' : 'Salah';
        return { ok, user: t(st.ans), correct: `Kenyataan ini <b>${t(q.a)}</b>`, why: ok ? '' : `Anda memilih "${t(st.ans)}", sedangkan kenyataan ini ${q.a ? 'betul' : 'salah'}.` };
      }
      case 'match': {
        const wrong = q.p.map((p, i) => ({ i, p, got: st.ans[i] })).filter(x => x.got !== x.i);
        return { ok: !wrong.length, user: `${q.p.length - wrong.length}/${q.p.length} pasangan tepat`,
          correct: q.p.map(p => `${fx(p[0])} ⟶ ${fx(p[1])}`).join('<br>'),
          why: wrong.map(x => `${fx(x.p[0])} bukan ${fx(q.p[x.got][1])}`).join('; ') };
      }
      case 'jenis': {
        const wrong = q.w.map((w, i) => ({ w, i, got: st.ans[i] })).filter(x => x.got !== x.w[1]);
        return { ok: !wrong.length, user: `${q.w.length - wrong.length}/${q.w.length} tepat`,
          correct: q.w.map(w => `${L(w[0])} = ${L(CAT[w[1]])}`).join('، '),
          why: wrong.map(x => `${L(x.w[0])} ialah ${L(CAT[x.w[1]])}, bukan ${L(CAT[x.got])}`).join('; ') };
      }
      case 'error': {
        const ok = st.ans === q.a;
        return { ok, user: L(q.w[st.ans]), correct: `${L(q.w[q.a])} ⟶ ${L(q.fix)}`,
          why: ok ? '' : `Kalimah ${L(q.w[st.ans])} sudah betul. Kesalahan sebenar pada ${L(q.w[q.a])}; yang betul ialah ${L(q.fix)}.` };
      }
      case 'order': {
        const ok = st.ans.every((v, i) => q.w[v] === q.w[i]);
        return { ok, user: L(st.ans.map(i => q.w[i]).join(' ')), correct: L(q.w.join(' ')), why: ok ? '' : 'Susunan kalimah anda tidak mengikut struktur ayat yang betul.' };
      }
      case 'irab': {
        const wrong = q.w.map((w, i) => ({ w, i, got: st.ans[i] })).filter(x => x.got !== x.w.a);
        return { ok: !wrong.length, user: `${q.w.length - wrong.length}/${q.w.length} kalimah tepat`,
          correct: q.w.map(w => `${L(w.w)}: ${L(w.o[w.a])}`).join('<br>'),
          why: wrong.map(x => `${L(x.w.w)}: pilihan anda ${L(x.w.o[x.got])} tidak tepat`).join('<br>') };
      }
    }
  }
  const fx = (s) => /[؀-ۿ]/.test(s) ? `[[${s}]]` : U.esc(s);

  /* ---- Paparan ---- */
  function render(root) {
    if (!S) { root.innerHTML = `<div class="empty"><p>Tiada sesi latihan aktif.</p><a class="btn" href="#/latihan">Pergi ke Latihan</a></div>`; return; }
    if (S.done) return renderSummary(root);
    const q = S.qs[S.i], st = S.st[S.i];
    const n = S.qs.length;
    const jl = (NP.JENIS_LATIHAN.find(j => j.k === NP.Engine.jenisOf(q)) || {}).t || '';
    const B = NP.findBab(q.bab);
    root.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <button class="icon-btn" data-act="quit" aria-label="Keluar">✕</button>
          <div class="qprog"><div class="qprog-bar" style="width:${Math.round(S.i * 100 / n)}%"></div></div>
          <span class="qcount">${S.i + 1}/${n}</span>
          ${S.endAt ? '<span id="np-timer" class="timer">--:--</span>' : ''}
        </div>
        <div class="qmeta"><span class="chip">${U.esc(jl)}</span>${B ? `<span class="chip ghost">${U.esc(B.ms)}</span>` : q.bab === 'irab' ? '<span class="chip ghost">Latihan I\'rab</span>' : ''}<span class="chip ghost">${['', 'Mudah', 'Sederhana', 'Sukar'][q.d] || ''}</span></div>
        <div class="qcard card">
          <p class="qtext">${U.fmt(q.q)}</p>
          ${q.ar && q.t !== 'jenis' && q.t !== 'irab' ? U.ar(q.ar.replace('___', '<span class="blank">______</span>'), 'qar') : ''}
          ${q.ref ? `<p class="qref">﴿ ${U.esc(q.ref)} ﴾</p>` : ''}
          <div class="qbody">${body(q, st)}</div>
        </div>
        ${st.checked ? feedback(q, st) : ''}
        <div class="qactions">
          ${!st.checked ? `<button class="btn primary block" data-act="check" ${ready(q, st) ? '' : 'disabled'}>Semak Jawapan</button>` :
            `${!st.lastOk ? '<button class="btn ghost" data-act="retry">↺ Cuba Lagi</button>' : ''}
             <button class="btn primary grow" data-act="next">${S.i + 1 < n ? 'Seterusnya →' : 'Lihat Keputusan'}</button>`}
        </div>
      </div>`;
    if (S.endAt && !timer) { timer = setInterval(tick, 1000); }
    tick();
  }

  function optCls(st, i, a) {
    if (!st.checked) return st.ans === i ? 'sel' : '';
    if (i === a) return 'right';
    if (st.ans === i) return 'wrong';
    return 'dim';
  }

  function body(q, st) {
    const dis = st.checked ? 'disabled' : '';
    switch (q.t) {
      case 'mcq': case 'fill': {
        const arOpts = q.t === 'fill' || q.arOpt || q.o.every(o => /[؀-ۿ]/.test(o) && !/[a-zA-Z]/.test(o));
        return `<div class="opts ${arOpts ? 'ar-opts' : ''}">${st.order.map(i => `<button class="opt ${optCls(st, i, q.a)}" data-act="opt" data-v="${i}" ${dis} ${arOpts ? 'dir="rtl" lang="ar"' : ''}>${U.fmt(arOpts ? q.o[i] : U.esc(q.o[i]))}</button>`).join('')}</div>`;
      }
      case 'tf': return `<div class="opts tf">${[true, false].map(v => `<button class="opt ${!st.checked ? (st.ans === v ? 'sel' : '') : v === q.a ? 'right' : st.ans === v ? 'wrong' : 'dim'}" data-act="opt" data-v="${v}" ${dis}>${v ? '✓ Betul' : '✗ Salah'}</button>`).join('')}</div>`;
      case 'match': {
        const usedR = new Set(Object.values(st.ans));
        const L = q.p.map((p, i) => {
          const got = st.ans[i];
          let cls = st.sel === i ? 'sel' : got !== undefined ? 'paired' : '';
          if (st.checked) cls = got === i ? 'right' : 'wrong';
          return `<button class="mitem ${cls}" data-act="ml" data-v="${i}" ${dis}>${U.fmt(fx(p[0]))}${got !== undefined ? `<small class="pairtag">${pairTag(got, st)}</small>` : ''}</button>`;
        }).join('');
        const R = st.right.map(i => `<button class="mitem ${usedR.has(i) ? 'paired' : ''}" data-act="mr" data-v="${i}" ${dis}>${usedR.has(i) ? `<small class="pairtag">${pairTag(i, st)}</small>` : ''}${U.fmt(fx(q.p[i][1]))}</button>`).join('');
        return `<p class="hint">Tekan item di kiri, kemudian padankan dengan item di kanan. Tekan semula untuk menukar.</p><div class="match"><div class="mcol">${L}</div><div class="mcol">${R}</div></div>`;
      }
      case 'jenis':
        return `<div class="jenis">${q.w.map((w, i) => `<div class="jrow"><div class="jword" dir="rtl" lang="ar">${w[0]}</div><div class="jbtns">${['i', 'f', 'h'].map(c => {
          let cls = st.ans[i] === c ? 'sel' : '';
          if (st.checked) cls = c === w[1] ? 'right' : st.ans[i] === c ? 'wrong' : 'dim';
          return `<button class="jbtn ${cls}" data-act="jn" data-w="${i}" data-v="${c}" ${dis} lang="ar">${CAT[c]}</button>`;
        }).join('')}</div></div>`).join('')}</div>`;
      case 'error':
        return `<p class="hint">Tekan kalimah yang salah i'rab/barisnya.</p><div class="words" dir="rtl" lang="ar">${q.w.map((w, i) => {
          let cls = st.ans === i ? 'sel' : '';
          if (st.checked) cls = i === q.a ? 'right' : st.ans === i ? 'wrong' : '';
          return `<button class="word ${cls}" data-act="er" data-v="${i}" ${dis}>${w}</button>`;
        }).join('')}</div>`;
      case 'order': {
        const ansHtml = st.ans.map((i, k) => `<button class="word ${st.checked ? (q.w[i] === q.w[k] ? 'right' : 'wrong') : ''}" data-act="od-rem" data-v="${k}" ${dis}>${q.w[i]}</button>`).join('');
        const bank = st.bank.filter(i => !st.ans.includes(i)).map(i => `<button class="word" data-act="od-add" data-v="${i}" ${dis}>${q.w[i]}</button>`).join('');
        return `<p class="hint">Tekan kalimah mengikut susunan yang betul (dari kanan ke kiri).</p><div class="order-line words" dir="rtl" lang="ar">${ansHtml || '<span class="placeholder">Jawapan anda…</span>'}</div><div class="words bank" dir="rtl" lang="ar">${bank}</div>`;
      }
      case 'irab':
        return `${U.ar(q.ar, 'qar')}<div class="irab-q">${q.w.map((w, i) => `<div class="irow"><div class="iword" dir="rtl" lang="ar">${w.w}</div><div class="iopts">${st.orders[i].map(j => {
          let cls = st.ans[i] === j ? 'sel' : '';
          if (st.checked) cls = j === w.a ? 'right' : st.ans[i] === j ? 'wrong' : 'dim';
          return `<button class="iopt ${cls}" data-act="ir" data-w="${i}" data-v="${j}" ${dis} dir="rtl" lang="ar">${w.o[j]}</button>`;
        }).join('')}</div></div>`).join('')}</div>`;
    }
    return '';
  }
  function pairTag(rightIdx, st) {
    // nombor pasangan berdasarkan susunan kiri
    const leftIdx = Object.keys(st.ans).find(k => st.ans[k] === rightIdx);
    return leftIdx !== undefined ? '●' + (Number(leftIdx) + 1) : '';
  }

  function feedback(q, st) {
    const r = evaluate(q, st);
    return `<div class="feedback ${r.ok ? 'ok' : 'bad'}" role="status">
      <div class="fb-head">${r.ok ? '✓ Jawapan anda betul!' : '✗ Jawapan anda belum tepat'}${st.first === false && r.ok ? ' <small>(cubaan ke-' + st.tries + '; markah dikira pada cubaan pertama)</small>' : ''}</div>
      ${!r.ok ? `<div class="fb-row"><b>Jawapan anda:</b> ${U.fmt(r.user)}</div>${r.why ? `<div class="fb-row"><b>Di mana silapnya:</b> ${U.fmt(r.why)}</div>` : ''}` : ''}
      <div class="fb-row"><b>Jawapan tepat:</b> ${U.fmt(r.correct)}</div>
      <div class="fb-row fb-exp"><b>Penerangan:</b> ${U.fmt(q.e)}</div>
      ${q.bab && NP.findBab(q.bab) ? `<a class="fb-link" href="#/bab/${q.bab}/nota">Ulang nota bab ini →</a>` : ''}
    </div>`;
  }

  function onClick(e) {
    const el = e.target.closest('[data-act]'); if (!el || !S) return;
    const act = el.dataset.act; const v = el.dataset.v;
    if (act === 'quit') { if (S.done || confirm('Tamatkan sesi ini? Jawapan yang sudah disemak tetap direkodkan, tetapi markah sesi tidak disimpan.')) { const back = S.src.back || '#/latihan'; stopTimer(); S = null; location.hash = back; } return; }
    if (S.done) {
      if (act === 'redo-wrong') { const wrong = S.qs.filter((q, i) => !S.st[i].first); start({ title: S.title + ' (ulang yang salah)', questions: wrong, src: Object.assign({}, S.src, { type: 'ulang' }) }); }
      if (act === 'redo') { start({ title: S.title, questions: NP.U.shuffle(S.qs), src: S.src, minutes: S.minutes }); }
      if (act === 'rv') { el.closest('.rv').classList.toggle('open'); }
      if (act === 'copy-res') { NP.App.copy(el.dataset.code); }
      return;
    }
    const q = S.qs[S.i], st = S.st[S.i];
    const root = document.getElementById('view');
    if (act === 'check') {
      if (!ready(q, st)) return;
      st.checked = true; st.tries++;
      const r = evaluate(q, st); st.lastOk = r.ok;
      if (st.first === null) { st.first = r.ok; NP.Store.recordAnswer(q.id, q.k, r.ok); }
      render(root);
      const fb = root.querySelector('.feedback'); if (fb && fb.scrollIntoView) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    if (act === 'retry') { const keepFirst = st.first, tries = st.tries; S.st[S.i] = prep(q); S.st[S.i].first = keepFirst; S.st[S.i].tries = tries; render(root); return; }
    if (act === 'next') { if (S.i + 1 < S.qs.length) { S.i++; render(root); window.scrollTo(0, 0); } else finish(); return; }
    if (st.checked) return;
    switch (act) {
      case 'opt': st.ans = q.t === 'tf' ? v === 'true' : Number(v); break;
      case 'er': st.ans = Number(v); break;
      case 'jn': st.ans[el.dataset.w] = v; break;
      case 'ir': st.ans[el.dataset.w] = Number(v); break;
      case 'ml': { const i = Number(v); if (st.ans[i] !== undefined) { delete st.ans[i]; } st.sel = st.sel === i ? null : i; break; }
      case 'mr': {
        const j = Number(v);
        const owner = Object.keys(st.ans).find(k => st.ans[k] === j);
        if (st.sel === null) { if (owner !== undefined) delete st.ans[owner]; break; }
        if (owner !== undefined) delete st.ans[owner];
        st.ans[st.sel] = j; st.sel = null;
        // pilih item kiri seterusnya yang belum dipadankan
        const nextL = q.p.findIndex((_, i) => st.ans[i] === undefined); st.sel = nextL >= 0 ? nextL : null;
        break;
      }
      case 'od-add': st.ans.push(Number(v)); break;
      case 'od-rem': st.ans.splice(Number(v), 1); break;
    }
    render(root);
  }

  function finish(silent) {
    if (!S || S.done) return;
    stopTimer();
    S.done = true; S.endedAt = Date.now();
    // soalan yang tidak dijawab dikira salah (tidak direkod sebagai jawapan)
    S.st.forEach(st => { if (st.first === null) st.first = false; });
    S.score = S.st.filter(st => st.first).length;
    if (!S.recorded) {
      S.recorded = true;
      S.pct = NP.Store.recordSession({ title: S.title, score: S.score, total: S.qs.length, src: S.src });
      // hafazan: kemas kini status perenggan
      const hp = {};
      S.qs.forEach((q, i) => { if (q.hafaz) { const key = q.hafaz.bab + '|' + q.hafaz.p; (hp[key] = hp[key] || { c: 0, n: 0 }).n++; if (S.st[i].first) hp[key].c++; } });
      Object.entries(hp).forEach(([key, v]) => { const [b, p] = key.split('|'); NP.Store.setHafazan(b, p, Math.round(v.c * 100 / v.n)); });
      if (S.src.tugasan) {
        const p = NP.Store.profile();
        S.resultCode = NP.Engine.encode('NPR1', { tid: S.src.tugasan.id, tt: S.src.tugasan.title, nama: p.nama, s: S.score, n: S.qs.length, at: Date.now(), dur: Math.round((S.endedAt - S.startAt) / 1000), r: S.qs.map((q, i) => [q.id, S.st[i].first ? 1 : 0]) });
      }
    }
    if (!silent) { location.hash = '#/sesi'; NP.App.render(); }
  }

  function renderSummary(root) {
    const pct = S.pct != null ? S.pct : Math.round(S.score * 100 / S.qs.length);
    const msg = pct >= 90 ? 'Mumtaz! Penguasaan yang sangat baik.' : pct >= 70 ? 'Jayyid! Anda sudah faham sebahagian besar.' : pct >= 50 ? 'Maqbul. Ulang kaji nota dan cuba lagi.' : 'Jangan berputus asa. Baca semula nota dan cuba lagi.';
    const dur = Math.round(((S.endedAt || Date.now()) - S.startAt) / 1000);
    const wrongN = S.st.filter(s => !s.first).length;
    root.innerHTML = `
      <div class="summary">
        <div class="card sum-card ${pct >= 70 ? 'win' : ''}">
          ${pct >= 70 ? `<div class="confetti" aria-hidden="true">${Array.from({ length: 18 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>` : ''}
          <div class="medal">${pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '💪'}</div>
          <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
          <h2>${U.esc(S.title)}</h2>
          <p class="big">${S.score} / ${S.qs.length} markah</p>
          <p class="muted">${msg}</p>
          <p class="muted small">Masa: ${Math.floor(dur / 60)} min ${dur % 60} s</p>
        </div>
        ${S.resultCode ? `<div class="card"><h3>Kod Keputusan untuk Guru</h3><p class="small muted">Salin dan hantar kod ini kepada guru anda (contohnya melalui WhatsApp).</p><textarea class="code" readonly rows="3">${S.resultCode}</textarea><button class="btn primary block" data-act="copy-res" data-code="${S.resultCode}">Salin Kod Keputusan</button></div>` : ''}
        <div class="btn-row">
          ${wrongN ? `<button class="btn primary grow" data-act="redo-wrong">Ulang ${wrongN} soalan salah</button>` : ''}
          <button class="btn ghost grow" data-act="redo">↺ Ulang semua</button>
        </div>
        <h3 class="sec-title">Semakan Jawapan</h3>
        <div class="review">${S.qs.map((q, i) => `
          <div class="rv ${S.st[i].first ? 'ok' : 'bad'}">
            <button class="rv-head" data-act="rv"><span class="rv-ic">${S.st[i].first ? '✓' : '✗'}</span><span class="rv-q">${i + 1}. ${U.fmt(q.q)}</span><span class="rv-tg">▾</span></button>
            <div class="rv-body">${q.ar ? U.ar(q.ar.replace('___', '<span class="blank">______</span>'), 'small-ar') : ''}<p><b>Jawapan tepat:</b> ${U.fmt(correctText(q))}</p><p>${U.fmt(q.e)}</p></div>
          </div>`).join('')}</div>
        <a class="btn ghost block" href="${S.src.back || '#/latihan'}">Selesai</a>
      </div>`;
  }
  function correctText(q) {
    switch (q.t) {
      case 'mcq': case 'fill': return /[؀-ۿ]/.test(q.o[q.a]) ? `[[${q.o[q.a]}]]` : U.esc(q.o[q.a]);
      case 'tf': return q.a ? 'Betul' : 'Salah';
      case 'match': return q.p.map(p => `${fx(p[0])} ⟶ ${fx(p[1])}`).join('; ');
      case 'jenis': return q.w.map(w => `[[${w[0]}]] = [[${CAT[w[1]]}]]`).join('، ');
      case 'error': return `[[${q.w[q.a]}]] ⟶ [[${q.fix}]]`;
      case 'order': return `[[${q.w.join(' ')}]]`;
      case 'irab': return q.w.map(w => `[[${w.w}]]: [[${w.o[w.a]}]]`).join('<br>');
    }
    return '';
  }

  function leave() { stopTimer(); }

  return { start, render, onClick, active, finish, leave };
})();
