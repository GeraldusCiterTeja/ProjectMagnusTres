// list

const navbar = document.getElementById("navbar");
const list = document.getElementById("list");

list.addEventListener("click", () => {
  navbar.classList.toggle("active");

  const sidebar = document.querySelectorAll(".hide-sidebar");
  sidebar.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});

// click di luar List
document.addEventListener("click", (e) => {
  if (!list.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Shoppingcart
const shoppingCart = document.getElementById("shoppingCart");
const cart = document.getElementById("cart");

cart.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// click di luar shopping Cart
document.addEventListener('click', (e)=>{
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
})

// detail
const buy = document.querySelectorAll('.buyNow');
const detailProduct = document.querySelector(".detailProduct");

buy.forEach(button => {
  button.onclick = (e)=>{
    detailProduct.style.display = 'flex';
    e.preventdefault()
  }
});

document.querySelector('.deleteDetail').onclick = (e)=>{
  detailProduct.style.display = 'none';
}

// click di luar detail 
window.onclick = (e) =>{
  if(e.target === detailProduct){
    detailProduct.style.display = 'none';
  }
}


// img 
// const imgD = document.querySelector('.imgD');
// const imgB = document.querySelector('.imgB');

// imgD.addEventListener('click', (e)=>{
//   imgB.classList.toggle('active')
//   e.preventDefault();
  
// })

// imgB.addEventListener('click', (e)=>{
//   imgB.classList.toggle('active')
//   e.preventDefault();
  
// })

