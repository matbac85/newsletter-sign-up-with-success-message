const form = document.getElementById("b-form");
const errorMessageContainer = document.getElementById(
  "error-message-container"
);
const errorMessage = document.createElement("p");
const email = document.getElementById("email");

errorMessage.textContent = "";
errorMessageContainer.appendChild(errorMessage);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = email.value.trim();

  if (emailValue === "" || !isEmail(emailValue)) {
    showError("Valid email required");
  } else {
    hideError();
    const encodedEmail = encodeURIComponent(emailValue);
    window.location.href = `success.html?email=${encodedEmail}`;
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("error");
  email.classList.add("input-error");
}

function hideError() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("error");
  email.classList.remove("input-error");
}

function isEmail(emailValue) {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
}
