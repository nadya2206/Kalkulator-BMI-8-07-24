<?php
session_start();
$isLogin = isset($_SESSION['user_id']);
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DAILYFIT WEBSITE</title>
    <link rel="stylesheet" href="css\todo.css" />
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
  </head>
  <body>
    <!-- Tempat menu kembali ke halaman utama -->
    <?php include 'navbar.php'; ?>

    <!-- Main Tittle -->
    <header class="main-title">
      <h1>Diet Tracker</h1>
    </header>

<main>
<section class="main-content">
    <div class="container">
      <div class="stats-container">
        <div class="details">
          <h1>Diet Tracker</h1>
          <p>Keep it up!!</p>
          <div id="progressBar">
            <div id="progress"></div>
          </div>
        </div>
        <div class="stats-numbers">
          <p id="numbers">0 / 0</p>
        </div>
      </div>

      <form action="">
        <input id="taskInput" type="text" placeholder="Write Your Task" />
        <button id="newTask" type="submit">+</button>
      </form>

      <div class="datetime-input">
        <input type="date" id="date-input" class="date-input" />
        <input type="time" id="time-input" class="time-input" />
      </div>

      <div class="task-start">
        <div id="total-task">0 tasks</div>
        <div id="completed-task">0 completed</div>
      </div>

      <div class="task-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="active">Active</button>
        <button class="filter-btn" data-filter="completed">completed</button>
      </div>

      <div class="task-list" id="task-list"></div>
     

      <div class="priority-selector-container">
        <div class="priority-selector" id="priority-selector">
          <span class="priority-label">Priority</span>
          <div class="priority-options">
            <div class="priority-option select" data-priority="High"></div>
            <div class="priority-option" data-priority="Medium"></div>
            <div class="priority-option" data-priority="Low"></div>
          </div>
        </div>
        <div class="priority-slider" id="priority-slider"></div>
      </div>
    </div>
    <script>
  const IS_LOGIN = <?= $isLogin ? 'true' : 'false' ?>;
  const USER_ID = <?= $isLogin ? $_SESSION['user_id'] : 'null' ?>;
</script>
<script src="todoList.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"></script>
</section>

<!-- right Content -->
    <section class="main-content">
        <!-- Main Article -->
         <div class="card">
        <article>
            <h3>Manfaat Menggunakan Diet Tracker:</h3>
            <ol>
              <li>Meningkatkan Konsistensi Diet</li>
              <li>Visualisasi Progres yang Jelas</li>
              <li>Meningkatkan Motivasi Pengguna</li>
              <li>Evaluasi Program Diet Lebih Efektif</li>
            </ol>

            <h3>Cara Menggunakan Diet Tracker:</h3>
            <ol>
              <li>
                <b>Menambahkan Goal Diet ke Task List</b>
                <ol>
                  <li>Ketik goal diet yang ingin dicapai pada textbox.</li>
                  <li>Tentukan target tanggal dan waktu pelaksanaan.</li>
                  <li>Pilih prioritas goal diet menggunakan tombol Priority.</li>
                  <li>Tekan tombol tambah (+) untuk menambahkan task ke dalam daftar.</li>
                </ol>
              </li>

              <li>
                <b>Mengubah Goal Diet yang Ada di Task List</b>
                <ol>
                  <li>Klik ikon pensil pada task yang ingin diubah.</li>
                  <li>Task akan muncul kembali di textbox.</li>
                  <li>Ubah isi task sesuai kebutuhan.</li>
                  <li>Tekan tombol (+) untuk menyimpan perubahan.</li>
                </ol>
              </li>

              <li>
                <b>Menghapus Goal Diet</b>
                <ul>
                  <li>Klik ikon sampah (trash can) di samping ikon pensil untuk menghapus task dari daftar.</li>
                </ul>
              </li>
            </ol>
        </article>
        </div>
    </section>
</main>

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


  </body>
  
</html>
