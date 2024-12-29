function checkPassword() {
  const correctPassword = "202691"; // Set your correct password here
  const userInput = document.getElementById("passwordInput").value;
  const message = document.getElementById("message");

  if (userInput === correctPassword) {
    message.style.color = "green";
    message.textContent = "Password correct! Redirecting...";
    setTimeout(() => {
      window.location.href = "home-bank.html"; 
    }, 2000);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect password. Try again!";
  }
}
