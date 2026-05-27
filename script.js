// Mengambil elemen ikon menu hamburger dan navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Fungsi Klik Ikon Menu Hamburger
menuIcon.onclick = () => {
    // Efek Toggle Class: Mengubah ikon garis tiga menjadi ikon 'X' saat diklik
    menuIcon.classList.toggle('bx-x');
    // Efek Toggle Class Active: Menampilkan / menyembunyikan menu dropdown
    navbar.classList.toggle('active');
};

// Menutup menu otomatis jika user mengklik salah satu link tautan menu
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Kembalikan ikon menu ke bentuk garis tiga semula
        menuIcon.classList.remove('bx-x');
        // Sembunyikan kembali wadah menu dropdown
        navbar.classList.remove('active');
    });
});
