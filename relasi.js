const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host database Anda
  user: 'username', // Ganti dengan username database Anda
  password: 'password', // Ganti dengan password database Anda
  database: 'nama_database' // Ganti dengan nama database yang ingin Anda hubungkan
});

// Lakukan koneksi
connection.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID ' + connection.threadId);
});

// Lakukan query ke database
connection.query('SELECT * FROM nama_tabel', (error, results, fields) => {
  if (error) {
    console.error('Error dalam menjalankan query: ' + error.message);
    return;
  }
  console.log('Hasil query: ', results);
});

// Tutup koneksi setelah selesai
connection.end((err) => {
  if (err) {
    console.error('Error saat menutup koneksi: ' + err.stack);
    return;
  }
  console.log('Koneksi ditutup');
});
