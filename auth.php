<?php session_start(); ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Login | DailyFit</title>

  <!-- <link rel="stylesheet" href="css/utama.css"> -->
  <link rel="stylesheet" href="css/auth.css">
</head>
<body>

<?php include "navbar.php"; ?>

<div class="auth-container" id="authContainer">
    <?php if (isset($_GET['error']) && $_GET['error'] === 'username_used'): ?>
  <script>
    alert("Username sudah digunakan");
  </script>
<?php endif; ?>

  <h1 id="formTitle">Login DailyFit</h1>

  <div class="tab-selector">
    <button class="tab-button active" id="loginTab">Login</button>
    <button class="tab-button" id="registerTab">Daftar</button>
  </div>

  <div class="form-wrapper" id="formWrapper">
    <div class="form-content">

      <!-- LOGIN -->
      <form class="login-form" action="login_process.php" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="login" class="main-btn">Login</button>
      </form>

      <!-- REGISTER -->
      <form class="register-form" action="register_process.php" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="register" class="main-btn">Daftar</button>
      </form>

    </div>
  </div>

  <p class="bottom-link" id="bottomLink">
    Belum punya akun? <a href="#" id="linkToRegister">Daftar</a>
  </p>
</div>

<script src="auth.js"></script>

<!--Untuk Contact-->
<div id="contact">
    <div class="wrapper">
        <div class="footer">
            <div class="footer-section">
                <h4>DailyFit</h4>
                <p>Website ini menyediakan berbagai kalkulator kesehatan seperti kalkulator BMI dan penghitung hari, juga diet tracking untuk membantu Anda memantau kesehatan Anda. Anda bisa dengan mudah memasukkan data dan mendapatkan hasil yang cepat dan akurat. Gunakan menu navigasi di atas untuk memilih fitur yang ingin Anda gunakan.</p>
            </div>
            <div class="footer-section">
                <h4>About</h4>
                <p>Website ini dibuat oleh saya Nadya Putri Nur Aletta, Fatiyah Hanna, dan Camilla Zahra mahasiswa Informatika Universitas Gunadarma angkatan 2023 dengan tujuan untuk menyediakan informasi kesehatan yang akurat dan terpercaya. Saya memiliki komitmen untuk membantu masyarakat mencapai hidup sehat.</p>
            </div>
            <div class="footer-section">
                <h4>Social</h4>
                <p><b>Instagram: </b><a href="https://www.instagram.com/nadya__aletta?igsh=eW05NmNlMjdjOHBl">nadya__aletta</a></p>
                <p><b>X: </b><a href="https://x.com/alettanadya06?t=JUtErwRWLAMRfXanV5kizw&s=08">alettanadya06</a></p>
                <p><b>Email: </b><a href="mailto:nadyapna19@gmail.com?subject=Halo&body=Ini%20adalah%20isi%20email">nadyapna19@gmail.com</a></p>
            </div>
        </div>
    </div>
</div>

<div id="copyright">
    <div class="wrapper">
        &copy; 2025. <b>DailyFit</b> All Rights Reserved.
    </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("tab") === "register") {
      document.getElementById("registerTab").click();
    }
  });
</script>

</body>
</html>
