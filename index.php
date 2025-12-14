<?php session_start(); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAILYFIT WEBSITE</title>
    <link rel="stylesheet" href="css/utama.css"> <!--CSS UTAMA-->
</head>

<body>
<?php include 'navbar.php'; ?>

    <div class="wrapper">
        <!--Untuk Home-->
        <section id="home">
            <img src="https://img.freepik.com/free-vector/gradient-bmi-illustration_23-2150143487.jpg?semt=ais_hybrid" alt="Deskripsi Gambar" class="gambar-bmi"/>
            <div class="kolom">
                <p class="deskripsi">#PolaHidupSehat #SehatMenyenangkan</p>
                <h2>Menjaga Berat Badan Sehat untuk Kesehatan Optimal</h2>
                <p>Menjaga berat badan ideal adalah salah satu kunci utama untuk hidup sehat dan bugar. Berat badan yang seimbang bukan hanya tentang penampilan, tetapi juga terkait erat dengan kesehatan kita secara keseluruhan. Berat badan yang berlebih atau kurang dapat meningkatkan risiko berbagai masalah kesehatan seperti penyakit jantung, diabetes, dan gangguan metabolik lainnya.</p>
                <p>Salah satu cara yang efektif untuk memantau berat badan adalah dengan menggunakan kalkulator BMI (Body Mass Index). BMI adalah alat sederhana yang digunakan untuk menghitung apakah berat badan Anda berada dalam kategori sehat berdasarkan tinggi badan Anda. Dengan menghitung BMI, Anda bisa mengetahui apakah Anda termasuk dalam kategori berat badan kurang, normal, kelebihan berat badan, atau obesitas.</p>
                <h3>Manfaat Menghitung BMI:</h3>
                    <ul>
                        <li><b>Memantau Kesehatan:</b> Mengetahui status BMI Anda membantu dalam memantau kesehatan dan mencegah masalah kesehatan terkait berat badan.</li>
                        <li><b>Membuat Keputusan Sehat:</b> Dengan mengetahui BMI, Anda bisa membuat keputusan yang lebih tepat tentang diet, olahraga, dan gaya hidup Anda.</li>
                        <li><b>Mencegah Penyakit:</b> Mengontrol BMI membantu mencegah penyakit kronis seperti tekanan darah tinggi, diabetes tipe 2, dan penyakit jantung.</li>
                    </ul>
                <p>Dengan demikian, menghitung BMI secara rutin bisa menjadi langkah awal yang sederhana namun efektif dalam menjaga kesehatan Anda.</p>
                <p><a href="BMI.php" class="tbl-green" onclick="calculateBMI()">Coba Kalkulator BMI</a></p> <!-- Tombol dengan fungsi JavaScript -->
            </div>
        </section>

        <!--Untuk Kalkulator Penghitung Hari-->
        <section id="kalkulator-penghitung-hari">
            <div class="kolom">
                <p class="deskripsi">#PenghitungHariAkurat #JadwalDiet</p>
                <h2>Rencanakan Diet Anda dengan Kalkulator Penghitung Hari</h2>
                <p>Memiliki target yang jelas adalah salah satu faktor penting dalam mencapai tujuan diet, baik untuk menurunkan atau menaikkan berat badan. Salah satu alat yang dapat membantu dalam proses ini adalah kalkulator penghitung hari.</p>
                <h3>Dengan menggunakan kalkulator penghitung hari, Anda bisa:</h3>
                    <ul>
                        <li><b>Menentukan Tanggal Target:</b> Kalkulator ini memungkinkan Anda untuk menentukan tanggal spesifik di mana Anda ingin mencapai berat badan ideal Anda. Dengan adanya tanggal target yang jelas, Anda bisa merencanakan langkah-langkah diet dengan lebih terstruktur.</li>
                        <li><b>Mengatur Jadwal Diet:</b> Anda bisa merencanakan tahapan diet dari waktu ke waktu, seperti kapan harus meningkatkan intensitas olahraga, kapan harus mengurangi asupan kalori, atau kapan harus mulai program pemeliharaan berat badan.</li>
                        <li><b>Motivasi untuk Mencapai Tujuan:</b> Mengetahui berapa hari yang tersisa hingga tanggal target Anda dapat menjadi motivasi tambahan untuk tetap konsisten dalam menjalankan program diet.</li>
                    </ul>
                <p>Menggunakan kalkulator penghitung hari dapat membuat perjalanan diet Anda lebih terorganisir, terukur, dan fokus. Dengan alat ini, Anda dapat memastikan bahwa setiap langkah yang diambil membawa Anda lebih dekat ke tujuan kesehatan Anda.</p>
                <p><a href="penghitung-hari.php" class="tbl-green">Coba Kalkulator Penghitung Hari</a></p>
            </div>
            <img src="https://img.freepik.com/free-vector/woman-explaining-girl-how-use-calculator-digit-teacher-child-flat-vector-illustration-education-calculation_74855-13286.jpg?ga=GA1.1.1756002277.1723661668" alt="Deskripsi Gambar" class="gambar-hari"/>
        </section>

        <section id="todo-list">
            <img src="images\DietTracker.jpg" alt="Tempat gambar ToDo" class="gambar-todo"/>
            <div class="kolom">
                <p class="deskripsi">#DietTrackerHarian #PantauProgresDiet</p>
                <h2>Pantau Perjalanan Diet Anda dengan Diet Tracker</h2>
                <p>Menjaga konsistensi merupakan kunci utama dalam menjalani program diet yang sehat dan berkelanjutan. Namun, tanpa pemantauan yang jelas, progres diet sering kali sulit untuk dievaluasi. Oleh karena itu, diet tracker hadir sebagai alat yang membantu pengguna mencatat dan memantau perkembangan diet secara rutin.</p>
                <h3>Gunakan Diet Tracker agar anda bisa :</h3>
                    <ul>
                        <li><b>Mencatat Aktivitas Diet Harian:</b> Diet tracker memungkinkan Anda untuk mencatat pola makan, asupan kalori, berat badan, atau aktivitas terkait diet setiap hari sehingga progres dapat dipantau dengan lebih jelas.</li>
                        <li><b>Memantau Perkembangan Secara Berkala:</b> Dengan data yang tercatat secara konsisten, Anda dapat melihat perubahan dari waktu ke waktu, mengetahui apakah program diet berjalan sesuai rencana, serta melakukan penyesuaian bila diperlukan.</li>
                        <li><b>Meningkatkan Konsistensi dan Motivasi:</b> Melihat riwayat pencatatan dan hasil yang telah dicapai dapat menjadi motivasi tambahan untuk tetap disiplin dan berkomitmen menjalani program diet hingga mencapai target yang diinginkan.</li>
                    </ul>
                <p>Menggunakan diet tracker membantu perjalanan diet menjadi lebih terkontrol, terukur, dan terarah. Dengan pemantauan yang baik, setiap langkah yang dilakukan dapat dievaluasi secara efektif demi mencapai tujuan kesehatan secara optimal.</p>
                <p><a href="todoList.php" class="tbl-green">Coba ToDo list Diet Tracking</a></p>
            </div>
        </section>


    </div>

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