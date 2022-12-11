let username = document.getElementById("username");
let password = document.getElementById("password");
let sign_in = document.getElementById("sign_in");

sign_in.addEventListener("click", function (e) {
  e.preventDefault()
  if (username.value == "" && password.value == "") {
    alert("Please enter a username");
  } else {
  let getUsername = localStorage.getItem("username")
  let getPassword = localStorage.getItem("password")
      if ( getUsername == username.value && getPassword== password.value) {
          window.location ="index.html"
      } else {
          window.location ="register.html"
      }
  }
});





