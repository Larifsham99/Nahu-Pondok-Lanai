/* =========================================================================
   NAHU PONDOK — Aplikasi (penghala & paparan)
   ========================================================================= */
window.NP = window.NP || {};

NP.App = (function () {
  const U = NP.U, Store = NP.Store, E = NP.Engine;
  const $ = (s, r) => (r || document).querySelector(s);
  const VER = '1.1.0';

  /* ---------- Ikon SVG ---------- */
  const IC = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M14.5 4.5l5 5L9 20H4v-5zM13 6l5 5"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>'
  };
  const LOGO = `<svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="var(--green-800)"/><g fill="none" stroke="var(--gold)" stroke-width="2.4" stroke-linejoin="round"><rect x="17" y="17" width="30" height="30" transform="rotate(45 32 32)"/><rect x="17" y="17" width="30" height="30"/></g><circle cx="32" cy="32" r="7.5" fill="var(--gold)"/><text x="32" y="36.5" text-anchor="middle" font-family="Amiri, serif" font-size="13" fill="var(--green-800)">ن</text></svg>`;

  const GROUPS = [
    { t: 'Muqaddimah & Asas I\'rab', r: [1, 5] },
    { t: 'Marfu\'at al-Asma\' — Isim yang Marfu\'', r: [6, 14] },
    { t: 'Mansubat al-Asma\' — Isim yang Mansub', r: [15, 25] },
    { t: 'Makhfudat al-Asma\' — Isim yang Makhfudh', r: [26, 26] }
  ];
  const TAB_OF = { '': 'utama', utama: 'utama', kitab: 'kitab', bab: 'kitab', kamus: 'kitab', hafazan: 'kitab', latihan: 'latihan', irab: 'latihan', sesi: 'latihan', ujian: 'latihan', kemajuan: 'kemajuan', profil: 'profil', guru: 'profil', tentang: 'profil' };

  /* ---------- Utiliti UI ---------- */
  function toast(msg, ms) {
    let t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms || 2600);
  }
  function copy(text) {
    const done = () => toast('Disalin ke papan klip.');
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(done, () => fallback()); } else fallback();
    function fallback() { const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { toast('Gagal menyalin. Salin secara manual.'); } ta.remove(); }
  }
  function share(title, text) {
    if (navigator.share) navigator.share({ title, text }).catch(() => {}); else copy(text);
  }
  function download(name, text, type) {
    const blob = new Blob([text], { type: type || 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  const route = () => (location.hash.replace(/^#\/?/, '').split('/')[0] || '');
  const parts = () => location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const pctCls = (p) => p >= 70 ? 'good' : p >= 40 ? 'mid' : 'low';
  const bar = (p, cls) => `<div class="bar ${cls || pctCls(p)}"><span style="width:${Math.max(0, Math.min(100, p))}%"></span></div>`;
  const statusIcon = (r) => !r ? '<span class="st st0" title="Belum dipelajari">○</span>' : r.selesai ? '<span class="st st2" title="Selesai">✓</span>' : r.dibaca || r.cubaan ? '<span class="st st1" title="Sedang dipelajari">◐</span>' : '<span class="st st0">○</span>';

  function setHeader(title, back) {
    $('#hdr-title').innerHTML = title;
    const b = $('#hdr-back');
    b.hidden = !back; b.dataset.href = back || '';
  }

  /* ======================================================================
     PAPARAN
     ====================================================================== */
  const V = {};

  /* ---------- UTAMA ---------- */
  V.utama = function () {
    const p = Store.profile(), st = Store.stats(), S = Store.state();
    setHeader('<span class="brand-sm">Nahu Pondok</span>');
    const nextBab = p.lastBab ? NP.findBab(p.lastBab) : (NP.BAB.find(b => !(p.bab[b.id] && p.bab[b.id].selesai)) || NP.BAB[0]);
    const nb = p.bab[nextBab.id] || {};
    const due = Store.dueReview().length;
    const weak = Store.weakKonsep().slice(0, 2);
    const hour = new Date().getHours();
    const waktu = hour < 12 ? 'Selamat pagi' : hour < 15 ? 'Selamat tengah hari' : hour < 19 ? 'Selamat petang' : 'Selamat malam';
    return `
    ${!S.settings.onboard ? `
      <div class="card onboard">
        <h3>Ahlan wa sahlan! 👋</h3>
        <p>Selamat datang ke <b>Nahu Pondok</b>. Siapakah nama anda?</p>
        <form data-form="onboard" class="row"><input name="nama" maxlength="40" placeholder="Nama pelajar" required autocomplete="name"><button class="btn primary">Mula</button></form>
      </div>` : ''}
    <section class="hero">
      <div class="hero-top">${LOGO}<div><h1>Nahu Pondok</h1><p class="tag">Faham Nahu, Kuasai I'rab.</p></div></div>
      <p class="salam"><span class="ar-inline" lang="ar">السَّلَامُ عَلَيْكُمْ</span>, ${U.esc(p.nama)}</p>
      <p class="sub">${waktu}. ${st.streak ? '' : 'Mari mulakan pembelajaran hari ini.'}</p>
      <div class="hero-pills">${st.streak ? `<span class="pill">🔥 ${st.streak} hari berturut-turut</span>` : ''}<span class="pill">🎯 Penguasaan ${st.penguasaan}%</span><span class="pill">✓ ${st.selesai} bab selesai</span></div>
    </section>

    <div class="stats">
      <a class="stat t-emerald" href="#/kitab"><i class="s-ic">📖</i><b>${st.dibaca}<small>/${st.totalBab}</small></b><span>Bab dipelajari</span></a>
      <a class="stat t-sky" href="#/kemajuan"><i class="s-ic">✍️</i><b>${st.sesi}</b><span>Latihan diselesaikan</span></a>
      <a class="stat t-amber" href="#/kemajuan"><i class="s-ic">🎯</i><b>${st.penguasaan}<small>%</small></b><span>Penguasaan</span></a>
      <a class="stat t-violet" href="#/hafazan"><i class="s-ic">🌙</i><b>${st.hafazDone}<small>/${st.hafazTotal}</small></b><span>Perenggan dihafaz</span></a>
    </div>

    <div class="actions">
      <a class="action primary" href="#/bab/${nextBab.id}/matan"><span class="a-ic">▶</span><span><b>Sambung Belajar</b><small>${U.esc(nextBab.ms)}</small></span><span class="a-go">›</span></a>
      <a class="action t-sky" href="#/latihan"><span class="a-ic">✎</span><span><b>Mula Latihan</b><small>13 jenis latihan</small></span></a>
      <a class="action t-violet" href="#/hafazan"><span class="a-ic ar-ic" lang="ar">حفظ</span><span><b>Hafazan Matan</b><small>Baca, sembunyi, uji</small></span></a>
    </div>

    <div class="quick">
      <a href="#/irab" class="qk t-emerald"><span lang="ar">إعراب</span>Latihan I'rab</a>
      <a href="#/kamus" class="qk t-sky"><span lang="ar">قاموس</span>Kamus Nahu</a>
      <a href="#/latihan" data-act="ulangkaji" class="qk t-coral ${due ? 'hot' : ''}"><span>${due}</span>Ulang Kaji</a>
    </div>

    <h3 class="sec-title">Bab Sedang Dipelajari</h3>
    <a class="card bab-now" href="#/bab/${nextBab.id}/matan">
      <div class="bn-no">${nextBab.no}</div>
      <div class="bn-body"><div class="ar bn-ar" dir="rtl" lang="ar">${nextBab.ar}</div><div class="bn-ms">${U.esc(nextBab.ms)}</div>
      ${bar(nb.best || 0)}<small class="muted">${nb.selesai ? 'Selesai ✓' : nb.dibaca ? 'Sudah dibaca' : 'Belum dibaca'} · Markah terbaik ${nb.best || 0}%</small></div>
    </a>

    ${weak.length ? `<h3 class="sec-title">Cadangan Ulang Kaji</h3>${weak.map(w => konsepCard(w)).join('')}` : ''}

    <h3 class="sec-title">Rekod Pencapaian Terkini</h3>
    ${p.log.length ? `<div class="card log">${p.log.slice(0, 6).map(l => `<div class="log-i"><span>${l.i}</span><div><p>${U.fmtSafe(l.m)}</p><small>${U.fmtTime(l.at)}</small></div></div>`).join('')}</div>` : `<div class="card empty-sm">Belum ada rekod. Mulakan dengan membaca <a href="#/bab/kalam/matan">Bab Kalam</a>.</div>`}
    ${!Store.persistent() ? '<p class="warnbox">Pelayar ini tidak membenarkan storan. Kemajuan tidak akan disimpan selepas halaman ditutup.</p>' : ''}
    `;
  };
  function konsepCard(w) {
    const K = NP.KONSEP[w.k] || [w.k, w.k];
    return `<div class="card weak"><div><b>${U.esc(K[1])}</b><small>Ketepatan ${w.acc}% (${w.c}/${w.n})</small>${bar(w.acc)}</div><button class="btn sm primary" data-act="latih-konsep" data-v="${w.k}">Latih</button></div>`;
  }

  /* ---------- KITAB ---------- */
  V.kitab = function () {
    const p = Store.profile();
    setHeader('Kitab al-Ajurumiyyah');
    return `
    <div class="card kitab-info">
      <div class="ar ki-title" dir="rtl" lang="ar">مَتْنُ الْآجُرُّومِيَّةِ</div>
      <p>Karya <b>Abu \'Abdillah Muhammad bin Muhammad bin Dawud as-Sanhaji</b>, masyhur dengan gelaran <b>Ibn Ajurrum</b> (w. 723H), dari Fas, Maghribi.</p>
      <p class="small muted">Setiap bab mengandungi: <span class="lbl matan">Matan</span> teks kitab · <span class="lbl ms">Terjemahan</span> · <span class="lbl syarah">Nota</span> syarah & huraian penyusun · Contoh · Latihan.</p>
    </div>
    <div class="quick">
      <a href="#/hafazan" class="qk t-violet"><span lang="ar">حفظ</span>Hafazan</a>
      <a href="#/kamus" class="qk t-sky"><span lang="ar">قاموس</span>Kamus</a>
      <a href="#/irab" class="qk t-emerald"><span lang="ar">إعراب</span>I'rab</a>
    </div>
    ${GROUPS.map((g, gi) => `
      <h3 class="sec-title"><span class="dot g${gi + 1}"></span>${g.t}</h3>
      <div class="list g${gi + 1}">${NP.BAB.filter(b => b.no >= g.r[0] && b.no <= g.r[1]).map(b => {
        const r = p.bab[b.id];
        return `<a class="li" href="#/bab/${b.id}/matan"><span class="li-no">${b.no}</span><span class="li-main"><span class="ar li-ar" dir="rtl" lang="ar">${b.ar}</span><span class="li-ms">${U.esc(b.ms)}</span></span><span class="li-end">${statusIcon(r)}${r && r.best ? `<small>${r.best}%</small>` : ''}</span></a>`;
      }).join('')}</div>`).join('')}`;
  };

  /* ---------- BAB ---------- */
  const BTABS = [['matan', 'Matan'], ['terjemahan', 'Terjemahan'], ['nota', 'Nota'], ['contoh', 'Contoh'], ['latihan', 'Latihan']];
  let babUI = { hide: false, inlineTr: false, open: {} };
  V.bab = function () {
    const [, id, tabRaw] = parts();
    const b = NP.findBab(id); if (!b) return V.notfound();
    const tab = BTABS.some(t => t[0] === tabRaw) ? tabRaw : 'matan';
    Store.setLastBab(b.id);
    setHeader(`Bab ${b.no}`, '#/kitab');
    const prev = NP.BAB[b.no - 2], next = NP.BAB[b.no];
    const r = Store.profile().bab[b.id] || {};
    return `
    <div class="bab-head">
      <div class="ar bh-ar" dir="rtl" lang="ar">${b.ar}</div>
      <div class="bh-ms">${U.esc(b.ms)}</div>
      <p class="small muted">${U.esc(b.ringkas)}</p>
      <div class="bh-status">${statusIcon(r.dibaca || r.cubaan ? r : null)} <small>${r.selesai ? 'Selesai' : r.dibaca ? 'Sudah dibaca' : 'Belum dibaca'} · Markah terbaik ${r.best || 0}%</small></div>
    </div>
    <nav class="tabs" role="tablist">${BTABS.map(t => `<a role="tab" class="tab ${t[0] === tab ? 'on' : ''}" href="#/bab/${b.id}/${t[0]}" aria-selected="${t[0] === tab}">${t[1]}</a>`).join('')}</nav>
    <div class="tab-body">${BAB_TAB[tab](b)}</div>
    <div class="pager">
      ${prev ? `<a class="btn ghost" href="#/bab/${prev.id}/${tab}">← Bab ${prev.no}</a>` : '<span></span>'}
      ${next ? `<a class="btn ghost" href="#/bab/${next.id}/${tab}">Bab ${next.no} →</a>` : '<span></span>'}
    </div>`;
  };
  const markReadBtn = (b) => {
    const r = Store.profile().bab[b.id];
    return r && r.dibaca ? `<p class="done-note">✓ Anda telah menandakan bab ini sebagai sudah dibaca.</p>` : `<button class="btn primary block" data-act="mark-read" data-v="${b.id}">✓ Tandakan bab ini sudah dibaca</button>`;
  };
  const BAB_TAB = {
    matan(b) {
      return `
      <div class="label-row"><span class="lbl matan">MATAN</span><small class="muted">Teks Matan al-Ajurumiyyah. Tekan perenggan untuk terjemahan.</small></div>
      <div class="toolbar">
        <button class="tb" data-act="font" data-v="-1" aria-label="Kecilkan tulisan">A−</button>
        <button class="tb" data-act="font" data-v="1" aria-label="Besarkan tulisan">A+</button>
        <button class="tb ${babUI.hide ? 'on' : ''}" data-act="toggle-hide">${babUI.hide ? '👁 Papar matan' : '🙈 Sembunyi (hafazan)'}</button>
        <button class="tb ${babUI.inlineTr ? 'on' : ''}" data-act="toggle-tr">Terjemahan sebaris</button>
      </div>
      <div class="matan ${babUI.hide ? 'hidden-mode' : ''}">
        ${b.matan.map((m, i) => `
          <div class="mp ${m.pembuka ? 'pembuka' : ''} ${babUI.open[b.id + i] || babUI.inlineTr ? 'open' : ''}" data-act="mp" data-v="${b.id + i}" tabindex="0" role="button" aria-expanded="${!!(babUI.open[b.id + i] || babUI.inlineTr)}">
            ${!m.pembuka ? `<span class="mp-no">${NP.paraNo(b, i)}</span>` : ''}
            <div class="ar mp-ar" dir="rtl" lang="ar">${m.ar}</div>
            <div class="mp-ms">${U.esc(m.ms)}</div>
          </div>`).join('')}
      </div>
      <p class="small muted center">Terdapat perbezaan kecil antara nuskhah-nuskhah matan. Bandingkan dengan nuskhah yang digunakan oleh guru anda.</p>
      <div class="btn-row"><a class="btn ghost grow" href="#/hafazan/${b.id}">Hafaz bab ini</a><a class="btn ghost grow" href="#/bab/${b.id}/nota">Baca nota →</a></div>`;
    },
    terjemahan(b) {
      return `
      <div class="label-row"><span class="lbl ms">TERJEMAHAN</span><small class="muted">Matan dipadankan perenggan demi perenggan dengan terjemahan Bahasa Melayu.</small></div>
      <div class="pairs">${b.matan.map((m, i) => `
        <div class="pair">
          <div class="pair-no">${m.pembuka ? '—' : NP.paraNo(b, i)}</div>
          <div class="ar pair-ar" dir="rtl" lang="ar">${m.ar}</div>
          <div class="pair-ms">${U.esc(m.ms)}</div>
        </div>`).join('')}</div>
      <p class="small muted">Terjemahan disusun secara harfiah-maknawi untuk pelajar; teks dalam kurungan ialah tambahan penjelasan.</p>`;
    },
    nota(b) {
      return `
      <div class="label-row"><span class="lbl syarah">SYARAH / NOTA</span><small class="muted">Huraian penyusun berdasarkan syarah muktabar. Bukan teks matan.</small></div>
      ${(b.nota || []).map((n, i) => `<section class="card nota"><h3><span class="nn">${i + 1}</span>${U.esc(n.t)}</h3><div class="nota-body">${U.fmt(n.h)}</div></section>`).join('')}
      ${b.kesalahan && b.kesalahan.length ? `<section class="card nota warn"><h3>⚠ Kesalahan Lazim Pelajar</h3><ul>${b.kesalahan.map(k => `<li>${U.fmt(k)}</li>`).join('')}</ul></section>` : ''}
      ${b.rumusan && b.rumusan.length ? `<section class="card nota gold"><h3>✦ Rumusan Ringkas</h3><ul>${b.rumusan.map(k => `<li>${U.fmt(k)}</li>`).join('')}</ul></section>` : ''}
      ${b.semakan && b.semakan.length ? `<section class="card nota review"><h3>🔎 Untuk Semakan Guru</h3><ul>${b.semakan.map(k => `<li>${U.fmt(k)}</li>`).join('')}</ul></section>` : ''}
      ${markReadBtn(b)}
      <a class="btn ghost block" href="#/bab/${b.id}/contoh">Lihat contoh →</a>`;
    },
    contoh(b) {
      if (!b.contoh || !b.contoh.length) return `<div class="card empty-sm">Bab ini ialah senarai ringkasan. Contoh bagi setiap kedudukan terdapat dalam bab-bab berikutnya.</div><a class="btn ghost block" href="#/bab/${b.id}/latihan">Pergi ke latihan →</a>`;
      return `
      <div class="label-row"><span class="lbl syarah">CONTOH</span><small class="muted">Contoh al-Quran ditanda dengan rujukan surah. Selainnya contoh nahu lazim.</small></div>
      ${b.contoh.map(c => `
        <div class="card contoh">
          <div class="c-top">${c.quran ? `<span class="badge q">Al-Quran · ${U.esc(c.ref)}</span>` : '<span class="badge">Contoh</span>'}</div>
          <div class="ar c-ar" dir="rtl" lang="ar">${c.quran ? '﴿ ' + c.ar + ' ﴾' : c.ar}</div>
          <p class="c-ms">${U.esc(c.ms)}</p>
          ${c.irab ? `<table class="irab-tbl" dir="rtl"><tbody>${c.irab.map(x => `<tr><td class="ar it-w" lang="ar">${x[0]}</td><td class="ar it-x" lang="ar">${x[1]}</td></tr>`).join('')}</tbody></table>` : ''}
          ${c.sebab ? `<p class="c-why"><b>Sebab:</b> ${U.fmt(c.sebab)}</p>` : ''}
          ${c.wajh ? `<p class="c-wajh"><b>Wajh i'rab lain:</b> ${U.fmt(c.wajh)}</p>` : ''}
        </div>`).join('')}
      ${markReadBtn(b)}`;
    },
    latihan(b) {
      const r = Store.profile().bab[b.id] || {};
      const c = [1, 2, 3].map(d => b.soalan.filter(q => q.d === d).length);
      const types = E.fromBab([b.id], { keepOrder: true }).reduce((a, q) => { const j = E.jenisOf(q); a[j] = (a[j] || 0) + 1; return a; }, {});
      return `
      <div class="card">
        <h3>Latihan ${U.esc(b.ms)}</h3>
        <p class="muted small">${b.soalan.length} soalan · Markah terbaik ${r.best || 0}% · ${r.cubaan || 0} cubaan</p>
        ${bar(r.best || 0)}
        <div class="chips">${Object.entries(types).map(([k, n]) => `<span class="chip ghost">${U.esc((NP.JENIS_LATIHAN.find(j => j.k === k) || { t: k }).t)} · ${n}</span>`).join('')}</div>
        <button class="btn primary block" data-act="bab-quiz" data-v="${b.id}" data-d="0">Mula Latihan (semua soalan)</button>
        <div class="btn-row">
          ${['Mudah', 'Sederhana', 'Sukar'].map((t, i) => `<button class="btn ghost grow" data-act="bab-quiz" data-v="${b.id}" data-d="${i + 1}" ${c[i] ? '' : 'disabled'}>${t} (${c[i]})</button>`).join('')}
        </div>
        <p class="small muted">Bab dikira <b>selesai</b> apabila sudah dibaca dan markah latihan sekurang-kurangnya 70%.</p>
      </div>
      <div class="card"><h3>Latihan Hafazan Matan</h3><p class="small muted">Isi perkataan yang hilang daripada matan bab ini.</p><a class="btn ghost block" href="#/hafazan/${b.id}/uji">Uji hafazan bab ini</a></div>`;
    }
  };

  /* ---------- LATIHAN ---------- */
  V.latihan = function () {
    setHeader('Latihan');
    const due = Store.dueReview();
    const cnt = E.countByJenis();
    return `
    <div class="card review-card ${due.length ? 'hot' : ''}">
      <div><h3>Ulang Kaji Hari Ini</h3><p class="small">${due.length ? `${due.length} soalan yang pernah anda salah perlu diulang (sistem ulangan berjarak).` : 'Tiada soalan perlu diulang hari ini. Teruskan!'}</p></div>
      <button class="btn ${due.length ? 'primary' : 'ghost'}" data-act="ulangkaji" ${due.length ? '' : 'disabled'}>Mula</button>
    </div>

    <a class="card feature t-emerald" href="#/irab"><span class="f-ic" lang="ar">إعراب</span><div><h3>Latihan I'rab</h3><p class="small muted">6 tahap: jenis kalimah → kedudukan → hukum → tanda → sebab → i'rab lengkap.</p></div><span class="chev">›</span></a>
    <a class="card feature t-amber" href="#/ujian"><span class="f-ic">⏱</span><div><h3>Ujian Campuran</h3><p class="small muted">Pilih bab, tahap kesukaran, bilangan soalan dan had masa.</p></div><span class="chev">›</span></a>
    <div class="card feature t-sky" data-act="tugasan-open" role="button" tabindex="0"><span class="f-ic">📋</span><div><h3>Tugasan daripada Guru</h3><p class="small muted">Masukkan kod tugasan yang diberi oleh guru.</p></div><span class="chev">›</span></div>
    <form class="card tugasan-form" data-form="tugasan" hidden>
      <label>Kod tugasan<textarea name="kod" rows="3" placeholder="NP1.xxxxx.xxxx" required></textarea></label>
      <button class="btn primary block">Buka Tugasan</button>
    </form>

    <h3 class="sec-title">Latihan Mengikut Jenis</h3>
    <div class="grid-types">${NP.JENIS_LATIHAN.map(j => {
      const n = j.k === 'irab' ? NP.IRAB.length : j.k === 'hafaz' ? '∞' : (cnt[j.k] || 0) + ({ jenis: 1, kedudukan: 1, hukum: 1, tanda: 1 }[j.k] ? '+' : '');
      return `<button class="type" data-act="jenis-quiz" data-v="${j.k}"><span class="t-ic" lang="ar">${j.i}</span><span class="t-t">${U.esc(j.t)}</span><small>${n} soalan</small></button>`;
    }).join('')}</div>

    <h3 class="sec-title">Latihan Mengikut Bab</h3>
    <div class="list">${NP.BAB.map(b => { const r = Store.profile().bab[b.id] || {}; return `<button class="li" data-act="bab-quiz" data-v="${b.id}" data-d="0"><span class="li-no">${b.no}</span><span class="li-main"><span class="li-ms">${U.esc(b.ms)}</span><small class="muted">${b.soalan.length} soalan</small></span><span class="li-end">${r.best ? `<small class="${pctCls(r.best)}">${r.best}%</small>` : ''}›</span></button>`; }).join('')}</div>`;
  };

  /* ---------- UJIAN CAMPURAN ---------- */
  V.ujian = function () {
    setHeader('Ujian Campuran', '#/latihan');
    return `
    <form class="card form" data-form="ujian">
      <h3>Bina Ujian</h3>
      <fieldset><legend>Bab <button type="button" class="link" data-act="check-all">Pilih semua</button></legend>
        <div class="checks">${NP.BAB.map(b => `<label class="ck"><input type="checkbox" name="bab" value="${b.id}" ${b.no <= 5 ? 'checked' : ''}> ${b.no}. ${U.esc(b.ms)}</label>`).join('')}</div>
      </fieldset>
      <div class="row2">
        <label>Tahap<select name="d"><option value="0">Campur</option><option value="1">Mudah</option><option value="2">Sederhana</option><option value="3">Sukar</option></select></label>
        <label>Bil. soalan<select name="n"><option>10</option><option selected>20</option><option>30</option><option value="0">Semua</option></select></label>
        <label>Had masa<select name="m"><option value="0">Tiada</option><option value="10">10 minit</option><option value="20">20 minit</option><option value="30">30 minit</option></select></label>
        <label class="ck"><input type="checkbox" name="irab" checked> Sertakan soalan i'rab</label>
      </div>
      <button class="btn primary block">Mula Ujian</button>
    </form>`;
  };

  /* ---------- I'RAB ---------- */
  let irabD = 0;
  V.irab = function () {
    const sub = parts()[1];
    if (sub === 'contoh') return irabContoh();
    setHeader('Latihan I\'rab', '#/latihan');
    const p = Store.profile();
    return `
    <div class="card">
      <div class="ar center big-ar" dir="rtl" lang="ar">جَاءَ زَيْدٌ</div>
      <ul class="irab-demo" dir="rtl" lang="ar"><li><b>جَاءَ:</b> فعل ماض مبني على الفتح</li><li><b>زَيْدٌ:</b> فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره</li></ul>
      <p class="small muted">Latih diri anda tahap demi tahap. Mulakan dengan Tahap 1, kemudian naik setelah mencapai 70%.</p>
    </div>
    <div class="seg" role="radiogroup" aria-label="Kesukaran">${['Semua', 'Mudah', 'Sederhana', 'Sukar'].map((t, i) => `<button class="seg-b ${irabD === i ? 'on' : ''}" data-act="irab-d" data-v="${i}" role="radio" aria-checked="${irabD === i}">${t}</button>`).join('')}</div>
    <div class="tahap-list">${NP.IRAB_TAHAP.map(t => { const r = p.irab[t.n] || {}; return `
      <button class="card tahap" data-act="irab-tahap" data-v="${t.n}">
        <span class="th-n">${t.n}</span>
        <span class="th-b"><b>TAHAP ${t.n}: ${U.esc(t.t)}</b><small>${U.fmt(t.d)}</small>${bar(r.best || 0)}<small class="muted">Terbaik ${r.best || 0}% · ${r.cubaan || 0} cubaan</small></span>
      </button>`; }).join('')}</div>
    <a class="card feature" href="#/irab/contoh"><span class="f-ic">📚</span><div><h3>Contoh I'rab Lengkap</h3><p class="small muted">${NP.IRAB.length} ayat dengan i'rab perkataan demi perkataan.</p></div><span class="chev">›</span></a>`;
  };
  function irabContoh() {
    setHeader('Contoh I\'rab', '#/irab');
    return `<p class="small muted">Ayat-ayat latihan ini disusun oleh penyusun untuk tujuan pembelajaran; ayat al-Quran ditanda dengan rujukan.</p>
      ${[1, 2, 3].map(d => `<h3 class="sec-title">${['', 'Mudah', 'Sederhana', 'Sukar'][d]}</h3>${NP.IRAB.filter(s => s.d === d).map(s => `
        <details class="card irab-ex"><summary><span class="ar" dir="rtl" lang="ar">${s.disp || s.ar}</span><small>${U.esc(s.ms)}${s.ref ? ' · ' + U.esc(s.ref) : ''}</small></summary>
          <table class="irab-tbl" dir="rtl"><tbody>${s.w.map(w => `<tr><td class="ar it-w" lang="ar">${w.w}</td><td class="ar it-x" lang="ar">${w.x}</td></tr><tr class="it-why"><td></td><td dir="ltr">${U.fmt(w.s)}</td></tr>`).join('')}</tbody></table>
          ${s.note ? `<p class="small">${U.fmt(s.note)}</p>` : ''}
        </details>`).join('')}`).join('')}`;
  }

  /* ---------- HAFAZAN ---------- */
  let hfUI = { p: null, level: 50, seed: 1, revealed: {} };
  V.hafazan = function () {
    const [, id, mode] = parts();
    if (id) return hafazanBab(id, mode || 'baca');
    setHeader('Hafazan Matan', '#/kitab');
    const st = Store.stats();
    return `
    <div class="card"><h3>Kemajuan Hafazan</h3><p class="big">${st.hafazDone} / ${st.hafazTotal} perenggan</p>${bar(st.hafazPct)}
    <p class="small muted">Perenggan dikira <b>hafaz</b> apabila anda mendapat 90% atau lebih dalam Uji Hafazan perenggan itu.</p></div>
    <div class="list">${NP.BAB.map(b => {
      const paras = b.matan.filter(m => !m.pembuka).length;
      const h = Store.profile().hafazan[b.id] || {};
      const done = Object.values(h).filter(r => r.st === 2).length;
      return `<a class="li" href="#/hafazan/${b.id}"><span class="li-no">${b.no}</span><span class="li-main"><span class="ar li-ar" dir="rtl" lang="ar">${b.ar}</span>${bar(Math.round(done * 100 / paras))}</span><span class="li-end"><small>${done}/${paras}</small></span></a>`;
    }).join('')}</div>`;
  };
  function hafazanBab(id, mode) {
    const b = NP.findBab(id); if (!b) return V.notfound();
    setHeader('Hafazan · Bab ' + b.no, '#/hafazan');
    const h = Store.profile().hafazan[b.id] || {};
    const paras = b.matan.map((m, i) => i).filter(i => !b.matan[i].pembuka);
    if (hfUI.p === null || !b.matan[hfUI.p] || b.matan[hfUI.p].pembuka) hfUI.p = paras[0];
    const modes = [['baca', 'Baca & Dengar'], ['sembunyi', 'Sembunyi'], ['uji', 'Uji Hafazan']];
    const stLbl = (i) => { const r = h[i]; return !r ? '<span class="hs h0">Belum</span>' : r.st === 2 ? `<span class="hs h2">Hafaz ✓ ${r.best}%</span>` : `<span class="hs h1">Sedang · ${r.best}%</span>`; };
    let inner = '';
    if (mode === 'baca') {
      const audio = NP.AUDIO && NP.AUDIO[b.id];
      inner = `
        <div class="card audio-card">
          ${audio ? `<audio controls preload="none" src="${U.esc(audio.src)}"></audio><p class="small muted">Bacaan: ${U.esc(audio.qari || '')}</p>` :
          `<p class="small"><b>Audio bacaan matan belum disediakan.</b> Aplikasi ini tidak menjana suara mesin untuk matan kerana sebutan mesin tidak boleh dijamin tepat. Guru boleh menambah rakaman sahih (lihat Panduan dalam README).</p>`}
          <div class="rec"><button class="btn sm ghost" data-act="rec">🎙 Rakam bacaan saya</button><span class="rec-st small muted"></span><audio class="rec-play" controls hidden></audio></div>
        </div>
        <div class="toolbar"><button class="tb" data-act="font" data-v="-1">A−</button><button class="tb" data-act="font" data-v="1">A+</button></div>
        <div class="matan">${b.matan.map((m, i) => `<div class="mp ${m.pembuka ? 'pembuka' : ''}">${!m.pembuka ? `<span class="mp-no">${NP.paraNo(b, i)}</span>` : ''}<div class="ar mp-ar" dir="rtl" lang="ar">${m.ar}</div>${!m.pembuka ? `<div class="mp-foot">${stLbl(i)}</div>` : ''}</div>`).join('')}</div>`;
    } else if (mode === 'sembunyi') {
      const toks = E.tokens(b.matan[hfUI.p].ar);
      const r = U.rng(hfUI.seed * 7919 + hfUI.p);
      const hideSet = new Set(U.shuffle(toks.map((_, i) => i), r).slice(0, Math.round(toks.length * hfUI.level / 100)));
      inner = `
        <p class="small muted">Pilih perenggan dan peratus perkataan yang disembunyikan. Cuba ingat, kemudian tekan kotak untuk melihat perkataan.</p>
        <div class="pchips">${paras.map(i => `<button class="pchip ${i === hfUI.p ? 'on' : ''}" data-act="hf-p" data-v="${i}">${NP.paraNo(b, i)}</button>`).join('')}</div>
        <div class="seg">${[25, 50, 75, 100].map(l => `<button class="seg-b ${hfUI.level === l ? 'on' : ''}" data-act="hf-level" data-v="${l}">${l}%</button>`).join('')}</div>
        <div class="card hide-card"><div class="ar hide-text" dir="rtl" lang="ar">${toks.map((t, i) => hideSet.has(i) && !hfUI.revealed[i] ? `<button class="hw" data-act="hf-rev" data-v="${i}" aria-label="Papar perkataan">${'ـ'.repeat(Math.max(3, Math.min(8, U.norm(t).length)))}</button>` : `<span class="sw ${hfUI.revealed[i] ? 'rev' : ''}">${t}</span>`).join(' ')}</div></div>
        <div class="btn-row"><button class="btn ghost grow" data-act="hf-new">🔀 Rawak semula</button><button class="btn ghost grow" data-act="hf-all">👁 Papar semua</button></div>
        <button class="btn primary block" data-act="hf-test" data-v="${hfUI.p}">Uji perenggan ${NP.paraNo(b, hfUI.p)}</button>`;
    } else {
      inner = `
        <p class="small muted">Uji hafazan dengan mengisi perkataan yang hilang. Skor 90% ke atas = perenggan dihafaz.</p>
        <button class="btn primary block" data-act="hf-test" data-v="all">Uji semua perenggan bab ini</button>
        <div class="list">${paras.map(i => `<button class="li" data-act="hf-test" data-v="${i}"><span class="li-no">${NP.paraNo(b, i)}</span><span class="li-main"><span class="ar li-ar small-ar" dir="rtl" lang="ar">${b.matan[i].ar.split(' ').slice(0, 6).join(' ')} …</span></span><span class="li-end">${stLbl(i)}</span></button>`).join('')}</div>`;
    }
    return `
      <div class="bab-head sm"><div class="ar bh-ar" dir="rtl" lang="ar">${b.ar}</div><div class="bh-ms">${U.esc(b.ms)}</div></div>
      <nav class="tabs">${modes.map(m => `<a class="tab ${m[0] === mode ? 'on' : ''}" href="#/hafazan/${b.id}/${m[0]}">${m[1]}</a>`).join('')}</nav>
      ${inner}`;
  }

  /* ---------- KAMUS ---------- */
  let kamusQ = '', kamusBab = '';
  V.kamus = function () {
    setHeader('Kamus Nahu', '#/kitab');
    return `
      <div class="search"><input type="search" id="kamus-q" placeholder="Cari istilah: فاعل, mubtada, hal…" value="${U.esc(kamusQ)}" autocomplete="off" aria-label="Cari istilah">
      <select id="kamus-bab" aria-label="Tapis mengikut bab"><option value="">Semua bab</option>${NP.BAB.map(b => `<option value="${b.id}" ${kamusBab === b.id ? 'selected' : ''}>${b.no}. ${U.esc(b.ms)}</option>`).join('')}</select></div>
      <div id="kamus-list">${kamusList()}</div>`;
  };
  function kamusList() {
    const q = U.norm(kamusQ);
    const list = NP.KAMUS.filter(k => (!kamusBab || k.bab === kamusBab) && (!q || [k.ar, k.ms, k.def, k.exp, k.ex].some(f => U.norm(f).includes(q))));
    if (!list.length) return '<div class="card empty-sm">Tiada istilah ditemui.</div>';
    return `<p class="small muted">${list.length} istilah</p>` + list.map(k => {
      const b = NP.findBab(k.bab);
      return `<details class="card term"><summary><span class="ar term-ar" dir="rtl" lang="ar">${k.ar}</span><span class="term-ms">${U.esc(k.ms)}</span></summary>
        <dl><dt>Definisi</dt><dd>${U.fmt(U.esc(k.def))}</dd><dt>Contoh</dt><dd class="ar" dir="rtl" lang="ar">${k.ex}</dd><dt>Penjelasan</dt><dd>${U.fmt(U.esc(k.exp))}</dd>
        <dt>Bab berkaitan</dt><dd><a href="#/bab/${k.bab}/nota">Bab ${b.no}: ${U.esc(b.ms)} →</a></dd></dl></details>`;
    }).join('');
  }

  /* ---------- KEMAJUAN ---------- */
  V.kemajuan = function () {
    setHeader('Kemajuan Saya');
    const p = Store.profile(), st = Store.stats();
    const weak = Store.weakKonsep();
    const freq = Store.frequentMistakes(5);
    const selesai = NP.BAB.filter(b => p.bab[b.id] && p.bab[b.id].selesai);
    const belum = NP.BAB.filter(b => !p.bab[b.id] || (!p.bab[b.id].dibaca && !p.bab[b.id].cubaan));
    const ulang = NP.BAB.filter(b => { const r = p.bab[b.id]; return r && ((r.cubaan && r.best < 70) || (r.dibaca && !r.cubaan)); });
    return `
    <div class="stats">
      <div class="stat"><b>${st.penguasaan}<small>%</small></b><span>Penguasaan keseluruhan</span></div>
      <div class="stat"><b>${st.ketepatan}<small>%</small></b><span>Ketepatan jawapan</span></div>
      <div class="stat"><b>${st.selesai}<small>/${st.totalBab}</small></b><span>Bab selesai</span></div>
      <div class="stat"><b>${st.dijawab}</b><span>Soalan dijawab</span></div>
    </div>
    <p class="small muted">Penguasaan = purata markah terbaik bagi semua 26 bab. Ketepatan = peratus jawapan betul daripada semua jawapan.</p>

    <h3 class="sec-title">Markah Mengikut Bab</h3>
    <div class="card chart">${NP.BAB.map(b => { const r = p.bab[b.id] || {}; return `<a class="cr" href="#/bab/${b.id}/latihan"><span class="cr-l">${b.no}. ${U.esc(b.ms.split('(')[0])}</span>${bar(r.best || 0)}<span class="cr-v">${r.best || 0}%</span></a>`; }).join('')}</div>

    <h3 class="sec-title">Konsep Lemah & Latihan Tambahan</h3>
    ${weak.length ? weak.map(konsepCard).join('') : '<div class="card empty-sm">Belum dikesan kelemahan. Sistem akan mencadangkan latihan tambahan apabila ketepatan sesuatu konsep di bawah 70% (sekurang-kurangnya 3 jawapan).</div>'}

    <h3 class="sec-title">Kesalahan Yang Kerap Dilakukan</h3>
    ${freq.length ? `<div class="card">${freq.map(f => { const q = E.byId(f.id); return q ? `<div class="freq"><span class="fq-n">✗${f.w}</span><span>${U.fmt(q.q)}${q.ar ? ` <bdi class="ari" dir="rtl" lang="ar">${q.ar.replace('___', '…')}</bdi>` : ''}</span></div>` : ''; }).join('')}<button class="btn ghost block" data-act="ulangkaji-all">Latih semula soalan-soalan ini</button></div>` : '<div class="card empty-sm">Tiada rekod kesalahan.</div>'}

    <h3 class="sec-title">Bab Perlu Diulang (${ulang.length})</h3>
    ${ulang.length ? `<div class="list">${ulang.map(b => `<a class="li" href="#/bab/${b.id}/latihan"><span class="li-no">${b.no}</span><span class="li-main"><span class="li-ms">${U.esc(b.ms)}</span><small class="muted">${p.bab[b.id].cubaan ? 'Markah terbaik ' + p.bab[b.id].best + '% (sasaran 70%)' : 'Sudah dibaca, belum dilatih'}</small></span><span class="li-end">›</span></a>`).join('')}</div>` : '<div class="card empty-sm">Tiada.</div>'}

    <div class="two">
      <div class="card"><h3>Bab Selesai (${selesai.length})</h3>${selesai.length ? `<ul class="plain">${selesai.map(b => `<li>✓ ${U.esc(b.ms)}</li>`).join('')}</ul>` : '<p class="small muted">Belum ada.</p>'}</div>
      <div class="card"><h3>Belum Dipelajari (${belum.length})</h3>${belum.length ? `<ul class="plain">${belum.slice(0, 8).map(b => `<li><a href="#/bab/${b.id}/matan">○ ${U.esc(b.ms)}</a></li>`).join('')}${belum.length > 8 ? `<li class="muted">… dan ${belum.length - 8} lagi</li>` : ''}</ul>` : '<p class="small muted">Semua bab telah dimulakan.</p>'}</div>
    </div>

    <h3 class="sec-title">Pencapaian Hafazan</h3>
    <div class="card"><p class="big">${st.hafazDone} / ${st.hafazTotal} perenggan (${st.hafazPct}%)</p>${bar(st.hafazPct)}<a class="btn ghost block" href="#/hafazan">Buka Hafazan</a></div>

    <h3 class="sec-title">Latihan I'rab</h3>
    <div class="card chart">${NP.IRAB_TAHAP.map(t => { const r = p.irab[t.n] || {}; return `<div class="cr"><span class="cr-l">Tahap ${t.n}: ${U.esc(t.t)}</span>${bar(r.best || 0)}<span class="cr-v">${r.best || 0}%</span></div>`; }).join('')}</div>

    <h3 class="sec-title">Rekod Ujian & Latihan</h3>
    ${p.ujian.length ? `<div class="card tbl-wrap"><table class="tbl"><thead><tr><th>Latihan</th><th>Markah</th><th>Tarikh</th></tr></thead><tbody>${p.ujian.slice(0, 20).map(u => `<tr><td>${U.esc(u.t)}</td><td class="${pctCls(u.pct)}">${u.s}/${u.n} (${u.pct}%)</td><td class="small">${U.fmtTime(u.at)}</td></tr>`).join('')}</tbody></table></div>` : '<div class="card empty-sm">Belum ada rekod latihan.</div>'}`;
  };

  /* ---------- PROFIL ---------- */
  V.profil = function () {
    setHeader('Profil & Tetapan');
    const s = Store.state(), p = Store.profile();
    return `
    <div class="card profile">
      <div class="avatar">${U.esc(p.nama.trim().charAt(0).toUpperCase() || 'P')}</div>
      <form data-form="rename" class="row"><input name="nama" value="${U.esc(p.nama)}" maxlength="40" aria-label="Nama"><button class="btn sm primary">Simpan</button></form>
      <p class="small muted">Ahli sejak ${U.fmtDate(p.dibuat)}</p>
    </div>

    <h3 class="sec-title">Pelajar di Peranti Ini</h3>
    <div class="card">
      ${Object.values(s.profiles).map(x => `<div class="prow ${x.id === s.active ? 'on' : ''}"><span>${x.id === s.active ? '● ' : ''}${U.esc(x.nama)}</span><span>${x.id !== s.active ? `<button class="btn sm ghost" data-act="pf-switch" data-v="${x.id}">Tukar</button> <button class="btn sm danger" data-act="pf-del" data-v="${x.id}" aria-label="Padam">✕</button>` : '<small class="muted">aktif</small>'}</span></div>`).join('')}
      <form data-form="pf-add" class="row"><input name="nama" placeholder="Nama pelajar baharu" maxlength="40" required><button class="btn sm ghost">+ Tambah</button></form>
      <p class="small muted">Sesuai untuk satu tablet yang dikongsi beberapa pelajar.</p>
    </div>

    <h3 class="sec-title">Paparan</h3>
    <div class="card">
      <div class="set"><span>Saiz tulisan Arab</span><span><button class="tb" data-act="font" data-v="-1">A−</button> <b>${Math.round(s.settings.fontScale * 100)}%</b> <button class="tb" data-act="font" data-v="1">A+</button></span></div>
      <div class="set"><span>Tema</span><span class="seg mini">${[['auto', 'Auto'], ['light', 'Cerah'], ['dark', 'Gelap']].map(t => `<button class="seg-b ${s.settings.theme === t[0] ? 'on' : ''}" data-act="theme" data-v="${t[0]}">${t[1]}</button>`).join('')}</span></div>
      <div class="ar center" dir="rtl" lang="ar" style="margin-top:.5rem">الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ</div>
    </div>

    <h3 class="sec-title">Sandaran Data</h3>
    <div class="card">
      <p class="small">Semua kemajuan disimpan dalam peranti ini sahaja. Muat turun sandaran secara berkala, terutamanya sebelum menukar telefon atau membersihkan data pelayar.</p>
      <div class="btn-row"><button class="btn ghost grow" data-act="backup">⬇ Muat Turun Sandaran</button><label class="btn ghost grow file">⬆ Pulihkan<input type="file" accept=".json,application/json" data-act="restore" hidden></label></div>
    </div>

    <a class="card feature t-violet" href="#/guru"><span class="f-ic">🎓</span><div><h3>Mod Guru</h3><p class="small muted">Bina tugasan & ujian, lihat markah dan kelemahan pelajar.</p></div><span class="chev">›</span></a>
    <a class="card feature t-sky" href="#/tentang"><span class="f-ic">ℹ</span><div><h3>Tentang & Ketepatan Ilmiah</h3><p class="small muted">Sumber matan, penafian, lesen.</p></div><span class="chev">›</span></a>

    <button class="btn danger block" data-act="reset">Padam semua data di peranti ini</button>
    <p class="small muted center">Nahu Pondok v${VER}</p>`;
  };

  /* ---------- TENTANG ---------- */
  V.tentang = function () {
    setHeader('Tentang', '#/profil');
    return `
    <div class="card center">${LOGO}<h2>Nahu Pondok</h2><p class="tag">Faham Nahu, Kuasai I'rab.</p><p class="small muted">Versi ${VER}</p></div>
    <div class="card nota"><h3>Sumber Kandungan</h3>
      <ul>
        <li><b>Matan:</b> Matan al-Ajurumiyyah oleh Abu \'Abdillah Muhammad bin Muhammad bin Dawud as-Sanhaji (Ibn Ajurrum, 672–723H). Teks lengkap 26 bab mengikut susunan nuskhah yang masyhur, dengan baris penuh.</li>
        <li><b>Terjemahan & nota:</b> disusun oleh penyusun aplikasi dalam Bahasa Melayu, berpandukan huraian syarah yang muktabar seperti <i>at-Tuhfah as-Saniyyah</i> (Muhammad Muhyiddin \'Abd al-Hamid) dan <i>Syarh al-Kafrawi</i>.</li>
        <li><b>Ayat al-Quran:</b> dipetik dengan rujukan surah dan ayat. Terjemahan ayat adalah terjemahan makna.</li>
      </ul></div>
    <div class="card nota review"><h3>Penanda Kandungan</h3>
      <ul><li><span class="lbl matan">MATAN</span> teks kitab asal.</li><li><span class="lbl ms">TERJEMAHAN</span> terjemahan Bahasa Melayu.</li><li><span class="lbl syarah">SYARAH / NOTA</span> huraian, contoh dan latihan oleh penyusun.</li><li>🔎 <b>Untuk Semakan Guru</b> — perkara khilaf atau perincian yang disarankan disemak bersama guru.</li></ul>
      <p class="small">Terdapat perbezaan kecil antara nuskhah matan (contohnya bilangan mansubat dan kemasukan [[سَمِعْتُ]] dalam senarai zhanna). Bandingkan dengan nuskhah yang digunakan di pondok anda.</p></div>
    <div class="card nota"><h3>Privasi</h3><p>Aplikasi berfungsi sepenuhnya di luar talian. Tiada akaun, tiada iklan, tiada data dihantar ke mana-mana pelayan. Semua kemajuan disimpan dalam peranti.</p></div>
    <div class="card nota"><h3>Lesen Fon</h3><p class="small">Fon <b>Amiri</b>, <b>Noto Naskh Arabic</b> dan <b>Plus Jakarta Sans</b> digunakan di bawah SIL Open Font License 1.1 (lihat folder <code>assets/fonts</code>).</p></div>`;
  };

  /* ---------- GURU ---------- */
  let guruOk = false, guruTab = 'tugasan';
  V.guru = function () {
    setHeader('Mod Guru', '#/profil');
    const g = Store.state().guru;
    if (!g.pin) return `<form class="card form" data-form="pin-set"><h3>Tetapkan PIN Guru</h3><p class="small muted">PIN menghalang pelajar membuka Mod Guru pada peranti ini.</p><label>PIN (4–8 digit)<input name="pin" inputmode="numeric" pattern="[0-9]{4,8}" required type="password" autocomplete="new-password"></label><label>Sahkan PIN<input name="pin2" inputmode="numeric" pattern="[0-9]{4,8}" required type="password" autocomplete="new-password"></label><button class="btn primary block">Simpan PIN</button></form>`;
    if (!guruOk) return `<form class="card form" data-form="pin-in"><h3>Masukkan PIN Guru</h3><label>PIN<input name="pin" inputmode="numeric" required type="password" autocomplete="current-password" autofocus></label><button class="btn primary block">Buka</button><p class="small muted">Terlupa PIN? Padam data di Profil untuk menetapkan semula (semua data peranti akan hilang).</p></form>`;
    const tabs = [['tugasan', 'Bina Tugasan'], ['keputusan', 'Keputusan'], ['pelajar', 'Pelajar Peranti']];
    let inner = '';
    if (guruTab === 'tugasan') {
      inner = `
      <form class="card form" data-form="tugasan-bina">
        <h3>Bina Tugasan / Ujian</h3>
        <label>Tajuk<input name="tajuk" required maxlength="60" placeholder="Contoh: Ujian Bab Fa'il — Kelas Ula"></label>
        <fieldset><legend>Bab <button type="button" class="link" data-act="check-all">Pilih semua</button></legend><div class="checks">${NP.BAB.map(b => `<label class="ck"><input type="checkbox" name="bab" value="${b.id}"> ${b.no}. ${U.esc(b.ms)}</label>`).join('')}</div></fieldset>
        <div class="row2">
          <label>Tahap kesukaran<select name="d"><option value="0">Campur</option><option value="1">Mudah</option><option value="2">Sederhana</option><option value="3">Sukar</option></select></label>
          <label>Jenis latihan<select name="j"><option value="">Semua jenis</option>${NP.JENIS_LATIHAN.filter(j => !['irab', 'hafaz'].includes(j.k)).map(j => `<option value="${j.k}">${U.esc(j.t)}</option>`).join('')}</select></label>
          <label>Bil. soalan<select name="n"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>30</option></select></label>
          <label>Had masa<select name="m"><option value="0">Tiada</option><option>10</option><option>15</option><option>20</option><option>30</option><option>45</option></select></label>
          <label>Tambah soalan I'rab<select name="ir"><option value="0">Tiada</option>${NP.IRAB_TAHAP.map(t => `<option value="${t.n}">Tahap ${t.n}: ${U.esc(t.t)}</option>`).join('')}</select></label>
          <label>Bil. soalan I'rab<select name="irn"><option>3</option><option selected>5</option><option>10</option></select></label>
        </div>
        <button class="btn primary block">Jana Kod Tugasan</button>
      </form>
      <h3 class="sec-title">Tugasan Dibina (${g.tugasan.length})</h3>
      ${g.tugasan.length ? g.tugasan.map(t => `<div class="card tg">
        <div class="tg-h"><b>${U.esc(t.title)}</b><small class="muted">${t.qs.length} soalan · ${t.m ? t.m + ' minit' : 'tiada had masa'} · ${U.fmtDate(t.at)}</small></div>
        <textarea class="code" readonly rows="2">${t.code}</textarea>
        <div class="btn-row"><button class="btn sm primary" data-act="copy" data-code="${t.code}">Salin kod</button><button class="btn sm ghost" data-act="share" data-code="${t.code}" data-title="${U.esc(t.title)}">Kongsi</button><button class="btn sm ghost" data-act="tg-preview" data-v="${t.id}">Cuba</button><button class="btn sm danger" data-act="tg-del" data-v="${t.id}">Padam</button></div>
      </div>`).join('') : '<div class="card empty-sm">Belum ada tugasan.</div>'}`;
    } else if (guruTab === 'keputusan') {
      const groups = {};
      g.keputusan.forEach(r => { (groups[r.tid] = groups[r.tid] || { tt: r.tt, list: [] }).list.push(r); });
      inner = `
      <form class="card form" data-form="keputusan-import"><h3>Masukkan Kod Keputusan Pelajar</h3><p class="small muted">Tampal satu atau lebih kod (satu kod setiap baris) yang dihantar oleh pelajar.</p><textarea name="kod" rows="4" placeholder="NPR1.xxxxx.xxxx" required></textarea><button class="btn primary block">Simpan Keputusan</button></form>
      ${Object.keys(groups).length ? Object.entries(groups).map(([tid, gr]) => {
        const avg = Math.round(gr.list.reduce((a, r) => a + r.s * 100 / r.n, 0) / gr.list.length);
        const kw = {};
        gr.list.forEach(r => r.r.forEach(([qid, ok]) => { if (!ok) { const q = E.byId(qid); const k = q ? q.k : '?'; kw[k] = (kw[k] || 0) + 1; } }));
        const kws = Object.entries(kw).sort((a, b) => b[1] - a[1]).slice(0, 5);
        return `<div class="card">
          <h3>${U.esc(gr.tt)}</h3><p class="small muted">${gr.list.length} pelajar · Purata ${avg}%</p>
          <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Nama</th><th>Markah</th><th>Masa</th><th>Tarikh</th><th></th></tr></thead><tbody>${gr.list.sort((a, b) => b.s / b.n - a.s / a.n).map(r => `<tr><td>${U.esc(r.nama)}</td><td class="${pctCls(Math.round(r.s * 100 / r.n))}">${r.s}/${r.n} (${Math.round(r.s * 100 / r.n)}%)</td><td class="small">${Math.floor((r.dur || 0) / 60)}m ${(r.dur || 0) % 60}s</td><td class="small">${U.fmtDate(r.at)}</td><td><button class="link danger" data-act="kp-del" data-v="${U.esc(r.key)}" aria-label="Padam">✕</button></td></tr>`).join('')}</tbody></table></div>
          ${kws.length ? `<h4>Konsep yang menjadi kelemahan</h4>${kws.map(([k, n]) => `<div class="cr"><span class="cr-l">${U.esc((NP.KONSEP[k] || [k, k])[1])}</span>${bar(Math.round(n * 100 / gr.list.length), 'low')}<span class="cr-v">${n} salah</span></div>`).join('')}` : ''}
          <button class="btn sm ghost" data-act="csv" data-v="${U.esc(tid)}">⬇ Eksport CSV</button>
        </div>`;
      }).join('') : '<div class="card empty-sm">Belum ada keputusan.</div>'}`;
    } else {
      const S = Store.state();
      inner = `<p class="small muted">Profil pelajar yang menggunakan peranti ini.</p>` + Object.values(S.profiles).map(p => {
        const st = Store.stats(p); const weak = Store.weakKonsep(3, p).slice(0, 3);
        return `<div class="card"><h3>${U.esc(p.nama)}</h3>
          <div class="mini-stats"><span>Bab dibaca <b>${st.dibaca}/${st.totalBab}</b></span><span>Penguasaan <b>${st.penguasaan}%</b></span><span>Ketepatan <b>${st.ketepatan}%</b></span><span>Hafazan <b>${st.hafazDone}</b></span></div>
          ${weak.length ? `<p class="small"><b>Kelemahan:</b> ${weak.map(w => U.esc((NP.KONSEP[w.k] || [w.k, w.k])[1]) + ' (' + w.acc + '%)').join(', ')}</p>` : '<p class="small muted">Tiada kelemahan dikesan.</p>'}
          ${p.ujian.length ? `<p class="small muted">Latihan terakhir: ${U.esc(p.ujian[0].t)} — ${p.ujian[0].pct}%</p>` : ''}
        </div>`;
      }).join('');
    }
    return `<nav class="tabs">${tabs.map(t => `<button class="tab ${t[0] === guruTab ? 'on' : ''}" data-act="guru-tab" data-v="${t[0]}">${t[1]}</button>`).join('')}</nav>${inner}
      <button class="btn ghost block" data-act="guru-lock">🔒 Kunci Mod Guru</button>`;
  };

  /* ---------- SESI ---------- */
  V.sesi = function () { setHeader('Latihan'); return '<div id="quiz-root"></div>'; };
  V.notfound = function () { setHeader('Tidak ditemui', '#/'); return '<div class="card empty-sm">Halaman tidak ditemui. <a href="#/">Kembali ke Utama</a></div>'; };

  /* ======================================================================
     TINDAKAN
     ====================================================================== */
  function startBabQuiz(id, d) {
    const b = NP.findBab(id);
    const qs = E.fromBab([id], { d: d || 0 });
    NP.Quiz.start({ title: `Latihan Bab ${b.no}: ${b.ms}${d ? ' (' + ['', 'Mudah', 'Sederhana', 'Sukar'][d] + ')' : ''}`, questions: qs, src: { type: d ? 'bab-d' : 'bab', bab: id, back: `#/bab/${id}/latihan` } });
  }
  function latihKonsep(k) {
    let qs;
    const m = /^irab-t(\d)$/.exec(k);
    if (m) qs = E.irabSet(+m[1], { n: 10 });
    else if (k === 'hafazan') qs = E.byJenis('hafaz', 10);
    else {
      qs = E.fromBab(null, { konsep: k });
      // tambah soalan dari bab yang sama jika terlalu sedikit
      if (qs.length < 6) { const babId = (NP.KONSEP[k] || [])[0]; qs = qs.concat(E.fromBab([babId]).filter(q => q.k !== k)).slice(0, 8); }
    }
    NP.Quiz.start({ title: 'Latihan Tambahan: ' + ((NP.KONSEP[k] || [k, k])[1]), questions: qs, src: { type: 'konsep', back: '#/kemajuan' } });
  }
  function startUlangKaji(all) {
    const ids = all ? Store.frequentMistakes(15).map(f => f.id) : Store.dueReview();
    NP.Quiz.start({ title: all ? 'Latih Semula Kesalahan' : 'Ulang Kaji Hari Ini', questions: U.shuffle(ids.map(E.byId).filter(Boolean)).slice(0, 20), src: { type: 'ulang', back: all ? '#/kemajuan' : '#/latihan' } });
  }
  function startTugasan(t, preview) {
    const qs = t.qs.map(E.byId).filter(Boolean);
    if (qs.length < t.qs.length) toast('Sebahagian soalan tidak ditemui dalam versi aplikasi ini dan telah diabaikan.', 4000);
    NP.Quiz.start({ title: (preview ? '[Pratonton] ' : '') + t.title, questions: qs, minutes: t.m || 0, src: { type: 'tugasan', tugasan: preview ? null : { id: t.id, title: t.title }, back: preview ? '#/guru' : '#/latihan' } });
  }

  let recorder = null;
  async function toggleRec(btn) {
    const box = btn.closest('.rec'); const stEl = box.querySelector('.rec-st'); const player = box.querySelector('.rec-play');
    if (recorder && recorder.state === 'recording') { recorder.stop(); btn.textContent = '🎙 Rakam bacaan saya'; return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast('Peranti ini tidak menyokong rakaman.'); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const chunks = []; recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => { stream.getTracks().forEach(t => t.stop()); player.src = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType })); player.hidden = false; stEl.textContent = 'Dengar semula bacaan anda (tidak disimpan).'; };
      recorder.start(); btn.textContent = '⏹ Henti'; stEl.textContent = 'Sedang merakam…';
    } catch (e) { toast('Akses mikrofon ditolak.'); }
  }

  function onClick(e) {
    if (route() === 'sesi') { NP.Quiz.onClick(e); }
    const el = e.target.closest('[data-act]'); if (!el) return;
    const a = el.dataset.act, v = el.dataset.v;
    const S = Store.state();
    switch (a) {
      case 'mp': { babUI.open[v] = !babUI.open[v]; el.classList.toggle('open'); el.setAttribute('aria-expanded', el.classList.contains('open')); break; }
      case 'toggle-hide': babUI.hide = !babUI.hide; render(); break;
      case 'toggle-tr': babUI.inlineTr = !babUI.inlineTr; render(); break;
      case 'font': S.settings.fontScale = Math.max(0.8, Math.min(1.8, Math.round((S.settings.fontScale + 0.1 * Number(v)) * 10) / 10)); Store.save(); applySettings(); if (route() === 'profil') render(); break;
      case 'theme': S.settings.theme = v; Store.save(); applySettings(); render(); break;
      case 'mark-read': Store.markRead(v); toast('Bab ditandakan sudah dibaca.'); render(); break;
      case 'bab-quiz': startBabQuiz(v, Number(el.dataset.d)); break;
      case 'jenis-quiz': { const j = NP.JENIS_LATIHAN.find(x => x.k === v); NP.Quiz.start({ title: 'Latihan: ' + j.t, questions: E.byJenis(v, 10), src: { type: 'jenis', back: '#/latihan' } }); break; }
      case 'ulangkaji': e.preventDefault(); if (Store.dueReview().length) startUlangKaji(false); else { toast('Tiada soalan ulang kaji buat masa ini.'); if (route() !== 'latihan') location.hash = '#/latihan'; } break;
      case 'ulangkaji-all': startUlangKaji(true); break;
      case 'latih-konsep': latihKonsep(v); break;
      case 'tugasan-open': { const f = $('[data-form="tugasan"]'); f.hidden = !f.hidden; if (!f.hidden) f.querySelector('textarea').focus(); break; }
      case 'irab-d': irabD = Number(v); render(); break;
      case 'irab-tahap': { const t = NP.IRAB_TAHAP[Number(v) - 1]; NP.Quiz.start({ title: `I'rab Tahap ${t.n}: ${t.t}`, questions: E.irabSet(t.n, { d: irabD || 0, n: t.n === 1 || t.n === 6 ? 6 : 10 }), src: { type: 'irab', tahap: t.n, back: '#/irab' } }); break; }
      case 'hf-p': hfUI.p = Number(v); hfUI.revealed = {}; render(); break;
      case 'hf-level': hfUI.level = Number(v); hfUI.revealed = {}; render(); break;
      case 'hf-rev': hfUI.revealed[v] = true; render(); break;
      case 'hf-new': hfUI.seed++; hfUI.revealed = {}; render(); break;
      case 'hf-all': { const id = parts()[1]; const n = E.tokens(NP.findBab(id).matan[hfUI.p].ar).length; for (let i = 0; i < n; i++) hfUI.revealed[i] = true; render(); break; }
      case 'hf-test': {
        const id = parts()[1]; const b = NP.findBab(id);
        const paras = v === 'all' ? null : [Number(v)];
        NP.Quiz.start({ title: `Hafazan Bab ${b.no}${paras ? ' · Perenggan ' + NP.paraNo(b, v) : ''}`, questions: E.hafazSet(id, paras, paras ? null : 2), src: { type: 'hafazan', back: `#/hafazan/${id}/uji` } });
        break;
      }
      case 'rec': toggleRec(el); break;
      case 'check-all': { const boxes = el.closest('form').querySelectorAll('input[name="bab"]'); const all = Array.from(boxes).every(b => b.checked); boxes.forEach(b => b.checked = !all); break; }
      case 'pf-switch': Store.switchProfile(v); toast('Profil ditukar.'); render(); break;
      case 'pf-del': if (confirm('Padam profil ini beserta semua kemajuannya?')) { Store.removeProfile(v); render(); } break;
      case 'backup': download(`nahu-pondok-sandaran-${Store.today()}.json`, Store.exportJSON()); Store.log('💾', 'Sandaran data dimuat turun'); Store.save(); break;
      case 'reset': if (confirm('Semua profil, kemajuan dan data guru di peranti ini akan dipadam. Teruskan?') && confirm('Pasti? Tindakan ini tidak boleh dibatalkan.')) { Store.resetAll(); guruOk = false; toast('Data dipadam.'); location.hash = '#/'; render(); } break;
      case 'guru-tab': guruTab = v; render(); break;
      case 'guru-lock': guruOk = false; render(); break;
      case 'copy': copy(el.dataset.code); break;
      case 'share': share(el.dataset.title, `Tugasan Nahu Pondok: ${el.dataset.title}\nBuka aplikasi → Latihan → Tugasan daripada Guru, kemudian tampal kod ini:\n\n${el.dataset.code}`); break;
      case 'tg-del': if (confirm('Padam tugasan ini?')) { S.guru.tugasan = S.guru.tugasan.filter(t => t.id !== v); Store.save(); render(); } break;
      case 'tg-preview': { const t = S.guru.tugasan.find(x => x.id === v); if (t) startTugasan(t, true); break; }
      case 'kp-del': S.guru.keputusan = S.guru.keputusan.filter(r => r.key !== v); Store.save(); render(); break;
      case 'csv': {
        const rows = [['Nama', 'Markah', 'Jumlah', 'Peratus', 'Masa (saat)', 'Tarikh']].concat(S.guru.keputusan.filter(r => r.tid === v).map(r => [r.nama, r.s, r.n, Math.round(r.s * 100 / r.n), r.dur || 0, new Date(r.at).toISOString()]));
        const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
        download(`keputusan-${v}.csv`, '﻿' + csv, 'text/csv'); break;
      }
    }
  }

  function onSubmit(e) {
    const f = e.target.closest('form[data-form]'); if (!f) return;
    e.preventDefault();
    const fd = new FormData(f); const S = Store.state();
    switch (f.dataset.form) {
      case 'onboard': Store.rename(fd.get('nama')); S.settings.onboard = true; Store.log('🌱', 'Memulakan perjalanan ilmu Nahu'); Store.save(); render(); break;
      case 'rename': Store.rename(fd.get('nama')); toast('Nama disimpan.'); render(); break;
      case 'pf-add': Store.addProfile(String(fd.get('nama')).trim().slice(0, 40)); toast('Profil baharu dicipta dan diaktifkan.'); render(); break;
      case 'ujian': {
        const babs = fd.getAll('bab'); if (!babs.length) { toast('Pilih sekurang-kurangnya satu bab.'); return; }
        const d = Number(fd.get('d')), n = Number(fd.get('n')), m = Number(fd.get('m'));
        let qs = E.fromBab(babs, { d });
        if (fd.get('irab')) qs = qs.concat([1, 2, 3, 4].flatMap(t => E.irabSet(t, { d, n: 3 })));
        qs = U.shuffle(qs); if (n) qs = qs.slice(0, n);
        NP.Quiz.start({ title: `Ujian Campuran (${babs.length} bab)`, questions: qs, minutes: m, src: { type: 'ujian', back: '#/ujian' } });
        break;
      }
      case 'tugasan': {
        try {
          const t = E.decode('NP1', fd.get('kod'));
          if (!t || !Array.isArray(t.qs)) throw new Error('Kod tidak lengkap.');
          if (confirm(`Tugasan: ${t.title}\n${t.qs.length} soalan${t.m ? ', had masa ' + t.m + ' minit' : ''}.\n\nMula sekarang?`)) startTugasan(t, false);
        } catch (err) { toast('Kod tugasan tidak sah: ' + err.message, 4000); }
        break;
      }
      case 'pin-set': {
        const p1 = String(fd.get('pin')), p2 = String(fd.get('pin2'));
        if (!/^\d{4,8}$/.test(p1)) { toast('PIN mesti 4 hingga 8 digit.'); return; }
        if (p1 !== p2) { toast('PIN tidak sepadan.'); return; }
        S.guru.pin = U.hash('pin:' + p1).toString(36); Store.save(); guruOk = true; render(); break;
      }
      case 'pin-in': if (U.hash('pin:' + fd.get('pin')).toString(36) === S.guru.pin) { guruOk = true; render(); } else toast('PIN salah.'); break;
      case 'tugasan-bina': {
        const babs = fd.getAll('bab'); const ir = Number(fd.get('ir'));
        if (!babs.length && !ir) { toast('Pilih sekurang-kurangnya satu bab atau tahap I\'rab.'); return; }
        const d = Number(fd.get('d')), n = Number(fd.get('n')), m = Number(fd.get('m')), j = fd.get('j') || null;
        let qs = babs.length ? E.fromBab(babs, { d, jenis: j }) : [];
        qs = qs.slice(0, n);
        if (ir) qs = qs.concat(E.irabSet(ir, { d, n: Number(fd.get('irn')) }));
        if (!qs.length) { toast('Tiada soalan yang sepadan. Longgarkan pilihan tahap atau jenis.'); return; }
        const t = { id: 't' + Date.now().toString(36), title: String(fd.get('tajuk')).trim().slice(0, 60), qs: qs.map(q => q.id), m, at: Date.now() };
        t.code = E.encode('NP1', { id: t.id, title: t.title, qs: t.qs, m: t.m, at: t.at, v: 1 });
        S.guru.tugasan.unshift(t); Store.save();
        toast(`Tugasan dijana: ${qs.length} soalan.`); render(); break;
      }
      case 'keputusan-import': {
        const lines = String(fd.get('kod')).split(/\s+/).filter(Boolean);
        let ok = 0, bad = 0, dup = 0;
        lines.forEach(line => {
          try {
            const r = E.decode('NPR1', line);
            r.key = U.hash(line).toString(36);
            if (S.guru.keputusan.some(x => x.key === r.key)) { dup++; return; }
            S.guru.keputusan.push(r); ok++;
          } catch (err) { bad++; }
        });
        Store.save();
        toast(`${ok} keputusan disimpan${dup ? `, ${dup} berulang` : ''}${bad ? `, ${bad} kod tidak sah` : ''}.`, 4000);
        render(); break;
      }
    }
  }

  function onChange(e) {
    const el = e.target;
    if (el.matches('[data-act="restore"]')) {
      const file = el.files && el.files[0]; if (!file) return;
      const rd = new FileReader();
      rd.onload = () => { try { if (confirm('Data semasa di peranti ini akan digantikan dengan sandaran. Teruskan?')) { Store.importJSON(rd.result); applySettings(); toast('Sandaran berjaya dipulihkan.'); render(); } } catch (err) { toast('Gagal memulihkan: ' + err.message, 4000); } };
      rd.readAsText(file);
    }
    if (el.id === 'kamus-bab') { kamusBab = el.value; $('#kamus-list').innerHTML = kamusList(); }
  }
  function onInput(e) { if (e.target.id === 'kamus-q') { kamusQ = e.target.value; $('#kamus-list').innerHTML = kamusList(); } }
  function onKey(e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"][data-act]')) { e.preventDefault(); e.target.click(); }
  }

  /* ---------- Render ---------- */
  function applySettings() {
    const s = Store.state().settings;
    document.documentElement.style.setProperty('--ar-scale', s.fontScale);
    if (s.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', s.theme);
  }
  function render() {
    const r = route();
    const view = V[r] || (r === '' ? V.utama : V.notfound);
    if (r !== 'sesi') NP.Quiz.leave();
    const tab = TAB_OF[r] || 'utama';
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab));
    const root = $('#view');
    let html;
    try { html = view(); } catch (err) { console.error(err); html = `<div class="card warnbox">Maaf, berlaku ralat semasa memaparkan halaman ini. <a href="#/">Kembali ke Utama</a></div>`; }
    root.innerHTML = html;
    root.classList.remove('enter'); void root.offsetWidth; root.classList.add('enter');
    if (r === 'sesi') NP.Quiz.render(root);
    document.body.classList.toggle('in-quiz', r === 'sesi');
  }

  function init() {
    applySettings();
    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onInput);
    document.addEventListener('keydown', onKey);
    $('#hdr-back').addEventListener('click', () => { const h = $('#hdr-back').dataset.href; location.hash = h || '#/'; });
    window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
    render();
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  return { init, render, route, toast, copy, IC, LOGO };
})();

document.addEventListener('DOMContentLoaded', NP.App.init);
