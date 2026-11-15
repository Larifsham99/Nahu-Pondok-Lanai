/* =========================================================================
   NAHU PONDOK — Audio Bacaan Matan (pilihan)
   Aplikasi TIDAK menyertakan audio ciptaan mesin. Untuk menambah rakaman
   bacaan sahih (contohnya bacaan guru), letakkan fail dalam assets/audio/
   dan daftarkan di sini mengikut id bab:

   NP.AUDIO = {
     kalam: { src: 'assets/audio/01-kalam.mp3', qari: 'Ustaz ...' },
     irab:  { src: 'assets/audio/02-irab.mp3',  qari: 'Ustaz ...' }
   };

   Selepas menambah audio, tambah juga laluan fail ke senarai ASSETS
   dalam sw.js supaya ia boleh dimainkan di luar talian.
   ========================================================================= */
window.NP = window.NP || {};
NP.AUDIO = {};
