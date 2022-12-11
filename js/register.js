let form = document.querySelector(".form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sign_up = document.getElementById("sign_up");
document.addEventListener("DOMContentLoaded", function () {
  sign_up.addEventListener("click", function (e) {
    if (username.value == "" && password.value == "") {
      alert("enter vlaue");
    } else {
      e.preventDefault();
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);

      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    }
  });
});



