function openTab(evt, tabName) { //Mengatur tampilan tab di halaman web //Seperti membuka laci di lemari di mana hanya satu laci yang bisa dibuka dalam satu waktu
    //Ambil elemen tab-link, tab-link1, dan tab-content
    const tabLinks = document.getElementsByClassName("tab-link");
    const tabLinks1 = document.getElementsByClassName("tab-link1");
    const tabContents = document.getElementsByClassName("tab-content");

    // Menyembunyikan semua tab konten //Seperti menutup semua laci sebelum membuka laci baru
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Menghapus kelas 'active' dari semua tab link //Seperti menghilangkan tanda "terbuka" dari laci yang sedang dibuka sebelumnya
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Menghapus kelas 'active' dari semua tab link1 //Seperti menghilangkan tanda "terbuka" dari laci yang sedang dibuka sebelumnya
    for (let i = 0; i < tabLinks1.length; i++) {
        tabLinks1[i].className = tabLinks1[i].className.replace(" active", "");
    }

    // Menampilkan tab yang sesuai jika ditemukan //Membuka laci tertentu berdasarkan pilihanmu
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.style.display = "block";
    } else {
        console.error("Tab element not found: " + tabName);
    }

    // Menambahkan kelas 'active' ke tab link yang diklik //Menambahkan tanda "terbuka" pada laci yang dipilih
    if (evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}

//Menghitung jumlah hari antara dua tanggal, mirip dengan menghitung berapa hari yang tersisa sampai liburan tiba
function calculateDays() {
    //Mengambil tanggal mulai dan akhir: Ini seperti menentukan kapan hari mulai dihitung (tanggal mulai) dan kapan liburan tiba
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const includeEnd = document.getElementById("include-end").checked;

    //Memeriksa apakah tanggalnya valid: Seperti memastikan user tidak memasukkan tanggal yang salah, seperti tanggal mulai terjadi lebih lama dari tanggal berakhir
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate > endDate) {
        document.getElementById("result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    //Menghitung hari tambahan: Jika kamu ingin menghitung sampai hari liburan itu sendiri, tambahkan satu hari
    if (includeEnd) {
        endDate.setDate(endDate.getDate() + 1);
    }

    //Menghitung jumlah hari: Mengukur berapa hari yang tersisa
    //timeDiff: selisih waktu antara dua tanggal dalam milidetik. Misalnya, jika tanggal pertama adalah 1 Januari 2024 dan tanggal kedua adalah 5 Januari 2024, timeDiff akan mengandung jumlah milidetik antara kedua tanggal tersebut
    const timeDiff = endDate - startDate;
    //1000 * 60 * 60 * 24: Ini adalah jumlah milidetik dalam satu hari.
    //1000 milidetik = 1 detik
    //60 * 1000 milidetik = 1 menit
    //60 * 60 * 1000 milidetik = 1 jam
    //24 * 60 * 60 * 1000 milidetik = 1 hari
    //Jadi, rumus ini mengonversi waktu dari milidetik menjadi hari dengan membagi timeDiff dengan jumlah milidetik dalam satu hari
    //Math.ceil() digunakan untuk membulatkan hasil pembagian ke atas. Ini memastikan bahwa jika ada sisa milidetik setelah pembagian, hasilnya akan dibulatkan ke hari penuh berikutnya
    //Misalnya, jika hasil pembagian adalah 4.2 hari, maka Math.ceil() akan membulatkannya menjadi 5 hari. Ini berguna jika kamu ingin menghitung durasi dari hari pertama hingga hari terakhir secara inklusif
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    //Menampilkan hasil durasinya
    document.getElementById("result").innerText = `Durasi: ${dayDiff} hari`;
}

//Menambahkan hari-hari tambahan ke sebuah tanggal, misalnya menambahkan beberapa hari setelah liburan
function addDays() {
    const startDateInput = document.getElementById("start-date-add").value;
    const daysToAddInput = document.getElementById("days-to-add").value;

    if (!startDateInput || isNaN(Date.parse(startDateInput)) || isNaN(daysToAddInput) || daysToAddInput === "") {
        document.getElementById("add-result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    const startDate = new Date(startDateInput);
    const daysToAdd = parseInt(daysToAddInput);

    startDate.setDate(startDate.getDate() + daysToAdd);

    document.getElementById("add-result").innerText = `Tanggal Baru: ${formatDateIndo(startDate)}`;
}

//Mengurangi hari dari sebuah tanggal, misalnya menghitung hari yang harus dipotong sebelum pergi ke liburan
function subtractDays() {
    const startDateInput = document.getElementById("start-date-subtract").value;
    const daysToSubtractInput = document.getElementById("days-to-subtract").value;

    if (!startDateInput || isNaN(Date.parse(startDateInput)) || isNaN(daysToSubtractInput) || daysToSubtractInput === "") {
        document.getElementById("subtract-result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    //Mengurangi hari dari tanggal awal: Misalnya, memotong 3 hari dari tanggal yang direncanakan
    const startDate = new Date(startDateInput);
    const daysToSubtract = parseInt(daysToSubtractInput);

    startDate.setDate(startDate.getDate() - daysToSubtract);

    //Tampilkan tanggal baru setelah mengurangi hari
    document.getElementById("subtract-result").innerText = `Tanggal Baru: ${formatDateIndo(startDate)}`;
}

// Fungsi untuk format tanggal (bulan dan hari) ke bahasa Indonesia
function formatDateIndo(date) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    //Menggabungkan hari, tanggal, bulan, dan tahun: Misalnya, "Senin, 1 Januari 2024"
    return `${dayName}, ${day} ${month} ${year}`;
}

// Fungsi untuk reset input dan hasil //Menghapus semua catatan di papan tulis, sehingga bisa mulai menulis ulang
function resetForm() {
    // Reset input fields //Sama seperti menghapus semua catatan lama sebelum mulai lagi
    document.getElementById("start-date").value = "";
    document.getElementById("end-date").value = "";
    document.getElementById("include-end").checked = false;
    document.getElementById("result").innerText = "";

    document.getElementById("start-date-add").value = "";
    document.getElementById("days-to-add").value = "";
    document.getElementById("add-result").innerText = "";

    document.getElementById("start-date-subtract").value = "";
    document.getElementById("days-to-subtract").value = "";
    document.getElementById("subtract-result").innerText = "";
}

// Tambahkan event listener untuk menangani tekan tombol "Enter"
document.getElementById("start-date").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah submit form atau perilaku default lainnya
        calculateDays();
    }
});

document.getElementById("end-date").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah submit form atau perilaku default lainnya
        calculateDays();
    }
});

document.getElementById("include-end").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah submit form atau perilaku default lainnya
        calculateDays();
    }
});

document.getElementById("start-date-add").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addDays();
    }
});

document.getElementById("days-to-add").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addDays();
    }
});

document.getElementById("start-date-subtract").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        subtractDays();
    }
});

document.getElementById("days-to-subtract").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        subtractDays();
    }
});

// Kaitkan tombol reset dengan fungsi resetForm
document.getElementById("reset-button").addEventListener("click", resetForm);

