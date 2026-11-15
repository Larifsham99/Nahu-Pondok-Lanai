#!/usr/bin/env node
/* Semakan integriti data Nahu Pondok.
   Jalankan: node tools/validate.js
   Keluar dengan kod 1 jika ada ralat. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const files = ['kitab-1.js', 'kitab-2.js', 'kitab-3.js', 'irab.js', 'kamus.js'];
const ctx = { window: {} };
ctx.window.NP = undefined;
vm.createContext(ctx);
// Dalam pelayar, window.NP menjadi global NP. Tiru di sini.
vm.runInContext('var window = this; ', ctx);
for (const f of files) {
  const code = fs.readFileSync(path.join(root, 'assets/js/data', f), 'utf8');
  vm.runInContext(code, ctx, { filename: f });
}
const NP = ctx.NP;
const errors = [];
const warn = [];
const err = (m) => errors.push(m);

const babIds = new Set();
const qIds = new Set();
let qCount = 0, matanCount = 0;
const TYPES = ['mcq', 'tf', 'fill', 'match', 'jenis', 'error', 'order', 'irab'];

function checkBrackets(s, where) {
  if (typeof s !== 'string') return;
  const open = (s.match(/\[\[/g) || []).length;
  const close = (s.match(/\]\]/g) || []).length;
  if (open !== close) err(`${where}: [[ ]] tidak seimbang`);
}

NP.BAB.sort((a, b) => a.no - b.no).forEach((b, i) => {
  const W = `Bab ${b.no} (${b.id})`;
  if (b.no !== i + 1) err(`${W}: nombor bab tidak berturutan`);
  if (babIds.has(b.id)) err(`${W}: id bab berulang`);
  babIds.add(b.id);
  ['ar', 'ms', 'ringkas'].forEach(k => { if (!b[k]) err(`${W}: tiada ${k}`); });
  if (!Array.isArray(b.matan) || !b.matan.length) err(`${W}: tiada matan`);
  (b.matan || []).forEach((m, j) => {
    if (!m.ar || !m.ms) err(`${W} matan#${j}: ar/ms kosong`);
    if (/[a-zA-Z]/.test(m.ar)) err(`${W} matan#${j}: huruf Latin dalam matan Arab`);
    matanCount++;
  });
  (b.nota || []).forEach((n, j) => { if (!n.t || !n.h) err(`${W} nota#${j}: tiada tajuk/isi`); checkBrackets(n.h, `${W} nota#${j}`); });
  (b.kesalahan || []).forEach((s, j) => checkBrackets(s, `${W} kesalahan#${j}`));
  (b.contoh || []).forEach((c, j) => { if (!c.ar || !c.ms) err(`${W} contoh#${j}: ar/ms kosong`); if (c.quran && !c.ref) err(`${W} contoh#${j}: ayat al-Quran tanpa rujukan`); checkBrackets(c.sebab, `${W} contoh#${j}`); });
  if (!b.soalan || b.soalan.length < 3) warn.push(`${W}: kurang daripada 3 soalan`);
  (b.soalan || []).forEach((q) => {
    const Q = `${W} soalan ${q.id}`;
    qCount++;
    if (!q.id) err(`${W}: soalan tanpa id`);
    if (qIds.has(q.id)) err(`${Q}: id berulang`);
    qIds.add(q.id);
    if (!TYPES.includes(q.t)) err(`${Q}: jenis tidak dikenali ${q.t}`);
    if (![1, 2, 3].includes(q.d)) err(`${Q}: tahap d mesti 1–3`);
    if (!q.k || !NP.KONSEP[q.k]) err(`${Q}: konsep '${q.k}' tiada dalam NP.KONSEP`);
    if (!q.e) err(`${Q}: tiada penerangan (e)`);
    if (!q.q) err(`${Q}: tiada teks soalan`);
    [q.q, q.e].forEach(s => checkBrackets(s, Q));
    switch (q.t) {
      case 'mcq': case 'fill':
        if (!Array.isArray(q.o) || q.o.length < 2) err(`${Q}: pilihan tidak cukup`);
        if (!(q.a >= 0 && q.a < (q.o || []).length)) err(`${Q}: indeks jawapan di luar julat`);
        if (new Set(q.o).size !== (q.o || []).length) err(`${Q}: pilihan berulang`);
        if (q.t === 'fill' && !(q.ar || '').includes('___')) err(`${Q}: fill tanpa ___`);
        break;
      case 'tf': if (typeof q.a !== 'boolean') err(`${Q}: jawapan tf mesti boolean`); break;
      case 'match':
        if (!Array.isArray(q.p) || q.p.length < 2) err(`${Q}: pasangan tidak cukup`);
        if (new Set(q.p.map(x => x[0])).size !== q.p.length) err(`${Q}: kiri berulang`);
        break;
      case 'jenis': (q.w || []).forEach(x => { if (!['i', 'f', 'h'].includes(x[1])) err(`${Q}: kategori jenis salah`); }); break;
      case 'error':
        if (!(q.a >= 0 && q.a < (q.w || []).length)) err(`${Q}: indeks salah di luar julat`);
        if (!q.fix) err(`${Q}: tiada pembetulan`);
        break;
      case 'order': if (!q.w || q.w.length < 2) err(`${Q}: perkataan tidak cukup`); break;
    }
  });
});

const irIds = new Set();
NP.IRAB.forEach(s => {
  const W = `IRAB ${s.id}`;
  if (irIds.has(s.id)) err(`${W}: id berulang`);
  irIds.add(s.id);
  s.w.forEach((w, j) => {
    ['w', 'j', 'm', 'h', 's', 'x'].forEach(k => { if (!w[k]) err(`${W} w#${j}: tiada ${k}`); });
    if (!NP.IRAB_OPSYEN.h.includes(w.h)) err(`${W} w#${j}: hukum tidak sah`);
    if (w.h !== 'مبني' && !NP.IRAB_OPSYEN.t.includes(w.t)) err(`${W} w#${j}: tanda '${w.t}' tiada dalam senarai`);
    if (w.h === 'مبني' && w.t) err(`${W} w#${j}: kalimah mabni tidak patut ada tanda`);
    checkBrackets(w.s, `${W} w#${j}`);
  });
});

NP.KAMUS.forEach((k, i) => { if (!babIds.has(k.bab)) err(`KAMUS#${i} ${k.ar}: bab '${k.bab}' tidak wujud`); });
Object.entries(NP.KONSEP).forEach(([k, v]) => { if (!babIds.has(v[0])) err(`KONSEP ${k}: bab '${v[0]}' tidak wujud`); });

console.log(`Bab: ${NP.BAB.length} | Perenggan matan: ${matanCount} | Soalan: ${qCount} | Ayat i'rab: ${NP.IRAB.length} | Istilah kamus: ${NP.KAMUS.length}`);
warn.forEach(w => console.log('AMARAN: ' + w));
if (errors.length) { errors.forEach(e => console.log('RALAT: ' + e)); process.exit(1); }
console.log('✔ Semua data sah.');
