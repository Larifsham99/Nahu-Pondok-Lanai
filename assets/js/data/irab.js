/* =========================================================================
   NAHU PONDOK — Bank Ayat Latihan I'rab
   Setiap perkataan: w (lafaz), j (jenis: i/f/h), m (kedudukan), h (hukum),
   t (tanda i'rab; '' jika mabni), s (sebab, BM), x (i'rab penuh).
   h: 'رفع' | 'نصب' | 'خفض' | 'جزم' | 'مبني'
   d: tahap kesukaran 1–3. Semua ayat ialah contoh penyusun (bukan matan),
   kecuali yang bertanda `ref` (al-Quran).
   ========================================================================= */
window.NP = window.NP || {};

NP.IRAB = [
  { id: 'ir1', d: 1, ar: 'جَاءَ زَيْدٌ', ms: 'Zaid telah datang.', w: [
    { w: 'جَاءَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi sentiasa mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'زَيْدٌ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Isim marfu\' yang disebut fi\'ilnya sebelumnya; isim mufrad dirafa\'kan dengan dhammah.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir2', d: 1, ar: 'زَيْدٌ قَائِمٌ', ms: 'Zaid berdiri.', w: [
    { w: 'زَيْدٌ', j: 'i', m: 'مبتدأ', h: 'رفع', t: 'الضمة الظاهرة', s: 'Isim di permulaan, bebas daripada \'amil lafzi.', x: 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'قَائِمٌ', j: 'i', m: 'خبر', h: 'رفع', t: 'الضمة الظاهرة', s: 'Isim yang disandarkan kepada mubtada\'.', x: 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir3', d: 1, ar: 'قَرَأَ مُحَمَّدٌ الْكِتَابَ', ms: 'Muhammad telah membaca kitab itu.', w: [
    { w: 'قَرَأَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'مُحَمَّدٌ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku perbuatan membaca.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'الْكِتَابَ', j: 'i', m: 'مفعول به', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Perbuatan membaca terkena padanya.', x: 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir4', d: 1, ar: 'ذَهَبَ الطَّالِبُ إِلَى الْمَسْجِدِ', ms: 'Pelajar itu telah pergi ke masjid.', w: [
    { w: 'ذَهَبَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الطَّالِبُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku perbuatan pergi.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'إِلَى', j: 'h', m: 'حرف جر', h: 'مبني', t: '', s: 'Semua huruf mabni.', x: 'حرف جر مبني على السكون لا محل له من الإعراب' },
    { w: 'الْمَسْجِدِ', j: 'i', m: 'اسم مجرور', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dimasuki huruf jar [[إِلَى]].', x: 'اسم مخفوض بإلى وعلامة خفضه الكسرة الظاهرة على آخره' } ] },
  { id: 'ir5', d: 1, ar: 'الْمَسْجِدُ نَظِيفٌ', ms: 'Masjid itu bersih.', w: [
    { w: 'الْمَسْجِدُ', j: 'i', m: 'مبتدأ', h: 'رفع', t: 'الضمة الظاهرة', s: 'Isim di permulaan ayat.', x: 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'نَظِيفٌ', j: 'i', m: 'خبر', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelengkap makna mubtada\'.', x: 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir6', d: 1, ar: 'جَاءَ الْمُسْلِمُونَ', ms: 'Orang-orang Islam telah datang.', w: [
    { w: 'جَاءَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الْمُسْلِمُونَ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الواو', s: 'Jamak muzakkar salim dirafa\'kan dengan wau ganti dhammah.', x: 'فاعل مرفوع وعلامة رفعه الواو نيابة عن الضمة لأنه جمع مذكر سالم' } ] },
  { id: 'ir7', d: 1, ar: 'جَاءَ الطَّالِبَانِ', ms: 'Dua orang pelajar telah datang.', w: [
    { w: 'جَاءَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الطَّالِبَانِ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الألف', s: 'Muthanna dirafa\'kan dengan alif ganti dhammah.', x: 'فاعل مرفوع وعلامة رفعه الألف نيابة عن الضمة لأنه مثنى' } ] },
  { id: 'ir8', d: 2, ar: 'لَمْ يَكْتُبْ عَلِيٌّ الدَّرْسَ', ms: '\'Ali tidak menulis pelajaran itu.', w: [
    { w: 'لَمْ', j: 'h', m: 'حرف جزم', h: 'مبني', t: '', s: 'Huruf nafi, jazam dan qalb; mabni.', x: 'حرف نفي وجزم وقلب مبني على السكون لا محل له من الإعراب' },
    { w: 'يَكْتُبْ', j: 'f', m: 'فعل مضارع', h: 'جزم', t: 'السكون', s: 'Dimasuki [[لَمْ]]; mudhari\' sahih akhir dijazamkan dengan sukun.', x: 'فعل مضارع مجزوم بلم وعلامة جزمه السكون' },
    { w: 'عَلِيٌّ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku perbuatan menulis.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'الدَّرْسَ', j: 'i', m: 'مفعول به', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Yang terkena perbuatan.', x: 'مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir9', d: 2, ar: 'لَنْ يَخْرُجَ الْوَلَدُ', ms: 'Budak itu tidak akan keluar.', w: [
    { w: 'لَنْ', j: 'h', m: 'حرف نصب', h: 'مبني', t: '', s: 'Huruf nafi, nasab dan istiqbal; mabni.', x: 'حرف نفي ونصب واستقبال مبني على السكون لا محل له من الإعراب' },
    { w: 'يَخْرُجَ', j: 'f', m: 'فعل مضارع', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Dimasuki [[لَنْ]] daripada nawasib.', x: 'فعل مضارع منصوب بلن وعلامة نصبه الفتحة الظاهرة على آخره' },
    { w: 'الْوَلَدُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku perbuatan keluar.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir10', d: 2, ar: 'كَانَ الْجَوُّ بَارِدًا', ms: 'Cuaca itu sejuk.', w: [
    { w: 'كَانَ', j: 'f', m: 'فعل ماض ناقص', h: 'مبني', t: '', s: 'Fi\'il madhi naqis mabni atas fathah.', x: 'فعل ماض ناقص مبني على الفتح لا محل له من الإعراب' },
    { w: 'الْجَوُّ', j: 'i', m: 'اسم كان', h: 'رفع', t: 'الضمة الظاهرة', s: 'Kana merafa\'kan isimnya.', x: 'اسم كان مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'بَارِدًا', j: 'i', m: 'خبر كان', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Kana menasabkan khabarnya.', x: 'خبر كان منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir11', d: 2, ar: 'إِنَّ الْعِلْمَ نُورٌ', ms: 'Sesungguhnya ilmu itu cahaya.', w: [
    { w: 'إِنَّ', j: 'h', m: 'حرف توكيد ونصب', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف توكيد ونصب مبني على الفتح لا محل له من الإعراب' },
    { w: 'الْعِلْمَ', j: 'i', m: 'اسم إن', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Inna menasabkan isimnya.', x: 'اسم إن منصوب وعلامة نصبه الفتحة الظاهرة على آخره' },
    { w: 'نُورٌ', j: 'i', m: 'خبر إن', h: 'رفع', t: 'الضمة الظاهرة', s: 'Inna merafa\'kan khabarnya.', x: 'خبر إن مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir12', d: 2, ar: 'جَاءَ زَيْدٌ رَاكِبًا', ms: 'Zaid datang dalam keadaan menunggang.', w: [
    { w: 'جَاءَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'زَيْدٌ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'رَاكِبًا', j: 'i', m: 'حال', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Menerangkan keadaan Zaid ketika datang.', x: 'حال منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir13', d: 2, ar: 'سَافَرَ أَحْمَدُ لَيْلًا', ms: 'Ahmad bermusafir pada waktu malam.', w: [
    { w: 'سَافَرَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'أَحْمَدُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku; ghairu munsarif (tanpa tanwin) tetapi rafa\'nya dengan dhammah.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'لَيْلًا', j: 'i', m: 'ظرف زمان', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Isim masa dengan makna [[فِي]].', x: 'ظرف زمان منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir14', d: 2, ar: 'كِتَابُ الطَّالِبِ جَدِيدٌ', ms: 'Buku pelajar itu baru.', w: [
    { w: 'كِتَابُ', j: 'i', m: 'مبتدأ', h: 'رفع', t: 'الضمة الظاهرة', s: 'Isim di permulaan; ia mudhaf (tanpa tanwin).', x: 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره، وهو مضاف' },
    { w: 'الطَّالِبِ', j: 'i', m: 'مضاف إليه', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dikhafadhkan kerana idhafah.', x: 'مضاف إليه مخفوض وعلامة خفضه الكسرة الظاهرة على آخره' },
    { w: 'جَدِيدٌ', j: 'i', m: 'خبر', h: 'رفع', t: 'الضمة الظاهرة', s: 'Khabar bagi [[كِتَابُ]].', x: 'خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir15', d: 2, ar: 'سَلَّمَ الطَّالِبُ عَلَى الْمُعَلِّمِ الْجَدِيدِ', ms: 'Pelajar itu memberi salam kepada guru yang baru.', w: [
    { w: 'سَلَّمَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الطَّالِبُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'عَلَى', j: 'h', m: 'حرف جر', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف جر مبني على السكون لا محل له من الإعراب' },
    { w: 'الْمُعَلِّمِ', j: 'i', m: 'اسم مجرور', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dimasuki huruf jar [[عَلَى]].', x: 'اسم مخفوض بعلى وعلامة خفضه الكسرة الظاهرة على آخره' },
    { w: 'الْجَدِيدِ', j: 'i', m: 'نعت', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Na\'at mengikut man\'ut yang makhfudh.', x: 'نعت للمعلم مخفوض وعلامة خفضه الكسرة الظاهرة على آخره' } ] },
  { id: 'ir16', d: 2, ar: 'ضُرِبَ اللِّصُّ', ms: 'Pencuri itu telah dipukul.', w: [
    { w: 'ضُرِبَ', j: 'f', m: 'فعل ماض مبني للمجهول', h: 'مبني', t: '', s: 'Fi\'il madhi majhul mabni atas fathah.', x: 'فعل ماض مبني للمجهول مبني على الفتح لا محل له من الإعراب' },
    { w: 'اللِّصُّ', j: 'i', m: 'نائب فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Menggantikan fa\'il yang tidak disebut.', x: 'نائب فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir17', d: 3, ar: 'الطُّلَّابُ يَكْتُبُونَ', ms: 'Para pelajar sedang menulis.', w: [
    { w: 'الطُّلَّابُ', j: 'i', m: 'مبتدأ', h: 'رفع', t: 'الضمة الظاهرة', s: 'Jamak taksir dirafa\'kan dengan dhammah.', x: 'مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'يَكْتُبُونَ', j: 'f', m: 'فعل مضارع', h: 'رفع', t: 'ثبوت النون', s: 'Af\'al khamsah tanpa nasib/jazim: rafa\' dengan tetapnya nun. Wau ialah fa\'il; jumlah menjadi khabar.', x: 'فعل مضارع مرفوع وعلامة رفعه ثبوت النون لأنه من الأفعال الخمسة، والواو ضمير متصل مبني على السكون في محل رفع فاعل، والجملة في محل رفع خبر المبتدأ' } ] },
  { id: 'ir18', d: 3, ar: 'إِنَّ الْمُسْلِمَاتِ صَادِقَاتٌ', ms: 'Sesungguhnya wanita-wanita Islam itu benar.', w: [
    { w: 'إِنَّ', j: 'h', m: 'حرف توكيد ونصب', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف توكيد ونصب مبني على الفتح لا محل له من الإعراب' },
    { w: 'الْمُسْلِمَاتِ', j: 'i', m: 'اسم إن', h: 'نصب', t: 'الكسرة', s: 'Jamak muannath salim dinasabkan dengan kasrah ganti fathah.', x: 'اسم إن منصوب وعلامة نصبه الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم' },
    { w: 'صَادِقَاتٌ', j: 'i', m: 'خبر إن', h: 'رفع', t: 'الضمة الظاهرة', s: 'Khabar inna marfu\'.', x: 'خبر إن مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir19', d: 3, ar: 'لَمْ يَدْعُ الرَّجُلُ', ms: 'Lelaki itu tidak berdoa.', w: [
    { w: 'لَمْ', j: 'h', m: 'حرف جزم', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف نفي وجزم وقلب مبني على السكون لا محل له من الإعراب' },
    { w: 'يَدْعُ', j: 'f', m: 'فعل مضارع', h: 'جزم', t: 'حذف حرف العلة', s: 'Mu\'tal akhir (wau): jazam dengan membuang huruf \'illah.', x: 'فعل مضارع مجزوم بلم وعلامة جزمه حذف حرف العلة وهو الواو، والضمة قبلها دليل عليها' },
    { w: 'الرَّجُلُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' } ] },
  { id: 'ir20', d: 3, ar: 'مَرَّ الطِّفْلُ بِـ إِبْرَاهِيمَ', disp: 'مَرَّ الطِّفْلُ بِإِبْرَاهِيمَ', ms: 'Kanak-kanak itu melalui Ibrahim.', w: [
    { w: 'مَرَّ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الطِّفْلُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'بِـ', j: 'h', m: 'حرف جر', h: 'مبني', t: '', s: 'Huruf jar ba mabni atas kasrah.', x: 'حرف جر مبني على الكسر لا محل له من الإعراب' },
    { w: 'إِبْرَاهِيمَ', j: 'i', m: 'اسم مجرور', h: 'خفض', t: 'الفتحة', s: 'Ghairu munsarif (\'alamiyyah dan \'ujmah): dikhafadhkan dengan fathah ganti kasrah.', x: 'اسم مخفوض بالباء وعلامة خفضه الفتحة نيابة عن الكسرة لأنه اسم لا ينصرف' } ] },
  { id: 'ir21', d: 3, ar: 'لَا رَجُلَ فِي الدَّارِ', ms: 'Tiada seorang lelaki pun di dalam rumah.', w: [
    { w: 'لَا', j: 'h', m: 'نافية للجنس', h: 'مبني', t: '', s: 'Huruf mabni yang beramal seperti [[إِنَّ]].', x: 'نافية للجنس تعمل عمل إن مبنية على السكون لا محل لها من الإعراب' },
    { w: 'رَجُلَ', j: 'i', m: 'اسم لا', h: 'مبني', t: '', s: 'Isim la mufrad: mabni atas fathah dalam mahal nasab.', x: 'اسم لا مبني على الفتح في محل نصب' },
    { w: 'فِي', j: 'h', m: 'حرف جر', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف جر مبني على السكون لا محل له من الإعراب' },
    { w: 'الدَّارِ', j: 'i', m: 'اسم مجرور', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dimasuki [[فِي]]; jar-majrur berkait dengan khabar la yang dibuang.', x: 'اسم مخفوض بفي وعلامة خفضه الكسرة الظاهرة، والجار والمجرور متعلق بمحذوف خبر لا' } ] },
  { id: 'ir22', d: 3, ar: 'يَا عَبْدَ اللَّهِ', ms: 'Wahai \'Abdullah.', w: [
    { w: 'يَا', j: 'h', m: 'حرف نداء', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف نداء مبني على السكون لا محل له من الإعراب' },
    { w: 'عَبْدَ', j: 'i', m: 'منادى', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Munada mudhaf: mansub.', x: 'منادى منصوب وعلامة نصبه الفتحة الظاهرة، وهو مضاف' },
    { w: 'اللَّهِ', j: 'i', m: 'مضاف إليه', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dikhafadhkan kerana idhafah.', x: 'لفظ الجلالة مضاف إليه مخفوض وعلامة خفضه الكسرة الظاهرة' } ] },
  { id: 'ir23', d: 3, ar: 'قَامَ الْقَوْمُ إِلَّا زَيْدًا', ms: 'Kaum itu berdiri kecuali Zaid.', w: [
    { w: 'قَامَ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi mabni atas fathah.', x: 'فعل ماض مبني على الفتح لا محل له من الإعراب' },
    { w: 'الْقَوْمُ', j: 'i', m: 'فاعل', h: 'رفع', t: 'الضمة الظاهرة', s: 'Pelaku.', x: 'فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره' },
    { w: 'إِلَّا', j: 'h', m: 'حرف استثناء', h: 'مبني', t: '', s: 'Huruf mabni.', x: 'حرف استثناء مبني على السكون لا محل له من الإعراب' },
    { w: 'زَيْدًا', j: 'i', m: 'مستثنى', h: 'نصب', t: 'الفتحة الظاهرة', s: 'Kalam tam mujab: wajib nasab.', x: 'مستثنى بإلا منصوب وعلامة نصبه الفتحة الظاهرة على آخره' } ] },
  { id: 'ir24', d: 3, ar: 'لِـ يُنْفِقْ ذُو سَعَةٍ', disp: 'لِيُنْفِقْ ذُو سَعَةٍ', ref: 'At-Talaq: 7', ms: 'Hendaklah orang yang berkemampuan memberi nafkah...', w: [
    { w: 'لِـ', j: 'h', m: 'لام الأمر', h: 'مبني', t: '', s: 'Lam amar, huruf jazam mabni atas kasrah.', x: 'لام الأمر حرف جزم مبني على الكسر لا محل له من الإعراب' },
    { w: 'يُنْفِقْ', j: 'f', m: 'فعل مضارع', h: 'جزم', t: 'السكون', s: 'Dijazamkan oleh lam amar.', x: 'فعل مضارع مجزوم بلام الأمر وعلامة جزمه السكون' },
    { w: 'ذُو', j: 'i', m: 'فاعل', h: 'رفع', t: 'الواو', s: 'Daripada al-asma\' al-khamsah: rafa\' dengan wau.', x: 'فاعل مرفوع وعلامة رفعه الواو نيابة عن الضمة لأنه من الأسماء الخمسة، وهو مضاف' },
    { w: 'سَعَةٍ', j: 'i', m: 'مضاف إليه', h: 'خفض', t: 'الكسرة الظاهرة', s: 'Dikhafadhkan kerana idhafah.', x: 'مضاف إليه مخفوض وعلامة خفضه الكسرة الظاهرة على آخره' } ] },
  { id: 'ir25', d: 3, ar: 'رَأَيْتُ الْمُعَلِّمَيْنِ', ms: 'Aku melihat dua orang guru.', note: 'Fi\'il [[رَأَيْتُ]] mengandungi fa\'il dhamir [[تُ]]. Ada dua wajh i\'rab fi\'il madhi di sini (lihat nota Bab Fi\'il).', w: [
    { w: 'رَأَيْتُ', j: 'f', m: 'فعل ماض', h: 'مبني', t: '', s: 'Fi\'il madhi; bersambung dengan ta fa\'il.', x: 'فعل ماض مبني على السكون لاتصاله بتاء الفاعل (أو: على فتح مقدر)، والتاء ضمير متصل مبني على الضم في محل رفع فاعل' },
    { w: 'الْمُعَلِّمَيْنِ', j: 'i', m: 'مفعول به', h: 'نصب', t: 'الياء', s: 'Muthanna dinasabkan dengan ya ganti fathah.', x: 'مفعول به منصوب وعلامة نصبه الياء نيابة عن الفتحة لأنه مثنى' } ] }
];

/* Pilihan jawapan untuk menjana soalan tahap I'rab */
NP.IRAB_OPSYEN = {
  j: { i: 'اسم', f: 'فعل', h: 'حرف' },
  h: ['رفع', 'نصب', 'خفض', 'جزم', 'مبني'],
  hLabel: { 'رفع': 'مرفوع', 'نصب': 'منصوب', 'خفض': 'مخفوض (مجرور)', 'جزم': 'مجزوم', 'مبني': 'مبني' },
  t: ['الضمة الظاهرة', 'الفتحة الظاهرة', 'الكسرة الظاهرة', 'السكون', 'الواو', 'الألف', 'الياء', 'الكسرة', 'الفتحة', 'ثبوت النون', 'حذف النون', 'حذف حرف العلة']
};

NP.IRAB_TAHAP = [
  { n: 1, t: 'Kenal Pasti Jenis Kalimah', d: 'Isim, fi\'il atau huruf?', icon: '①' },
  { n: 2, t: 'Kenal Pasti Kedudukan', d: 'Fa\'il, mubtada\', maf\'ul bih, ...', icon: '②' },
  { n: 3, t: 'Tentukan Hukum I\'rab', d: 'Marfu\', mansub, makhfudh, majzum atau mabni.', icon: '③' },
  { n: 4, t: 'Tentukan Tanda I\'rab', d: 'Dhammah, wau, alif, kasrah, ...', icon: '④' },
  { n: 5, t: 'Tentukan Sebab Hukum', d: 'Mengapa ia di-i\'rab begitu?', icon: '⑤' },
  { n: 6, t: 'I\'rab Lengkap', d: 'Pilih i\'rab penuh bagi setiap kalimah.', icon: '⑥' }
];
