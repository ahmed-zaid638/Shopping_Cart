let links = document.querySelector(".links");
let profile = document.querySelector(".profile");
let user = document.querySelector(".profile .user");
let logout = document.querySelector(".profile .logout");
let username = localStorage.getItem("username");
let products = document.querySelector(".products > .container");
let cartCount = document.querySelector(".cart span");
let cart = document.querySelector(".cart");
let inputEl = document.querySelector(".search");
// check logged user
function checkLoggedUser() {
  if (localStorage.getItem("username")) {
    links.remove();
    profile.style.display = "block";
    user.innerHTML = localStorage.getItem("username");
  } else {
  }
}
checkLoggedUser();
// logout
logout.addEventListener("click", function () {
  console.log("logout");
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1000);
});
// Show Products
function showProucts(allproducts) {
  let mapedproducts = allproducts.map((product) => {
    return `<div class="prodcut-item">
             <img src="${product.src}" alt="" />
            <div class="prouct-item-desc">
           <a  onclick= "saveProductId(${product.id})"  >${product.title}</a>
           <p>${product.desc}</p> 
           <p> Size :  ${product.size}</p> 
         </div>
        <div class="product-item-action">
          <button class="addtocart"  onclick= addToCart(${product.id})  >Add To Cart</button>
          <button class="addedtocart" disabled  > Added </button>
      </div>
    </div>`;
  });
  products.innerHTML = mapedproducts.join("");
}
showProucts(productsData);
let addToCartBTns = document.querySelectorAll(".addtocart");
let addedToCartBTns = document.querySelectorAll(".addedtocart");

// Addd TO Card
let prodcutsObject = [];
function addToCart(id) {
  if (username) {
    cartCount.style.opacity = "1";
    let filterProuct = productsData.find((item) => {
      return item.id === id;
    });
    prodcutsObject.push(filterProuct);
    localStorage.setItem("prodcuts", JSON.stringify(prodcutsObject));
    let count = 1;
    cartCount.innerHTML = +cartCount.innerHTML + count;
    addToCartBTns[id - 1].style.display = "none";
    addedToCartBTns[id - 1].style.display = "block";
  } else {
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}
// Remove form cart
function removeFromCart(id) {
  addToCartBTns[id - 1].style.display = "block";
  addedToCartBTns[id - 1].style.display = "none";
  console.log("object");
}
// cart
cart.addEventListener("click", function () {
  window.location = "cardproducts.html";
});

// Product Details
function saveProductId(id) {
  localStorage.setItem("ProductID", id);
  window.location = "productDetails.html";
  console.log("save");
}

// search
inputEl.addEventListener("keyup", function (e) {
  let value = e.target.value;
  search(value);
});

function search(title) {
  let matchTitle = productsData.filter((item) => {
    return item.title.indexOf(title) !== -1;
  });
  showProucts(matchTitle);
}






