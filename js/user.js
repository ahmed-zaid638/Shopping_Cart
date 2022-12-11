let links = document.querySelector(".links");
let profile = document.querySelector(".profile");
let user = document.querySelector(".profile .user");
let logout = document.querySelector(".profile .logout");
let username = localStorage.getItem("username");

if (localStorage.getItem("username")) {
  links.remove();
  profile.style.display = "block";
  user.innerHTML = localStorage.getItem("username");
} else {
}
logout.addEventListener("click", function () {
  console.log("logout");
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1000);
});
