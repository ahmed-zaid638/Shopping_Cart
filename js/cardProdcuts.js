let productsContianer = document.querySelector(".products > .container");
let empty_cart = document.querySelector(".empty-cart");
//showProucts
function showProucts(allproducts = []) {
  let products = JSON.parse(localStorage.getItem("prodcuts"));
  if (products) {
    let productsUI = products.map((product) => {
      return `<div class="prodcut-item">
           <img src="${product.src}" alt="" />
          <div class="prouct-item-desc">
      <h2>${product.title}</h2>
         <p>
      ${product.desc}
         </p>
         <p>Size : ${product.size}</p>
       </div>
      <div class="product-item-action">
  <button    onclick= "removeFromCart (${product.id})" >Remove</button>
</div>
</div>`;
    });
    productsContianer.innerHTML = productsUI;
  }
}
showProucts();
// Remove form cart
function removeFromCart(id) {
  let products = JSON.parse(localStorage.getItem("prodcuts"));
  if (products) {
    let filterProuct = products.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("prodcuts", JSON.stringify(filterProuct));
    setTimeout(() => {
      showProucts(filterProuct);
    }, 500)
    
  }
}
