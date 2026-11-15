# Nahu Sorof Pondok — Pelan Fasa 0

Status: **DRAF, menunggu pengesahan pemilik.** Tiada kod ditulis sebelum pelan ini disahkan.

---

## 1. Keputusan teknologi (dengan alasan)

| Perkara | Cadangan | Alasan / alternatif |
|---|---|---|
| App mudah alih | **Flutter 3.x**, Android dahulu (minSdk 26 = Android 8) | Satu kod untuk Android + iOS; sokongan RTL dan fon Arab baik. |
| Pengurusan keadaan | Riverpod + go_router | Mudah diuji, ringan. |
| Simpanan setempat | **Drift (SQLite)** dengan FTS5 untuk carian nota | Isar kini kurang diselenggara (pengarang asal berhenti). SQLite stabil pada telefon lama, mudah migrasi skema. |
| Backend | **Supabase** (Postgres + Row Level Security + Edge Functions + Storage) | Papan skor, lesen dan versi kandungan ialah data hubungan → SQL lebih sesuai. RLS memberi "setiap pengguna hanya akses datanya" secara terus. Firebase juga boleh, tetapi Cloud Functions memerlukan pelan Blaze dan kueri papan skor kumpulan lebih rumit. |
| Pelaporan ralat | **Sentry** (tanpa PII: `sendDefaultPii=false`, tiada IP, tiada nama) | Berfungsi dengan Supabase; Crashlytics menarik masuk Firebase penuh. |
| Panel admin | **Flutter Web** berkongsi pakej `nahu_core` | Logik pengesahan soalan, markah dan tandatangan kandungan ditulis **sekali** dan dikongsi app + admin + server-side test. Alternatif: React/Next.js (lebih banyak komponen jadual siap, tetapi dua bahasa untuk diselenggara). |
| Fon Arab | **Amiri** (lesen OFL) dibundel dalam app | Harakat jelas; Scheherazade New boleh dijadikan pilihan kedua dalam Tetapan. Tiada muat turun fon semasa runtime (offline). |
| Tandatangan kandungan | **Ed25519** | Kunci awam dalam app (bukan rahsia). Kunci peribadi hanya di mesin pemilik / rahsia Edge Function — tidak pernah dalam app. |

> ⚠️ **Kos:** Supabase percuma "berhenti" (paused) selepas 7 hari tanpa aktiviti — untuk jualan sebenar perlu **Supabase Pro (~USD 25/bulan)**. Sentry pelan percuma (5k ralat/bulan) memadai pada awal. Akaun Google Play Developer: USD 25 sekali.

## 2. Arsitektur

```
┌─────────────── App Flutter (offline-first) ───────────────┐
│ UI (BM, RTL utk Arab) → Riverpod → Repositori             │
│   • ContentRepo  ← SQLite (soalan, nota, versi kandungan) │
│   • ProgressRepo ← SQLite (percubaan, SRS, XP, lencana)   │
│   • LicenseRepo  ← token lesen bertandatangan (simpan     │
│                    selamat: flutter_secure_storage)       │
│   • SyncService  → giliran (outbox) → Supabase bila online│
│ nahu_core (Dart tulen): model, markah, hint, pengacak,    │
│   pengesah skema, SRS, pengesah tandatangan               │
└───────────────────────────────────────────────────────────┘
            │ HTTPS (hanya bila ada internet)
┌──────────── Supabase ─────────────────────────────────────┐
│ Auth · Postgres + RLS · Edge Functions:                   │
│   activate_license, deactivate_device, refresh_license,   │
│   submit_session (kira semula markah), content_manifest,  │
│   report_problem                                          │
│ Storage: pek kandungan bertandatangan (penuh + delta)     │
└───────────────────────────────────────────────────────────┘
            ▲
   Panel Admin (Flutter Web) — peranan pemilik / pembantu
```

**Struktur repo (monorepo):**
```
packages/nahu_core/   logik tulen + ujian unit
apps/mobile/          app Flutter
apps/admin/           panel admin Flutter Web (Fasa 2)
supabase/             migrasi SQL, polisi RLS, edge functions
tools/content_cli/    import JSON/CSV/Excel → sahkan → tandatangan pek
content/              soalan_1000.json, nota.json (asal, TIDAK diubah)
docs/
```

**Aliran kandungan:** fail JSON asal → `content_cli validate` → `content_cli pack --sign` → pek `.json.gz` + `.sig` dibundel dalam app sebagai aset. Pada pelancaran pertama pek diimport ke SQLite sekali sahaja (≈1 s); pelancaran seterusnya terus baca SQLite (sasaran mula < 3 s pada RAM 2GB).

## 3. Skema data

### 3.1 Kandungan (format input — dibaca terus, tidak diubah)
`soalan`: `id, bab, topik, tahap, soalan, pilihan[3–4], jawapan_idx, jawapan, hint1, hint2, hint3, penjelasan, nota_id, status`
`nota`: `{ "N01": { "tajuk", "isi" }, … }`

Pengesah skema akan menyemak (dan **melapor**, bukan membetulkan): id unik, `tahap` ∈ {Mudah, Sederhana, Susah}, 3–4 pilihan, `jawapan_idx` dalam julat, `pilihan[jawapan_idx] == jawapan`, `nota_id` wujud dalam nota, hint tidak kosong, teks Arab dinormalkan Unicode **hanya untuk perbandingan** (teks paparan kekal asal). Medan tambahan yang tidak dikenali diabaikan tanpa ralat → soalan baharu boleh ditambah tanpa ubah kod.

### 3.2 SQLite setempat
```
content_meta(version, pack_id, signed_at)
packs(pack_id, title, owned)              -- pek asas + pek tambahan
questions(id PK, pack_id, bab, topik, tahap, soalan, pilihan_json,
          jawapan_idx, jawapan, hint1, hint2, hint3, penjelasan,
          nota_id, status)
notes(id PK, pack_id, tajuk, isi) + notes_fts(FTS5)
bookmarks(note_id, created_at)
sessions(id UUID, mode, bab, tahap, started_at, ended_at, score,
         hints_used, synced)
attempts(session_id, question_id, chosen_idx, correct, time_ms,
         hints_shown, points)
srs(question_id PK, box, due_at, lapses)   -- Fasa 3
profile(display_name, xp, level, streak_days, last_daily_date)
badges(badge_id, earned_at)
outbox(id, kind, payload_json, created_at) -- utk sync
settings(font_scale, dark_mode, arabic_font)
```
Bab bagi setiap nota diterbitkan daripada soalan yang merujuknya (bab paling kerap), kerana `nota.json` tidak ada medan bab.

### 3.3 Postgres (Fasa 2)
```
profiles(user_id PK→auth.users, display_name, group_id, role)   -- tiada telefon/IC/lokasi
groups(id, code UNIQUE, name, type[kelas|asrama|pondok], institution_license_id)
licenses(id, code_hash UNIQUE, type[individu|institusi], max_devices,
         max_students, packs[], expires_at, revoked_at, created_by)
activations(license_id, user_id, device_id, activated_at, last_seen, revoked_at)
content_versions(version, channel[beta|stable], manifest, signature,
                 created_at, rolled_back)
sessions_server(id, user_id, mode, started_at, verified_score, flags)
attempts_server(session_id, question_id, chosen_idx, time_ms, hints_shown)
weekly_scores (VIEW/materialized)        -- papan skor mingguan/kumpulan
problem_reports(id, user_id, app_version, device_model, os, log_text,
                status[baru|selesai], handled_by)
announcements(id, title, body, starts_at, ends_at)
admins(user_id, role[pemilik|pembantu])
```
RLS: pengguna hanya `SELECT/INSERT` baris sendiri; `licenses` dan markah disahkan hanya boleh ditulis oleh Edge Function (service role); papan skor dibaca melalui view yang hanya mendedahkan `display_name` + markah.

## 4. Logik teras (dalam `nahu_core`, diuji unit)

- **Markah soalan:** betul = 10 + bonus laju `round(5 × masa_berbaki / had_masa)` (0–5); salah = 0.
- **Pengganda streak:** `min(1.0 + 0.1 × floor(betul_berturut / 3), 1.5)`; diset semula bila salah. Didarab pada (10 + bonus).
- **Hint:** hint1 −1, hint2 −2, hint3 −3 (berperingkat; hint2 hanya selepas hint1). Kos ditolak walaupun jawapan salah. Maksimum 3 paparan hint sesebuah sesi. Setiap hint direkod dalam `attempts.hints_shown`.
- **Pengacak:** Fisher–Yates dengan benih sesi; pilihan diacak dan `jawapan_idx` dipetakan semula; tiada soalan berulang dalam satu sesi.
- **Anti-manipulasi:** app hantar *peristiwa* (id soalan, pilihan, masa, hint), **bukan markah**. Server kira semula markah dengan kod yang sama, tolak masa mustahil (< 400 ms) dan sesi bertindih.
- **SRS (Fasa 3):** kotak Leitner 1 → 2 → 4 → 7 → 15 hari; salah → kembali ke kotak 1.

## 5. Lesen

1. Pengguna masukkan kod (sekali, perlu internet) → `activate_license` semak kod (disimpan sebagai hash), had peranti/pelajar → pulangkan **token lesen bertandatangan Ed25519** (pengguna, peranti, pek, `valid_until = +30 hari`).
2. App sahkan token secara offline dengan kunci awam. Semak semula setiap 30 hari; **tempoh bertolak ansur 14 hari** tambahan sebelum kandungan berbayar dikunci (nota & kemajuan tidak dipadam).
3. `device_id` = UUID rawak yang dijana semasa pasang (bukan IMEI/Android ID → tiada data peranti sensitif).
4. Skrin "Peranti saya" → nyahaktif peranti lama sendiri.
5. Tanpa lesen: mod percubaan — bab **Kalimah** (100 soalan) + nota berkaitan.

## 6. Senarai skrin

Bar bawah: **Utama · Nota · Latihan · Papan Skor · Profil** (Bantuan dalam Profil + ikon "?" di Utama).

1. Splash / import kandungan pertama (dengan bar kemajuan)
2. Utama — sambung latihan, cabaran harian, streak, pengumuman
3. Nota — senarai ikut bab, carian, tanda buku → Butiran nota
4. Latihan — pilih mod → pilih bab/tahap → **Skrin Soalan** (pemasa, pilihan besar, butang Hint 1/2/3, "Lihat nota" sebagai *bottom sheet* tanpa keluar sesi) → Keputusan sesi (markah, penjelasan setiap soalan)
5. Papan Skor — peribadi / mingguan / kumpulan
6. Profil — XP, tahap, lencana, Tetapan (saiz tulisan, mod gelap, fon Arab), Lesen & Peranti saya
7. Bantuan — FAQ, WhatsApp sokongan, Polisi privasi & bayaran balik, **Lapor masalah**
8. Aktivasi lesen
9. (Fasa 3) Bilik Kuiz Ustaz — cipta/sertai dengan kod

Kebolehcapaian: sasaran sentuh ≥ 48 dp, teks Arab dalam widget `Directionality(rtl)` dengan `height` baris tambahan supaya harakat tidak terpotong, ujian pada skala fon 1.0–2.0.

## 7. Pelan fasa (ringkas)

| Fasa | Hasil |
|---|---|
| 1 – MVP | `nahu_core` + app: import 1000 soalan & nota, Nota (cari/tanda), Kuiz Pantas, hint, Lihat nota, markah, papan skor setempat, tetapan, offline penuh. Ujian unit + widget + ujian "muat semua 1000 soalan". |
| 2 | Supabase, akaun, sync & sandaran kemajuan, lesen + percubaan, papan skor kumpulan, kemas kini kandungan delta bertandatangan, Lapor masalah, pengumuman, panel admin asas. |
| 3 | Cabaran Harian, Ulang Kelemahan (SRS), Bos Bab, lencana, Bilik Kuiz Ustaz (Supabase Realtime). |
| 4 | Beta 15–20 pelajar + 2–3 ustaz, pembaikan, Play Store, dokumen sokongan. |

## 8. Risiko & perkara yang menjejaskan kos / keselamatan / pengalaman

1. **Polisi bayaran Google Play (penting).** Jika pengguna *membeli di dalam app* (termasuk pek tambahan), Google mewajibkan Google Play Billing (yuran 15%). Menjual **kod aktivasi di luar app** (terus kepada pondok/individu) biasanya dibenarkan **asalkan app tidak memaparkan pautan/arahan membeli di luar Play**. Butang WhatsApp sokongan tidak boleh menjadi saluran "beli". Perlu semak polisi semasa sebelum Fasa 4.
2. **Pengguna bawah umur.** Jika sasaran umur di Play Console termasuk bawah 13 tahun, polisi *Families* terpakai (SDK terhad, termasuk Sentry perlu dikonfigurasi patuh). Cadangan: sasaran 13+, tiada iklan, tiada analitik pihak ketiga.
3. **Jawapan ada dalam peranti.** Offline-first bermaksud kunci jawapan disimpan setempat; pengguna mahir boleh mengekstraknya. Papan skor tetap dilindungi kerana server kira semula, tetapi bonus kelajuan hanya boleh disemak secara munasabah (bukan mutlak).
4. **Manipulasi jam peranti** untuk melanjutkan lesen offline → app simpan "masa terakhir dilihat" dan menolak jam yang mundur.
5. **Kehilangan kemajuan sebelum Fasa 2.** MVP hanya simpan setempat; nyahpasang = hilang. Sandaran akaun datang di Fasa 2.
6. **Kualiti data.** Pengesah mungkin menemui ralat dalam fail asal (cth. `jawapan` ≠ `pilihan[jawapan_idx]`). Saya akan **melaporkannya dalam fail berasingan** tanpa mengubah teks.
7. **Ujian peranti sebenar** (Android 8, RAM 2GB) tidak boleh dibuat dalam persekitaran cloud saya — perlu dibuat oleh pihak anda; saya sediakan senarai semak.
8. **Supabase free tier pause** — wajib Pro sebelum jualan.

## 9. Soalan penjelasan (perlu dijawab sebelum Fasa 1)

1. **Fail data:** `soalan_1000.json` dan `nota.json` tiada dalam repo. Sila muat naik (cth. ke folder `content/`).
2. **Medan `status`:** apakah nilainya (cth. `aktif` / `draf`)? Cadangan: hanya papar soalan yang tidak bertanda draf/nyahaktif.
3. **Had hint:** "maksimum 3 hint sesebuah sesi" — saya tafsir sebagai **3 paparan hint keseluruhan bagi satu sesi 10 soalan** (pengguna boleh guna ketiga-tiganya pada satu soalan). Betul? Dan kos hint tetap ditolak jika jawapan salah (markah sesi minimum 0)?
4. **Pemasa Kuiz Pantas:** cadangan 30 saat setiap soalan. Setuju?
5. **Log masuk (Fasa 2):** tanpa no. telefon — cadangan **nama pengguna + kata laluan** (tiada e-mel wajib; ustaz boleh set semula kata laluan pelajar dalam kumpulannya), dengan pilihan log masuk Google bagi dewasa. Setuju?
6. **Backend:** setuju dengan Supabase + Sentry (kos ~USD 25/bulan semasa jualan)?
