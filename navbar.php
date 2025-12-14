<head>
  <link rel="stylesheet" href="css/utama.css">
</head>
<nav>
  <div class="wrapper-1">
    <div class="logo">
      <img src="images\logo_website_hamburger_calculator-removebg-preview.png" alt="Deskripsi Gambar" class="logo-image"/>
      <a href="index.php">DailyFit</a>
    </div>
    
    <div class="pilihan">
      <ul>
      <li><a href="index.php">Home</a></li>
      <li><a href="BMI.php">Kalkulator BMI</a></li>
      <li><a href="penghitung-hari.php">Kalkulator Hari</a></li>
      <li><a href="todoList.php">Diet Tracker</a></li>

      <?php if (isset($_SESSION['user_id'])): ?>
        <li class="username">
          | •ᴗ• | Welcome  <?= htmlspecialchars($_SESSION['username']) ?> 👋🏻 
        </li>
        <li>
          <a href="logout.php">Logout</a>
        </li>
      <?php else: ?>
        <li>
          <a href="auth.php">Login</a>
        </li>
      <?php endif; ?>
    </ul>
    </div>
  </div>
</nav>
