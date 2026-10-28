// Tetapan KVFC.
// mode: 'local'    = demo, data disimpan dalam peranti ini sahaja (untuk uji reka bentuk).
// mode: 'firebase' = sebenar, order dari telefon pembeli sampai ke telefon kaunter.
// Email AWAL untuk bahagian staf (huruf kecil). Selepas itu boleh ditukar dalam panel staf > Akses staf,
// tetapi hanya dengan persetujuan kedua-dua email ini. Selepas ditukar, nilai di Firestore yang digunakan.
window.KVFC_CONFIG = {
  mode: 'firebase',   // LIVE: order dari peranti pembeli terus masuk ke peranti penjual (tukar ke 'local' untuk demo)
  managerEmail: 'ichamambon@gmail.com',   // email manager (boleh ubah menu & harga)
  cashierEmail: 'helmi221008@gmail.com',   // email cashier (lihat order & jualan)
  firebase: {
    apiKey: 'AIzaSyCcVm2DNH5ER_FyGUOX1laQSD4DEyeVzus',
    authDomain: 'website-kvfs-kulinari.firebaseapp.com',
    projectId: 'website-kvfs-kulinari',
    appId: '1:1038114781444:web:f7d5c13e465ad59e83b851'
  }
};
