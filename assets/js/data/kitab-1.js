/* =========================================================================
   NAHU PONDOK — Data Kitab (Bahagian 1: Bab 1–9)
   -------------------------------------------------------------------------
   PENTING:
   - Medan `matan` = teks Matan al-Ajurumiyyah (Ibn Ajurrum, w. 723H).
   - Medan `nota`, `contoh`, `soalan` = SYARAH / NOTA PENYUSUN (bukan matan).
   - Sintaks [[...]] dalam nota = teks Arab sebaris (dipapar RTL).
   - `semakan` = perkara yang disarankan disemak oleh guru.
   ========================================================================= */
window.NP = window.NP || {};
NP.BAB = NP.BAB || [];

NP.BAB.push(
/* ------------------------------------------------------------------ 1 */
{
  id: 'kalam', no: 1,
  ar: 'بَابُ الْكَلَامِ', ms: 'Bab Kalam (Ayat)',
  ringkas: 'Takrif kalam, pembahagian kalimah dan tanda-tanda isim, fi\'il dan huruf.',
  matan: [
    { ar: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', ms: 'Dengan nama Allah Yang Maha Pemurah lagi Maha Penyayang.', pembuka: true },
    { ar: 'الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ.', ms: 'Kalam ialah lafaz yang tersusun (daripada dua kalimah atau lebih), yang memberi faedah (makna yang sempurna), dengan wadh\' (sengaja dan mengikut bahasa Arab).' },
    { ar: 'وَأَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى.', ms: 'Bahagian-bahagiannya (iaitu bahagian kalimah yang membentuk kalam) ada tiga: isim, fi\'il dan huruf yang datang bagi sesuatu makna.' },
    { ar: 'فَالِاسْمُ يُعْرَفُ بِالْخَفْضِ، وَالتَّنْوِينِ، وَدُخُولِ الْأَلِفِ وَاللَّامِ، وَحُرُوفِ الْخَفْضِ، وَهِيَ: مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي، وَرُبَّ، وَالْبَاءُ، وَالْكَافُ، وَاللَّامُ، وَحُرُوفِ الْقَسَمِ، وَهِيَ: الْوَاوُ، وَالْبَاءُ، وَالتَّاءُ.', ms: 'Maka isim itu dikenali dengan khafadh (baris bawah/jar), tanwin, masuknya alif dan lam, dan (masuknya) huruf-huruf khafadh, iaitu: min, ila, \'an, \'ala, fi, rubba, ba, kaf dan lam; dan (masuknya) huruf-huruf qasam (sumpah), iaitu: wau, ba dan ta.' },
    { ar: 'وَالْفِعْلُ يُعْرَفُ بِقَدْ، وَالسِّينِ، وَسَوْفَ، وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ.', ms: 'Dan fi\'il itu dikenali dengan qad, sin, saufa dan ta ta\'nith yang sakin.' },
    { ar: 'وَالْحَرْفُ مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ.', ms: 'Dan huruf ialah kalimah yang tidak layak bersamanya tanda isim dan tidak juga tanda fi\'il.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Bab pertama ini menerangkan apakah yang dimaksudkan dengan <b>kalam</b> menurut ahli Nahu, kemudian membahagikan <b>kalimah</b> (perkataan) kepada tiga jenis, dan memberi tanda-tanda untuk mengenal setiap jenis.</p>` },
    { t: 'Pecahan Takrif Kalam', h: `<p>Takrif kalam mempunyai empat syarat. Jika hilang satu, ia bukan kalam di sisi ahli Nahu:</p>
      <ol>
        <li><b>[[اللَّفْظُ]] — Lafaz:</b> suara yang mengandungi sebahagian huruf hijaiyyah. Isyarat dan tulisan bukan lafaz.</li>
        <li><b>[[الْمُرَكَّبُ]] — Tersusun:</b> terdiri daripada dua kalimah atau lebih, sama ada zahir seperti [[قَامَ زَيْدٌ]] atau taqdiri seperti [[قُمْ]] (fa\'ilnya [[أَنْتَ]] tersembunyi).</li>
        <li><b>[[الْمُفِيدُ]] — Berfaedah:</b> memberi makna yang sempurna sehingga pendengar tidak menunggu sambungan. [[إِنْ قَامَ زَيْدٌ]] belum berfaedah kerana pendengar menunggu jawapannya.</li>
        <li><b>[[بِالْوَضْعِ]] — Dengan wadh\':</b> Ulama mentafsirkannya dengan dua makna: (a) dengan sengaja (bukan igauan orang tidur atau orang lalai), dan (b) mengikut bahasa Arab. Kedua-dua tafsiran disebut dalam syarah.</li>
      </ol>` },
    { t: 'Istilah Penting', h: `<ul>
        <li><b>Kalimah [[الْكَلِمَةُ]]:</b> lafaz tunggal yang mempunyai makna, seperti [[زَيْدٌ]].</li>
        <li><b>Kalam [[الْكَلَامُ]]:</b> susunan yang memberi makna sempurna.</li>
        <li><b>Isim [[الِاسْمُ]]:</b> kalimah yang menunjukkan makna pada dirinya dan tidak terikat dengan masa.</li>
        <li><b>Fi\'il [[الْفِعْلُ]]:</b> kalimah yang menunjukkan makna pada dirinya dan terikat dengan salah satu masa.</li>
        <li><b>Huruf [[الْحَرْفُ]]:</b> kalimah yang tidak sempurna maknanya melainkan bersama kalimah lain.</li>
      </ul>` },
    { t: 'Kaedah Mengenal Kalimah', h: `<p><b>Langkah mudah:</b> cuba masukkan tanda pada perkataan itu.</p>
      <ol>
        <li>Boleh menerima [[الـ]], tanwin, baris bawah atau huruf jar? → <b>Isim</b>. Contoh: [[الْكِتَابُ]]، [[كِتَابٌ]]، [[مِنْ كِتَابٍ]].</li>
        <li>Boleh menerima [[قَدْ]]، [[السِّين]]، [[سَوْفَ]] atau [[تَاءُ التَّأْنِيثِ السَّاكِنَةُ]]? → <b>Fi\'il</b>. Contoh: [[قَدْ قَامَ]]، [[سَيَقُومُ]]، [[قَامَتْ]].</li>
        <li>Tidak boleh menerima kedua-duanya? → <b>Huruf</b>. Contoh: [[هَلْ]]، [[لَمْ]]، [[فِي]].</li>
      </ol>
      <p>Matan menyebut <i>tanda</i>, bukan <i>syarat</i>. Satu tanda sudah memadai; tidak semestinya semua tanda ada pada satu isim.</p>` },
    { t: 'Sebab Hukum', h: `<p>Mengapa huruf jar menjadi tanda isim? Kerana huruf jar hanya beramal (memberi kesan) pada isim; ia tidak masuk ke atas fi\'il. Begitu juga [[قَدْ]] dan [[سَوْفَ]] khusus masuk ke atas fi\'il kerana maknanya berkaitan dengan masa dan kejadian.</p>` },
    { t: 'Perbandingan Istilah', h: `<table class="tbl"><tr><th>Kalam</th><th>Kalimah</th></tr>
      <tr><td>Mesti tersusun dan berfaedah sempurna</td><td>Satu lafaz tunggal yang bermakna</td></tr>
      <tr><td>[[جَاءَ زَيْدٌ]]</td><td>[[زَيْدٌ]] sahaja</td></tr></table>
      <p>Ada istilah ketiga, <b>kalim [[الْكَلِمُ]]</b>: tiga kalimah atau lebih, sama ada berfaedah atau tidak.</p>` }
  ],
  kesalahan: [
    'Menyangka setiap ayat bahasa Melayu yang difahami ialah "kalam" — dalam Nahu, kalam mesti lafaz Arab yang memenuhi empat syarat.',
    'Menyangka [[سَ]] dan [[سَوْفَ]] masuk pada fi\'il madhi. Sebenarnya kedua-duanya khusus pada fi\'il mudhari\'.',
    'Mengira [[قَدْ]] sebagai tanda isim. Ia tanda fi\'il (madhi dan mudhari\').',
    'Menyangka ta [[قَامَتْ]] sama dengan ta [[مُسْلِمَةٌ]]. Ta pada isim itu bergerak (ta marbutah); yang menjadi tanda fi\'il ialah ta ta\'nith yang <b>sakin</b>.'
  ],
  rumusan: [
    'Kalam = lafaz + tersusun + berfaedah + dengan wadh\'.',
    'Kalimah tiga: isim, fi\'il, huruf.',
    'Tanda isim: khafadh, tanwin, [[الـ]], huruf jar (dan huruf qasam).',
    'Tanda fi\'il: [[قَدْ]]، [[السِّين]]، [[سَوْفَ]]، ta ta\'nith sakin.',
    'Huruf: tidak menerima tanda isim dan tanda fi\'il.'
  ],
  contoh: [
    { ar: 'قَامَ زَيْدٌ', ms: 'Zaid telah berdiri.', sebab: 'Kalam: lafaz, tersusun daripada fi\'il dan isim, berfaedah sempurna.' },
    { ar: 'إِنْ قَامَ زَيْدٌ', ms: 'Jika Zaid berdiri...', sebab: 'Bukan kalam: tersusun tetapi belum berfaedah, pendengar menunggu jawapan syarat.' },
    { ar: 'بِسْمِ اللَّهِ', ms: 'Dengan nama Allah', sebab: '[[اسْمِ]] ialah isim kerana dimasuki huruf jar [[بِـ]] dan berbaris bawah.' },
    { ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', ms: 'Sesungguhnya berjayalah orang-orang yang beriman.', ref: 'Al-Mu\'minun: 1', quran: true, sebab: '[[أَفْلَحَ]] fi\'il kerana dimasuki [[قَدْ]]; [[الْمُؤْمِنُونَ]] isim kerana dimasuki [[الـ]].' },
    { ar: 'كَلَّا سَوْفَ تَعْلَمُونَ', ms: 'Jangan sekali-kali (begitu)! Kelak kamu akan mengetahui.', ref: 'At-Takathur: 3', quran: true, sebab: '[[تَعْلَمُونَ]] fi\'il kerana dimasuki [[سَوْفَ]].' },
    { ar: 'قَالَتِ امْرَأَتُ الْعَزِيزِ', ms: 'Isteri al-\'Aziz berkata...', ref: 'Yusuf: 51', quran: true, sebab: '[[قَالَتْ]] fi\'il kerana ada ta ta\'nith sakin (dibaris kasrah di sini kerana bertemu dua sakin).' }
  ],
  soalan: [
    { id: 'kalam-1', t: 'mcq', d: 1, k: 'kalam-takrif', q: 'Apakah takrif kalam menurut matan?', o: ['Lafaz yang tersusun, berfaedah dengan wadh\'', 'Setiap perkataan yang mempunyai makna', 'Tiga kalimah atau lebih', 'Huruf yang datang bagi sesuatu makna'], a: 0, e: 'Matan menyebut: [[الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ]]. Pilihan lain ialah takrif kalimah, kalim dan huruf.' },
    { id: 'kalam-2', t: 'tf', d: 1, k: 'kalam-takrif', q: 'Ungkapan ini ialah kalam yang sempurna:', ar: 'إِنْ قَامَ زَيْدٌ', a: false, e: 'Ia tersusun tetapi tidak berfaedah sempurna kerana pendengar masih menunggu jawapan syarat.' },
    { id: 'kalam-3', t: 'jenis', d: 1, k: 'kalam-tanda', q: 'Kenal pasti jenis setiap kalimah:', w: [['قَدْ', 'h'], ['قَامَتْ', 'f'], ['الصَّلَاةُ', 'i']], e: '[[قَدْ]] huruf; [[قَامَتْ]] fi\'il kerana ta ta\'nith sakin; [[الصَّلَاةُ]] isim kerana [[الـ]].' },
    { id: 'kalam-4', t: 'mcq', d: 1, k: 'kalam-tanda', q: 'Manakah tanda khusus bagi fi\'il?', o: ['Tanwin', 'Alif dan lam', 'سَوْفَ', 'Huruf jar'], a: 2, e: '[[سَوْفَ]] hanya masuk ke atas fi\'il mudhari\'. Tanwin, [[الـ]] dan huruf jar ialah tanda isim.' },
    { id: 'kalam-5', t: 'match', d: 2, k: 'kalam-tanda', q: 'Padankan kalimah dengan tanda yang menunjukkan jenisnya:', p: [['كِتَابٌ', 'Tanwin → isim'], ['سَيَقُولُ', 'Sin → fi\'il'], ['بِالْقَلَمِ', 'Huruf jar → isim'], ['خَرَجَتْ', 'Ta ta\'nith sakin → fi\'il']], e: 'Setiap kalimah dikenali melalui tanda yang boleh menerima atau telah menerimanya.' },
    { id: 'kalam-6', t: 'fill', d: 2, k: 'kalam-tanda', q: 'Lengkapkan matan:', ar: 'وَالْفِعْلُ يُعْرَفُ بِقَدْ، وَالسِّينِ، وَ ___، وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ', o: ['سَوْفَ', 'التَّنْوِينِ', 'الْخَفْضِ', 'رُبَّ'], a: 0, e: 'Tanda fi\'il yang empat: [[قَدْ]]، [[السِّين]]، [[سَوْفَ]] dan ta ta\'nith sakin.' },
    { id: 'kalam-7', t: 'mcq', d: 2, k: 'kalam-tanda', q: 'Kalimah [[هَلْ]] tergolong dalam jenis apa?', o: ['Isim', 'Fi\'il', 'Huruf'], a: 2, e: '[[هَلْ]] tidak menerima tanda isim (tidak boleh dikatakan [[الْهَلْ]]) dan tidak menerima tanda fi\'il (tidak boleh [[قَدْ هَلْ]]), maka ia huruf.' },
    { id: 'kalam-8', t: 'tf', d: 2, k: 'kalam-tanda', q: 'Huruf qasam (sumpah) yang disebut dalam matan ialah wau, ba dan ta.', a: true, e: 'Matan: [[وَحُرُوفِ الْقَسَمِ، وَهِيَ: الْوَاوُ، وَالْبَاءُ، وَالتَّاءُ]]. Contoh: [[وَاللَّهِ]]، [[بِاللَّهِ]]، [[تَاللَّهِ]].' },
    { id: 'kalam-9', t: 'jenis', d: 3, k: 'kalam-tanda', q: 'Kenal pasti jenis setiap kalimah dalam ayat al-Quran ini:', ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', w: [['قَدْ', 'h'], ['أَفْلَحَ', 'f'], ['الْمُؤْمِنُونَ', 'i']], e: '[[قَدْ]] huruf tahqiq; [[أَفْلَحَ]] fi\'il madhi kerana dimasuki [[قَدْ]]; [[الْمُؤْمِنُونَ]] isim kerana [[الـ]].' },
    { id: 'kalam-10', t: 'mcq', d: 3, k: 'kalam-takrif', q: 'Apakah maksud [[الْمُرَكَّبُ]] dalam takrif kalam?', o: ['Tersusun daripada dua kalimah atau lebih', 'Memberi faedah yang sempurna', 'Diucapkan dengan sengaja', 'Mengandungi huruf hijaiyyah'], a: 0, e: 'Murakkab = tersusun daripada dua kalimah atau lebih. Faedah sempurna ialah makna [[الْمُفِيدُ]]; mengandungi huruf ialah makna [[اللَّفْظُ]].' }
  ]
},

/* ------------------------------------------------------------------ 2 */
{
  id: 'irab', no: 2,
  ar: 'بَابُ الْإِعْرَابِ', ms: 'Bab I\'rab',
  ringkas: 'Takrif i\'rab dan empat jenisnya: rafa\', nasab, khafadh dan jazam.',
  matan: [
    { ar: 'الْإِعْرَابُ هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا.', ms: 'I\'rab ialah perubahan akhir-akhir kalimah disebabkan berlainan \'amil-\'amil yang masuk ke atasnya, sama ada (perubahan itu) pada lafaz atau secara taqdir (andaian).' },
    { ar: 'وَأَقْسَامُهُ أَرْبَعَةٌ: رَفْعٌ، وَنَصْبٌ، وَخَفْضٌ، وَجَزْمٌ.', ms: 'Dan bahagian-bahagiannya empat: rafa\', nasab, khafadh dan jazam.' },
    { ar: 'فَلِلْأَسْمَاءِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْخَفْضُ، وَلَا جَزْمَ فِيهَا.', ms: 'Maka bagi isim-isim daripada yang demikian itu: rafa\', nasab dan khafadh; dan tiada jazam padanya.' },
    { ar: 'وَلِلْأَفْعَالِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْجَزْمُ، وَلَا خَفْضَ فِيهَا.', ms: 'Dan bagi fi\'il-fi\'il daripada yang demikian itu: rafa\', nasab dan jazam; dan tiada khafadh padanya.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>I\'rab ialah <b>perubahan baris/keadaan akhir kalimah</b> kerana berubahnya \'amil (faktor penyebab) yang masuk ke atasnya. Lihat kalimah [[زَيْدٌ]]:</p>
      <ul><li>[[جَاءَ زَيْدٌ]] — rafa\' (fa\'il)</li><li>[[رَأَيْتُ زَيْدًا]] — nasab (maf\'ul bih)</li><li>[[مَرَرْتُ بِزَيْدٍ]] — khafadh (dimasuki huruf jar)</li></ul>
      <p>Huruf-huruf [[ز ي د]] tetap; yang berubah hanya <b>akhirnya</b>, mengikut \'amil.</p>` },
    { t: 'Pecahan Takrif', h: `<ol>
      <li><b>[[تَغْيِيرُ]]</b> — perubahan keadaan, bukan perubahan huruf asal.</li>
      <li><b>[[أَوَاخِرِ الْكَلِمِ]]</b> — pada akhir kalimah, bukan awal atau tengah.</li>
      <li><b>[[لِاخْتِلَافِ الْعَوَامِلِ]]</b> — sebab perubahan ialah \'amil yang berbeza.</li>
      <li><b>[[لَفْظًا]]</b> — perubahan nampak, seperti [[زَيْدٌ / زَيْدًا / زَيْدٍ]].</li>
      <li><b>[[أَوْ تَقْدِيرًا]]</b> — perubahan diandaikan kerana tidak dapat dizahirkan, seperti [[جَاءَ الْفَتَى]]: dhammah diandaikan pada alif kerana alif tidak boleh menerima baris (ta\'adzdzur).</li></ol>` },
    { t: 'Istilah: \'Amil dan Ma\'mul', h: `<ul><li><b>\'Amil [[الْعَامِلُ]]:</b> kalimah (atau makna) yang menyebabkan i\'rab tertentu. Contoh: [[جَاءَ]] menyebabkan [[زَيْدٌ]] rafa\'.</li>
      <li><b>Ma\'mul [[الْمَعْمُولُ]]:</b> kalimah yang menerima kesan \'amil. Contoh: [[زَيْدٌ]].</li>
      <li><b>Mu\'rab [[الْمُعْرَبُ]]:</b> kalimah yang akhirnya berubah mengikut \'amil.</li>
      <li><b>Mabni [[الْمَبْنِيُّ]]:</b> kalimah yang akhirnya tetap, tidak berubah, seperti [[هَذَا]]، [[مَنْ]]، dan semua huruf.</li></ul>` },
    { t: 'Sebab Hukum', h: `<p><b>Mengapa isim tidak dijazamkan?</b> Kerana isim menerima tanwin dan khafadh; jika dijazamkan (disukunkan) ia kehilangan keringanan yang menjadi ciri isim. <b>Mengapa fi\'il tidak dikhafadhkan?</b> Kerana \'amil khafadh (huruf jar dan idhafah) khusus kepada isim. Kedua-dua ini adalah penjelasan syarah; yang pasti ialah hukum dalam matan.</p>` },
    { t: 'Perbandingan', h: `<table class="tbl"><tr><th>I\'rab</th><th>Isim</th><th>Fi\'il</th></tr>
      <tr><td>Rafa\' [[رَفْعٌ]]</td><td>✔</td><td>✔</td></tr><tr><td>Nasab [[نَصْبٌ]]</td><td>✔</td><td>✔</td></tr>
      <tr><td>Khafadh [[خَفْضٌ]]</td><td>✔</td><td>✘</td></tr><tr><td>Jazam [[جَزْمٌ]]</td><td>✘</td><td>✔</td></tr></table>
      <p><i>Nota:</i> Istilah [[خَفْضٌ]] (khafadh) dipakai oleh matan; ramai ulama juga menggunakan istilah [[جَرٌّ]] (jar). Maknanya sama.</p>` }
  ],
  kesalahan: [
    'Menyangka semua fi\'il mu\'rab. Hanya fi\'il mudhari\' yang mu\'rab (dengan syarat tertentu); fi\'il madhi dan amar mabni.',
    'Menyangka perubahan di awal kalimah juga i\'rab. I\'rab hanya pada akhir kalimah.',
    'Mengatakan isim boleh majzum. Matan jelas: [[وَلَا جَزْمَ فِيهَا]].'
  ],
  rumusan: ['I\'rab = perubahan akhir kalimah kerana \'amil, zahir atau taqdir.', 'Empat jenis: rafa\', nasab, khafadh, jazam.', 'Isim: rafa\', nasab, khafadh (tiada jazam).', 'Fi\'il: rafa\', nasab, jazam (tiada khafadh).'],
  contoh: [
    { ar: 'جَاءَ زَيْدٌ', ms: 'Zaid telah datang.', irab: [['زَيْدٌ', 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Rafa\' kerana menjadi fa\'il.' },
    { ar: 'رَأَيْتُ زَيْدًا', ms: 'Aku telah melihat Zaid.', irab: [['زَيْدًا', 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Nasab kerana menjadi maf\'ul bih.' },
    { ar: 'مَرَرْتُ بِزَيْدٍ', ms: 'Aku telah melalui (bertemu) Zaid.', irab: [['زَيْدٍ', 'اسم مخفوض بالباء وعلامة خفضه الكسرة الظاهرة على آخره']], sebab: 'Khafadh kerana dimasuki huruf jar [[بِـ]].' },
    { ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', ms: 'Dia tidak beranak dan tidak diperanakkan.', ref: 'Al-Ikhlas: 3', quran: true, irab: [['يَلِدْ', 'فعل مضارع مجزوم بلم وعلامة جزمه السكون']], sebab: 'Jazam kerana dimasuki [[لَمْ]] — jazam khusus bagi fi\'il.' }
  ],
  soalan: [
    { id: 'irab-1', t: 'mcq', d: 1, k: 'irab-takrif', q: 'I\'rab berlaku pada bahagian mana dalam kalimah?', o: ['Awal kalimah', 'Tengah kalimah', 'Akhir kalimah', 'Seluruh kalimah'], a: 2, e: 'Matan: [[تَغْيِيرُ أَوَاخِرِ الْكَلِمِ]] — perubahan pada akhir-akhir kalimah.' },
    { id: 'irab-2', t: 'mcq', d: 1, k: 'irab-jenis', q: 'Jenis i\'rab yang khusus bagi isim ialah:', o: ['Rafa\'', 'Nasab', 'Khafadh', 'Jazam'], a: 2, e: 'Khafadh khusus bagi isim. Rafa\' dan nasab dikongsi; jazam khusus bagi fi\'il.' },
    { id: 'irab-3', t: 'tf', d: 1, k: 'irab-jenis', q: 'Fi\'il boleh menerima khafadh.', a: false, e: 'Matan: [[وَلِلْأَفْعَالِ ... وَلَا خَفْضَ فِيهَا]].' },
    { id: 'irab-4', t: 'match', d: 1, k: 'irab-jenis', q: 'Padankan istilah dengan maknanya:', p: [['رَفْعٌ', 'Rafa\''], ['نَصْبٌ', 'Nasab'], ['خَفْضٌ', 'Khafadh (jar)'], ['جَزْمٌ', 'Jazam']], e: 'Empat bahagian i\'rab menurut matan.' },
    { id: 'irab-5', t: 'mcq', d: 2, k: 'irab-takrif', j: 'amil', q: 'Dalam [[مَرَرْتُ بِزَيْدٍ]], apakah \'amil yang menyebabkan [[زَيْدٍ]] dikhafadhkan?', ar: 'مَرَرْتُ بِزَيْدٍ', o: ['مَرَرْتُ', 'Huruf jar الْبَاء', 'Tanwin', 'Tiada \'amil'], a: 1, e: 'Huruf jar [[بِـ]] ialah \'amil; [[زَيْدٍ]] ialah ma\'mul yang dikhafadhkan.' },
    { id: 'irab-6', t: 'mcq', d: 2, k: 'irab-takrif', q: 'Dalam [[جَاءَ الْفَتَى]], i\'rab [[الْفَتَى]] dikatakan:', ar: 'جَاءَ الْفَتَى', o: ['Lafzi (zahir)', 'Taqdiri (diandaikan)', 'Mabni', 'Tiada i\'rab'], a: 1, e: '[[الْفَتَى]] berakhir dengan alif yang tidak boleh menerima baris, maka dhammah diandaikan (ta\'adzdzur). Inilah maksud [[أَوْ تَقْدِيرًا]].' },
    { id: 'irab-7', t: 'fill', d: 2, k: 'irab-jenis', q: 'Lengkapkan matan:', ar: 'فَلِلْأَسْمَاءِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْخَفْضُ، وَلَا ___ فِيهَا', o: ['جَزْمَ', 'خَفْضَ', 'رَفْعَ', 'نَصْبَ'], a: 0, e: 'Isim tidak menerima jazam.' },
    { id: 'irab-8', t: 'tf', d: 3, k: 'irab-takrif', q: 'Huruf-huruf seperti [[فِي]] dan [[لَمْ]] termasuk kalimah mu\'rab.', a: false, e: 'Semua huruf mabni; akhirnya tidak berubah dengan berubahnya \'amil.' }
  ]
},

/* ------------------------------------------------------------------ 3 */
{
  id: 'alamat', no: 3,
  ar: 'بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ', ms: 'Bab Mengenal Tanda-tanda I\'rab',
  ringkas: 'Tanda asli dan tanda ganti bagi rafa\', nasab, khafadh dan jazam.',
  matan: [
    { ar: 'لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ.', ms: 'Bagi rafa\' ada empat tanda: dhammah, wau, alif dan nun.' },
    { ar: 'فَأَمَّا الضَّمَّةُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي أَرْبَعَةِ مَوَاضِعَ: فِي الِاسْمِ الْمُفْرَدِ، وَجَمْعِ التَّكْسِيرِ، وَجَمْعِ الْمُؤَنَّثِ السَّالِمِ، وَالْفِعْلِ الْمُضَارِعِ الَّذِي لَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ.', ms: 'Adapun dhammah, ia menjadi tanda rafa\' pada empat tempat: isim mufrad, jamak taksir, jamak muannath salim, dan fi\'il mudhari\' yang tidak bersambung dengan akhirnya sesuatu.' },
    { ar: 'وَأَمَّا الْوَاوُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي مَوْضِعَيْنِ: فِي جَمْعِ الْمُذَكَّرِ السَّالِمِ، وَفِي الْأَسْمَاءِ الْخَمْسَةِ، وَهِيَ: أَبُوكَ، وَأَخُوكَ، وَحَمُوكَ، وَفُوكَ، وَذُو مَالٍ.', ms: 'Adapun wau, ia menjadi tanda rafa\' pada dua tempat: jamak muzakkar salim dan al-asma\' al-khamsah (isim yang lima), iaitu: abuka (bapamu), akhuka (saudaramu), hamuka (ipar/mertuamu), fuka (mulutmu) dan dzu mal (yang mempunyai harta).' },
    { ar: 'وَأَمَّا الْأَلِفُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي تَثْنِيَةِ الْأَسْمَاءِ خَاصَّةً.', ms: 'Adapun alif, ia menjadi tanda rafa\' pada isim-isim muthanna (dua) secara khusus.' },
    { ar: 'وَأَمَّا النُّونُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي الْفِعْلِ الْمُضَارِعِ إِذَا اتَّصَلَ بِهِ ضَمِيرُ تَثْنِيَةٍ، أَوْ ضَمِيرُ جَمْعٍ، أَوْ ضَمِيرُ الْمُؤَنَّثَةِ الْمُخَاطَبَةِ.', ms: 'Adapun nun, ia menjadi tanda rafa\' pada fi\'il mudhari\' apabila bersambung dengannya dhamir muthanna, atau dhamir jamak, atau dhamir perempuan yang dilawan bercakap.' },
    { ar: 'وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ.', ms: 'Bagi nasab ada lima tanda: fathah, alif, kasrah, ya dan membuang nun.' },
    { ar: 'فَأَمَّا الْفَتْحَةُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي ثَلَاثَةِ مَوَاضِعَ: فِي الِاسْمِ الْمُفْرَدِ، وَجَمْعِ التَّكْسِيرِ، وَالْفِعْلِ الْمُضَارِعِ إِذَا دَخَلَ عَلَيْهِ نَاصِبٌ وَلَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ.', ms: 'Adapun fathah, ia menjadi tanda nasab pada tiga tempat: isim mufrad, jamak taksir, dan fi\'il mudhari\' apabila dimasuki nasib (penasab) dan tidak bersambung dengan akhirnya sesuatu.' },
    { ar: 'وَأَمَّا الْأَلِفُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي الْأَسْمَاءِ الْخَمْسَةِ، نَحْوَ: رَأَيْتُ أَبَاكَ وَأَخَاكَ، وَمَا أَشْبَهَ ذَلِكَ.', ms: 'Adapun alif, ia menjadi tanda nasab pada al-asma\' al-khamsah, seperti: "Aku melihat bapamu dan saudaramu", dan yang seumpamanya.' },
    { ar: 'وَأَمَّا الْكَسْرَةُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي جَمْعِ الْمُؤَنَّثِ السَّالِمِ.', ms: 'Adapun kasrah, ia menjadi tanda nasab pada jamak muannath salim.' },
    { ar: 'وَأَمَّا الْيَاءُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي التَّثْنِيَةِ وَالْجَمْعِ.', ms: 'Adapun ya, ia menjadi tanda nasab pada muthanna dan jamak (muzakkar salim).' },
    { ar: 'وَأَمَّا حَذْفُ النُّونِ فَيَكُونُ عَلَامَةً لِلنَّصْبِ فِي الْأَفْعَالِ الْخَمْسَةِ الَّتِي رَفْعُهَا بِثَبَاتِ النُّونِ.', ms: 'Adapun membuang nun, ia menjadi tanda nasab pada al-af\'al al-khamsah (fi\'il yang lima) yang rafa\'nya dengan tetapnya nun.' },
    { ar: 'وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ.', ms: 'Bagi khafadh ada tiga tanda: kasrah, ya dan fathah.' },
    { ar: 'فَأَمَّا الْكَسْرَةُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي ثَلَاثَةِ مَوَاضِعَ: فِي الِاسْمِ الْمُفْرَدِ الْمُنْصَرِفِ، وَجَمْعِ التَّكْسِيرِ الْمُنْصَرِفِ، وَفِي جَمْعِ الْمُؤَنَّثِ السَّالِمِ.', ms: 'Adapun kasrah, ia menjadi tanda khafadh pada tiga tempat: isim mufrad yang munsarif, jamak taksir yang munsarif, dan jamak muannath salim.' },
    { ar: 'وَأَمَّا الْيَاءُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي ثَلَاثَةِ مَوَاضِعَ: فِي الْأَسْمَاءِ الْخَمْسَةِ، وَفِي التَّثْنِيَةِ، وَالْجَمْعِ.', ms: 'Adapun ya, ia menjadi tanda khafadh pada tiga tempat: al-asma\' al-khamsah, muthanna dan jamak (muzakkar salim).' },
    { ar: 'وَأَمَّا الْفَتْحَةُ فَتَكُونُ عَلَامَةً لِلْخَفْضِ فِي الِاسْمِ الَّذِي لَا يَنْصَرِفُ.', ms: 'Adapun fathah, ia menjadi tanda khafadh pada isim yang tidak munsarif (ghairu munsarif).' },
    { ar: 'وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ.', ms: 'Bagi jazam ada dua tanda: sukun dan membuang.' },
    { ar: 'فَأَمَّا السُّكُونُ فَيَكُونُ عَلَامَةً لِلْجَزْمِ فِي الْفِعْلِ الْمُضَارِعِ الصَّحِيحِ الْآخِرِ.', ms: 'Adapun sukun, ia menjadi tanda jazam pada fi\'il mudhari\' yang sahih akhirnya.' },
    { ar: 'وَأَمَّا الْحَذْفُ فَيَكُونُ عَلَامَةً لِلْجَزْمِ فِي الْفِعْلِ الْمُضَارِعِ الْمُعْتَلِّ الْآخِرِ، وَفِي الْأَفْعَالِ الْخَمْسَةِ الَّتِي رَفْعُهَا بِثَبَاتِ النُّونِ.', ms: 'Adapun membuang, ia menjadi tanda jazam pada fi\'il mudhari\' yang mu\'tal akhirnya, dan pada al-af\'al al-khamsah yang rafa\'nya dengan tetapnya nun.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Bab ini menerangkan <b>tanda</b> yang menunjukkan setiap jenis i\'rab. Setiap jenis i\'rab ada satu <b>tanda asli</b> dan beberapa <b>tanda ganti (niyabah)</b>:</p>
      <table class="tbl"><tr><th>I\'rab</th><th>Tanda asli</th><th>Tanda ganti</th></tr>
      <tr><td>Rafa\'</td><td>Dhammah</td><td>Wau, alif, nun</td></tr>
      <tr><td>Nasab</td><td>Fathah</td><td>Alif, kasrah, ya, buang nun</td></tr>
      <tr><td>Khafadh</td><td>Kasrah</td><td>Ya, fathah</td></tr>
      <tr><td>Jazam</td><td>Sukun</td><td>Buang (huruf \'illah / nun)</td></tr></table>
      <p>Jumlah tanda: 4 + 5 + 3 + 2 = <b>14 tanda</b>.</p>` },
    { t: 'Istilah', h: `<ul>
      <li><b>Isim mufrad [[الِاسْمُ الْمُفْرَدُ]]</b> (dalam bab ini): bukan muthanna, bukan jamak, bukan al-asma\' al-khamsah. Contoh: [[زَيْدٌ]]، [[كِتَابٌ]].</li>
      <li><b>Jamak taksir [[جَمْعُ التَّكْسِيرِ]]:</b> jamak yang berubah bentuk mufradnya. [[رَجُلٌ ← رِجَالٌ]]، [[كِتَابٌ ← كُتُبٌ]].</li>
      <li><b>Jamak muannath salim:</b> jamak dengan tambahan alif dan ta. [[مُسْلِمَاتٌ]].</li>
      <li><b>Jamak muzakkar salim:</b> jamak dengan tambahan wau-nun atau ya-nun. [[مُسْلِمُونَ / مُسْلِمِينَ]].</li>
      <li><b>Muthanna [[التَّثْنِيَةُ]]:</b> menunjukkan dua dengan tambahan alif-nun atau ya-nun. [[مُسْلِمَانِ / مُسْلِمَيْنِ]].</li>
      <li><b>Al-Asma\' al-Khamsah:</b> [[أَبٌ، أَخٌ، حَمٌ، فُو، ذُو]] — dengan syarat mufrad, mukabbar (tidak ditasghir), di-idhafahkan kepada selain ya mutakallim; [[فُو]] tanpa mim; dan [[ذُو]] bermakna "yang mempunyai".</li>
      <li><b>Al-Af\'al al-Khamsah:</b> [[يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ]].</li>
      <li><b>Mu\'tal akhir:</b> fi\'il mudhari\' berakhir dengan alif, wau atau ya: [[يَخْشَى، يَدْعُو، يَرْمِي]].</li>
      <li><b>Ghairu munsarif [[الِاسْمُ الَّذِي لَا يَنْصَرِفُ]]:</b> isim yang tidak menerima tanwin, seperti [[أَحْمَدُ]]، [[إِبْرَاهِيمُ]]، [[مَسَاجِدُ]].</li></ul>` },
    { t: 'Kaedah Cepat', h: `<ol><li>Kenal pasti dahulu <b>jenis kalimah</b>: mufrad? jamak taksir? muthanna? jamak salim? asma\' khamsah? af\'al khamsah?</li>
      <li>Kenal pasti <b>hukum</b> (rafa\'/nasab/khafadh/jazam) daripada kedudukannya.</li>
      <li>Barulah tentukan <b>tanda</b> berdasarkan jadual.</li></ol>
      <p>Contoh: [[رَأَيْتُ الْمُسْلِمَاتِ]] → jamak muannath salim + nasab → <b>kasrah</b> (bukan fathah).</p>` },
    { t: 'Sebab Hukum', h: `<p>Jamak muannath salim dinasabkan dengan kasrah supaya ia mengikut jamak muzakkar salim, yang nasabnya sama dengan khafadhnya (kedua-duanya dengan ya). Isim ghairu munsarif dikhafadhkan dengan fathah kerana ia menyerupai fi\'il dari sudut tertentu, dan fi\'il tidak menerima kasrah. (Penjelasan illah ini daripada syarah.)</p>` },
    { t: 'Perbandingan: Muthanna dan Jamak Muzakkar Salim', h: `<table class="tbl"><tr><th></th><th>Muthanna</th><th>Jamak Muzakkar Salim</th></tr>
      <tr><td>Rafa\'</td><td>[[الْمُسْلِمَانِ]] (alif)</td><td>[[الْمُسْلِمُونَ]] (wau)</td></tr>
      <tr><td>Nasab / Khafadh</td><td>[[الْمُسْلِمَيْنِ]] (ya, sebelumnya fathah, nun kasrah)</td><td>[[الْمُسْلِمِينَ]] (ya, sebelumnya kasrah, nun fathah)</td></tr></table>
      <p>Perhatikan baris sebelum ya dan baris nun untuk membezakannya dalam tulisan berbaris.</p>` }
  ],
  kesalahan: [
    'Menasabkan jamak muannath salim dengan fathah: [[رَأَيْتُ الْمُسْلِمَاتَ]] ✘ → [[الْمُسْلِمَاتِ]] ✔.',
    'Mengkhafadhkan isim ghairu munsarif dengan kasrah: [[مَرَرْتُ بِأَحْمَدٍ]] ✘ → [[بِأَحْمَدَ]] ✔.',
    'Menyangka nun pada [[يَكْتُبُونَ]] dibuang ketika rafa\'. Nun dibuang hanya ketika nasab dan jazam.',
    'Mengi\'rab [[أَبٌ]] tanpa idhafah sebagai al-asma\' al-khamsah. [[جَاءَ أَبٌ]] di-i\'rab dengan baris kerana tidak memenuhi syarat idhafah.'
  ],
  rumusan: ['Rafa\': dhammah, wau, alif, nun.', 'Nasab: fathah, alif, kasrah, ya, buang nun.', 'Khafadh: kasrah, ya, fathah.', 'Jazam: sukun, buang.', 'Kenal jenis kalimah dahulu, kemudian hukum, kemudian tanda.'],
  semakan: ['Syarat al-asma\' al-khamsah diringkaskan daripada syarah; guru boleh menambah perincian dialek [[حَمٌ]] dan [[فُو]].'],
  contoh: [
    { ar: 'جَاءَ الْمُسْلِمُونَ', ms: 'Orang-orang Islam (lelaki) telah datang.', irab: [['الْمُسْلِمُونَ', 'فاعل مرفوع وعلامة رفعه الواو نيابة عن الضمة لأنه جمع مذكر سالم']], sebab: 'Wau ganti dhammah kerana jamak muzakkar salim.' },
    { ar: 'جَاءَ أَبُوكَ', ms: 'Bapamu telah datang.', irab: [['أَبُو', 'فاعل مرفوع وعلامة رفعه الواو نيابة عن الضمة لأنه من الأسماء الخمسة، وهو مضاف'], ['كَ', 'ضمير متصل مبني على الفتح في محل جر مضاف إليه']], sebab: 'Al-asma\' al-khamsah dirafa\'kan dengan wau.' },
    { ar: 'رَأَيْتُ الْمُسْلِمَاتِ', ms: 'Aku melihat orang-orang Islam perempuan.', irab: [['الْمُسْلِمَاتِ', 'مفعول به منصوب وعلامة نصبه الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم']], sebab: 'Kasrah ganti fathah.' },
    { ar: 'لَنْ يَفْعَلُوا', ms: 'Mereka tidak akan melakukan.', irab: [['يَفْعَلُوا', 'فعل مضارع منصوب بلن وعلامة نصبه حذف النون لأنه من الأفعال الخمسة، والواو ضمير متصل مبني على السكون في محل رفع فاعل']], sebab: 'Buang nun sebagai tanda nasab.' },
    { ar: 'مَرَرْتُ بِأَحْمَدَ', ms: 'Aku melalui Ahmad.', irab: [['أَحْمَدَ', 'اسم مخفوض بالباء وعلامة خفضه الفتحة نيابة عن الكسرة لأنه اسم لا ينصرف']], sebab: 'Ghairu munsarif (\'alamiyyah dan wazan fi\'il).' },
    { ar: 'لَمْ يَدْعُ', ms: 'Dia tidak berdoa/menyeru.', irab: [['يَدْعُ', 'فعل مضارع مجزوم بلم وعلامة جزمه حذف حرف العلة وهو الواو، والضمة قبلها دليل عليها']], sebab: 'Mu\'tal akhir: jazam dengan membuang huruf \'illah.' },
    { ar: 'وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ', ms: 'Dan (ingatlah) ketika Ibrahim berkata kepada bapanya...', ref: 'Al-An\'am: 74', quran: true, irab: [['أَبِي', 'اسم مخفوض باللام وعلامة خفضه الياء نيابة عن الكسرة لأنه من الأسماء الخمسة، وهو مضاف'], ['هِ', 'ضمير متصل مبني على الكسر في محل جر مضاف إليه']], sebab: 'Al-asma\' al-khamsah dikhafadhkan dengan ya.' }
  ],
  soalan: [
    { id: 'alamat-1', t: 'mcq', d: 1, k: 'alamat-rafa', q: 'Berapakah tanda rafa\' menurut matan?', o: ['Dua', 'Tiga', 'Empat', 'Lima'], a: 2, e: 'Empat: dhammah, wau, alif dan nun.' },
    { id: 'alamat-2', t: 'mcq', d: 1, j: 'tanda', k: 'alamat-rafa', q: 'Apakah tanda rafa\' bagi [[الْمُعَلِّمُونَ]] dalam ayat ini?', ar: 'جَاءَ الْمُعَلِّمُونَ', o: ['Dhammah', 'Wau', 'Alif', 'Nun'], a: 1, e: '[[الْمُعَلِّمُونَ]] jamak muzakkar salim; dirafa\'kan dengan wau ganti dhammah.' },
    { id: 'alamat-3', t: 'mcq', d: 2, j: 'tanda', k: 'alamat-nasab', q: 'Apakah tanda nasab bagi [[الطَّالِبَاتِ]]?', ar: 'رَأَيْتُ الطَّالِبَاتِ', o: ['Fathah', 'Kasrah', 'Ya', 'Alif'], a: 1, e: 'Jamak muannath salim dinasabkan dengan kasrah ganti fathah.' },
    { id: 'alamat-4', t: 'mcq', d: 2, j: 'tanda', k: 'alamat-khafadh', q: 'Apakah tanda khafadh bagi [[مَسَاجِدَ]]?', ar: 'صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ', o: ['Kasrah', 'Ya', 'Fathah', 'Sukun'], a: 2, e: '[[مَسَاجِدَ]] ghairu munsarif (sighah muntaha al-jumu\'), maka dikhafadhkan dengan fathah ganti kasrah.' },
    { id: 'alamat-5', t: 'match', d: 2, k: 'alamat-rafa', q: 'Padankan kalimah dengan tanda rafa\'nya:', p: [['زَيْدٌ', 'Dhammah'], ['الْمُسْلِمُونَ', 'Wau'], ['الرَّجُلَانِ', 'Alif'], ['يَكْتُبُونَ', 'Nun']], e: 'Mufrad: dhammah; jamak muzakkar salim: wau; muthanna: alif; af\'al khamsah: tetap nun.' },
    { id: 'alamat-6', t: 'tf', d: 1, k: 'alamat-jazam', q: 'Tanda jazam bagi fi\'il mudhari\' sahih akhir ialah sukun.', a: true, e: 'Matan: [[فَأَمَّا السُّكُونُ فَيَكُونُ عَلَامَةً لِلْجَزْمِ فِي الْفِعْلِ الْمُضَارِعِ الصَّحِيحِ الْآخِرِ]].' },
    { id: 'alamat-7', t: 'error', d: 2, k: 'alamat-nasab', q: 'Cari kalimah yang salah i\'rabnya:', w: ['رَأَيْتُ', 'الْمُؤْمِنَاتَ', 'فِي', 'الْمَسْجِدِ'], a: 1, fix: 'الْمُؤْمِنَاتِ', e: 'Jamak muannath salim dinasabkan dengan kasrah: [[الْمُؤْمِنَاتِ]].' },
    { id: 'alamat-8', t: 'error', d: 2, k: 'alamat-khafadh', q: 'Cari kalimah yang salah i\'rabnya:', w: ['سَلَّمْتُ', 'عَلَى', 'إِبْرَاهِيمٍ'], a: 2, fix: 'إِبْرَاهِيمَ', e: '[[إِبْرَاهِيمَ]] ghairu munsarif (\'alamiyyah dan \'ujmah): tiada tanwin, dikhafadhkan dengan fathah.' },
    { id: 'alamat-9', t: 'mcq', d: 3, j: 'tanda', k: 'alamat-jazam', q: 'Apakah tanda jazam [[يَخْشَ]] dalam ayat ini?', ar: 'لَمْ يَخْشَ', o: ['Sukun', 'Buang huruf \'illah (alif)', 'Buang nun', 'Fathah'], a: 1, e: '[[يَخْشَى]] mu\'tal akhir dengan alif; dijazamkan dengan membuang alif, dan fathah sebelumnya menjadi dalil atasnya.' },
    { id: 'alamat-10', t: 'fill', d: 2, k: 'alamat-nasab', q: 'Lengkapkan matan:', ar: 'وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَ ___، وَالْيَاءُ، وَحَذْفُ النُّونِ', o: ['الْكَسْرَةُ', 'الضَّمَّةُ', 'السُّكُونُ', 'النُّونُ'], a: 0, e: 'Tanda nasab lima: fathah, alif, kasrah, ya, buang nun.' },
    { id: 'alamat-11', t: 'mcq', d: 3, j: 'tanda', k: 'alamat-khafadh', q: 'Apakah tanda khafadh bagi [[أَخِيكَ]]?', ar: 'سَلَّمْتُ عَلَى أَخِيكَ', o: ['Kasrah', 'Ya', 'Fathah', 'Alif'], a: 1, e: '[[أَخٌ]] daripada al-asma\' al-khamsah dan diidhafahkan kepada kaf; dikhafadhkan dengan ya ganti kasrah.' },
    { id: 'alamat-12', t: 'tf', d: 3, k: 'alamat-rafa', q: 'Dalam [[جَاءَ أَخٌ]], [[أَخٌ]] dirafa\'kan dengan wau.', ar: 'جَاءَ أَخٌ', a: false, e: 'Syarat al-asma\' al-khamsah ialah diidhafahkan. [[أَخٌ]] di sini tidak diidhafahkan, maka dirafa\'kan dengan dhammah zahir.' }
  ]
},

/* ------------------------------------------------------------------ 4 */
{
  id: 'muarabat', no: 4,
  ar: 'فَصْلٌ: الْمُعْرَبَاتُ', ms: 'Fasal: Kalimah-kalimah Mu\'rab',
  ringkas: 'Ringkasan: yang di-i\'rab dengan baris dan yang di-i\'rab dengan huruf.',
  matan: [
    { ar: 'الْمُعْرَبَاتُ قِسْمَانِ: قِسْمٌ يُعْرَبُ بِالْحَرَكَاتِ، وَقِسْمٌ يُعْرَبُ بِالْحُرُوفِ.', ms: 'Kalimah-kalimah mu\'rab ada dua bahagian: bahagian yang di-i\'rab dengan baris, dan bahagian yang di-i\'rab dengan huruf.' },
    { ar: 'فَالَّذِي يُعْرَبُ بِالْحَرَكَاتِ أَرْبَعَةُ أَنْوَاعٍ: الِاسْمُ الْمُفْرَدُ، وَجَمْعُ التَّكْسِيرِ، وَجَمْعُ الْمُؤَنَّثِ السَّالِمُ، وَالْفِعْلُ الْمُضَارِعُ الَّذِي لَمْ يَتَّصِلْ بِآخِرِهِ شَيْءٌ.', ms: 'Yang di-i\'rab dengan baris ada empat jenis: isim mufrad, jamak taksir, jamak muannath salim, dan fi\'il mudhari\' yang tidak bersambung dengan akhirnya sesuatu.' },
    { ar: 'وَكُلُّهَا تُرْفَعُ بِالضَّمَّةِ، وَتُنْصَبُ بِالْفَتْحَةِ، وَتُخْفَضُ بِالْكَسْرَةِ، وَتُجْزَمُ بِالسُّكُونِ.', ms: 'Kesemuanya dirafa\'kan dengan dhammah, dinasabkan dengan fathah, dikhafadhkan dengan kasrah dan dijazamkan dengan sukun.' },
    { ar: 'وَخَرَجَ عَنْ ذَلِكَ ثَلَاثَةُ أَشْيَاءَ: جَمْعُ الْمُؤَنَّثِ السَّالِمُ يُنْصَبُ بِالْكَسْرَةِ، وَالِاسْمُ الَّذِي لَا يَنْصَرِفُ يُخْفَضُ بِالْفَتْحَةِ، وَالْفِعْلُ الْمُضَارِعُ الْمُعْتَلُّ الْآخِرِ يُجْزَمُ بِحَذْفِ آخِرِهِ.', ms: 'Dan terkeluar daripada kaedah itu tiga perkara: jamak muannath salim dinasabkan dengan kasrah, isim yang tidak munsarif dikhafadhkan dengan fathah, dan fi\'il mudhari\' yang mu\'tal akhir dijazamkan dengan membuang akhirnya.' },
    { ar: 'وَالَّذِي يُعْرَبُ بِالْحُرُوفِ أَرْبَعَةُ أَنْوَاعٍ: التَّثْنِيَةُ، وَجَمْعُ الْمُذَكَّرِ السَّالِمُ، وَالْأَسْمَاءُ الْخَمْسَةُ، وَالْأَفْعَالُ الْخَمْسَةُ، وَهِيَ: يَفْعَلَانِ، وَتَفْعَلَانِ، وَيَفْعَلُونَ، وَتَفْعَلُونَ، وَتَفْعَلِينَ.', ms: 'Yang di-i\'rab dengan huruf ada empat jenis: muthanna, jamak muzakkar salim, al-asma\' al-khamsah, dan al-af\'al al-khamsah, iaitu: yaf\'alani, taf\'alani, yaf\'aluna, taf\'aluna dan taf\'alina.' },
    { ar: 'فَأَمَّا التَّثْنِيَةُ فَتُرْفَعُ بِالْأَلِفِ، وَتُنْصَبُ وَتُخْفَضُ بِالْيَاءِ.', ms: 'Adapun muthanna, dirafa\'kan dengan alif, dinasabkan dan dikhafadhkan dengan ya.' },
    { ar: 'وَأَمَّا جَمْعُ الْمُذَكَّرِ السَّالِمُ فَيُرْفَعُ بِالْوَاوِ، وَيُنْصَبُ وَيُخْفَضُ بِالْيَاءِ.', ms: 'Adapun jamak muzakkar salim, dirafa\'kan dengan wau, dinasabkan dan dikhafadhkan dengan ya.' },
    { ar: 'وَأَمَّا الْأَسْمَاءُ الْخَمْسَةُ فَتُرْفَعُ بِالْوَاوِ، وَتُنْصَبُ بِالْأَلِفِ، وَتُخْفَضُ بِالْيَاءِ.', ms: 'Adapun al-asma\' al-khamsah, dirafa\'kan dengan wau, dinasabkan dengan alif dan dikhafadhkan dengan ya.' },
    { ar: 'وَأَمَّا الْأَفْعَالُ الْخَمْسَةُ فَتُرْفَعُ بِالنُّونِ، وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِهَا.', ms: 'Adapun al-af\'al al-khamsah, dirafa\'kan dengan nun, dinasabkan dan dijazamkan dengan membuangnya.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Fasal ini ialah <b>ringkasan</b> bab tanda i\'rab, disusun mengikut jenis kalimah (bukan mengikut jenis i\'rab). Ia sangat membantu untuk hafazan dan semakan.</p>
      <table class="tbl"><tr><th>Jenis</th><th>Rafa\'</th><th>Nasab</th><th>Khafadh</th><th>Jazam</th></tr>
      <tr><td>Isim mufrad</td><td>ـُ</td><td>ـَ</td><td>ـِ</td><td>—</td></tr>
      <tr><td>Jamak taksir</td><td>ـُ</td><td>ـَ</td><td>ـِ</td><td>—</td></tr>
      <tr><td>Jamak muannath salim</td><td>ـُ</td><td><b>ـِ</b></td><td>ـِ</td><td>—</td></tr>
      <tr><td>Ghairu munsarif</td><td>ـُ</td><td>ـَ</td><td><b>ـَ</b></td><td>—</td></tr>
      <tr><td>Mudhari\' sahih</td><td>ـُ</td><td>ـَ</td><td>—</td><td>ـْ</td></tr>
      <tr><td>Mudhari\' mu\'tal</td><td>ـُ (taqdir)</td><td>ـَ (zahir/taqdir)</td><td>—</td><td><b>buang</b></td></tr>
      <tr><td>Muthanna</td><td>ا</td><td>ي</td><td>ي</td><td>—</td></tr>
      <tr><td>Jamak muzakkar salim</td><td>و</td><td>ي</td><td>ي</td><td>—</td></tr>
      <tr><td>Asma\' khamsah</td><td>و</td><td>ا</td><td>ي</td><td>—</td></tr>
      <tr><td>Af\'al khamsah</td><td>ن</td><td>buang ن</td><td>—</td><td>buang ن</td></tr></table>` },
    { t: 'Sebab Pembahagian', h: `<p>Asal i\'rab ialah dengan <b>baris</b> (harakat). I\'rab dengan <b>huruf</b> ialah cabang (far\'). Kalimah yang menyimpang daripada asal disebut secara khusus dalam matan (tiga perkara yang terkeluar) supaya pelajar berhati-hati.</p>` },
    { t: 'Kaedah', h: `<p>Untuk setiap kalimah, tanya dua soalan: (1) <i>Kalimah ini daripada jenis yang mana?</i> (2) <i>Hukumnya apa?</i> Kemudian rujuk jadual di atas.</p>` }
  ],
  kesalahan: ['Lupa tiga pengecualian dalam kumpulan baris: jamak muannath salim (nasab dengan kasrah), ghairu munsarif (khafadh dengan fathah), mudhari\' mu\'tal (jazam dengan buang).', 'Menyangka al-af\'al al-khamsah boleh dikhafadhkan. Fi\'il tidak menerima khafadh.'],
  rumusan: ['Mu\'rab dengan baris: mufrad, jamak taksir, jamak muannath salim, mudhari\' tanpa sambungan.', 'Mu\'rab dengan huruf: muthanna, jamak muzakkar salim, asma\' khamsah, af\'al khamsah.', 'Tiga pengecualian dalam kumpulan baris.'],
  contoh: [
    { ar: 'الطُّلَّابُ يَدْرُسُونَ', ms: 'Para pelajar sedang belajar.', irab: [['الطُّلَّابُ', 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['يَدْرُسُونَ', 'فعل مضارع مرفوع وعلامة رفعه ثبوت النون لأنه من الأفعال الخمسة، والواو ضمير متصل مبني على السكون في محل رفع فاعل، والجملة من الفعل والفاعل في محل رفع خبر المبتدأ']], sebab: 'Jamak taksir dengan baris; af\'al khamsah dengan nun.' },
    { ar: 'رَأَيْتُ الْمُعَلِّمَيْنِ', ms: 'Aku melihat dua orang guru.', irab: [['الْمُعَلِّمَيْنِ', 'مفعول به منصوب وعلامة نصبه الياء نيابة عن الفتحة لأنه مثنى']], sebab: 'Muthanna dinasabkan dengan ya.' },
    { ar: 'فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا', ms: 'Maka jika kamu tidak melakukannya, dan kamu tidak akan dapat melakukannya...', ref: 'Al-Baqarah: 24', quran: true, irab: [['تَفْعَلُوا (الأول)', 'فعل مضارع مجزوم بلم وعلامة جزمه حذف النون لأنه من الأفعال الخمسة، والواو فاعل'], ['تَفْعَلُوا (الثاني)', 'فعل مضارع منصوب بلن وعلامة نصبه حذف النون لأنه من الأفعال الخمسة، والواو فاعل']], sebab: 'Satu ayat menghimpunkan jazam dan nasab af\'al khamsah dengan membuang nun.' }
  ],
  soalan: [
    { id: 'muarabat-1', t: 'mcq', d: 1, k: 'muarabat', q: 'Manakah yang di-i\'rab dengan huruf?', o: ['Jamak taksir', 'Isim mufrad', 'Jamak muzakkar salim', 'Jamak muannath salim'], a: 2, e: 'Yang di-i\'rab dengan huruf: muthanna, jamak muzakkar salim, asma\' khamsah dan af\'al khamsah.' },
    { id: 'muarabat-2', t: 'match', d: 2, k: 'muarabat', q: 'Padankan jenis dengan tanda nasabnya:', p: [['Muthanna', 'Ya'], ['Asma\' khamsah', 'Alif'], ['Af\'al khamsah', 'Buang nun'], ['Jamak muannath salim', 'Kasrah']], e: 'Rujuk jadual ringkasan dalam nota.' },
    { id: 'muarabat-3', t: 'tf', d: 1, k: 'muarabat', q: 'Al-af\'al al-khamsah dinasabkan dan dijazamkan dengan membuang nun.', a: true, e: 'Matan: [[وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِهَا]].' },
    { id: 'muarabat-4', t: 'mcq', d: 2, k: 'muarabat', q: 'Berapa perkara yang "terkeluar" daripada kaedah kumpulan baris?', o: ['Dua', 'Tiga', 'Empat', 'Lima'], a: 1, e: '[[وَخَرَجَ عَنْ ذَلِكَ ثَلَاثَةُ أَشْيَاءَ]].' },
    { id: 'muarabat-5', t: 'fill', d: 2, k: 'muarabat', q: 'Lengkapkan matan:', ar: 'وَأَمَّا الْأَسْمَاءُ الْخَمْسَةُ فَتُرْفَعُ بِالْوَاوِ، وَتُنْصَبُ بِـ ___، وَتُخْفَضُ بِالْيَاءِ', o: ['الْأَلِفِ', 'الْيَاءِ', 'الْفَتْحَةِ', 'النُّونِ'], a: 0, e: 'Asma\' khamsah: rafa\' wau, nasab alif, khafadh ya.' },
    { id: 'muarabat-6', t: 'jenis', d: 1, k: 'kalam-tanda', q: 'Kenal pasti jenis setiap kalimah:', ar: 'الطُّلَّابُ يَدْرُسُونَ فِي الْفَصْلِ', w: [['الطُّلَّابُ', 'i'], ['يَدْرُسُونَ', 'f'], ['فِي', 'h'], ['الْفَصْلِ', 'i']], e: 'Isim: [[الطُّلَّابُ]]، [[الْفَصْلِ]]; fi\'il: [[يَدْرُسُونَ]]; huruf: [[فِي]].' }
  ]
},

/* ------------------------------------------------------------------ 5 */
{
  id: 'afal', no: 5,
  ar: 'بَابُ الْأَفْعَالِ', ms: 'Bab Fi\'il-fi\'il',
  ringkas: 'Fi\'il madhi, mudhari\' dan amar; huruf-huruf nawasib dan jawazim.',
  matan: [
    { ar: 'الْأَفْعَالُ ثَلَاثَةٌ: مَاضٍ، وَمُضَارِعٌ، وَأَمْرٌ، نَحْوَ: ضَرَبَ، وَيَضْرِبُ، وَاضْرِبْ.', ms: 'Fi\'il ada tiga: madhi, mudhari\' dan amar, seperti: dharaba (telah memukul), yadhribu (sedang/akan memukul) dan idhrib (pukullah).' },
    { ar: 'فَالْمَاضِي مَفْتُوحُ الْآخِرِ أَبَدًا، وَالْأَمْرُ مَجْزُومٌ أَبَدًا، وَالْمُضَارِعُ مَا كَانَ فِي أَوَّلِهِ إِحْدَى الزَّوَائِدِ الْأَرْبَعِ الَّتِي يَجْمَعُهَا قَوْلُكَ: «أَنَيْتُ»، وَهُوَ مَرْفُوعٌ أَبَدًا، حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ أَوْ جَازِمٌ.', ms: 'Maka fi\'il madhi itu berbaris fathah akhirnya selama-lamanya; fi\'il amar majzum selama-lamanya; dan fi\'il mudhari\' ialah yang pada awalnya ada salah satu daripada empat huruf tambahan yang dihimpunkan oleh perkataanmu "anaitu" (alif, nun, ya, ta), dan ia marfu\' selama-lamanya sehingga dimasuki nasib atau jazim.' },
    { ar: 'فَالنَّوَاصِبُ عَشَرَةٌ، وَهِيَ: أَنْ، وَلَنْ، وَإِذَنْ، وَكَيْ، وَلَامُ كَيْ، وَلَامُ الْجُحُودِ، وَحَتَّى، وَالْجَوَابُ بِالْفَاءِ، وَالْوَاوِ، وَأَوْ.', ms: 'Maka nawasib (penasab) ada sepuluh: an, lan, idzan, kai, lam kai, lam juhud, hatta, dan jawab dengan fa, wau dan au.' },
    { ar: 'وَالْجَوَازِمُ ثَمَانِيَةَ عَشَرَ، وَهِيَ: لَمْ، وَلَمَّا، وَأَلَمْ، وَأَلَمَّا، وَلَامُ الْأَمْرِ وَالدُّعَاءِ، وَ«لَا» فِي النَّهْيِ وَالدُّعَاءِ، وَإِنْ، وَمَا، وَمَنْ، وَمَهْمَا، وَإِذْمَا، وَأَيٌّ، وَمَتَى، وَأَيَّانَ، وَأَيْنَ، وَأَنَّى، وَحَيْثُمَا، وَكَيْفَمَا، وَإِذًا فِي الشِّعْرِ خَاصَّةً.', ms: 'Dan jawazim (penjazam) ada lapan belas: lam, lamma, alam, alamma, lam amar dan doa, "la" pada larangan dan doa, in, ma, man, mahma, idzma, ayyun, mata, ayyana, aina, anna, haithuma, kaifama, dan idzan pada syair secara khusus.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Fi\'il dibahagi kepada tiga berdasarkan masa:</p>
      <ul><li><b>Madhi [[الْمَاضِي]]</b> — perbuatan telah berlaku. Hukumnya: <b>mabni</b>, asalnya atas fathah: [[ضَرَبَ]].</li>
      <li><b>Mudhari\' [[الْمُضَارِعُ]]</b> — sedang/akan berlaku. Hukumnya: <b>mu\'rab</b>, marfu\' selagi tiada nasib atau jazim.</li>
      <li><b>Amar [[الْأَمْرُ]]</b> — suruhan. Matan menyebut "majzum" mengikut mazhab Kufah; mazhab Basrah menyebutnya <b>mabni atas apa yang dijazamkan mudhari\'nya</b>. Dalam i\'rab di pondok lazimnya disebut: [[فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى السُّكُونِ]].</li></ul>` },
    { t: 'Huruf Mudhari\' «أَنَيْتُ»', h: `<p>Fi\'il mudhari\' dimulakan dengan salah satu huruf [[أ ن ي ت]]:</p>
      <ul><li>[[أَ]] — aku: [[أَكْتُبُ]]</li><li>[[نَ]] — kami: [[نَكْتُبُ]]</li><li>[[يَ]] — dia (lelaki) / mereka: [[يَكْتُبُ]]</li><li>[[تَ]] — engkau / dia (perempuan): [[تَكْتُبُ]]</li></ul>
      <p>Huruf ini mesti <b>tambahan</b>. Huruf hamzah pada [[أَكْرَمَ]] bukan huruf mudhari\' kerana ia fi\'il madhi.</p>` },
    { t: 'Nawasib (10)', h: `<p>[[أَنْ، لَنْ، إِذَنْ، كَيْ، لَامُ كَيْ، لَامُ الْجُحُودِ، حَتَّى، الْفَاءُ، الْوَاوُ، أَوْ]]</p>
      <ul><li>[[أُرِيدُ أَنْ أَتَعَلَّمَ]] — Aku mahu belajar.</li><li>[[لَنْ نَبْرَحَ]] — Kami tidak akan berhenti. (Taha: 91)</li><li>[[جِئْتُ لِأَتَعَلَّمَ]] — lam kai.</li><li>[[وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ]] — lam juhud: selepas [[مَا كَانَ]] / [[لَمْ يَكُنْ]] (Al-Anfal: 33).</li></ul>
      <p class="muted">Nota: Menurut mazhab Basrah, yang menasabkan selepas [[لَامُ كَيْ]]، [[لَامُ الْجُحُودِ]]، [[حَتَّى]]، fa, wau dan [[أَوْ]] ialah [[أَنْ]] yang tersembunyi. Matan mengikut pendapat yang menyandarkan nasab kepada huruf itu sendiri untuk memudahkan pelajar.</p>` },
    { t: 'Jawazim (18)', h: `<p><b>Menjazamkan satu fi\'il:</b> [[لَمْ، لَمَّا، أَلَمْ، أَلَمَّا، لَامُ الْأَمْرِ وَالدُّعَاءِ، لَا النَّاهِيَةُ / الدُّعَائِيَّةُ]].</p>
      <p><b>Menjazamkan dua fi\'il (syarat dan jawab):</b> [[إِنْ، مَا، مَنْ، مَهْمَا، إِذْمَا، أَيٌّ، مَتَى، أَيَّانَ، أَيْنَ، أَنَّى، حَيْثُمَا، كَيْفَمَا، إِذًا]] (dalam syair sahaja).</p>
      <p>Contoh: [[مَنْ يَعْمَلْ سُوءًا يُجْزَ بِهِ]] (An-Nisa\': 123) — [[يَعْمَلْ]] fi\'il syarat majzum; [[يُجْزَ]] jawab syarat majzum dengan membuang alif.</p>
      <p class="muted">Pembahagian kepada "satu fi\'il" dan "dua fi\'il" ialah huraian syarah; matan hanya menyenaraikan.</p>` },
    { t: 'Dua Wajh I\'rab Fi\'il Madhi bersambung Dhamir', h: `<p>Pada [[ضَرَبْتُ]] dan [[ضَرَبُوا]], akhir fi\'il tidak berbaris fathah. Ada dua cara i\'rab yang masyhur:</p>
      <ol><li><b>Mengikut zahir matan</b> ([[مَفْتُوحُ الْآخِرِ أَبَدًا]]): mabni atas fathah yang <i>diandaikan</i>, terhalang daripada zahir kerana sukun/dhammah yang mendatang.</li>
      <li><b>Pendapat yang banyak dipakai dalam kitab i\'rab moden:</b> mabni atas sukun kerana bersambung dengan dhamir rafa\' berbaris; dan mabni atas dhammah kerana bersambung dengan wau jamaah.</li></ol>
      <p>Kedua-duanya diterima; ikut kaedah yang digunakan guru anda.</p>` }
  ],
  kesalahan: ['Mengi\'rab fi\'il madhi sebagai "marfu\'". Fi\'il madhi sentiasa mabni.', 'Menyangka setiap kalimah yang bermula dengan alif ialah mudhari\'. [[أَكْرَمَ]] madhi kerana hamzahnya asli dalam binaan wazan [[أَفْعَلَ]], bukan huruf mudhari\'.', 'Mengira [[لَا]] nafi ([[لَا يَذْهَبُ]]) sebagai penjazam. Yang menjazam hanya [[لَا]] nahi/doa.'],
  rumusan: ['Madhi: mabni atas fathah.', 'Amar: majzum (Kufah) / mabni atas sukun (Basrah).', 'Mudhari\': huruf «أنيت», marfu\' selagi tiada nasib/jazim.', 'Nawasib 10, jawazim 18.'],
  semakan: ['Huraian khilaf Basrah–Kufah tentang fi\'il amar dan [[أَنْ]] mudhmarah ialah ringkasan syarah; boleh diperincikan oleh guru.'],
  contoh: [
    { ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', ms: 'Dia tidak beranak dan tidak diperanakkan.', ref: 'Al-Ikhlas: 3', quran: true, irab: [['لَمْ', 'حرف نفي وجزم وقلب مبني على السكون لا محل له من الإعراب'], ['يَلِدْ', 'فعل مضارع مجزوم بلم وعلامة جزمه السكون، والفاعل ضمير مستتر جوازا تقديره هو']], sebab: '[[لَمْ]] menjazamkan satu fi\'il.' },
    { ar: 'لَنْ تَنَالُوا الْبِرَّ', ms: 'Kamu tidak sekali-kali akan mencapai kebajikan...', ref: 'Ali \'Imran: 92', quran: true, irab: [['لَنْ', 'حرف نفي ونصب واستقبال مبني على السكون لا محل له من الإعراب'], ['تَنَالُوا', 'فعل مضارع منصوب بلن وعلامة نصبه حذف النون لأنه من الأفعال الخمسة، والواو ضمير متصل مبني على السكون في محل رفع فاعل'], ['الْبِرَّ', 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Af\'al khamsah dinasabkan dengan membuang nun.' },
    { ar: 'اكْتُبِ الدَّرْسَ', ms: 'Tulislah pelajaran itu.', irab: [['اكْتُبِ', 'فعل أمر مبني على السكون، وحُرِّك بالكسر لالتقاء الساكنين، والفاعل ضمير مستتر وجوبا تقديره أنت'], ['الدَّرْسَ', 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Fi\'il amar mabni atas sukun (huraian Basrah); diberi kasrah kerana bertemu dua sakin.' }
  ],
  soalan: [
    { id: 'afal-1', t: 'mcq', d: 1, k: 'afal-jenis', q: 'Apakah hukum akhir fi\'il madhi menurut matan?', o: ['Marfu\' selama-lamanya', 'Maftuh (berbaris fathah) selama-lamanya', 'Majzum selama-lamanya', 'Mu\'rab'], a: 1, e: '[[فَالْمَاضِي مَفْتُوحُ الْآخِرِ أَبَدًا]].' },
    { id: 'afal-2', t: 'mcq', d: 1, k: 'afal-jenis', q: 'Huruf-huruf mudhari\' dihimpunkan dalam perkataan:', o: ['أَنَيْتُ', 'سَأَلْتُمُونِيهَا', 'هَوِيتُ السِّمَانَ', 'أَمَانٌ'], a: 0, e: '[[أَنَيْتُ]] = alif, nun, ya, ta.' },
    { id: 'afal-3', t: 'jenis', d: 1, k: 'kalam-tanda', q: 'Kenal pasti jenis setiap kalimah:', ar: 'لَمْ يَذْهَبْ مُحَمَّدٌ', w: [['لَمْ', 'h'], ['يَذْهَبْ', 'f'], ['مُحَمَّدٌ', 'i']], e: '[[لَمْ]] huruf jazam; [[يَذْهَبْ]] fi\'il mudhari\'; [[مُحَمَّدٌ]] isim (tanwin).' },
    { id: 'afal-4', t: 'mcq', d: 2, j: 'hukum', k: 'afal-nawasib', q: 'Apakah hukum [[يَخْرُجَ]]?', ar: 'لَنْ يَخْرُجَ الْوَلَدُ', o: ['Marfu\'', 'Mansub', 'Majzum', 'Mabni'], a: 1, e: '[[لَنْ]] daripada nawasib; [[يَخْرُجَ]] mansub dengan fathah zahir.' },
    { id: 'afal-5', t: 'mcq', d: 2, j: 'amil', k: 'afal-jawazim', q: 'Apakah \'amil yang menjazamkan [[تَذْهَبْ]]?', ar: 'لَا تَذْهَبْ', o: ['لا nafi', 'لا nahi (larangan)', 'Tiada \'amil', 'لَمْ'], a: 1, e: '[[لَا]] di sini untuk larangan (nahi), maka ia menjazamkan. [[لَا]] nafi tidak beramal pada fi\'il.' },
    { id: 'afal-6', t: 'tf', d: 2, k: 'afal-jawazim', q: 'Dalam [[لَا يَذْهَبُ زَيْدٌ]] (Zaid tidak pergi), [[يَذْهَبُ]] majzum.', ar: 'لَا يَذْهَبُ زَيْدٌ', a: false, e: '[[لَا]] di sini nafi, bukan nahi. Fi\'il kekal marfu\' dengan dhammah.' },
    { id: 'afal-7', t: 'match', d: 2, k: 'afal-jenis', q: 'Padankan fi\'il dengan jenisnya:', p: [['كَتَبَ', 'Madhi'], ['يَكْتُبُ', 'Mudhari\''], ['اكْتُبْ', 'Amar'], ['نَكْتُبُ', 'Mudhari\' (nun)']], e: 'Madhi: telah; mudhari\': bermula dengan huruf «أنيت»; amar: suruhan.' },
    { id: 'afal-8', t: 'fill', d: 2, k: 'afal-nawasib', q: 'Lengkapkan matan:', ar: 'فَالنَّوَاصِبُ عَشَرَةٌ، وَهِيَ: أَنْ، وَ ___، وَإِذَنْ، وَكَيْ', o: ['لَنْ', 'لَمْ', 'لَمَّا', 'إِنْ'], a: 0, e: 'Nawasib bermula: [[أَنْ، وَلَنْ، وَإِذَنْ، وَكَيْ]]. [[لَمْ]] dan [[لَمَّا]] daripada jawazim.' },
    { id: 'afal-9', t: 'mcq', d: 3, j: 'tanda', k: 'afal-jawazim', q: 'Apakah tanda jazam bagi [[يُجْزَ]]?', ar: 'مَنْ يَعْمَلْ سُوءًا يُجْزَ بِهِ', o: ['Sukun', 'Buang alif (huruf \'illah)', 'Buang nun', 'Fathah'], a: 1, e: 'Asalnya [[يُجْزَى]]; ia jawab syarat yang dijazamkan dengan membuang huruf \'illah (alif). (An-Nisa\': 123)' },
    { id: 'afal-10', t: 'order', d: 2, k: 'afal-nawasib', q: 'Susun kalimah menjadi ayat: "Aku mahu belajar."', w: ['أُرِيدُ', 'أَنْ', 'أَتَعَلَّمَ'], e: '[[أُرِيدُ أَنْ أَتَعَلَّمَ]] — [[أَنْ]] menasabkan [[أَتَعَلَّمَ]].' }
  ]
},

/* ------------------------------------------------------------------ 6 */
{
  id: 'marfuat', no: 6,
  ar: 'بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ', ms: 'Bab Isim-isim yang Marfu\'',
  ringkas: 'Tujuh kedudukan isim yang dirafa\'kan.',
  matan: [
    { ar: 'الْمَرْفُوعَاتُ سَبْعَةٌ، وَهِيَ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَرْفُوعِ، وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ.', ms: 'Isim-isim yang marfu\' ada tujuh: fa\'il, maf\'ul yang tidak disebut fa\'ilnya (naib fa\'il), mubtada\', khabarnya, isim kana dan saudara-saudaranya, khabar inna dan saudara-saudaranya, dan tabi\' (pengikut) bagi yang marfu\', iaitu empat perkara: na\'at, \'ataf, taukid dan badal.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Bab ini ialah <b>senarai induk</b> bagi kedudukan isim yang marfu\'. Setiap satunya dihuraikan dalam bab tersendiri selepas ini.</p>
      <ol><li>Fa\'il — [[قَامَ <u>زَيْدٌ</u>]]</li><li>Naib fa\'il — [[ضُرِبَ <u>زَيْدٌ</u>]]</li><li>Mubtada\' — [[<u>زَيْدٌ</u> قَائِمٌ]]</li><li>Khabar — [[زَيْدٌ <u>قَائِمٌ</u>]]</li><li>Isim kana — [[كَانَ <u>زَيْدٌ</u> قَائِمًا]]</li><li>Khabar inna — [[إِنَّ زَيْدًا <u>قَائِمٌ</u>]]</li><li>Tabi\' — [[جَاءَ زَيْدٌ <u>الْعَاقِلُ</u>]]</li></ol>
      <p class="muted">Matan mengira mubtada\' dan khabar sebagai dua, dan tabi\' sebagai satu (yang mengandungi empat jenis). Jumlahnya tujuh.</p>` },
    { t: 'Kaedah Ingatan', h: `<p>Pasangan berlawanan yang sering mengelirukan:</p><ul><li><b>Kana</b>: <u>isim</u>nya marfu\', khabarnya mansub.</li><li><b>Inna</b>: isimnya mansub, <u>khabar</u>nya marfu\'.</li></ul>` }
  ],
  kesalahan: ['Menyangka isim inna marfu\'. Yang marfu\' ialah khabar inna.', 'Menyangka khabar kana marfu\'. Yang marfu\' ialah isim kana.'],
  rumusan: ['Tujuh marfu\'at: fa\'il, naib fa\'il, mubtada\', khabar, isim kana, khabar inna, tabi\' marfu\'.', 'Tabi\' empat: na\'at, \'ataf, taukid, badal.'],
  contoh: [
    { ar: 'كَانَ النَّاسُ أُمَّةً وَاحِدَةً', ms: 'Manusia itu dahulunya satu umat.', ref: 'Al-Baqarah: 213', quran: true, irab: [['النَّاسُ', 'اسم كان مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['أُمَّةً', 'خبر كان منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Isim kana termasuk marfu\'at.' }
  ],
  soalan: [
    { id: 'marfuat-1', t: 'mcq', d: 1, k: 'marfuat', q: 'Berapakah bilangan marfu\'at menurut matan?', o: ['Lima', 'Tujuh', 'Lima belas', 'Tiga'], a: 1, e: '[[الْمَرْفُوعَاتُ سَبْعَةٌ]].' },
    { id: 'marfuat-2', t: 'mcq', d: 1, k: 'marfuat', q: 'Manakah BUKAN daripada marfu\'at?', o: ['Fa\'il', 'Khabar inna', 'Isim inna', 'Isim kana'], a: 2, e: 'Isim inna mansub; ia termasuk mansubat.' },
    { id: 'marfuat-3', t: 'tf', d: 1, k: 'marfuat', q: 'Tabi\' bagi yang marfu\' ada empat: na\'at, \'ataf, taukid, badal.', a: true, e: 'Matan: [[وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ]].' },
    { id: 'marfuat-4', t: 'mcq', d: 2, j: 'kedudukan', k: 'marfuat', q: 'Apakah kedudukan [[قَائِمٌ]]?', ar: 'إِنَّ زَيْدًا قَائِمٌ', o: ['Mubtada\'', 'Khabar inna', 'Fa\'il', 'Isim inna'], a: 1, e: '[[قَائِمٌ]] khabar inna, marfu\' dengan dhammah.' },
    { id: 'marfuat-5', t: 'fill', d: 2, k: 'marfuat', q: 'Lengkapkan matan:', ar: 'وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَ ___ إِنَّ وَأَخَوَاتِهَا', o: ['خَبَرُ', 'اسْمُ', 'فَاعِلُ', 'تَابِعُ'], a: 0, e: 'Yang marfu\' daripada inna ialah khabarnya.' }
  ]
},

/* ------------------------------------------------------------------ 7 */
{
  id: 'fail', no: 7,
  ar: 'بَابُ الْفَاعِلِ', ms: 'Bab Fa\'il (Pelaku)',
  ringkas: 'Takrif fa\'il, fa\'il zahir dan fa\'il dhamir (12 bentuk).',
  matan: [
    { ar: 'الْفَاعِلُ هُوَ الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ.', ms: 'Fa\'il ialah isim yang marfu\' yang disebut sebelumnya fi\'ilnya.' },
    { ar: 'وَهُوَ عَلَى قِسْمَيْنِ: ظَاهِرٍ، وَمُضْمَرٍ.', ms: 'Dan ia terbahagi kepada dua: zahir dan mudhmar (dhamir).' },
    { ar: 'فَالظَّاهِرُ نَحْوُ قَوْلِكَ: قَامَ زَيْدٌ، وَيَقُومُ زَيْدٌ، وَقَامَ الزَّيْدَانِ، وَيَقُومُ الزَّيْدَانِ، وَقَامَ الزَّيْدُونَ، وَيَقُومُ الزَّيْدُونَ، وَقَامَ الرِّجَالُ، وَيَقُومُ الرِّجَالُ، وَقَامَتْ هِنْدٌ، وَتَقُومُ هِنْدٌ، وَقَامَتِ الْهِنْدَانِ، وَتَقُومُ الْهِنْدَانِ، وَقَامَتِ الْهِنْدَاتُ، وَتَقُومُ الْهِنْدَاتُ، وَقَامَتِ الْهُنُودُ، وَتَقُومُ الْهُنُودُ، وَقَامَ أَخُوكَ، وَيَقُومُ أَخُوكَ، وَقَامَ غُلَامِي، وَيَقُومُ غُلَامِي، وَمَا أَشْبَهَ ذَلِكَ.', ms: 'Fa\'il zahir seperti katamu: Zaid telah berdiri, Zaid sedang berdiri; dua Zaid telah/sedang berdiri; para Zaid telah/sedang berdiri; para lelaki telah/sedang berdiri; Hindun telah/sedang berdiri; dua Hindun telah/sedang berdiri; para Hindun (jamak muannath salim) telah/sedang berdiri; para Hindun (jamak taksir) telah/sedang berdiri; saudaramu telah/sedang berdiri; budakku telah/sedang berdiri; dan yang seumpamanya.' },
    { ar: 'وَالْمُضْمَرُ اثْنَا عَشَرَ، نَحْوُ قَوْلِكَ: ضَرَبْتُ، وَضَرَبْنَا، وَضَرَبْتَ، وَضَرَبْتِ، وَضَرَبْتُمَا، وَضَرَبْتُمْ، وَضَرَبْتُنَّ، وَضَرَبَ، وَضَرَبَتْ، وَضَرَبَا، وَضَرَبُوا، وَضَرَبْنَ.', ms: 'Dan fa\'il mudhmar ada dua belas, seperti katamu: aku telah memukul, kami telah memukul, engkau (lk) telah memukul, engkau (pr) telah memukul, kamu berdua telah memukul, kamu (lk ramai) telah memukul, kamu (pr ramai) telah memukul, dia (lk) telah memukul, dia (pr) telah memukul, mereka berdua telah memukul, mereka (lk) telah memukul, mereka (pr) telah memukul.' }
  ],
  nota: [
    { t: 'Pecahan Takrif', h: `<ol><li><b>[[الِاسْمُ]]</b> — fa\'il mesti isim (atau ditakwil dengan isim). Fi\'il dan huruf tidak menjadi fa\'il.</li>
      <li><b>[[الْمَرْفُوعُ]]</b> — hukumnya sentiasa rafa\'.</li>
      <li><b>[[الْمَذْكُورُ قَبْلَهُ فِعْلُهُ]]</b> — fi\'ilnya disebut <u>sebelum</u>nya. Jika isim mendahului fi\'il seperti [[زَيْدٌ قَامَ]], maka [[زَيْدٌ]] ialah <b>mubtada\'</b>, bukan fa\'il; fa\'il bagi [[قَامَ]] ialah dhamir tersembunyi [[هُوَ]].</li></ol>` },
    { t: 'Faedah Contoh-contoh Matan', h: `<p>Pengarang sengaja membawa contoh yang meliputi semua jenis: mufrad, muthanna, jamak muzakkar salim, jamak taksir, muannath, jamak muannath salim, asma\' khamsah dan isim yang diidhafahkan kepada ya mutakallim ([[غُلَامِي]]) — supaya pelajar melihat fa\'il dengan pelbagai tanda rafa\'.</p>
      <p>[[غُلَامِي]]: dirafa\'kan dengan dhammah <b>muqaddarah</b> (diandaikan) atas mim, terhalang daripada zahir kerana tempatnya sibuk dengan baris kasrah yang sesuai dengan ya.</p>` },
    { t: 'Fi\'il Muannath', h: `<p>Jika fa\'il muannath, fi\'il madhi diberi ta ta\'nith sakin ([[قَامَتْ هِنْدٌ]]) dan fi\'il mudhari\' dimulakan dengan ta ([[تَقُومُ هِنْدٌ]]).</p>
      <p>Fi\'il <b>tetap mufrad</b> walaupun fa\'il muthanna atau jamak: [[قَامَ الزَّيْدُونَ]] ✔, bukan [[قَامُوا الزَّيْدُونَ]] (menurut bahasa yang fasih).</p>` },
    { t: 'Fa\'il Dhamir (12)', h: `<table class="tbl"><tr><th>Dhamir</th><th>Contoh</th><th>Makna</th></tr>
      <tr><td>تُ</td><td>[[ضَرَبْتُ]]</td><td>aku</td></tr><tr><td>نَا</td><td>[[ضَرَبْنَا]]</td><td>kami</td></tr>
      <tr><td>تَ</td><td>[[ضَرَبْتَ]]</td><td>engkau (lk)</td></tr><tr><td>تِ</td><td>[[ضَرَبْتِ]]</td><td>engkau (pr)</td></tr>
      <tr><td>تُمَا</td><td>[[ضَرَبْتُمَا]]</td><td>kamu berdua</td></tr><tr><td>تُمْ</td><td>[[ضَرَبْتُمْ]]</td><td>kamu (lk)</td></tr>
      <tr><td>تُنَّ</td><td>[[ضَرَبْتُنَّ]]</td><td>kamu (pr)</td></tr><tr><td>هُوَ (mustatir)</td><td>[[ضَرَبَ]]</td><td>dia (lk)</td></tr>
      <tr><td>هِيَ (mustatir)</td><td>[[ضَرَبَتْ]]</td><td>dia (pr)</td></tr><tr><td>ا</td><td>[[ضَرَبَا]]</td><td>mereka berdua</td></tr>
      <tr><td>و</td><td>[[ضَرَبُوا]]</td><td>mereka (lk)</td></tr><tr><td>نَ</td><td>[[ضَرَبْنَ]]</td><td>mereka (pr)</td></tr></table>
      <p>Pada [[ضَرَبَتْ]], ta itu tanda ta\'nith (huruf), bukan fa\'il; fa\'ilnya dhamir mustatir [[هِيَ]].</p>` }
  ],
  kesalahan: ['Mengi\'rab [[زَيْدٌ]] dalam [[زَيْدٌ قَامَ]] sebagai fa\'il. Ia mubtada\' kerana mendahului fi\'il.', 'Menganggap ta pada [[قَامَتْ]] sebagai fa\'il. Ia huruf ta\'nith; fa\'il ialah isim selepasnya atau dhamir mustatir.', 'Menjamakkan fi\'il bersama fa\'il zahir jamak: [[قَامُوا الطُّلَّابُ]] (kurang fasih).'],
  rumusan: ['Fa\'il: isim marfu\', fi\'ilnya disebut sebelumnya.', 'Dua jenis: zahir dan dhamir.', 'Dhamir fa\'il ada 12.'],
  contoh: [
    { ar: 'قَامَ زَيْدٌ', ms: 'Zaid telah berdiri.', irab: [['قَامَ', 'فعل ماض مبني على الفتح لا محل له من الإعراب'], ['زَيْدٌ', 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Fa\'il mufrad, rafa\' dengan dhammah.' },
    { ar: 'قَامَ الزَّيْدَانِ', ms: 'Dua Zaid telah berdiri.', irab: [['الزَّيْدَانِ', 'فاعل مرفوع وعلامة رفعه الألف نيابة عن الضمة لأنه مثنى']], sebab: 'Muthanna dirafa\'kan dengan alif.' },
    { ar: 'قَامَ غُلَامِي', ms: 'Budakku telah berdiri.', irab: [['غُلَامِ', 'فاعل مرفوع وعلامة رفعه الضمة المقدرة على ما قبل ياء المتكلم منع من ظهورها اشتغال المحل بحركة المناسبة، وهو مضاف'], ['ي', 'ضمير متصل مبني على السكون في محل جر مضاف إليه']], sebab: 'I\'rab taqdiri.' },
    { ar: 'قَالَ مُوسَى', ms: 'Musa berkata.', quran: true, ref: 'Contohnya Al-A\'raf: 128', irab: [['مُوسَى', 'فاعل مرفوع وعلامة رفعه الضمة المقدرة على الألف منع من ظهورها التعذر']], sebab: 'Isim maqsur: dhammah diandaikan kerana alif tidak boleh menerima baris.' }
  ],
  soalan: [
    { id: 'fail-1', t: 'mcq', d: 1, k: 'fail', q: 'Apakah syarat fa\'il menurut takrif matan?', o: ['Disebut fi\'ilnya sebelumnya', 'Disebut fi\'ilnya selepasnya', 'Mesti mansub', 'Mesti dhamir'], a: 0, e: '[[الْمَذْكُورُ قَبْلَهُ فِعْلُهُ]].' },
    { id: 'fail-2', t: 'mcq', d: 1, j: 'kedudukan', k: 'fail', q: 'Apakah kedudukan [[الطَّالِبُ]]?', ar: 'نَجَحَ الطَّالِبُ', o: ['Mubtada\'', 'Fa\'il', 'Maf\'ul bih', 'Khabar'], a: 1, e: 'Isim marfu\' yang disebut fi\'ilnya ([[نَجَحَ]]) sebelumnya.' },
    { id: 'fail-3', t: 'tf', d: 2, k: 'fail', q: 'Dalam [[زَيْدٌ قَامَ]], [[زَيْدٌ]] ialah fa\'il.', ar: 'زَيْدٌ قَامَ', a: false, e: 'Ia mubtada\' kerana mendahului fi\'il. Fa\'il bagi [[قَامَ]] ialah dhamir mustatir [[هُوَ]], dan jumlah [[قَامَ]] menjadi khabar.' },
    { id: 'fail-4', t: 'mcq', d: 2, j: 'tanda', k: 'alamat-rafa', q: 'Apakah tanda rafa\' [[الْمُهَنْدِسُونَ]]?', ar: 'حَضَرَ الْمُهَنْدِسُونَ', o: ['Dhammah', 'Wau', 'Alif', 'Nun'], a: 1, e: 'Jamak muzakkar salim: wau ganti dhammah.' },
    { id: 'fail-5', t: 'mcq', d: 2, k: 'fail', q: 'Pada [[كَتَبَتْ]], apakah fa\'ilnya?', ar: 'كَتَبَتْ', o: ['Ta sakin', 'Dhamir mustatir هِيَ', 'Tiada fa\'il', 'Huruf ba'], a: 1, e: 'Ta itu tanda ta\'nith (huruf). Fa\'il ialah dhamir mustatir [[هِيَ]].' },
    { id: 'fail-6', t: 'error', d: 2, k: 'fail', q: 'Cari kalimah yang salah i\'rabnya:', w: ['جَاءَ', 'الْمُسْلِمِينَ', 'إِلَى', 'الْمَسْجِدِ'], a: 1, fix: 'الْمُسْلِمُونَ', e: '[[الْمُسْلِمُونَ]] fa\'il, mesti marfu\' dengan wau.' },
    { id: 'fail-7', t: 'match', d: 2, k: 'fail', q: 'Padankan fi\'il dengan fa\'il dhamirnya:', p: [['ضَرَبْتُ', 'تُ (aku)'], ['ضَرَبْنَا', 'نَا (kami)'], ['ضَرَبُوا', 'و (mereka lk)'], ['ضَرَبْنَ', 'نَ (mereka pr)']], e: 'Rujuk jadual 12 dhamir dalam nota.' },
    { id: 'fail-8', t: 'order', d: 1, k: 'fail', q: 'Susun menjadi ayat fi\'liyyah: "Hindun telah berdiri."', w: ['قَامَتْ', 'هِنْدٌ'], e: 'Fi\'il mendahului fa\'il: [[قَامَتْ هِنْدٌ]].' },
    { id: 'fail-9', t: 'mcq', d: 3, j: 'tanda', k: 'fail', q: 'Apakah tanda rafa\' [[غُلَامِي]]?', ar: 'قَامَ غُلَامِي', o: ['Dhammah zahir', 'Dhammah muqaddarah', 'Wau', 'Kasrah'], a: 1, e: 'Dhammah diandaikan atas mim kerana tempatnya diisi kasrah yang sesuai dengan ya mutakallim.' }
  ]
},

/* ------------------------------------------------------------------ 8 */
{
  id: 'naib', no: 8,
  ar: 'بَابُ الْمَفْعُولِ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ', ms: 'Bab Maf\'ul yang Tidak Disebut Fa\'ilnya (Naib Fa\'il)',
  ringkas: 'Fi\'il majhul dan isim marfu\' yang menggantikan fa\'il.',
  matan: [
    { ar: 'وَهُوَ الِاسْمُ الْمَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ.', ms: 'Ia ialah isim yang marfu\' yang tidak disebut bersamanya fa\'ilnya.' },
    { ar: 'فَإِنْ كَانَ الْفِعْلُ مَاضِيًا ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ، وَإِنْ كَانَ مُضَارِعًا ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ.', ms: 'Jika fi\'il itu madhi, didhammahkan awalnya dan dikasrahkan huruf sebelum akhirnya; dan jika mudhari\', didhammahkan awalnya dan difathahkan huruf sebelum akhirnya.' },
    { ar: 'وَهُوَ عَلَى قِسْمَيْنِ: ظَاهِرٍ، وَمُضْمَرٍ.', ms: 'Dan ia terbahagi kepada dua: zahir dan mudhmar.' },
    { ar: 'فَالظَّاهِرُ نَحْوُ قَوْلِكَ: ضُرِبَ زَيْدٌ، وَيُضْرَبُ زَيْدٌ، وَأُكْرِمَ عَمْرٌو، وَيُكْرَمُ عَمْرٌو.', ms: 'Yang zahir seperti katamu: Zaid telah dipukul, Zaid sedang dipukul, \'Amr telah dimuliakan, \'Amr sedang dimuliakan.' },
    { ar: 'وَالْمُضْمَرُ اثْنَا عَشَرَ، نَحْوُ قَوْلِكَ: ضُرِبْتُ، وَضُرِبْنَا، وَضُرِبْتَ، وَضُرِبْتِ، وَضُرِبْتُمَا، وَضُرِبْتُمْ، وَضُرِبْتُنَّ، وَضُرِبَ، وَضُرِبَتْ، وَضُرِبَا، وَضُرِبُوا، وَضُرِبْنَ.', ms: 'Dan yang mudhmar ada dua belas, seperti katamu: aku telah dipukul, kami telah dipukul, engkau (lk) telah dipukul, engkau (pr) telah dipukul, kamu berdua telah dipukul, kamu (lk) telah dipukul, kamu (pr) telah dipukul, dia (lk) telah dipukul, dia (pr) telah dipukul, mereka berdua telah dipukul, mereka (lk) telah dipukul, mereka (pr) telah dipukul.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Apabila fa\'il dibuang (kerana tidak diketahui, dirahsiakan, atau tidak penting), maf\'ul bih naik menggantikan tempatnya dan menjadi <b>marfu\'</b>. Ulama mutaakhirin menamakannya <b>naib al-fa\'il [[نَائِبُ الْفَاعِلِ]]</b>; matan menamakannya [[الْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ]].</p>` },
    { t: 'Cara Membina Fi\'il Majhul', h: `<table class="tbl"><tr><th>Ma\'lum</th><th>Majhul</th><th>Kaedah</th></tr>
      <tr><td>[[ضَرَبَ]]</td><td>[[ضُرِبَ]]</td><td>Madhi: awal dhammah, sebelum akhir kasrah</td></tr>
      <tr><td>[[يَضْرِبُ]]</td><td>[[يُضْرَبُ]]</td><td>Mudhari\': awal dhammah, sebelum akhir fathah</td></tr>
      <tr><td>[[أَكْرَمَ]]</td><td>[[أُكْرِمَ]]</td><td></td></tr><tr><td>[[يُكْرِمُ]]</td><td>[[يُكْرَمُ]]</td><td></td></tr></table>` },
    { t: 'Perbandingan dengan Fa\'il', h: `<table class="tbl"><tr><th></th><th>Fa\'il</th><th>Naib Fa\'il</th></tr><tr><td>Fi\'il</td><td>Ma\'lum: [[ضَرَبَ]]</td><td>Majhul: [[ضُرِبَ]]</td></tr><tr><td>Makna</td><td>Pelaku</td><td>Yang dikenakan perbuatan</td></tr><tr><td>Hukum</td><td>Marfu\'</td><td>Marfu\'</td></tr></table>` }
  ],
  kesalahan: ['Mengi\'rab isim selepas fi\'il majhul sebagai fa\'il. Ia naib fa\'il.', 'Membaca [[ضُرِبَ]] sebagai [[ضَرَبَ]] lalu tersalah faham makna.'],
  rumusan: ['Naib fa\'il: isim marfu\' yang fa\'ilnya tidak disebut.', 'Madhi majhul: [[فُعِلَ]]; mudhari\' majhul: [[يُفْعَلُ]].', 'Zahir dan dhamir (12).'],
  contoh: [
    { ar: 'ضُرِبَ زَيْدٌ', ms: 'Zaid telah dipukul.', irab: [['ضُرِبَ', 'فعل ماض مبني للمجهول مبني على الفتح لا محل له من الإعراب'], ['زَيْدٌ', 'نائب فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Fa\'il tidak disebut; [[زَيْدٌ]] menggantikannya.' },
    { ar: 'كُتِبَ عَلَيْكُمُ الصِّيَامُ', ms: 'Diwajibkan ke atas kamu berpuasa.', ref: 'Al-Baqarah: 183', quran: true, irab: [['كُتِبَ', 'فعل ماض مبني للمجهول مبني على الفتح'], ['الصِّيَامُ', 'نائب فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Fi\'il majhul + naib fa\'il.' },
    { ar: 'وَخُلِقَ الْإِنْسَانُ ضَعِيفًا', ms: 'Dan manusia dijadikan bersifat lemah.', ref: 'An-Nisa\': 28', quran: true, irab: [['الْإِنْسَانُ', 'نائب فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['ضَعِيفًا', 'حال منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Naib fa\'il diikuti hal.' }
  ],
  soalan: [
    { id: 'naib-1', t: 'mcq', d: 1, k: 'naib', q: 'Jika fi\'il madhi dimajhulkan, apakah perubahannya?', o: ['Awal dhammah, sebelum akhir kasrah', 'Awal dhammah, sebelum akhir fathah', 'Awal fathah, sebelum akhir kasrah', 'Akhir disukunkan'], a: 0, e: '[[ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ]].' },
    { id: 'naib-2', t: 'mcq', d: 1, j: 'kedudukan', k: 'naib', q: 'Apakah kedudukan [[الْبَابُ]]?', ar: 'فُتِحَ الْبَابُ', o: ['Fa\'il', 'Naib fa\'il', 'Maf\'ul bih', 'Mubtada\''], a: 1, e: '[[فُتِحَ]] fi\'il majhul; [[الْبَابُ]] naib fa\'il marfu\'.' },
    { id: 'naib-3', t: 'match', d: 2, k: 'naib', q: 'Padankan fi\'il ma\'lum dengan bentuk majhulnya:', p: [['كَتَبَ', 'كُتِبَ'], ['يَكْتُبُ', 'يُكْتَبُ'], ['أَكْرَمَ', 'أُكْرِمَ'], ['يُكْرِمُ', 'يُكْرَمُ']], e: 'Madhi: [[فُعِلَ]]; mudhari\': [[يُفْعَلُ]].' },
    { id: 'naib-4', t: 'tf', d: 2, k: 'naib', q: 'Naib fa\'il hukumnya mansub kerana asalnya maf\'ul bih.', a: false, e: 'Apabila menggantikan fa\'il, ia mengambil hukum fa\'il iaitu marfu\'.' },
    { id: 'naib-5', t: 'error', d: 2, k: 'naib', q: 'Cari kalimah yang salah i\'rabnya:', w: ['قُرِئَ', 'الْقُرْآنَ'], a: 1, fix: 'الْقُرْآنُ', e: '[[الْقُرْآنُ]] naib fa\'il, mesti marfu\'.' },
    { id: 'naib-6', t: 'mcq', d: 3, j: 'kedudukan', k: 'naib', q: 'Apakah kedudukan [[الصِّيَامُ]]?', ar: 'كُتِبَ عَلَيْكُمُ الصِّيَامُ', o: ['Fa\'il', 'Mubtada\' muakhkhar', 'Naib fa\'il', 'Khabar'], a: 2, e: '[[كُتِبَ]] fi\'il majhul; [[الصِّيَامُ]] naib fa\'il. (Al-Baqarah: 183)' }
  ]
},

/* ------------------------------------------------------------------ 9 */
{
  id: 'mubtada', no: 9,
  ar: 'بَابُ الْمُبْتَدَإِ وَالْخَبَرِ', ms: 'Bab Mubtada\' dan Khabar',
  ringkas: 'Takrif mubtada\' dan khabar; jenis-jenis khabar.',
  matan: [
    { ar: 'الْمُبْتَدَأُ هُوَ الِاسْمُ الْمَرْفُوعُ الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ.', ms: 'Mubtada\' ialah isim yang marfu\' yang sunyi (bebas) daripada \'amil-\'amil lafzi.' },
    { ar: 'وَالْخَبَرُ هُوَ الِاسْمُ الْمَرْفُوعُ الْمُسْنَدُ إِلَيْهِ، نَحْوُ قَوْلِكَ: زَيْدٌ قَائِمٌ، وَالزَّيْدَانِ قَائِمَانِ، وَالزَّيْدُونَ قَائِمُونَ.', ms: 'Dan khabar ialah isim yang marfu\' yang disandarkan kepadanya (kepada mubtada\'), seperti katamu: Zaid berdiri, dua Zaid berdiri, para Zaid berdiri.' },
    { ar: 'وَالْمُبْتَدَأُ قِسْمَانِ: ظَاهِرٌ، وَمُضْمَرٌ.', ms: 'Dan mubtada\' ada dua bahagian: zahir dan mudhmar.' },
    { ar: 'فَالظَّاهِرُ مَا تَقَدَّمَ ذِكْرُهُ.', ms: 'Yang zahir ialah apa yang telah disebut (contohnya).' },
    { ar: 'وَالْمُضْمَرُ اثْنَا عَشَرَ، وَهِيَ: أَنَا، وَنَحْنُ، وَأَنْتَ، وَأَنْتِ، وَأَنْتُمَا، وَأَنْتُمْ، وَأَنْتُنَّ، وَهُوَ، وَهِيَ، وَهُمَا، وَهُمْ، وَهُنَّ، نَحْوُ قَوْلِكَ: أَنَا قَائِمٌ، وَنَحْنُ قَائِمُونَ، وَمَا أَشْبَهَ ذَلِكَ.', ms: 'Dan yang mudhmar ada dua belas: ana, nahnu, anta, anti, antuma, antum, antunna, huwa, hiya, huma, hum, hunna; seperti katamu: Aku berdiri, kami berdiri, dan yang seumpamanya.' },
    { ar: 'وَالْخَبَرُ قِسْمَانِ: مُفْرَدٌ، وَغَيْرُ مُفْرَدٍ.', ms: 'Dan khabar ada dua bahagian: mufrad dan bukan mufrad.' },
    { ar: 'فَالْمُفْرَدُ نَحْوُ قَوْلِكَ: زَيْدٌ قَائِمٌ.', ms: 'Yang mufrad seperti katamu: Zaid berdiri.' },
    { ar: 'وَغَيْرُ الْمُفْرَدِ أَرْبَعَةُ أَشْيَاءَ: الْجَارُّ وَالْمَجْرُورُ، وَالظَّرْفُ، وَالْفِعْلُ مَعَ فَاعِلِهِ، وَالْمُبْتَدَأُ مَعَ خَبَرِهِ، نَحْوُ قَوْلِكَ: زَيْدٌ فِي الدَّارِ، وَزَيْدٌ عِنْدَكَ، وَزَيْدٌ قَامَ أَبُوهُ، وَزَيْدٌ جَارِيَتُهُ ذَاهِبَةٌ.', ms: 'Dan yang bukan mufrad ada empat perkara: jar dan majrur, zharaf, fi\'il bersama fa\'ilnya, dan mubtada\' bersama khabarnya; seperti katamu: Zaid di dalam rumah, Zaid di sisimu, Zaid bapanya telah berdiri, Zaid hamba perempuannya sedang pergi.' }
  ],
  nota: [
    { t: 'Pecahan Takrif Mubtada\'', h: `<ol><li><b>[[الِاسْمُ]]</b> — mubtada\' mesti isim.</li><li><b>[[الْمَرْفُوعُ]]</b> — hukumnya rafa\'.</li><li><b>[[الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ]]</b> — tiada \'amil berbentuk lafaz sebelumnya (seperti fi\'il, [[كَانَ]], [[إِنَّ]]). Yang merafa\'kannya ialah <b>\'amil maknawi</b>, iaitu <i>ibtida\'</i> (kedudukan di permulaan).</li></ol>` },
    { t: 'Istilah: Khabar Mufrad', h: `<p>Dalam bab ini, <b>mufrad</b> bermaksud <b>bukan jumlah dan bukan syibh jumlah</b>, walaupun ia muthanna atau jamak. Maka [[قَائِمَانِ]] dan [[قَائِمُونَ]] tetap khabar mufrad.</p><p class="muted">Perhatikan: makna "mufrad" berbeza mengikut bab — dalam bab tanda i\'rab ia lawan muthanna/jamak; di sini lawan jumlah.</p>` },
    { t: 'Jenis Khabar Bukan Mufrad', h: `<ol><li><b>Jar dan majrur</b>: [[زَيْدٌ فِي الدَّارِ]]</li><li><b>Zharaf</b>: [[زَيْدٌ عِنْدَكَ]]</li><li><b>Jumlah fi\'liyyah</b>: [[زَيْدٌ قَامَ أَبُوهُ]]</li><li><b>Jumlah ismiyyah</b>: [[زَيْدٌ جَارِيَتُهُ ذَاهِبَةٌ]]</li></ol>
      <p>Jar-majrur dan zharaf dinamakan <b>syibh jumlah</b>. Menurut jumhur, ia berkait (muta\'alliq) dengan khabar yang dibuang, dianggarkan [[كَائِنٌ]] atau [[اسْتَقَرَّ]].</p>
      <p>Khabar jumlah mesti mempunyai <b>rabit</b> (pengikat) kepada mubtada\', seperti dhamir [[هُ]] dalam [[أَبُوهُ]].</p>` },
    { t: 'Kesesuaian', h: `<p>Khabar mufrad lazimnya sesuai dengan mubtada\' dari segi bilangan dan jantina: [[الطَّالِبَةُ مُجْتَهِدَةٌ]]، [[الطَّالِبَانِ مُجْتَهِدَانِ]]. Khabar asalnya nakirah; mubtada\' asalnya ma\'rifah.</p>` }
  ],
  kesalahan: ['Menasabkan khabar: [[زَيْدٌ قَائِمًا]] ✘. Khabar mubtada\' marfu\'.', 'Menyangka [[فِي الدَّارِ]] tiada i\'rab dalam jumlah. Ia (atau muta\'alliqnya) berada di tempat rafa\' sebagai khabar.', 'Menganggap "mufrad" di sini bermakna satu sahaja, sehingga menyangka [[قَائِمُونَ]] bukan khabar mufrad.'],
  rumusan: ['Mubtada\': isim marfu\' bebas daripada \'amil lafzi.', 'Khabar: isim marfu\' yang disandarkan kepada mubtada\'.', 'Mubtada\' zahir/dhamir (12).', 'Khabar: mufrad / bukan mufrad (jar-majrur, zharaf, jumlah fi\'liyyah, jumlah ismiyyah).'],
  semakan: ['Huraian muta\'alliq syibh jumlah ([[كَائِنٌ]]/[[اسْتَقَرَّ]]) ialah pendapat jumhur; ada pendapat lain dalam kitab besar.'],
  contoh: [
    { ar: 'زَيْدٌ قَائِمٌ', ms: 'Zaid berdiri.', irab: [['زَيْدٌ', 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['قَائِمٌ', 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Mubtada\' marfu\' dengan ibtida\'; khabar marfu\' dengan mubtada\'.' },
    { ar: 'اللَّهُ الصَّمَدُ', ms: 'Allah tempat bergantung segala sesuatu.', ref: 'Al-Ikhlas: 2', quran: true, irab: [['اللَّهُ', 'لفظ الجلالة مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['الصَّمَدُ', 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره']], sebab: 'Jumlah ismiyyah.' },
    { ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', ms: 'Segala puji bagi Allah, Tuhan sekalian alam.', ref: 'Al-Fatihah: 2', quran: true, irab: [['الْحَمْدُ', 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], ['لِلَّهِ', 'اللام حرف جر، ولفظ الجلالة اسم مخفوض باللام وعلامة خفضه الكسرة، والجار والمجرور متعلق بمحذوف خبر المبتدأ'], ['رَبِّ', 'نعت (صفة) للفظ الجلالة مخفوض وعلامة خفضه الكسرة، وهو مضاف'], ['الْعَالَمِينَ', 'مضاف إليه مخفوض وعلامة خفضه الياء لأنه ملحق بجمع المذكر السالم']], sebab: 'Khabar syibh jumlah (jar-majrur).' },
    { ar: 'زَيْدٌ قَامَ أَبُوهُ', ms: 'Zaid, bapanya telah berdiri.', irab: [['زَيْدٌ', 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة'], ['قَامَ', 'فعل ماض مبني على الفتح'], ['أَبُوهُ', 'فاعل مرفوع وعلامة رفعه الواو لأنه من الأسماء الخمسة، وهو مضاف، والهاء ضمير متصل في محل جر مضاف إليه، والجملة من الفعل والفاعل في محل رفع خبر المبتدأ']], sebab: 'Khabar jumlah fi\'liyyah; rabitnya dhamir [[هُ]].' }
  ],
  soalan: [
    { id: 'mubtada-1', t: 'mcq', d: 1, k: 'mubtada', q: 'Apakah \'amil yang merafa\'kan mubtada\'?', o: ['Fi\'il sebelumnya', 'Ibtida\' (\'amil maknawi)', 'Khabar', 'Huruf jar'], a: 1, e: 'Mubtada\' [[الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ]]; ia dirafa\'kan oleh \'amil maknawi iaitu ibtida\'.' },
    { id: 'mubtada-2', t: 'mcq', d: 1, j: 'kedudukan', k: 'mubtada', q: 'Apakah kedudukan [[مُجْتَهِدٌ]]?', ar: 'الطَّالِبُ مُجْتَهِدٌ', o: ['Mubtada\'', 'Khabar', 'Fa\'il', 'Na\'at'], a: 1, e: '[[مُجْتَهِدٌ]] khabar mufrad bagi [[الطَّالِبُ]].' },
    { id: 'mubtada-3', t: 'mcq', d: 2, k: 'mubtada', q: 'Apakah jenis khabar dalam ayat ini?', ar: 'زَيْدٌ فِي الدَّارِ', o: ['Mufrad', 'Jar dan majrur', 'Zharaf', 'Jumlah fi\'liyyah'], a: 1, e: '[[فِي الدَّارِ]] jar dan majrur (syibh jumlah).' },
    { id: 'mubtada-4', t: 'match', d: 2, k: 'mubtada', q: 'Padankan ayat dengan jenis khabarnya:', p: [['زَيْدٌ قَائِمٌ', 'Mufrad'], ['زَيْدٌ عِنْدَكَ', 'Zharaf'], ['زَيْدٌ قَامَ أَبُوهُ', 'Jumlah fi\'liyyah'], ['زَيْدٌ جَارِيَتُهُ ذَاهِبَةٌ', 'Jumlah ismiyyah']], e: 'Contoh-contoh ini daripada matan sendiri.' },
    { id: 'mubtada-5', t: 'tf', d: 1, k: 'mubtada', q: 'Dalam [[الزَّيْدُونَ قَائِمُونَ]], khabarnya termasuk khabar mufrad.', ar: 'الزَّيْدُونَ قَائِمُونَ', a: true, e: 'Mufrad dalam bab ini bermaksud bukan jumlah dan bukan syibh jumlah, walaupun jamak.' },
    { id: 'mubtada-6', t: 'error', d: 2, k: 'mubtada', q: 'Cari kalimah yang salah i\'rabnya:', w: ['الْمَسْجِدُ', 'نَظِيفًا'], a: 1, fix: 'نَظِيفٌ', e: 'Khabar mubtada\' marfu\': [[الْمَسْجِدُ نَظِيفٌ]].' },
    { id: 'mubtada-7', t: 'fill', d: 2, k: 'mubtada', q: 'Lengkapkan matan:', ar: 'الْمُبْتَدَأُ هُوَ الِاسْمُ الْمَرْفُوعُ الْعَارِي عَنِ الْعَوَامِلِ ___', o: ['اللَّفْظِيَّةِ', 'الْمَعْنَوِيَّةِ', 'الدَّاخِلَةِ', 'النَّاصِبَةِ'], a: 0, e: 'Mubtada\' bebas daripada \'amil lafzi; \'amilnya maknawi.' },
    { id: 'mubtada-8', t: 'order', d: 1, k: 'mubtada', q: 'Susun menjadi ayat: "Allah Maha Pengampun."', w: ['اللَّهُ', 'غَفُورٌ'], e: 'Mubtada\' dahulu kemudian khabar: [[اللَّهُ غَفُورٌ]].' },
    { id: 'mubtada-9', t: 'mcq', d: 3, k: 'mubtada', q: 'Dalam [[زَيْدٌ قَامَ أَبُوهُ]], apakah yang menjadi rabit (pengikat) khabar dengan mubtada\'?', ar: 'زَيْدٌ قَامَ أَبُوهُ', o: ['Dhamir ه pada أَبُوهُ', 'Fi\'il قَامَ', 'Wau pada أَبُو', 'Tiada rabit'], a: 0, e: 'Khabar jumlah mesti ada rabit; di sini dhamir [[هُ]] kembali kepada [[زَيْدٌ]].' }
  ]
}
);
