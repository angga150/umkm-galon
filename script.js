const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// contact untuk whatsapp API
document.getElementById("whatsappBtn").addEventListener("submit", function () {
  // Ambil nilai dari input nomor dan pesan
  let phoneNumber = 62895611267615;
  let message = document.getElementById("pesan").value.trim();

  // Encode pesan untuk URL
  let encodedMessage = encodeURIComponent(message);

  // URL WhatsApp API
  let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  // ini tanpa api
  let url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  // Redirect ke URL WhatsApp
  window.location.href = whatsappURL;
});
