# Senarai Semakan Ilmiah — Nahu Pondok

Dokumen ini untuk **guru / penyemak** sebelum aplikasi digunakan secara rasmi atau dijual. Tandakan ☐ → ☑ selepas disemak.

## A. Matan (`matan` dalam `assets/js/data/kitab-*.js`)
- ☐ Bandingkan teks dan baris ke-26 bab dengan nuskhah rujukan pondok (contohnya cetakan yang dipakai dalam kelas).
- ☐ Perbezaan nuskhah yang telah diketahui:
  - Bilangan mansubat: matan menyebut *خمسة عشر*, tetapi senarai dalam nuskhah ini mengandungi 14 item. Item ke-15 (dua maf'ul ظنّ) dinyatakan dalam nota (Bab 15).
  - Kemasukan *سمعت* dalam senarai *ظننت وأخواتها* (Bab 10).
  - Ejaan *سِوًى / سُوًى / سَوَاءٌ* (Bab 21), *إذًا / إذَنْ* (Bab 5).
- ☐ Pastikan *بسم الله الرحمن الرحيم* di awal Bab 1 sesuai dengan nuskhah anda. Ia ditanda sebagai pembuka dan tidak dinomborkan.

## B. Terjemahan (`ms` dalam matan)
- ☐ Semak istilah transliterasi (rafa', nasab, khafadh, jazam, dsb.) supaya selaras dengan istilah yang digunakan di pondok.

## C. Nota & khilaf (ditanda "Untuk Semakan Guru" dalam aplikasi)
| Bab | Perkara |
|---|---|
| 3 | Syarat al-asma' al-khamsah; perincian dialek *حَمٌ* dan *فُو* |
| 5 | Fi'il amar: majzum (Kufah) atau mabni (Basrah); *أَنْ* mudhmarah selepas lam kai, lam juhud, hatta, fa, wau, au |
| 5, I'rab ir25 | Fi'il madhi + dhamir rafa' mutaharrik: mabni atas sukun, atau atas fathah muqaddarah |
| 9 | Muta'alliq syibh jumlah (*كائن / استقرّ*) |
| 10 | *رحيم* dalam *إن الله غفور رحيم*: khabar kedua atau na'at |
| 14 | *أخوك* dalam *قام زيد أخوك*: badal atau 'ataf bayan |
| 15 | Bilangan mansubat 14/15 |
| 19 | *لقيت عبد الله راكبًا*: hal bagi fa'il atau maf'ul |
| 22 | I'rab *الله* dalam kalimah tauhid (beberapa wajh) |
| 26 | Taqdir muta'alliq *بسم الله* |

## D. Contoh & i'rab
- ☐ Semua jadual i'rab dalam tab **Contoh** (26 bab).
- ☐ 25 ayat dalam `irab.js`. Soalan Tahap 1–6 dijana terus daripada data ini, jadi pembetulan di sini membetulkan semua soalan berkaitan.
- ☐ Rujukan ayat al-Quran (surah:ayat) dan rasm ayat.

## E. Soalan latihan
- ☐ 157 soalan bab: jawapan (`a`) dan penerangan (`e`).
- ☐ Pastikan tiada soalan yang mempunyai lebih daripada satu jawapan yang boleh diterima.

## Cara membetulkan
1. Edit fail data berkenaan dalam `assets/js/data/`.
2. Jalankan `node tools/validate.js`.
3. Naikkan `VERSION` dalam `sw.js`.
