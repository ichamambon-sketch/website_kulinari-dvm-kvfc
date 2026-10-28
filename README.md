# KVFC — projek website (belum dilancarkan)

Fail:
- `index.html`  — website penuh (menu, order, panel kaunter, muzik, animasi)
- `config.js`   — tetapan (mod demo atau Firebase)
- `firestore.rules` — peraturan keselamatan pangkalan data

## 1. Cuba dahulu (mod demo)
Buka `index.html` dalam pelayar. Semuanya berfungsi, tetapi data disimpan dalam peranti itu sahaja.
Butang "Staf" meminta log masuk. Dalam mod demo, masukkan salah satu email di `config.js` (kata laluan apa-apa; hanya untuk ujian).

## 2. Bila nak lancarkan (order sebenar)
1. Buat projek percuma di https://console.firebase.google.com
2. Buka **Authentication** > Sign-in method > hidupkan **Email/Password**. Tambah tepat 2 pengguna: email manager dan email cashier.
3. Buka **Firestore Database** > Create database.
4. Dalam **Project settings** > Your apps > Web (</>), salin `apiKey`, `authDomain`, `projectId`, `appId` ke dalam `config.js`.
5. Dalam `config.js` tukar `mode` kepada `'firebase'` dan isi `managerEmail` dan `cashierEmail`.
6. Dalam Firestore > Rules, tampal isi `firestore.rules` (tukar `ichamambon@gmail.com` dan `helmi221008@gmail.com` kepada 2 email staf, huruf kecil) kemudian Publish.
7. Letak ketiga-tiga fail di tempat hosting anda (contoh Firebase Hosting, Netlify, atau GitHub Pages).
8. Log masuk sebagai manager untuk urus menu. Hanya 2 email itu boleh masuk bahagian staf.

Pembeli tak perlu akaun. Hanya manager dan cashier log masuk.

## Jalankan dari terminal
1. Ekstrak zip, kemudian dalam File Explorer klik kanan folder `kvfc-project` > **Open in Terminal**.
2. Taip `.\mula.bat` dan tekan Enter (atau `npm start` jika Node.js dipasang).
3. Buka http://localhost:8000 dalam pelayar. Tekan Ctrl+C dalam terminal untuk berhenti.

## Gambar hidangan
Dalam panel staf > "Urus menu", kedua-dua staf boleh letak, tukar atau buang gambar setiap hidangan (gambar dikecilkan automatik). Harga, baki dan tanda "Habis" hanya manager. Tampal semula `firestore.rules` kerana ada peraturan baru untuk gambar dan nama pembeli.

## Had pax harian (auto habis)
Dalam panel staf > "Urus menu", kedua-dua manager dan cashier boleh isi **Had pax hari ini** untuk setiap hidangan. Contoh: isi 3, bila 3 pax sudah dibeli hidangan itu automatik jadi "Habis!" untuk pembeli. Pembeli nampak "Tinggal X pax hari ini", dan tidak boleh tambah melebihi baki. Kosongkan kotak untuk buang had.
- Had hanya sah untuk **hari itu sahaja**. Esok ia tamat sendiri dan staf set semula jika perlu.
- Kiraan dibuat atas order sebenar. Jika dua pembeli order serentak untuk pax terakhir, hanya seorang yang berjaya (yang lagi satu dapat mesej "sudah habis").
- Kiraan pax dibeli bermula dari 0 pada hari itu dan sentiasa dikemas kini (walaupun had diset lewat hari).
- **Tampal semula `firestore.rules`** kerana ada peraturan baru untuk `daylimit` dan `used`.

## Tambah / padam rekod jualan
Dalam panel staf > "Rekod & jualan":
- **Tambah rekod jualan**: untuk jualan di kaunter yang tak melalui website (atau rekod hari lepas). Pilih tarikh, isi bilangan pax setiap hidangan, kemudian Tambah. Rekod ini masuk jualan dan kiraan pax hari itu, tetapi tidak dihalang oleh had pax.
- **Padam**: butang 🗑️ pada setiap baris (ada pengesahan). Pax rekod itu dipulangkan ke had hari itu, jadi hidangan yang "Habis" boleh jual semula.
- **Tampal semula `firestore.rules`** kerana peraturan untuk tambah/padam order sudah berubah.

## Tukar email staf (akses staf)
Dalam panel staf > **Akses staf** (nampak untuk manager dan cashier). Email manager dan/atau cashier boleh ditukar, tetapi **hanya dengan persetujuan kedua-dua email semasa**:
1. Salah seorang (manager atau cashier) isi email baru dan tekan **Hantar cadangan**. Kelulusannya terus dikira.
2. Seorang lagi log masuk, buka tab Akses staf, lihat cadangan, dan tekan **Lulus** (atau **Tolak**). Penghantar boleh **Batal cadangan**.
3. Bila kedua-duanya sudah lulus, akses bertukar serta-merta. Email lama yang tidak lagi disenaraikan akan hilang akses.
- Ini dikuatkuasakan oleh peraturan Firestore, bukan di skrin sahaja: seorang tidak boleh meluluskan bagi pihak orang lain, tidak boleh ubah isi cadangan selepas dihantar, dan tidak boleh menulis senarai staf tanpa kelulusan kedua-dua.
- Email baru mesti ada dahulu dalam **Authentication** (Email/Password) dan orang itu tahu kata laluannya. Sebaiknya matikan pendaftaran sendiri: Authentication > Settings > User actions > nyahtanda *Enable create (sign-up)*, supaya orang luar tak boleh daftar guna email staf.
- Sebelum pernah ditukar, email dalam `config.js` dan `firestore.rules` digunakan. Selepas ditukar, email di Firestore (`config/staff`) yang digunakan; nilai dalam fail itu hanya sandaran awal.
- **Jika kedua-dua akses hilang** (contoh: terlupa kata laluan): dalam Firebase Console > Firestore, padam dokumen `config/staff` dan sistem kembali kepada email dalam `firestore.rules`.
- **Tampal semula `firestore.rules`** kerana ada peraturan baru untuk `config/pending`.

## Muzik latar
Butang 🔇/🔊 di penjuru atas. Lagu riang 132 BPM (kord C–G–Am–F) dihasilkan terus dalam pelayar, tanpa fail audio: melodi, chord ukulele, bass melantun, dram dan bunyi berkilauan.

## Kata laluan staf
Kata laluan **tidak** ditulis dalam kod (sesiapa boleh baca kod website). Tetapkan dalam Firebase Console > Authentication > Users: untuk `ichamambon@gmail.com` dan `helmi221008@gmail.com`, klik menu ⋮ > **Reset password**/**Add user** dan letak kata laluan yang anda mahu. Dalam mod demo, kata laluan apa-apa diterima (hanya untuk ujian).

## Tambah hidangan jualan (manager)
Panel staf > **Urus menu** > "Tambah hidangan jualan": isi nama, keterangan, harga dan jenis ikon. Selepas itu letak gambar, set had pax dan baki seperti hidangan lain. Hidangan yang ditambah boleh dipadam dengan butang Padam hidangan.

## Bayaran QR (staf)
Panel staf > **QR & pulangan**: manager dan cashier masing-masing letak QR sendiri dan nama pemilik akaun.
- Pembeli yang pilih **QR** nampak QR itu, mesti bayar, muat naik bukti bayaran, isi akaun untuk pulangan dan tanda "Saya sudah bayar". Barulah butang **Hantar order** aktif.
- Order QR masuk dengan status "Menunggu semakan bayaran". Staf semak bukti dan tekan **Sahkan bayaran diterima**; butang "Siap" aktif hanya selepas itu.
- Website tidak boleh semak bank secara automatik, jadi staf sahkan sendiri berdasarkan bukti dan akaun bank/e-wallet.

## Pulangan wang (hidangan habis selepas bayar)
Jika pembeli sudah bayar tetapi hidangan habis (had pax, baki atau tanda Habis) semasa order dihantar, order ditolak dan sistem terus rekod **tuntutan pulangan** (nama, telefon, jumlah, akaun pulangan, bukti). Staf nampak di tab **QR & pulangan**, transfer balik dari akaun QR yang dipilih pembeli, kemudian tekan **Dah transfer balik**. Tab itu menunjukkan bilangan tuntutan yang belum selesai.
- **Tampal semula `firestore.rules`** kerana ada peraturan baru untuk `qr`, `refunds` dan order QR.

## Rupa baru (gaya KFC)
Tema merah-putih-hitam ala kedai ayam goreng: bar atas hitam, jalur awning merah putih, hero merah dengan baldi KVFC, tajuk huruf tebal (Bebas Neue), kad menu bersih dengan harga merah. Tiada emoji: hidangan tanpa gambar guna ilustrasi SVG (ayam, popia/popis, aiskrim, pinggan) ikut nama hidangan; staf boleh letak gambar sebenar di Urus menu. **Roda Rezeki**: pembeli putar roda, roda pilih hidangan yang masih ada dan boleh terus ditambah ke order.

## Logo
Logo KVFC (lencana merah dengan peha ayam) ada di bar atas, tab pelayar (favicon) dan tajuk muka depan bersama nama penuh **Kolej Vokasional Fried Chicken**. Ia lukisan asal (SVG), bukan logo mana-mana jenama lain.
