// 1. Matiin F12, Ctrl+Shift+I/J, Ctrl+U (View Source)
document.onkeydown = function (e) {
    if (
        e.keyCode == 123 ||
        (e.ctrlKey &&
            e.shiftKey &&
            (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) ||
        (e.ctrlKey && e.keyCode == 85)
    ) {
        return false;
    }
};

// 2. Debugger Trap: Bikin DevTools nge-freeze kalau dibuka
setInterval(function () {
    debugger;
}, 100);

// 3. Logika Utama
function cekSigma() {
    const nama = document.getElementById("nama").value;
    if (nama === "") {
        alert("Woy, isi dulu namanya!");
        return;
    }

    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash = nama.charCodeAt(i) + ((hash << 5) - hash);
    }
    const skor = Math.abs(hash % 101);

    const displayHasil = document.getElementById("results");
    const teksSkor = document.getElementById("teksSkor");
    const gelar = document.getElementById("gelar");
    const img = document.getElementById("gambarSigma");

    displayHasil.style.display = "block";
    teksSkor.innerText = `Skor Sigma Lo: ${skor}%`;

    if (skor <= 19) {
        gelar.innerText = "Level: Skibidi Femboy 🎀 😹";
        img.src = "1.jpeg";
    } else if (skor <= 49) {
        gelar.innerText = "Level: Beta Male (Butuh banyak asupan Phonk)";
        img.src = "20.jpeg";
    } else if (skor <= 79) {
        gelar.innerText = "Level: Sigma Apprentice (Hampir dingin)";
        img.src = "50.jpeg";
    } else if (skor <= 99) {
        gelar.innerText = "Level: True Sigma 🗿 (Auranya tajam)";
        img.src = "80.jpeg";
    } else {
        gelar.innerText = "Level: THE G.O.A.T SIGMA 👑 (Raja Mewing)";
        img.src = "100.jpeg";
    }
}
