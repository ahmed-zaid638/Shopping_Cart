let products = document.querySelector(".products > .container");
//showSelectedProduct
function showSelectedProduct() {
  let product = JSON.parse(localStorage.getItem("ProductID"));
  console.log(product);
  let selected = productsData[product - 1];
  console.log(selected);
  let data = () => {
    return `<div class="prodcut-item">
         <img src="${selected.src}" alt="" />
        <div class="prouct-item-desc">
         <a  onclick= "saveProductId(${selected.id})"  >${selected.title}</a>
       <p>  ${selected.desc} </p>
     </div>
        <div class="product-item-action">
           <button class="addtocart"  onclick= addToCart(${product.id})  >Add To Cart</button>
           <button class="addedtocart" disabled  > Added </button>
        </div>
    </div>`;
  };
  products.innerHTML = data();
}
showSelectedProduct();
