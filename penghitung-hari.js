function openTab(evt, tabName) {
    const tabLinks = document.getElementsByClassName("tab-link");
    const tabContents = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculateDays() {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const includeEnd = document.getElementById("include-end").checked;

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate > endDate) {
        document.getElementById("result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    if (includeEnd) {
        endDate.setDate(endDate.getDate() + 1);
    }

    const timeDiff = endDate - startDate;
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerText = `Durasi: ${dayDiff} hari`;
}

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

function subtractDays() {
    const startDateInput = document.getElementById("start-date-subtract").value;
    const daysToSubtractInput = document.getElementById("days-to-subtract").value;

    if (!startDateInput || isNaN(Date.parse(startDateInput)) || isNaN(daysToSubtractInput) || daysToSubtractInput === "") {
        document.getElementById("subtract-result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    const startDate = new Date(startDateInput);
    const daysToSubtract = parseInt(daysToSubtractInput);

    startDate.setDate(startDate.getDate() - daysToSubtract);

    document.getElementById("subtract-result").innerText = `Tanggal Baru: ${formatDateIndo(startDate)}`;
}

// Fungsi untuk format tanggal ke bahasa Indonesia
function formatDateIndo(date) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
}

// Fungsi untuk reset input dan hasil
function resetForm() {
    // Reset input fields
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

