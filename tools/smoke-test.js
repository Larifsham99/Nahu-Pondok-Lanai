#!/usr/bin/env node
/* Ujian asap automatik (Playwright + Chromium).
   Jalankan: node tools/smoke-test.js
   - Melawat semua halaman & tab bab
   - Menjawab latihan setiap bab, 6 tahap i'rab, hafazan, ujian campuran
   - Mod guru: bina tugasan → pelajar jawab → import keputusan
   Gagal jika ada ralat JavaScript. */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const shotDir = process.env.SHOTS || '';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };

function serve() {
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
      const f = path.join(root, p);
      if (!f.startsWith(root) || !fs.existsSync(f)) { rsp.writeHead(404); return rsp.end(); }
      rsp.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(rsp);
    }).listen(0, () => res(srv));
  });
}

async function answerQuestion(page, wantCorrect) {
  // Jawab soalan semasa secara generik (bukan semestinya betul)
  if (await page.$('.opt')) { await page.click('.opt'); }
  else if (await page.$('.mitem')) {
    const n = (await page.$$('.mcol:first-child .mitem')).length;
    for (let i = 0; i < n; i++) {
      if (!(await page.$(`.mcol:first-child .mitem.sel[data-v="${i}"]`))) await page.click(`.mcol:first-child .mitem[data-v="${i}"]`);
      await page.click(`.mcol:last-child .mitem:not(.paired)`);
    }
  } else if (await page.$('.jbtn')) {
    const rows = await page.$$('.jrow');
    for (let i = 0; i < rows.length; i++) await page.click(`.jbtn[data-w="${i}"]`);
  } else if (await page.$('.iopt')) {
    const rows = await page.$$('.irow');
    for (let i = 0; i < rows.length; i++) await page.click(`.iopt[data-w="${i}"]`);
  } else if (await page.$('.order-line')) {
    while (await page.$('.bank .word')) await page.click('.bank .word');
  } else if (await page.$('.word[data-act="er"]')) { await page.click('.word[data-act="er"]'); }
  else throw new Error('Jenis soalan tidak dikenali: ' + (await page.innerHTML('.qbody')).slice(0, 200));
  await page.click('[data-act="check"]');
  await page.waitForSelector('.feedback');
}
async function runSession(page, label) {
  await page.waitForSelector('.quiz');
  let guard = 0;
  while (await page.$('.quiz') && guard++ < 80) {
    await answerQuestion(page);
    if (guard === 1 && await page.$('[data-act="retry"]')) { await page.click('[data-act="retry"]'); await answerQuestion(page); }
    await page.click('[data-act="next"]');
  }
  await page.waitForSelector('.summary', { timeout: 5000 });
  const score = await page.textContent('.summary .big');
  return `${label}: ${score.trim()} (${guard} soalan)`;
}

(async () => {
  const srv = await serve();
  const base = `http://localhost:${srv.address().port}/index.html`;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('dialog', d => d.accept());
  const go = async (h) => { await page.goto(base + h); await page.waitForTimeout(60); };
  const shot = async (name) => { if (shotDir) await page.waitForTimeout(350); if (shotDir) await page.screenshot({ path: path.join(shotDir, name + '.png'), fullPage: false }); };

  await go('#/');
  await page.fill('[data-form="onboard"] input', 'Ahmad');
  await page.click('[data-form="onboard"] button');
  await page.waitForSelector('.hero');
  if (!(await page.textContent('.salam')).includes('Ahmad')) throw new Error('Onboard gagal');
  await shot('01-utama');

  const routes = ['#/kitab', '#/latihan', '#/ujian', '#/irab', '#/irab/contoh', '#/hafazan', '#/kamus', '#/kemajuan', '#/profil', '#/tentang', '#/guru', '#/tidakwujud'];
  for (const r of routes) { await go(r); }
  await go('#/kitab'); await shot('02-kitab');

  const babIds = await page.evaluate(() => NP.BAB.map(b => b.id));
  for (const id of babIds) {
    for (const t of ['matan', 'terjemahan', 'nota', 'contoh', 'latihan']) await go(`#/bab/${id}/${t}`);
    await go(`#/hafazan/${id}/baca`); await go(`#/hafazan/${id}/sembunyi`); await go(`#/hafazan/${id}/uji`);
  }
  await go('#/bab/alamat/matan'); await page.click('.mp:nth-child(2)'); await shot('03-matan');
  await page.click('[data-act="toggle-hide"]'); await shot('03b-matan-sembunyi');
  await go('#/bab/alamat/nota'); await shot('04-nota');
  await go('#/bab/mubtada/contoh'); await shot('05-contoh');
  await page.click('[data-act="mark-read"]');

  const log = [];
  for (const id of babIds) {
    await go(`#/bab/${id}/latihan`);
    await page.click('[data-act="bab-quiz"][data-d="0"]');
    log.push(await runSession(page, 'Bab ' + id));
  }
  for (let t = 1; t <= 6; t++) {
    await go('#/irab'); await page.click(`[data-act="irab-tahap"][data-v="${t}"]`);
    if (t === 6) await shot('06-irab-t6');
    log.push(await runSession(page, 'Irab tahap ' + t));
  }
  // Paparan contoh jenis soalan untuk semakan visual
  await go('#/latihan'); await page.click('[data-act="jenis-quiz"][data-v="match"]'); await page.waitForSelector('.quiz'); await shot('07-padan');
  await answerQuestion(page); await shot('08-maklum-balas');
  await go('#/latihan');
  for (const j of await page.evaluate(() => NP.JENIS_LATIHAN.map(j => j.k))) {
    await go('#/latihan'); await page.click(`[data-act="jenis-quiz"][data-v="${j}"]`);
    log.push(await runSession(page, 'Jenis ' + j));
  }
  await go('#/hafazan/kalam/sembunyi'); await page.click('.hw'); await shot('09-hafazan');
  await page.click('[data-act="hf-test"]'); log.push(await runSession(page, 'Hafazan kalam p1'));
  await go('#/hafazan/alamat/uji'); await page.click('[data-act="hf-test"][data-v="all"]'); log.push(await runSession(page, 'Hafazan alamat semua'));
  await go('#/ujian'); await page.selectOption('select[name="m"]', '10'); await page.click('[data-form="ujian"] button.primary'); await page.waitForSelector('#np-timer'); log.push(await runSession(page, 'Ujian campuran'));

  // Kamus
  await go('#/kamus'); await page.fill('#kamus-q', 'فاعل'); await page.waitForTimeout(50);
  const kn = await page.$$eval('.term', e => e.length); if (!kn) throw new Error('Carian kamus gagal');
  await page.fill('#kamus-q', 'mubtada'); await page.click('.term summary'); await shot('10-kamus');

  // Guru → tugasan → pelajar → keputusan
  await go('#/guru');
  await page.fill('[data-form="pin-set"] input[name="pin"]', '1234'); await page.fill('[data-form="pin-set"] input[name="pin2"]', '1234'); await page.click('[data-form="pin-set"] button');
  await page.fill('[data-form="tugasan-bina"] input[name="tajuk"]', 'Ujian Fa\'il');
  await page.check('[data-form="tugasan-bina"] input[value="fail"]'); await page.check('[data-form="tugasan-bina"] input[value="mubtada"]');
  await page.selectOption('[data-form="tugasan-bina"] select[name="ir"]', '3');
  await page.click('[data-form="tugasan-bina"] button.primary');
  const code = await page.inputValue('.tg textarea.code'); await shot('11-guru');
  if (!code.startsWith('NP1.')) throw new Error('Kod tugasan tidak dijana');
  await go('#/latihan'); await page.click('[data-act="tugasan-open"]'); await page.fill('[data-form="tugasan"] textarea', code); await page.click('[data-form="tugasan"] button');
  log.push(await runSession(page, 'Tugasan'));
  const res = await page.inputValue('.summary textarea.code'); if (!res.startsWith('NPR1.')) throw new Error('Kod keputusan tidak dijana');
  await go('#/guru'); await page.click('[data-act="guru-tab"][data-v="keputusan"]');
  await page.fill('[data-form="keputusan-import"] textarea', res); await page.click('[data-form="keputusan-import"] button');
  await page.waitForSelector('.tbl td'); await shot('12-keputusan');
  // Kod rosak mesti ditolak
  await page.fill('[data-form="keputusan-import"] textarea', res.slice(0, -2) + 'zz'); await page.click('[data-form="keputusan-import"] button');
  const rows = await page.$$eval('.tbl tbody tr', e => e.length); if (rows !== 1) throw new Error('Kod rosak diterima');
  await page.click('[data-act="guru-tab"][data-v="pelajar"]');

  // Ulang kaji & kemajuan
  await go('#/latihan'); if (await page.$('[data-act="ulangkaji"]:not([disabled])')) { await page.click('.review-card [data-act="ulangkaji"]'); log.push(await runSession(page, 'Ulang kaji')); }
  await go('#/kemajuan'); await shot('13-kemajuan');
  const weak = await page.$('[data-act="latih-konsep"]'); if (weak) { await weak.click(); log.push(await runSession(page, 'Latih konsep')); }
  await go('#/'); await shot('14-utama-selepas');

  // Profil: tambah, tukar, tema, sandaran
  await go('#/profil'); await page.fill('[data-form="pf-add"] input', 'Fatimah'); await page.click('[data-form="pf-add"] button');
  await page.click('[data-act="theme"][data-v="dark"]'); await go('#/'); await shot('15-gelap');
  await go('#/profil'); await page.click('[data-act="theme"][data-v="auto"]');
  const backup = await page.evaluate(() => NP.Store.exportJSON());
  await page.evaluate((b) => NP.Store.importJSON(b), backup);
  // Muat semula: data mesti kekal
  await page.reload(); await page.waitForSelector('.view');
  const persisted = await page.evaluate(() => Object.keys(NP.Store.state().profiles).length);
  if (persisted !== 2) throw new Error('Data tidak kekal selepas muat semula');

  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 }); await go('#/bab/kalam/terjemahan'); await shot('16-desktop');

  console.log(log.join('\n'));
  await browser.close(); srv.close();
  if (errors.length) { console.error('\nRALAT:\n' + errors.join('\n')); process.exit(1); }
  console.log('\n✔ Ujian asap lulus tanpa ralat JavaScript.');
})().catch(e => { console.error(e); process.exit(1); });
