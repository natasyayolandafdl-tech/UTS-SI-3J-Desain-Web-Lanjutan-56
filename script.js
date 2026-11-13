// ===== MENU NAVIGASI =====
var menu = document.querySelectorAll("#sidebar a");

// ===== PETA NAVIGASI DAN SOROTAN =====
var peta = {

    "#home-main": {
        tujuan: "#home-main",
        kotak: ["main"],
        kelas: []
    },

    "#mahasiswa": {
        tujuan: "#mahasiswa",
        kotak: ["main"],
        kelas: ["sorot-mahasiswa"]
    },

    "#home-section1": {
        tujuan: "#home-section1",
        kotak: [".section1", ".section2"],
        kelas: ["sorot-kelas", "sorot-aktifitas"]
    },

    "#home-section2": {
        tujuan: "#home-section2",
        kotak: [".section1", ".section2"],
        kelas: ["sorot-kelas", "sorot-aktifitas"]
    },

    "#home-aside": {
        tujuan: "#home-aside",
        kotak: ["aside"],
        kelas: ["sorot-statistik"]
    },

    "#home-footer": {
        tujuan: "#home-footer",
        kotak: ["footer"],
        kelas: ["sorot-dokumen"]
    },

    "#setting": {
        tujuan: "#setting",
        kotak: ["#setting"],
        kelas: ["sorot-setting"]
    }

};


// ===== DAFTAR SOROTAN =====
var daftarSorot = [
    "sorot-mahasiswa",
    "sorot-statistik",
    "sorot-kelas",
    "sorot-aktifitas",
    "sorot-dokumen",
    "sorot-setting"
];


// ===== HAPUS SOROTAN LAMA =====
function hapusSorot() {

    var semuaKotak = document.querySelectorAll(
        "main, aside, .section1, .section2, footer, #setting"
    );

    semuaKotak.forEach(function(kotak) {

        kotak.classList.remove("section-active");

        daftarSorot.forEach(function(nama) {
            kotak.classList.remove(nama);
        });

    });

}


// ===== NAVIGASI MENU =====
menu.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        var tujuan = this.getAttribute("href");
        var data = peta[tujuan];

        if (!data) return;

        // Menghapus menu aktif sebelumnya
        menu.forEach(function(item) {
            item.classList.remove("active");
        });

        // Mengaktifkan menu yang diklik
        this.classList.add("active");

        // Menghapus sorotan sebelumnya
        hapusSorot();

        // Mengaktifkan kolom yang dipilih
        data.kotak.forEach(function(selector, index) {

            var kotak = document.querySelector(selector);

            if (kotak) {

                kotak.classList.add("section-active");

                if (data.kelas[index]) {
                    kotak.classList.add(data.kelas[index]);
                }

            }

        });

        // Mengarahkan ke kolom tujuan
        var bagian = document.querySelector(data.tujuan);

        if (bagian) {

            bagian.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

});


// ===== EFEK PINK SAAT POINTER DI ATAS KOTAK =====
var kotak = document.querySelectorAll(
    "aside, .section1, .section2"
);

kotak.forEach(function(item) {

    item.addEventListener("mouseenter", function() {
        this.classList.add("pink");
    });

    item.addEventListener("mouseleave", function() {
        this.classList.remove("pink");
    });

});