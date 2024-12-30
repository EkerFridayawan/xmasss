document.addEventListener("keydown", function (event) {
  const audio = document.getElementById("audio");
  if (event.code === "Space") {
    // Jika tombol spasi ditekan
    event.preventDefault(); // Mencegah aksi default tombol spasi (scrolling halaman)

    // Cek apakah audio sedang diputar atau berhenti
    if (audio.paused) {
      audio.play(); // Mainkan audio jika berhenti
    } else {
      audio.pause(); // Hentikan audio jika sedang diputar
    }
  }
});
