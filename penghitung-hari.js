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

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
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

    // Pastikan input tidak kosong dan valid
    if (!startDateInput || isNaN(Date.parse(startDateInput)) || isNaN(daysToAddInput) || daysToAddInput === "") {
        document.getElementById("add-result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    const startDate = new Date(startDateInput);
    const daysToAdd = parseInt(daysToAddInput);

    startDate.setDate(startDate.getDate() + daysToAdd);

    document.getElementById("add-result").innerText = `Tanggal Baru: ${startDate.toDateString()}`;
}

function subtractDays() {
    const startDateInput = document.getElementById("start-date-subtract").value;
    const daysToSubtractInput = document.getElementById("days-to-subtract").value;

    // Pastikan input tidak kosong dan valid
    if (!startDateInput || isNaN(Date.parse(startDateInput)) || isNaN(daysToSubtractInput) || daysToSubtractInput === "") {
        document.getElementById("subtract-result").innerText = "Tanggal Tidak Valid, Silahkan Masukkan Tanggal yang Benar!";
        return;
    }

    const startDate = new Date(startDateInput);
    const daysToSubtract = parseInt(daysToSubtractInput);

    startDate.setDate(startDate.getDate() - daysToSubtract);

    document.getElementById("subtract-result").innerText = `Tanggal Baru: ${startDate.toDateString()}`;
}
