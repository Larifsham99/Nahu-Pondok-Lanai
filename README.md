# Nahu Pondok

**Faham Nahu, Kuasai I'rab.**

Aplikasi pembelajaran Nahu Arab berasaskan **Matan al-Ajurumiyyah** untuk pelajar pondok, pelajar baharu Nahu, penghafaz matan dan guru Nahu. Antara muka dalam Bahasa Melayu; kandungan dalam Bahasa Arab dan Bahasa Melayu.

Aplikasi web statik (HTML, CSS, JavaScript tulen). Tiada pelayan, tiada pangkalan data, tiada akaun dan tiada perpustakaan luar. Ia berfungsi **sepenuhnya di luar talian** selepas dibuka kali pertama.

---

## Kandungan

| Modul | Isi |
|---|---|
| **Kitab** | 26 bab Matan al-Ajurumiyyah dengan baris penuh (108 perenggan): matan, terjemahan Bahasa Melayu, nota konsep, contoh dan latihan bagi setiap bab |
| **Nota konsep** | Maksud matan, pecahan takrif, istilah, kaedah, sebab hukum, perbandingan istilah, kesalahan lazim, rumusan dan perkara untuk semakan guru |
| **Contoh** | Contoh kalimah dan ayat, jadual i'rab, sebab i'rab, wajh i'rab lain, dan ayat al-Quran dengan rujukan surah:ayat |
| **Latihan** | 157 soalan bab dalam 13 jenis latihan, serta soalan i'rab dan hafazan yang dijana daripada data sahih |
| **Latihan I'rab** | 6 tahap (jenis kalimah → kedudukan → hukum → tanda → sebab → i'rab lengkap) daripada 25 ayat yang di-i'rab perkataan demi perkataan |
| **Hafazan** | Baca matan, slot audio bacaan sahih, rakam bacaan sendiri, sembunyi 25–100% perkataan, isi perkataan yang hilang, status hafaz setiap perenggan |
| **Kamus Nahu** | 51 istilah dengan carian (Arab berbaris/tanpa baris, Melayu) dan pautan ke bab berkaitan |
| **Kemajuan** | Penguasaan, ketepatan, markah setiap bab, konsep lemah dengan latihan tambahan, kesalahan kerap, bab perlu diulang, rekod ujian, hafazan |
| **Ulang kaji berjarak** | Soalan yang pernah salah dijadualkan semula secara automatik (sistem Leitner: 0, 1, 2, 4, 7, 15 hari) |
| **Mod Guru** | Dilindungi PIN. Bina tugasan atau ujian (bab, tahap, jenis, bilangan, had masa), kongsi melalui kod, terima kod keputusan, lihat markah dan kelemahan kelas, eksport CSV |

### 13 jenis latihan
Pilihan jawapan · Betul/Salah · Isi tempat kosong · Padankan istilah · Kenal pasti isim/fi'il/huruf · Hukum i'rab · Tanda i'rab · 'Amil & ma'mul · Kedudukan kalimah · I'rab lengkap · Cari kesalahan i'rab · Susun kalimah · Hafazan matan.

Setiap jawapan disemak dengan **penerangan**: sama ada betul atau salah, di mana silapnya, jawapan yang tepat, penerangan konsep, dan pautan ke nota. Tersedia butang **Cuba Lagi**. Markah dikira pada cubaan pertama.

---

## Cara menggunakan

### 1. Buka terus (paling mudah)
Buka `index.html` dalam pelayar. Semua fungsi berjalan, **kecuali** pemasangan ke skrin utama dan cache luar talian, yang memerlukan alamat `http(s)`.

### 2. Hos secara percuma (disyorkan untuk telefon Android)
Muat naik keseluruhan folder ke mana-mana hos statik:
- **GitHub Pages:** *Settings → Pages → Deploy from branch* (folder root).
- **Netlify / Cloudflare Pages:** seret dan lepas folder ini.

Kemudian buka alamat tersebut di Chrome Android → menu ⋮ → **Tambah ke skrin utama**. Aplikasi akan berfungsi seperti aplikasi biasa dan boleh digunakan tanpa internet.

### 3. Pelayan tempatan (untuk pembangun)
```bash
python3 -m http.server 8080
# buka http://localhost:8080
```

---

## Aliran kerja Guru ↔ Pelajar (tanpa pelayan)

1. **Guru:** Profil → Mod Guru → tetapkan PIN → *Bina Tugasan* → pilih bab/tahap/jenis/bilangan/had masa → **Jana Kod Tugasan** → *Salin* atau *Kongsi* (contohnya ke kumpulan WhatsApp kelas).
2. **Pelajar:** Latihan → *Tugasan daripada Guru* → tampal kod → jawab.
3. **Pelajar:** Di akhir tugasan, salin **Kod Keputusan** dan hantar kepada guru.
4. **Guru:** Mod Guru → *Keputusan* → tampal satu atau banyak kod (satu kod setiap baris) → lihat markah, purata, konsep yang menjadi kelemahan kelas → *Eksport CSV*.

Kod mengandungi tandatangan semakan. Kod yang rosak atau diubah akan ditolak. Tandatangan ini mengesan kesilapan salinan dan perubahan biasa, tetapi bukan sistem keselamatan kriptografi.

Untuk tablet yang dikongsi: Profil → *Pelajar di Peranti Ini* → tambah beberapa profil. Guru boleh melihat kemajuan setiap profil di tab *Pelajar Peranti*.

---

## Data & privasi
- Semua kemajuan disimpan dalam `localStorage` peranti. Tiada data dihantar keluar.
- **Sandaran:** Profil → *Muat Turun Sandaran* (fail `.json`). *Pulihkan* untuk memindahkan data ke peranti lain.
- Jika data pelayar dipadam, kemajuan akan hilang. Galakkan pengguna membuat sandaran.

---

## Ketepatan ilmiah

- **Matan:** teks lengkap Matan al-Ajurumiyyah (Ibn Ajurrum, w. 723H) mengikut nuskhah yang masyhur, dengan baris penuh. Terdapat perbezaan kecil antara nuskhah. Perbezaan yang diketahui dinyatakan dalam aplikasi.
- **Penanda kandungan dalam aplikasi:**
  - `MATAN`: teks kitab.
  - `TERJEMAHAN`: terjemahan Bahasa Melayu.
  - `SYARAH / NOTA`: huraian, contoh dan latihan oleh penyusun.
  - 🔎 **Untuk Semakan Guru**: perkara khilaf atau perincian yang perlu disemak.
- Apabila ada lebih daripada satu **wajh i'rab**, aplikasi menyatakannya. Contohnya fi'il madhi yang bersambung dengan dhamir, *رحيم* dalam *إن الله غفور رحيم*, kalimah tauhid, dan badal/'ataf bayan.
- Ayat al-Quran diberi rujukan surah:ayat.
- Aplikasi **tidak** menjana audio mesin untuk matan. Audio hanya dimainkan jika rakaman sahih ditambah (lihat di bawah).

> **Saranan sebelum penggunaan rasmi / jualan:** minta seorang ustaz Nahu menyemak keseluruhan kandungan, terutamanya terjemahan, nota dan semua item di [`docs/SEMAKAN-ILMIAH.md`](docs/SEMAKAN-ILMIAH.md). Bandingkan matan dengan nuskhah yang digunakan di pondok anda.

---

## Menambah kandungan

Semua kandungan berada dalam `assets/js/data/`. Kod aplikasi tidak perlu diubah.

### Menambah soalan pada bab
Dalam `kitab-*.js`, tambah objek ke dalam `soalan` bab berkenaan:
```js
{ id: 'fail-10', t: 'mcq', d: 2, k: 'fail', j: 'kedudukan',
  q: 'Apakah kedudukan [[الطَّالِبُ]]?', ar: 'نَجَحَ الطَّالِبُ',
  o: ['Mubtada\'', 'Fa\'il', 'Maf\'ul bih'], a: 1,
  e: 'Penerangan mengapa jawapan itu betul.' }
```
| Medan | Makna |
|---|---|
| `id` | unik, kekal (digunakan oleh rekod kemajuan & kod tugasan; jangan tukar selepas diterbitkan) |
| `t` | `mcq`, `tf`, `fill`, `match`, `jenis`, `error`, `order`, `irab` |
| `d` | tahap 1 = mudah, 2 = sederhana, 3 = sukar |
| `k` | kunci konsep (lihat `NP.KONSEP` dalam `kamus.js`) |
| `j` | (pilihan) kategori jenis latihan: `hukum`, `tanda`, `amil`, `kedudukan`, `irab` |
| `[[...]]` | teks Arab sebaris dalam ayat Bahasa Melayu |

Format setiap jenis: `tf` → `a: true/false`; `fill` → `ar` mengandungi `___`, `o`, `a`; `match` → `p: [[kiri, kanan], ...]`; `jenis` → `w: [[kalimah, 'i'|'f'|'h'], ...]`; `error` → `w: [...]`, `a` (indeks salah), `fix`; `order` → `w` dalam susunan yang betul.

### Menambah ayat i'rab
Tambah ke dalam `NP.IRAB` dalam `irab.js`. Soalan untuk keenam-enam tahap dijana secara automatik.

### Menambah bab / kitab lain (contohnya Mutammimah)
Tambah objek bab baharu (`id`, `no`, `ar`, `ms`, `ringkas`, `matan`, `nota`, `contoh`, `soalan`) dalam fail data baharu. Kemudian tambah `<script>` fail itu dalam `index.html` dan laluan fail dalam `sw.js`.

### Menambah audio bacaan sahih
Letakkan fail dalam `assets/audio/` dan daftarkannya dalam `assets/js/data/audio.js`.

### Selepas mengubah apa-apa fail
1. Jalankan `node tools/validate.js`. Ia menyemak id berulang, indeks jawapan, konsep, rujukan al-Quran dan sebagainya.
2. Naikkan `VERSION` dalam `sw.js` supaya pengguna menerima versi baharu.

---

## Ujian
```bash
node tools/validate.js      # integriti data
node tools/smoke-test.js    # ujian pelayar penuh (memerlukan Playwright + Chromium)
```
Ujian asap melawat setiap halaman dan tab, menjawab latihan bagi setiap bab, setiap tahap i'rab, setiap jenis latihan, hafazan dan ujian bermasa. Ia juga menguji aliran guru (tugasan → jawapan → keputusan), penolakan kod rosak, sandaran/pulih dan kekekalan data. Ujian gagal jika berlaku sebarang ralat JavaScript.

---

## Struktur fail
```
index.html                 Rangka aplikasi
manifest.webmanifest, sw.js  PWA & luar talian
assets/css/app.css         Reka bentuk (tema cerah/gelap, responsif)
assets/js/store.js         Storan, statistik, ulang kaji berjarak, sandaran
assets/js/engine.js        Enjin soalan, penjana i'rab/hafazan, kod tugasan, sesi latihan
assets/js/app.js           Penghala & semua paparan
assets/js/data/            Kandungan (kitab, i'rab, kamus, audio)
assets/fonts/              Amiri, Noto Naskh Arabic, Plus Jakarta Sans (SIL OFL 1.1)
tools/                     Skrip semakan & ujian
docs/SEMAKAN-ILMIAH.md     Senarai semakan untuk guru
```

## Lesen pihak ketiga
- Fon **Amiri**, **Noto Naskh Arabic** dan **Plus Jakarta Sans**: SIL Open Font License 1.1 (fail lesen dalam `assets/fonts/`). Fon ini boleh disertakan dalam produk komersial.
- Matan al-Ajurumiyyah ialah karya klasik abad ke-8 Hijrah (domain awam).
- Ayat al-Quran dipetik untuk tujuan pengajaran.
