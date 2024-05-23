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
