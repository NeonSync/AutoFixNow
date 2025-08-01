document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  if (phone.length !== 10 || !/^\d+$/.test(phone)) {
    errorMessage.textContent = "Enter a valid 10-digit phone number!";
    return;
  }

  // Simulated success
  localStorage.setItem("mechanicUser", JSON.stringify({ name, email, phone }));
  alert("Signup successful! You can now access our page.");
  window.location.href = "mechanic-dashboard.html";
});
