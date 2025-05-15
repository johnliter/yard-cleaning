// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you for your request! We'll be in touch soon.");
    });
  }
});
