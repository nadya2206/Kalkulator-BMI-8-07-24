// ini javascripts

function calculateBMI(event) {
    // Cegah submit form jika event tersedia
    if (event) {
        event.preventDefault();
    }

    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;

    // Pastikan input tidak kosong dan valid
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmi-result').innerText = bmi.toFixed(1);  // Tampilkan hasil BMI

        let category = '';
        if (bmi < 18.5) {
            category = 'Anda Kekurangan Berat Badan. \nSilahkan Naikkan Berat Badan Anda dengan Makanan yang Sesuai';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat Badan Anda Normal. \nSelamat!! Anda Hanya Perlu Menjaga Pola Makan Sehat dan Rajin Berolahraga';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Anda Memiliki Berat Badan Berlebih. \nMohon Maaf... Mohon Lakukan Diet Sehat dan Perbanyak Aktivitas Fisik';
        } else {
            category = 'Anda Mengalami Obesitas. \nSilahkan Konsultasi ke dokter untuk Pemilihan Diet yang Cocok untuk Anda!';
        }
        document.getElementById('bmi-category').innerText = category;  // Tampilkan kategori BMI
    } else {
        alert('Masukkan nilai yang valid untuk berat dan tinggi badan!');
    }
}
