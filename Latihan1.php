// Menghubungkan ke database
$host = "localhost";
$username = "username_db";
$password = "password_db";
$database = "nama_db";

$koneksi = new mysqli($host, $username, $password, $database);

// Proses data form login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validasi login
    $sql = "SELECT * FROM tabel_pengguna WHERE username='$username' AND password='$password'";
    $result = $koneksi->query($sql);

    if ($result->num_rows > 0) {
        // Login berhasil
        // Redirect ke halaman selanjutnya atau berikan akses ke fitur aplikasi
    } else {
        // Login gagal
        // Tampilkan pesan error atau arahkan kembali ke halaman login
    }
}
