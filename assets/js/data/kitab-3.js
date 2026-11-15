/* =========================================================================
   NAHU PONDOK — Data Kitab (Bahagian 3: Bab 19–26)
   `matan` = Matan al-Ajurumiyyah. Selainnya = syarah/nota penyusun.
   ========================================================================= */
window.NP = window.NP || {};
NP.BAB = NP.BAB || [];

NP.BAB.push(
/* ----------------------------------------------------------------- 19 */
{
  id: 'hal', no: 19,
  ar: 'بَابُ الْحَالِ', ms: 'Bab Hal (Keadaan)',
  ringkas: 'Isim mansub yang menerangkan keadaan; syarat-syaratnya.',
  matan: [
    { ar: 'الْحَالُ هُوَ الِاسْمُ الْمَنْصُوبُ الْمُفَسِّرُ لِمَا انْبَهَمَ مِنَ الْهَيْئَاتِ، نَحْوُ قَوْلِكَ: جَاءَ زَيْدٌ رَاكِبًا، وَرَكِبْتُ الْفَرَسَ مُسْرَجًا، وَلَقِيتُ عَبْدَ اللَّهِ رَاكِبًا، وَمَا أَشْبَهَ ذَلِكَ.', ms: 'Hal ialah isim yang mansub yang mentafsirkan apa yang samar daripada keadaan-keadaan, seperti katamu: Zaid datang dalam keadaan menunggang; aku menunggang kuda dalam keadaan berpelana; aku bertemu \'Abdullah dalam keadaan menunggang; dan yang seumpamanya.' },
    { ar: 'وَلَا يَكُونُ الْحَالُ إِلَّا نَكِرَةً، وَلَا يَكُونُ إِلَّا بَعْدَ تَمَامِ الْكَلَامِ، وَلَا يَكُونُ صَاحِبُهَا إِلَّا مَعْرِفَةً.', ms: 'Hal tidak berlaku melainkan nakirah, tidak berlaku melainkan selepas sempurna kalam, dan sahibul hal (pemilik keadaan) tidak berlaku melainkan ma\'rifah.' }
  ],
  nota: [
    { t: 'Pecahan Takrif', h: `<ul><li><b>[[الْمُفَسِّرُ]]</b> — menjelaskan.</li><li><b>[[لِمَا انْبَهَمَ مِنَ الْهَيْئَاتِ]]</b> — keadaan yang samar. Apabila dikatakan [[جَاءَ زَيْدٌ]], keadaannya tidak diketahui; [[رَاكِبًا]] menjelaskannya.</li></ul>
      <p>Hal menjawab soalan [[كَيْفَ]] (bagaimana?).</p>` },
    { t: 'Syarat (3)', h: `<ol><li><b>Hal mesti nakirah</b>: [[رَاكِبًا]], bukan [[الرَّاكِبَ]].</li><li><b>Selepas kalam sempurna</b> (pada kebiasaannya): [[جَاءَ زَيْدٌ]] sudah sempurna, kemudian [[رَاكِبًا]]. Dalam syarah dijelaskan bahawa yang dimaksudkan ialah hal itu "fadhlah" (tambahan), bukan rukun ayat.</li><li><b>Sahibul hal mesti ma\'rifah</b>: [[زَيْدٌ]]، [[الْفَرَسَ]]، [[عَبْدَ اللَّهِ]].</li></ol>
      <p class="muted">Sahibul hal boleh menjadi nakirah dengan musawwigh (sebab yang membenarkan) — perincian dalam kitab lebih besar.</p>` },
    { t: 'Perbandingan: Hal dan Na\'at', h: `<table class="tbl"><tr><th>Hal</th><th>Na\'at</th></tr><tr><td>[[جَاءَ زَيْدٌ رَاكِبًا]] — keadaan ketika datang</td><td>[[جَاءَ زَيْدٌ الرَّاكِبُ]] — sifat tetap untuk mengenal</td></tr><tr><td>Sentiasa mansub, nakirah</td><td>Mengikut man\'ut</td></tr></table>` },
    { t: 'Perbandingan: Hal dan Tamyiz', h: `<p>Hal menerangkan <b>keadaan</b> ([[هَيْئَات]]); tamyiz menerangkan <b>zat</b> yang samar ([[ذَوَات]]). Kedua-duanya mansub dan nakirah.</p>` }
  ],
  kesalahan: ['Menjadikan hal ma\'rifah: [[جَاءَ زَيْدٌ الرَّاكِبَ]] ✘.', 'Menyangka [[رَاكِبًا]] dalam [[لَقِيتُ عَبْدَ اللَّهِ رَاكِبًا]] hanya untuk [[عَبْدَ اللَّهِ]]. Ia boleh juga hal bagi fa\'il (aku) — ihtimal yang disebut syarah.'],
  rumusan: ['Hal: isim mansub menerangkan keadaan.', 'Nakirah; selepas kalam sempurna; sahibnya ma\'rifah.'],
  semakan: ['[[لَقِيتُ عَبْدَ اللَّهِ رَاكِبًا]]: hal mungkin bagi fa\'il atau maf\'ul (ihtimal).'],
  contoh: [
    { ar: 'جَاءَ زَيْدٌ رَاكِبًا', ms: 'Zaid datang dalam keadaan menunggang.', irab: [['رَاكِبًا', 'حال منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Menjelaskan keadaan [[زَيْدٌ]] ketika datang.' },
    { ar: 'فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ', ms: 'Maka keluarlah dia dari kota itu dalam keadaan takut sambil berwaspada.', ref: 'Al-Qasas: 21', quran: true, irab: [['خَائِفًا', 'حال منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Hal bagi fa\'il [[خَرَجَ]] (dhamir Musa).' }
  ],
  soalan: [
    { id: 'hal-1', t: 'mcq', d: 1, j: 'kedudukan', k: 'hal', q: 'Apakah kedudukan [[مُبْتَسِمًا]]?', ar: 'دَخَلَ الْمُعَلِّمُ مُبْتَسِمًا', o: ['Na\'at', 'Hal', 'Tamyiz', 'Maf\'ul bih'], a: 1, e: 'Menerangkan keadaan guru ketika masuk: hal mansub.' },
    { id: 'hal-2', t: 'mcq', d: 1, k: 'hal', q: 'Hal mestilah:', o: ['Ma\'rifah', 'Nakirah', 'Mabni', 'Majzum'], a: 1, e: '[[وَلَا يَكُونُ الْحَالُ إِلَّا نَكِرَةً]].' },
    { id: 'hal-3', t: 'error', d: 2, k: 'hal', q: 'Cari kalimah yang salah:', w: ['جَاءَ', 'زَيْدٌ', 'الرَّاكِبَ'], a: 2, fix: 'رَاكِبًا', e: 'Hal mesti nakirah: [[رَاكِبًا]].' },
    { id: 'hal-4', t: 'tf', d: 2, k: 'hal', q: 'Sahibul hal pada asalnya mesti ma\'rifah.', a: true, e: '[[وَلَا يَكُونُ صَاحِبُهَا إِلَّا مَعْرِفَةً]].' },
    { id: 'hal-5', t: 'mcq', d: 3, k: 'hal', q: 'Apakah perbezaan utama hal dan tamyiz?', o: ['Hal menerangkan keadaan; tamyiz menerangkan zat', 'Hal marfu\'; tamyiz mansub', 'Hal ma\'rifah; tamyiz nakirah', 'Tiada beza'], a: 0, e: 'Hal: [[لِمَا انْبَهَمَ مِنَ الْهَيْئَاتِ]]; tamyiz: [[لِمَا انْبَهَمَ مِنَ الذَّوَاتِ]].' }
  ]
},

/* ----------------------------------------------------------------- 20 */
{
  id: 'tamyiz', no: 20,
  ar: 'بَابُ التَّمْيِيزِ', ms: 'Bab Tamyiz (Penjelas)',
  ringkas: 'Isim mansub yang menjelaskan zat yang samar.',
  matan: [
    { ar: 'التَّمْيِيزُ هُوَ الِاسْمُ الْمَنْصُوبُ الْمُفَسِّرُ لِمَا انْبَهَمَ مِنَ الذَّوَاتِ، نَحْوُ قَوْلِكَ: تَصَبَّبَ زَيْدٌ عَرَقًا، وَتَفَقَّأَ بَكْرٌ شَحْمًا، وَطَابَ مُحَمَّدٌ نَفْسًا، وَاشْتَرَيْتُ عِشْرِينَ غُلَامًا، وَمَلَكْتُ تِسْعِينَ نَعْجَةً، وَزَيْدٌ أَكْرَمُ مِنْكَ أَبًا، وَأَجْمَلُ مِنْكَ وَجْهًا.', ms: 'Tamyiz ialah isim yang mansub yang mentafsirkan apa yang samar daripada zat-zat, seperti katamu: Zaid bercucuran peluh; Bakr pecah-pecah lemaknya (sangat gemuk); Muhammad baik jiwanya; aku membeli dua puluh orang hamba; aku memiliki sembilan puluh ekor kambing betina; Zaid lebih mulia daripadamu dari segi bapa; dan lebih cantik daripadamu dari segi wajah.' },
    { ar: 'وَلَا يَكُونُ إِلَّا نَكِرَةً، وَلَا يَكُونُ إِلَّا بَعْدَ تَمَامِ الْكَلَامِ.', ms: 'Ia tidak berlaku melainkan nakirah, dan tidak berlaku melainkan selepas sempurna kalam.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Tamyiz menghilangkan kesamaran tentang <b>zat/perkara</b>. Dalam [[اشْتَرَيْتُ عِشْرِينَ]], pendengar bertanya: dua puluh apa? Maka [[غُلَامًا]] menjelaskannya.</p>` },
    { t: 'Jenis Tamyiz (syarah)', h: `<ol><li><b>Tamyiz nisbah</b> (menjelaskan nisbah ayat): [[تَصَبَّبَ زَيْدٌ عَرَقًا]] — asalnya [[تَصَبَّبَ عَرَقُ زَيْدٍ]].</li><li><b>Tamyiz zat/mufrad</b> (selepas bilangan, sukatan, timbangan): [[عِشْرِينَ غُلَامًا]]، [[تِسْعِينَ نَعْجَةً]].</li><li><b>Selepas isim tafdhil</b>: [[أَكْرَمُ مِنْكَ أَبًا]].</li></ol>` }
  ],
  kesalahan: ['Mengira tamyiz sebagai hal kerana kedua-duanya mansub nakirah. Tanya: adakah ia menerangkan keadaan atau zat?', 'Mengkhafadhkan tamyiz bilangan 11–99: [[عِشْرِينَ غُلَامٍ]] ✘.'],
  rumusan: ['Tamyiz: isim mansub menerangkan zat samar.', 'Nakirah, selepas kalam sempurna.'],
  contoh: [
    { ar: 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا', ms: 'Sesungguhnya aku bermimpi melihat sebelas bintang...', ref: 'Yusuf: 4', quran: true, irab: [['كَوْكَبًا', 'تمييز منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Menjelaskan bilangan sebelas.' },
    { ar: 'وَاشْتَعَلَ الرَّأْسُ شَيْبًا', ms: 'Dan kepalaku telah dipenuhi uban.', ref: 'Maryam: 4', quran: true, irab: [['شَيْبًا', 'تمييز منصوب وعلامة نصبه الفتحة الظاهرة على آخره']], sebab: 'Tamyiz nisbah.' }
  ],
  soalan: [
    { id: 'tamyiz-1', t: 'mcq', d: 1, j: 'kedudukan', k: 'tamyiz', q: 'Apakah kedudukan [[كِتَابًا]]?', ar: 'اشْتَرَيْتُ عِشْرِينَ كِتَابًا', o: ['Hal', 'Tamyiz', 'Maf\'ul bih', 'Na\'at'], a: 1, e: 'Menjelaskan bilangan [[عِشْرِينَ]]: tamyiz mansub.' },
    { id: 'tamyiz-2', t: 'tf', d: 1, k: 'tamyiz', q: 'Tamyiz menerangkan kesamaran keadaan (hai\'at).', a: false, e: 'Tamyiz menerangkan zat; hal menerangkan keadaan.' },
    { id: 'tamyiz-3', t: 'mcq', d: 2, j: 'kedudukan', k: 'tamyiz', q: 'Apakah kedudukan [[وَجْهًا]]?', ar: 'زَيْدٌ أَجْمَلُ مِنْكَ وَجْهًا', o: ['Tamyiz', 'Hal', 'Maf\'ul bih', 'Zharaf'], a: 0, e: 'Tamyiz selepas isim tafdhil.' },
    { id: 'tamyiz-4', t: 'match', d: 2, k: 'tamyiz', q: 'Padankan kalimah mansub dengan kedudukannya:', p: [['جَاءَ زَيْدٌ رَاكِبًا', 'Hal'], ['طَابَ مُحَمَّدٌ نَفْسًا', 'Tamyiz'], ['ضَرَبْتُ زَيْدًا', 'Maf\'ul bih'], ['صُمْتُ يَوْمًا', 'Zharaf zaman']], e: 'Bezakan mengikut fungsi: keadaan, zat, objek, masa.' }
  ]
},

/* ----------------------------------------------------------------- 21 */
{
  id: 'istisna', no: 21,
  ar: 'بَابُ الِاسْتِثْنَاءِ', ms: 'Bab Istithna\' (Pengecualian)',
  ringkas: 'Lapan alat istithna\' dan hukum mustathna.',
  matan: [
    { ar: 'وَحُرُوفُ الِاسْتِثْنَاءِ ثَمَانِيَةٌ، وَهِيَ: إِلَّا، وَغَيْرُ، وَسِوًى، وَسُوًى، وَسَوَاءٌ، وَخَلَا، وَعَدَا، وَحَاشَا.', ms: 'Alat-alat istithna\' ada lapan: illa, ghairu, siwan, suwan, sawa\'un, khala, \'ada dan hasya.' },
    { ar: 'فَالْمُسْتَثْنَى بِإِلَّا يُنْصَبُ إِذَا كَانَ الْكَلَامُ تَامًّا مُوجَبًا، نَحْوُ: قَامَ الْقَوْمُ إِلَّا زَيْدًا، وَخَرَجَ النَّاسُ إِلَّا عَمْرًا.', ms: 'Maka mustathna dengan illa dinasabkan apabila kalam itu tam (sempurna) lagi mujab (positif), seperti: kaum itu berdiri kecuali Zaid; manusia keluar kecuali \'Amr.' },
    { ar: 'وَإِنْ كَانَ الْكَلَامُ مَنْفِيًّا تَامًّا جَازَ فِيهِ الْبَدَلُ وَالنَّصْبُ عَلَى الِاسْتِثْنَاءِ، نَحْوُ: مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ، وَإِلَّا زَيْدًا.', ms: 'Dan jika kalam itu manfi (negatif) lagi tam, harus padanya badal dan nasab atas istithna\', seperti: kaum itu tidak berdiri kecuali Zaid (dengan rafa\') dan kecuali Zaid (dengan nasab).' },
    { ar: 'وَإِنْ كَانَ الْكَلَامُ نَاقِصًا كَانَ عَلَى حَسَبِ الْعَوَامِلِ، نَحْوُ: مَا قَامَ إِلَّا زَيْدٌ، وَمَا ضَرَبْتُ إِلَّا زَيْدًا، وَمَا مَرَرْتُ إِلَّا بِزَيْدٍ.', ms: 'Dan jika kalam itu naqis (kurang), ia mengikut \'amil-\'amil, seperti: tidak berdiri melainkan Zaid; aku tidak memukul melainkan Zaid; aku tidak melalui melainkan Zaid.' },
    { ar: 'وَالْمُسْتَثْنَى بِغَيْرٍ، وَسِوًى، وَسُوًى، وَسَوَاءٍ مَجْرُورٌ لَا غَيْرُ.', ms: 'Dan mustathna dengan ghair, siwan, suwan dan sawa\' adalah majrur, tidak lain.' },
    { ar: 'وَالْمُسْتَثْنَى بِخَلَا، وَعَدَا، وَحَاشَا يَجُوزُ نَصْبُهُ وَجَرُّهُ، نَحْوُ: قَامَ الْقَوْمُ خَلَا زَيْدًا وَزَيْدٍ، وَعَدَا عَمْرًا وَعَمْرٍو، وَحَاشَا بَكْرًا وَبَكْرٍ.', ms: 'Dan mustathna dengan khala, \'ada dan hasya harus dinasabkan dan dijarrkan, seperti: kaum itu berdiri kecuali Zaid (zaidan / zaidin), kecuali \'Amr (\'amran / \'amrin), kecuali Bakr (bakran / bakrin).' }
  ],
  nota: [
    { t: 'Istilah', h: `<ul><li><b>Tam [[تَامٌّ]]:</b> mustathna minh (yang dikecualikan daripadanya) disebut. [[قَامَ <u>الْقَوْمُ</u> إِلَّا زَيْدًا]].</li><li><b>Naqis [[نَاقِصٌ]]:</b> mustathna minh tidak disebut. [[مَا قَامَ إِلَّا زَيْدٌ]].</li><li><b>Mujab [[مُوجَبٌ]]:</b> tiada nafi/nahi/istifham.</li><li><b>Manfi [[مَنْفِيٌّ]]:</b> ada nafi.</li></ul>` },
    { t: 'Jadual Hukum Mustathna dengan إِلَّا', h: `<table class="tbl"><tr><th>Keadaan</th><th>Hukum</th><th>Contoh</th></tr>
      <tr><td>Tam + mujab</td><td>Wajib nasab</td><td>[[قَامَ الْقَوْمُ إِلَّا زَيْدًا]]</td></tr>
      <tr><td>Tam + manfi</td><td>Harus badal (lebih utama) atau nasab</td><td>[[مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ / زَيْدًا]]</td></tr>
      <tr><td>Naqis (manfi)</td><td>Ikut \'amil (istithna\' mufarragh)</td><td>[[مَا قَامَ إِلَّا زَيْدٌ]] (fa\'il)</td></tr></table>
      <p class="muted">Bahawa badal lebih utama dalam tam manfi ialah huraian syarah.</p>` },
    { t: 'I\'rab غَيْر dan سِوَى', h: `<p>Kalimah [[غَيْرُ]] sendiri di-i\'rab seperti mustathna dengan [[إِلَّا]], manakala isim selepasnya <b>majrur sebagai mudhaf ilaih</b>: [[قَامَ الْقَوْمُ غَيْرَ زَيْدٍ]].</p>` },
    { t: 'خَلَا، عَدَا، حَاشَا', h: `<p>Jika dinasabkan, ia dianggap <b>fi\'il</b> dan mustathna ialah maf\'ul bih. Jika dijarrkan, ia dianggap <b>huruf jar</b>. Jika didahului [[مَا]] ([[مَا خَلَا]]، [[مَا عَدَا]]), wajib nasab menurut jumhur — huraian syarah.</p>` }
  ],
  kesalahan: ['Menasabkan mustathna dalam kalam naqis tanpa melihat \'amil: [[مَا قَامَ إِلَّا زَيْدًا]] ✘ → [[زَيْدٌ]] (fa\'il).', 'Menasabkan isim selepas [[غَيْر]]: [[غَيْرَ زَيْدًا]] ✘ → [[غَيْرَ زَيْدٍ]].'],
  rumusan: ['Lapan alat istithna\'.', 'إِلَّا: tam mujab → nasab; tam manfi → badal/nasab; naqis → ikut \'amil.', 'غير/سوى/سواء → mustathna majrur.', 'خلا/عدا/حاشا → harus nasab atau jar.'],
  contoh: [
    { ar: 'فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِنْهُمْ', ms: 'Lalu mereka meminum daripadanya kecuali sedikit daripada mereka.', ref: 'Al-Baqarah: 249', quran: true, irab: [['إِلَّا', 'حرف استثناء مبني على السكون لا محل له من الإعراب'], ['قَلِيلًا', 'مستثنى بإلا منصوب وعلامة نصبه الفتحة الظاهرة']], sebab: 'Kalam tam mujab → wajib nasab.' },
    { ar: 'مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِنْهُمْ', ms: 'Mereka tidak akan melakukannya kecuali sedikit daripada mereka.', ref: 'An-Nisa\': 66', quran: true, irab: [['قَلِيلٌ', 'بدل من الواو في فعلوه مرفوع وعلامة رفعه الضمة الظاهرة']], sebab: 'Kalam tam manfi → badal (bacaan jumhur). Ibn \'Amir membaca [[إِلَّا قَلِيلًا]] dengan nasab.' },
    { ar: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ', ms: 'Dan Muhammad itu tidak lain hanyalah seorang Rasul.', ref: 'Ali \'Imran: 144', quran: true, irab: [['رَسُولٌ', 'خبر المبتدأ مرفوع وعلامة رفعه الضمة الظاهرة، و«إلا» أداة حصر']], sebab: 'Kalam naqis: mengikut \'amil (khabar).' }
  ],
  soalan: [
    { id: 'istisna-1', t: 'mcq', d: 1, k: 'istisna', q: 'Berapakah alat istithna\' dalam matan?', o: ['Enam', 'Lapan', 'Sepuluh', 'Empat'], a: 1, e: '[[وَحُرُوفُ الِاسْتِثْنَاءِ ثَمَانِيَةٌ]].' },
    { id: 'istisna-2', t: 'mcq', d: 1, j: 'hukum', k: 'istisna', q: 'Apakah hukum [[زَيْدًا]]?', ar: 'قَامَ الْقَوْمُ إِلَّا زَيْدًا', o: ['Wajib nasab', 'Harus badal', 'Ikut \'amil', 'Majrur'], a: 0, e: 'Kalam tam mujab → wajib nasab.' },
    { id: 'istisna-3', t: 'mcq', d: 2, j: 'kedudukan', k: 'istisna', q: 'Apakah kedudukan [[زَيْدٌ]]?', ar: 'مَا قَامَ إِلَّا زَيْدٌ', o: ['Mustathna mansub', 'Fa\'il', 'Badal', 'Mubtada\''], a: 1, e: 'Kalam naqis: [[إِلَّا]] hanya alat hashr; [[زَيْدٌ]] fa\'il bagi [[قَامَ]].' },
    { id: 'istisna-4', t: 'error', d: 2, k: 'istisna', q: 'Cari kalimah yang salah:', w: ['حَضَرَ', 'الطُّلَّابُ', 'غَيْرَ', 'زَيْدًا'], a: 3, fix: 'زَيْدٍ', e: 'Selepas [[غَيْر]], mustathna majrur (mudhaf ilaih).' },
    { id: 'istisna-5', t: 'tf', d: 2, k: 'istisna', q: 'Mustathna dengan [[خَلَا]] harus dinasabkan atau dijarrkan.', a: true, e: '[[يَجُوزُ نَصْبُهُ وَجَرُّهُ]].' },
    { id: 'istisna-6', t: 'mcq', d: 3, k: 'istisna', q: 'Dalam [[مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ]], [[زَيْدٌ]] di-i\'rab sebagai:', ar: 'مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ', o: ['Badal daripada الْقَوْمُ', 'Fa\'il', 'Mubtada\'', 'Khabar'], a: 0, e: 'Tam manfi: harus badal (seperti di sini, marfu\' mengikut [[الْقَوْمُ]]) atau nasab atas istithna\'.' }
  ]
},

/* ----------------------------------------------------------------- 22 */
{
  id: 'la', no: 22,
  ar: 'بَابُ لَا', ms: 'Bab La (Nafi Jinsi)',
  ringkas: 'La yang menafikan jenis dan syarat amalannya.',
  matan: [
    { ar: 'اعْلَمْ أَنَّ «لَا» تَنْصِبُ النَّكِرَاتِ بِغَيْرِ تَنْوِينٍ إِذَا بَاشَرَتِ النَّكِرَةَ وَلَمْ تَتَكَرَّرْ «لَا»، نَحْوُ: لَا رَجُلَ فِي الدَّارِ.', ms: 'Ketahuilah bahawa "la" menasabkan isim-isim nakirah tanpa tanwin apabila ia bersentuhan langsung dengan nakirah dan "la" tidak berulang, seperti: tiada seorang lelaki pun di dalam rumah.' },
    { ar: 'فَإِنْ لَمْ تُبَاشِرْهَا وَجَبَ الرَّفْعُ وَوَجَبَ تَكْرَارُ «لَا»، نَحْوُ: لَا فِي الدَّارِ رَجُلٌ وَلَا امْرَأَةٌ.', ms: 'Jika ia tidak bersentuhan langsung dengannya, wajib rafa\' dan wajib mengulang "la", seperti: tiada di dalam rumah lelaki dan tiada perempuan.' },
    { ar: 'فَإِنْ تَكَرَّرَتْ جَازَ إِعْمَالُهَا وَإِلْغَاؤُهَا، فَإِنْ شِئْتَ قُلْتَ: لَا رَجُلَ فِي الدَّارِ وَلَا امْرَأَةَ، وَإِنْ شِئْتَ قُلْتَ: لَا رَجُلٌ فِي الدَّارِ وَلَا امْرَأَةٌ.', ms: 'Jika ia berulang, harus mengamalkannya atau membatalkan amalannya. Jika engkau mahu, katakan: la rajula fid-dari wa la imra\'ata; dan jika engkau mahu, katakan: la rajulun fid-dari wa la imra\'atun.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>[[لَا]] nafiyah lil-jins menafikan keseluruhan jenis. Ia beramal seperti [[إِنَّ]]: menasabkan isim dan merafa\'kan khabar.</p>
      <p><b>Syarat beramal:</b> (1) isim dan khabarnya nakirah; (2) bersentuhan langsung dengan isimnya; (3) tidak berulang (jika berulang, harus beramal atau tidak).</p>` },
    { t: 'I\'rab Isim La', h: `<p>Jika isimnya <b>mufrad</b> (bukan mudhaf dan bukan syibh mudhaf), ia <b>mabni atas apa yang dinasabkan dengannya</b>, dalam mahal nasab: [[لَا رَجُلَ]] — mabni atas fathah. Inilah maksud "tanpa tanwin".</p>
      <p>Jika mudhaf: mu\'rab mansub: [[لَا طَالِبَ عِلْمٍ مَذْمُومٌ]].</p>` }
  ],
  kesalahan: ['Mentanwinkan isim la mufrad: [[لَا رَجُلًا فِي الدَّارِ]] ✘.', 'Menasabkan apabila dipisahkan: [[لَا فِي الدَّارِ رَجُلَ]] ✘ → wajib rafa\' dan ulang la.'],
  rumusan: ['La nafi jinsi menasabkan nakirah tanpa tanwin jika bersentuhan dan tidak berulang.', 'Jika terpisah: wajib rafa\' dan ulang la.', 'Jika berulang: harus i\'mal atau ilgha\'.'],
  contoh: [
    { ar: 'لَا رَيْبَ فِيهِ', ms: 'Tiada keraguan padanya.', ref: 'Al-Baqarah: 2', quran: true, irab: [['لَا', 'نافية للجنس تعمل عمل إن مبنية على السكون لا محل لها من الإعراب'], ['رَيْبَ', 'اسم لا مبني على الفتح في محل نصب'], ['فِيهِ', 'جار ومجرور متعلق بمحذوف خبر لا']], sebab: 'Isim la mufrad, bersentuhan, tidak berulang.' },
    { ar: 'لَا إِلَهَ إِلَّا اللَّهُ', ms: 'Tiada tuhan (yang disembah dengan sebenar) melainkan Allah.', irab: [['إِلَهَ', 'اسم لا مبني على الفتح في محل نصب، وخبرها محذوف تقديره: حقٌّ (أو: موجودٌ بحق)'], ['اللَّهُ', 'لفظ الجلالة بدل من الضمير المستتر في الخبر المحذوف (أو من محل لا واسمها) مرفوع']], sebab: 'Kalimah tauhid.', wajh: 'I\'rab [[اللَّهُ]] dalam kalimah tauhid mempunyai beberapa wajh dalam kitab-kitab besar; yang masyhur ialah badal. Sila rujuk guru.' }
  ],
  semakan: ['I\'rab kalimah tauhid mempunyai beberapa wajh; dipaparkan yang masyhur sahaja.'],
  soalan: [
    { id: 'la-1', t: 'mcq', d: 1, k: 'la', q: 'Dalam [[لَا رَجُلَ فِي الدَّارِ]], [[رَجُلَ]] tanpa tanwin kerana:', ar: 'لَا رَجُلَ فِي الدَّارِ', o: ['Ia mabni atas fathah sebagai isim la mufrad', 'Ia ghairu munsarif', 'Ia ma\'rifah', 'Ia majzum'], a: 0, e: 'Isim la mufrad mabni atas fathah dalam mahal nasab.' },
    { id: 'la-2', t: 'tf', d: 2, k: 'la', q: 'Jika [[لَا]] dipisahkan daripada isimnya, wajib rafa\' dan wajib mengulang [[لَا]].', a: true, e: '[[فَإِنْ لَمْ تُبَاشِرْهَا وَجَبَ الرَّفْعُ وَوَجَبَ تَكْرَارُ «لَا»]].' },
    { id: 'la-3', t: 'error', d: 2, k: 'la', q: 'Cari kalimah yang salah:', w: ['لَا', 'طَالِبًا', 'فِي', 'الْفَصْلِ'], a: 1, fix: 'طَالِبَ', e: 'Isim la mufrad tanpa tanwin: [[لَا طَالِبَ]].' },
    { id: 'la-4', t: 'mcq', d: 2, k: 'la', q: 'Jika [[لَا]] berulang, hukumnya:', o: ['Wajib i\'mal', 'Wajib ilgha\'', 'Harus i\'mal atau ilgha\'', 'Wajib jazam'], a: 2, e: '[[فَإِنْ تَكَرَّرَتْ جَازَ إِعْمَالُهَا وَإِلْغَاؤُهَا]].' }
  ]
},

/* ----------------------------------------------------------------- 23 */
{
  id: 'munada', no: 23,
  ar: 'بَابُ الْمُنَادَى', ms: 'Bab Munada (Yang Diseru)',
  ringkas: 'Lima jenis munada dan hukumnya.',
  matan: [
    { ar: 'الْمُنَادَى خَمْسَةُ أَنْوَاعٍ: الْمُفْرَدُ الْعَلَمُ، وَالنَّكِرَةُ الْمَقْصُودَةُ، وَالنَّكِرَةُ غَيْرُ الْمَقْصُودَةِ، وَالْمُضَافُ، وَالشَّبِيهُ بِالْمُضَافِ.', ms: 'Munada ada lima jenis: mufrad \'alam, nakirah maqsudah, nakirah ghairu maqsudah, mudhaf, dan syabih bil-mudhaf (menyerupai mudhaf).' },
    { ar: 'فَأَمَّا الْمُفْرَدُ الْعَلَمُ وَالنَّكِرَةُ الْمَقْصُودَةُ فَيُبْنَيَانِ عَلَى الضَّمِّ مِنْ غَيْرِ تَنْوِينٍ، نَحْوُ: يَا زَيْدُ، وَيَا رَجُلُ.', ms: 'Adapun mufrad \'alam dan nakirah maqsudah, kedua-duanya dibinakan (mabni) atas dhammah tanpa tanwin, seperti: Wahai Zaid; wahai lelaki (tertentu).' },
    { ar: 'وَالثَّلَاثَةُ الْبَاقِيَةُ مَنْصُوبَةٌ لَا غَيْرُ.', ms: 'Dan tiga yang berbaki adalah mansub, tidak lain.' }
  ],
  nota: [
    { t: 'Jenis dan Contoh', h: `<table class="tbl"><tr><th>Jenis</th><th>Contoh</th><th>Hukum</th></tr>
      <tr><td>Mufrad \'alam</td><td>[[يَا زَيْدُ]]</td><td>Mabni atas dhammah, mahal nasab</td></tr>
      <tr><td>Nakirah maqsudah</td><td>[[يَا رَجُلُ]] (lelaki tertentu)</td><td>Mabni atas dhammah</td></tr>
      <tr><td>Nakirah ghairu maqsudah</td><td>[[يَا رَجُلًا خُذْ بِيَدِي]] (kata orang buta)</td><td>Mansub</td></tr>
      <tr><td>Mudhaf</td><td>[[يَا عَبْدَ اللَّهِ]]</td><td>Mansub</td></tr>
      <tr><td>Syabih bil-mudhaf</td><td>[[يَا طَالِعًا جَبَلًا]]</td><td>Mansub</td></tr></table>
      <p>Mufrad dalam bab ini bermaksud bukan mudhaf dan bukan syabih bil-mudhaf (walaupun muthanna/jamak). [[يَا زَيْدَانِ]] mabni atas alif; [[يَا زَيْدُونَ]] mabni atas wau.</p>` },
    { t: 'Mengapa mahal nasab?', h: `<p>Munada pada hakikatnya maf\'ul bih bagi fi\'il yang dibuang, ditakdirkan [[أَدْعُو]] (aku menyeru). Maka tempatnya nasab walaupun lafaznya mabni atas dhammah.</p>` }
  ],
  kesalahan: ['Mentanwinkan munada \'alam: [[يَا زَيْدٌ]] ✘.', 'Membaca [[يَا عَبْدُ اللَّهِ]] ✘ — mudhaf mesti mansub: [[يَا عَبْدَ اللَّهِ]].'],
  rumusan: ['Lima jenis munada.', 'Mufrad \'alam & nakirah maqsudah → mabni atas dhammah.', 'Tiga lagi → mansub.'],
  contoh: [
    { ar: 'يَا نُوحُ اهْبِطْ بِسَلَامٍ', ms: 'Wahai Nuh, turunlah dengan selamat...', ref: 'Hud: 48', quran: true, irab: [['يَا', 'حرف نداء مبني على السكون'], ['نُوحُ', 'منادى مفرد علم مبني على الضم في محل نصب']], sebab: 'Mufrad \'alam.' },
    { ar: 'يَا أَهْلَ الْكِتَابِ', ms: 'Wahai Ahli Kitab...', ref: 'Ali \'Imran: 64', quran: true, irab: [['أَهْلَ', 'منادى مضاف منصوب وعلامة نصبه الفتحة الظاهرة'], ['الْكِتَابِ', 'مضاف إليه مخفوض وعلامة خفضه الكسرة']], sebab: 'Munada mudhaf mansub.' }
  ],
  soalan: [
    { id: 'munada-1', t: 'mcq', d: 1, k: 'munada', q: 'Apakah hukum [[زَيْدُ]] dalam [[يَا زَيْدُ]]?', ar: 'يَا زَيْدُ', o: ['Marfu\' dengan dhammah', 'Mabni atas dhammah dalam mahal nasab', 'Mansub', 'Majrur'], a: 1, e: 'Munada mufrad \'alam mabni atas dhammah.' },
    { id: 'munada-2', t: 'match', d: 2, k: 'munada', q: 'Padankan munada dengan jenisnya:', p: [['يَا زَيْدُ', 'Mufrad \'alam'], ['يَا عَبْدَ اللَّهِ', 'Mudhaf'], ['يَا طَالِعًا جَبَلًا', 'Syabih bil-mudhaf'], ['يَا رَجُلًا خُذْ بِيَدِي', 'Nakirah ghairu maqsudah']], e: 'Rujuk jadual dalam nota.' },
    { id: 'munada-3', t: 'error', d: 2, k: 'munada', q: 'Cari kalimah yang salah:', w: ['يَا', 'عَبْدُ', 'اللَّهِ'], a: 1, fix: 'عَبْدَ', e: 'Munada mudhaf mansub: [[يَا عَبْدَ اللَّهِ]].' },
    { id: 'munada-4', t: 'tf', d: 1, k: 'munada', q: 'Munada nakirah maqsudah mabni atas dhammah.', a: true, e: '[[فَيُبْنَيَانِ عَلَى الضَّمِّ مِنْ غَيْرِ تَنْوِينٍ]].' }
  ]
},

/* ----------------------------------------------------------------- 24 */
{
  id: 'liajlih', no: 24,
  ar: 'بَابُ الْمَفْعُولِ مِنْ أَجْلِهِ', ms: 'Bab Maf\'ul Min Ajlih (Sebab)',
  ringkas: 'Masdar mansub yang menerangkan sebab perbuatan.',
  matan: [
    { ar: 'وَهُوَ الِاسْمُ الْمَنْصُوبُ الَّذِي يُذْكَرُ بَيَانًا لِسَبَبِ وُقُوعِ الْفِعْلِ، نَحْوُ قَوْلِكَ: قَامَ زَيْدٌ إِجْلَالًا لِعَمْرٍو، وَقَصَدْتُكَ ابْتِغَاءَ مَعْرُوفِكَ.', ms: 'Ia ialah isim yang mansub yang disebut untuk menerangkan sebab berlakunya perbuatan, seperti katamu: Zaid berdiri kerana memuliakan \'Amr; aku menuju kepadamu kerana mengharapkan kebaikanmu.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Maf\'ul li ajlih menjawab soalan [[لِمَاذَا؟]] (mengapa?). Biasanya ia <b>masdar qalbi</b> (perbuatan hati) seperti [[إِجْلَالًا]]، [[رَغْبَةً]]، [[خَوْفًا]]، [[ابْتِغَاءَ]].</p>
      <p>Ia boleh ditakwil dengan lam ta\'lil: [[قَامَ زَيْدٌ إِجْلَالًا]] = [[قَامَ لِأَجْلِ الْإِجْلَالِ]].</p>` }
  ],
  kesalahan: ['Mengelirukan dengan hal: [[جِئْتُ رَغْبَةً]] (kerana ingin) — maf\'ul li ajlih, bukan hal.'],
  rumusan: ['Isim mansub menerangkan sebab perbuatan.'],
  contoh: [
    { ar: 'يُنْفِقُونَ أَمْوَالَهُمُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ', ms: 'Mereka membelanjakan harta mereka kerana mencari keredaan Allah.', ref: 'Al-Baqarah: 265', quran: true, irab: [['ابْتِغَاءَ', 'مفعول لأجله منصوب وعلامة نصبه الفتحة الظاهرة، وهو مضاف']], sebab: 'Menerangkan sebab infaq.' },
    { ar: 'يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ', ms: 'Mereka menyumbat jari ke telinga kerana (bunyi) petir, kerana takut mati.', ref: 'Al-Baqarah: 19', quran: true, irab: [['حَذَرَ', 'مفعول لأجله منصوب وعلامة نصبه الفتحة الظاهرة، وهو مضاف']], sebab: 'Sebab perbuatan: takut mati.' }
  ],
  soalan: [
    { id: 'liajlih-1', t: 'mcq', d: 1, j: 'kedudukan', k: 'liajlih', q: 'Apakah kedudukan [[احْتِرَامًا]]?', ar: 'وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْمُعَلِّمِ', o: ['Hal', 'Maf\'ul li ajlih', 'Tamyiz', 'Maf\'ul mutlaq'], a: 1, e: 'Menerangkan sebab berdiri: maf\'ul li ajlih.' },
    { id: 'liajlih-2', t: 'tf', d: 1, k: 'liajlih', q: 'Maf\'ul li ajlih menjawab soalan "mengapa?".', a: true, e: 'Ia menerangkan sebab berlakunya perbuatan.' },
    { id: 'liajlih-3', t: 'fill', d: 2, k: 'liajlih', q: 'Lengkapkan contoh matan:', ar: 'وَقَصَدْتُكَ ___ مَعْرُوفِكَ', o: ['ابْتِغَاءَ', 'ابْتِغَاءُ', 'ابْتِغَاءٍ', 'مُبْتَغِيًا'], a: 0, e: 'Maf\'ul li ajlih mansub: [[ابْتِغَاءَ]].' }
  ]
},

/* ----------------------------------------------------------------- 25 */
{
  id: 'maah', no: 25,
  ar: 'بَابُ الْمَفْعُولِ مَعَهُ', ms: 'Bab Maf\'ul Ma\'ah (Penyerta)',
  ringkas: 'Isim mansub selepas wau ma\'iyyah.',
  matan: [
    { ar: 'وَهُوَ الِاسْمُ الْمَنْصُوبُ الَّذِي يُذْكَرُ لِبَيَانِ مَنْ فُعِلَ مَعَهُ الْفِعْلُ، نَحْوُ قَوْلِكَ: جَاءَ الْأَمِيرُ وَالْجَيْشَ، وَاسْتَوَى الْمَاءُ وَالْخَشَبَةَ.', ms: 'Ia ialah isim yang mansub yang disebut untuk menerangkan siapa (atau apa) yang perbuatan dilakukan bersamanya, seperti katamu: Amir datang bersama tentera; air itu menjadi paras bersama kayu itu.' },
    { ar: 'وَأَمَّا خَبَرُ «كَانَ» وَأَخَوَاتِهَا، وَاسْمُ «إِنَّ» وَأَخَوَاتِهَا، فَقَدْ تَقَدَّمَ ذِكْرُهُمَا فِي الْمَرْفُوعَاتِ، وَكَذَلِكَ التَّوَابِعُ فَقَدْ تَقَدَّمَتْ هُنَاكَ.', ms: 'Adapun khabar kana dan saudaranya serta isim inna dan saudaranya, kedua-duanya telah disebut dalam (bab) marfu\'at; dan demikian juga tawabi\' (pengikut-pengikut), telah disebut di sana.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Maf\'ul ma\'ah ialah isim mansub selepas <b>wau yang bermakna [[مَعَ]]</b> (bersama). Dalam [[اسْتَوَى الْمَاءُ وَالْخَشَبَةَ]], kayu tidak "naras", maka tidak boleh \'ataf; makna yang sesuai hanyalah "bersama".</p>` },
    { t: 'Perbandingan: Wau \'Ataf dan Wau Ma\'iyyah', h: `<table class="tbl"><tr><th>\'Ataf</th><th>Ma\'iyyah</th></tr><tr><td>[[جَاءَ الْأَمِيرُ وَالْجَيْشُ]] — kedua-duanya pelaku</td><td>[[جَاءَ الْأَمِيرُ وَالْجَيْشَ]] — menekankan "bersama"</td></tr><tr><td>Ma\'tuf ikut i\'rab</td><td>Sentiasa mansub</td></tr></table>
      <p>Dalam contoh [[جَاءَ الْأَمِيرُ وَالْجَيْشَ]], kedua-dua wajh (\'ataf dan ma\'iyyah) harus; dalam [[اسْتَوَى الْمَاءُ وَالْخَشَبَةَ]] hanya ma\'iyyah.</p>` }
  ],
  kesalahan: ['Menyangka setiap wau sebagai \'ataf.', 'Merafa\'kan [[الْخَشَبَةَ]] — makna \'ataf tidak sah.'],
  rumusan: ['Isim mansub selepas wau bermakna [[مَعَ]].', 'Khabar kana, isim inna dan tawabi\' telah disebut sebelumnya.'],
  contoh: [
    { ar: 'سِرْتُ وَالنِّيلَ', ms: 'Aku berjalan bersama (menyusuri) Sungai Nil.', irab: [['الْوَاوُ', 'واو المعية حرف مبني على الفتح'], ['النِّيلَ', 'مفعول معه منصوب وعلامة نصبه الفتحة الظاهرة']], sebab: 'Sungai tidak berjalan; maka makna \'ataf tidak sah.' }
  ],
  soalan: [
    { id: 'maah-1', t: 'mcq', d: 1, k: 'maah', q: 'Wau sebelum maf\'ul ma\'ah bermakna:', o: ['Dan (\'ataf)', 'Bersama (مَعَ)', 'Demi (qasam)', 'Sedangkan (hal)'], a: 1, e: 'Wau ma\'iyyah bermakna [[مَعَ]].' },
    { id: 'maah-2', t: 'mcq', d: 2, j: 'kedudukan', k: 'maah', q: 'Apakah kedudukan [[الْخَشَبَةَ]]?', ar: 'اسْتَوَى الْمَاءُ وَالْخَشَبَةَ', o: ['Ma\'tuf', 'Maf\'ul ma\'ah', 'Maf\'ul bih', 'Hal'], a: 1, e: 'Hanya makna "bersama" yang sah.' },
    { id: 'maah-3', t: 'tf', d: 2, k: 'maah', q: 'Dalam [[جَاءَ الْأَمِيرُ وَالْجَيْشُ]] (dengan rafa\'), [[الْجَيْشُ]] ialah ma\'tuf.', ar: 'جَاءَ الْأَمِيرُ وَالْجَيْشُ', a: true, e: 'Dengan rafa\' ia \'ataf atas [[الْأَمِيرُ]]; dengan nasab ia maf\'ul ma\'ah.' }
  ]
},

/* ----------------------------------------------------------------- 26 */
{
  id: 'makhfudat', no: 26,
  ar: 'بَابُ مَخْفُوضَاتِ الْأَسْمَاءِ', ms: 'Bab Isim-isim yang Makhfudh',
  ringkas: 'Khafadh dengan huruf, dengan idhafah, dan tabi\'.',
  matan: [
    { ar: 'الْمَخْفُوضَاتُ ثَلَاثَةُ أَقْسَامٍ: مَخْفُوضٌ بِالْحَرْفِ، وَمَخْفُوضٌ بِالْإِضَافَةِ، وَتَابِعٌ لِلْمَخْفُوضِ.', ms: 'Isim-isim makhfudh ada tiga bahagian: makhfudh dengan huruf, makhfudh dengan idhafah, dan pengikut bagi yang makhfudh.' },
    { ar: 'فَأَمَّا الْمَخْفُوضُ بِالْحَرْفِ فَهُوَ مَا يُخْفَضُ بِمِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي، وَرُبَّ، وَالْبَاءِ، وَالْكَافِ، وَاللَّامِ، وَبِحُرُوفِ الْقَسَمِ، وَهِيَ: الْوَاوُ، وَالْبَاءُ، وَالتَّاءُ، وَبِوَاوِ رُبَّ، وَبِمُذْ، وَمُنْذُ.', ms: 'Adapun yang makhfudh dengan huruf ialah yang dikhafadhkan dengan min, ila, \'an, \'ala, fi, rubba, ba, kaf, lam; dengan huruf qasam iaitu wau, ba dan ta; dengan wau rubba; dan dengan mudz dan mundzu.' },
    { ar: 'وَأَمَّا مَا يُخْفَضُ بِالْإِضَافَةِ فَنَحْوُ قَوْلِكَ: غُلَامُ زَيْدٍ، وَهُوَ عَلَى قِسْمَيْنِ: مَا يُقَدَّرُ بِاللَّامِ، وَمَا يُقَدَّرُ بِمِنْ؛ فَالَّذِي يُقَدَّرُ بِاللَّامِ نَحْوُ: غُلَامُ زَيْدٍ، وَالَّذِي يُقَدَّرُ بِمِنْ نَحْوُ: ثَوْبُ خَزٍّ، وَبَابُ سَاجٍ، وَخَاتَمُ حَدِيدٍ، وَمَا أَشْبَهَ ذَلِكَ.', ms: 'Adapun yang dikhafadhkan dengan idhafah, seperti katamu: budak Zaid. Ia dua bahagian: yang ditakdirkan dengan lam dan yang ditakdirkan dengan min. Yang ditakdirkan dengan lam seperti: budak (milik) Zaid; dan yang ditakdirkan dengan min seperti: baju (daripada) sutera, pintu (daripada) kayu jati, cincin (daripada) besi, dan yang seumpamanya.' }
  ],
  nota: [
    { t: 'Maksud Matan', h: `<p>Bab terakhir menghimpunkan sebab-sebab khafadh:</p><ol><li><b>Huruf jar</b>: [[مِنَ الْمَسْجِدِ]]</li><li><b>Idhafah</b>: [[كِتَابُ زَيْدٍ]]</li><li><b>Tabi\'</b>: [[مَرَرْتُ بِزَيْدٍ الْعَاقِلِ]]</li></ol>` },
    { t: 'Idhafah', h: `<ul><li><b>Mudhaf</b>: kalimah pertama, di-i\'rab mengikut kedudukannya dan <b>tidak bertanwin</b> serta tidak ber-ال (pada idhafah mahdhah).</li><li><b>Mudhaf ilaih</b>: kalimah kedua, sentiasa makhfudh.</li></ul>
      <table class="tbl"><tr><th>Taqdir</th><th>Contoh</th><th>Makna</th></tr><tr><td>[[اللَّام]]</td><td>[[غُلَامُ زَيْدٍ]]</td><td>milik / kepunyaan</td></tr><tr><td>[[مِنْ]]</td><td>[[خَاتَمُ حَدِيدٍ]]</td><td>jenis / bahan</td></tr></table>
      <p class="muted">Syarah menambah bahagian ketiga, idhafah dengan makna [[فِي]]: [[مَكْرُ اللَّيْلِ]] (Saba\': 33).</p>` },
    { t: 'Huruf Jar Tambahan dalam Bab Ini', h: `<p>Berbanding Bab Kalam, di sini disebut tambahan: [[وَاوُ رُبَّ]]، [[مُذْ]]، [[مُنْذُ]]. Contoh: [[مَا رَأَيْتُهُ مُذْ يَوْمِ الْجُمُعَةِ]].</p>` }
  ],
  kesalahan: ['Mentanwinkan mudhaf: [[كِتَابٌ زَيْدٍ]] ✘.', 'Memasukkan ال pada mudhaf dalam idhafah mahdhah: [[الْكِتَابُ زَيْدٍ]] ✘.'],
  rumusan: ['Makhfudat: dengan huruf, dengan idhafah, tabi\'.', 'Idhafah dengan makna lam atau min.'],
  contoh: [
    { ar: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', ms: 'Dengan nama Allah Yang Maha Pemurah lagi Maha Penyayang.', ref: 'Al-Fatihah: 1', quran: true, irab: [['بِـ', 'حرف جر مبني على الكسر'], ['اسْمِ', 'اسم مخفوض بالباء وعلامة خفضه الكسرة، وهو مضاف'], ['اللَّهِ', 'لفظ الجلالة مضاف إليه مخفوض وعلامة خفضه الكسرة'], ['الرَّحْمَنِ', 'نعت للفظ الجلالة مخفوض وعلامة خفضه الكسرة'], ['الرَّحِيمِ', 'نعت ثان مخفوض وعلامة خفضه الكسرة']], sebab: 'Tiga sebab khafadh dalam satu ayat: huruf ([[اسْمِ]]), idhafah ([[اللَّهِ]]), tabi\' ([[الرَّحْمَنِ]]، [[الرَّحِيمِ]]).', wajh: 'Jar-majrur [[بِسْمِ]] berkait dengan fi\'il atau isim yang dibuang (seperti [[أَبْتَدِئُ]]); perincian taqdir berbeza antara ulama.' },
    { ar: 'خَاتَمُ حَدِيدٍ', ms: 'Cincin besi.', irab: [['خَاتَمُ', 'بحسب موقعه، وهو مضاف'], ['حَدِيدٍ', 'مضاف إليه مخفوض وعلامة خفضه الكسرة الظاهرة']], sebab: 'Idhafah bermakna [[مِنْ]].' }
  ],
  soalan: [
    { id: 'makhfudat-1', t: 'mcq', d: 1, k: 'makhfudat', q: 'Berapakah bahagian makhfudat?', o: ['Dua', 'Tiga', 'Empat', 'Lima'], a: 1, e: 'Dengan huruf, dengan idhafah, dan tabi\'.' },
    { id: 'makhfudat-2', t: 'mcq', d: 2, k: 'makhfudat', q: '[[ثَوْبُ خَزٍّ]] — idhafah ini ditakdirkan dengan huruf:', ar: 'ثَوْبُ خَزٍّ', o: ['اللَّام', 'مِنْ', 'فِي', 'الْبَاء'], a: 1, e: 'Baju daripada sutera: menunjukkan bahan, ditakdirkan [[مِنْ]].' },
    { id: 'makhfudat-3', t: 'error', d: 2, k: 'makhfudat', q: 'Cari kalimah yang salah:', w: ['هَذَا', 'كِتَابٌ', 'زَيْدٍ'], a: 1, fix: 'كِتَابُ', e: 'Mudhaf tidak bertanwin: [[هَذَا كِتَابُ زَيْدٍ]].' },
    { id: 'makhfudat-4', t: 'mcq', d: 2, j: 'amil', k: 'makhfudat', q: 'Apakah \'amil yang mengkhafadhkan [[اللَّهِ]] dalam [[بِسْمِ اللَّهِ]]?', ar: 'بِسْمِ اللَّهِ', o: ['Huruf ba', 'Idhafah (mudhaf اسْمِ)', 'Tabi\'', 'Huruf qasam'], a: 1, e: '[[اسْمِ]] dikhafadhkan oleh ba; [[اللَّهِ]] dikhafadhkan kerana idhafah.' },
    { id: 'makhfudat-5', t: 'tf', d: 1, k: 'makhfudat', q: '[[مُذْ]] dan [[مُنْذُ]] disebut sebagai huruf khafadh dalam bab ini.', a: true, e: '[[وَبِمُذْ، وَمُنْذُ]].' },
    { id: 'makhfudat-6', t: 'order', d: 2, k: 'makhfudat', q: 'Susun frasa: "Dengan nama Allah"', w: ['بِسْمِ', 'اللَّهِ'], e: '[[بِسْمِ اللَّهِ]] — jar, majrur yang mudhaf, mudhaf ilaih.' }
  ]
}
);
