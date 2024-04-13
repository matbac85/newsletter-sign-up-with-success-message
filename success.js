const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
const emailSpan = document.getElementById("e-email");
const closeButton = document.getElementById("e-close-button");

// Décoder l'adresse e-mail et l'afficher
const decodedEmail = decodeURIComponent(email);
emailSpan.textContent = decodedEmail;

closeButton.addEventListener("click", function () {
  window.location.href = `index.html`;
});
