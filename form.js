const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi sederhana
    if(name === "" || email === "" || subject === "" || message === "") {
        alert("Harap isi semua field sebelum mengirim!");
        return;
    }

    // Simulasi pengiriman
    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.\nKami akan menghubungi Anda melalui email: ${email}.`);

    // Reset form
    form.reset();
});

// Scroll smooth ke atas
document.querySelector('footer a').addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
