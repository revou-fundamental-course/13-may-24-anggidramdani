function hitungLuas() {
    var alas = document.getElementsByName("alas")[0].value;
    var tinggi = document.getElementsByName("tinggi")[0].value;
    if (alas == "" || tinggi == "") {
        alert("Masukkan Angka terlebih dahulu");
        return false;
    }
    var luas = 0.5 * alas * tinggi;
    document.getElementById("output_luas").textContent = luas;
    document.getElementById("output-section-luas").hidden = false;
}

function resetLuas() {
    var alas = document.getElementsByName("alas")[0];
    var tinggi = document.getElementsByName("tinggi")[0];
    alas.value = "";
    tinggi.value = "";
    document.getElementById("output_luas").textContent = "";
    document.getElementById("output-section-luas").hidden = true;
}

// function hitungKeliling() {
//     var sisi = document.getElementsByName("sisi")[0].value;
//     if (sisi == "") {
//         alert("Masukkan Angka terlebih dahulu");
//         return false;
//     }
//     var keliling = sisi * sisi * sisi;
//     document.getElementById("output_keliling").textContent = luas;
//     document.getElementById("output-section-keliling").hidden = false;
// }

// function resetKeliling() {
//     var sisi = document.getElementsByName("sisi")[0];
//     sisi.value = "";
//     document.getElementById("output_keliling").textContent = "";
//     document.getElementById("output-section-keliling").hidden = true;
// }

function hitungKeliling() {
    var sisi = document.getElementsByName("sisi")[0].value;
    if (sisi == "") {
        alert("Masukkan Angka terlebih dahulu");
        return false;
    }
    var keliling = 3 * sisi;
    document.getElementById("output_keliling").textContent = keliling;
    document.getElementById("output-section-keliling").hidden = false;
}

function resetKeliling() {
    var sisi = document.getElementsByName("sisi")[0];
    sisi.value = "";
    document.getElementById("output_keliling").textContent = "";
    document.getElementById("output-section-keliling").hidden = true;
}