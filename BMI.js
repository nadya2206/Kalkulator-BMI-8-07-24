// ini javascripts

function calculateBMI(event) {
    // Cegah submit form jika event tersedia
    if (event) {
        event.preventDefault();
    }

    // Ambil elemen hasil dan risiko
    const bmiResultElement = document.getElementById('bmi-result');
    const bmiCategoryElement = document.getElementById('bmi-category');
    const riskTitle = document.getElementById('risk-title');
    const riskMessageElement = document.getElementById('risk-message');
    const resultSection = document.querySelector('.result-section');
    const resultHeader = resultSection.previousElementSibling;  // Mengambil header sebelumnya

    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;

    // Sembunyikan hasil dan kategori secara default
    bmiResultElement.innerText = '';
    bmiCategoryElement.innerText = '';
    riskTitle.classList.add('hidden');
    riskMessageElement.classList.add('hidden');
    resultSection.classList.add('hidden');
    resultHeader.classList.add('hidden');

    // Pastikan input tidak kosong dan valid
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        bmiResultElement.innerText = bmi.toFixed(1);  // Tampilkan hasil BMI

        let category = '';
        let riskMessage = '';
        let showRisk = false;

        if (bmi < 18.5) {
            category = `
                Anda Kekurangan Berat Badan (Underweight).
                Silahkan Naikkan Berat Badan Anda dengan Makanan yang Sesuai
            `;
            riskMessage = `
                Risiko Penyakit bila Anda Kekurangan Berat Badan:
                1. Malnutrisi, seperti anemia
                2. Osteoporosis
                3. Masalah Kesuburan, seperti memicu infertilitas
                4. Melahirkan Secara Prematur
                5. Gangguan Tumbuh Kembang
            `;
            showRisk = true;

        } else if (bmi >= 18.5 && bmi <= 22.9) {
            category = `
                Berat Badan Anda Normal.
                Selamat!! Anda Hanya Perlu Menjaga Pola Makan Sehat dan Rajin Berolahraga
            `;

        } else if (bmi >= 23 && bmi <= 24.9) {
            category = `
                Anda Memiliki Berat Badan Berlebih (Overweight).
                Mohon Maaf... Mohon Lakukan Diet Sehat dan Perbanyak Aktivitas Fisik
            `;
            riskMessage = `
                Risiko Penyakit bila Anda Kelebihan Berat Badan:
                1. Diabetes tingkat II
                2. Penyakit jantung
                3. GERD atau penyakit asam lambung
                4. Gangguan pernapasan
                5. Sleep apnea (gangguan tidur serius yang membuat seseorang berhenti bernapas selama 10 detik, sebanyak beberapa kali saat sedang tidur)
            `;
            showRisk = true;

        } else if (bmi >= 25 && bmi <= 29.9) {
            category = `
                Anda Termasuk ke Kategori Obesitas tingkat I.
                Silahkan Konsultasi ke dokter Untuk Pemilihan Diet yang Cocok untuk Anda!
            `;
            riskMessage = `
                Risiko Penyakit bila Anda Termasuk ke Kategori Obesitas tingkat I:
                1. Tekanan darah tinggi (hipertensi)
                2. Diabetes melitus tipe 2
                3. Penyakit jantung koroner
                4. Stroke
                5. Penyakit kandung empedu
            `;
            showRisk = true;

        } else if (bmi >= 30) {
            category = `
                Anda Termasuk ke Kategori Obesitas tingkat II.
                Tolong Segera Konsultasi ke dokter Untuk Pemilihan Diet yang Cocok untuk Anda!
                !!! Pada Tahap Ini, Risiko Komplikasi Kesehatan Jauh Lebih Tinggi!!!
            `;
            riskMessage = `
                Risiko Penyakit bila Anda Termasuk ke Kategori Obesitas tingkat II:
                1. Risiko lebih tinggi terhadap penyakit jantung dan stroke
                2. Diabetes melitus tipe 2
                3. Osteoartritis (radang sendi) lutut dan panggul
                4. Kanker payudara
                5. Masalah pernapasan serius, termasuk sleep apnea
            `;
            showRisk = true;
        }

        // Tampilkan kategori BMI
        bmiCategoryElement.innerText = category;

        // Atur tampilan result-section dan header sebelumnya
        resultSection.classList.remove('hidden');
        resultHeader.classList.remove('hidden');

        // Atur tampilan risk-title dan risk-message
        if (showRisk) {
            riskTitle.classList.remove('hidden');
            riskMessageElement.classList.remove('hidden');
            riskMessageElement.innerText = riskMessage;
        }
    } else {
        alert('Masukkan nilai yang valid untuk berat dan tinggi badan!');
    }
}

// Fungsi untuk menyembunyikan hasil ketika halaman dimuat atau di-reset
function resetResults() {
    document.getElementById('bmi-result').innerText = '';
    document.getElementById('bmi-category').innerText = '';
    document.getElementById('risk-title').classList.add('hidden');
    document.getElementById('risk-message').classList.add('hidden');
    const resultSection = document.querySelector('.result-section');
    const resultHeader = resultSection.previousElementSibling;  // Mengambil header sebelumnya
    resultSection.classList.add('hidden');
    resultHeader.classList.add('hidden');
}

// Tambahkan event listener pada tombol reset
document.querySelector('button[type="reset"]').addEventListener('click', resetResults);

// Sembunyikan hasil ketika halaman pertama kali dimuat
resetResults();

// sumber informasi bmi untuk orang dewasa di Asia Pasifik: Redefining Obesity WHO Western Pacific Region, 2000
// sumber informasi penyakit underweight: https://www.siloamhospitals.com/informasi-siloam/artikel/apa-itu-underweight
// sumber informasi penyakit overweight: https://www.alodokter.com/bahaya-badan-terlalu-gemuk
// sumber informasi penyakit obesitas: https://p2ptm.kemkes.go.id/infographic/dampak-obesitas