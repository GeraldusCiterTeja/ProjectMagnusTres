

document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "starry-night",
        img: "1.jpg",
        price: 150000,
      },
      {
        id: 2,
        name: "Belakang  ",
        img: "2.jpg",
        price: 160000,
      },

    ],
    
    // // Konversi ke rupiah  
    // rupiah (number){
    //   return new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    //     minimumFractionDigits: 0,
    //   }).format(number);
    // },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Cek apakah ada barang di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // Jika belum ada 
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // }Jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada  di cart
        this.items = this.items.map((item) => {
          // Jika Barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      // Jika Item lebih dari 1
      if (cartItem.quantity > 1) {
        // Telusuri 1 1
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          } 
        });
      } else if(cartItem.quantity === 1){
        // Jika barangmya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity --;
        this.total -= cartItem.price;
      }
    },
  });
});

// form Validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');
form.addEventListener('keyup', function(){
    for(let i = 0 ; i < form.elements.length; i++){
        if(form.elements[i].value.length !== 0 ){
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        }else{
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
})

// // Kirim data ketika tombol button di click
checkoutButton.addEventListener('click', function(e){
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  console.log(objData)
  const message = formatMessage(objData);
  window.open('http://wa.me/6282154776799?text=' + encodeURIComponent(message));
})

// // Format Pesan Whatsapp
const formatMessage = (obj) =>{
  return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    Address: ${obj.address}
    No HP: ${obj.phone}
Data Pesanan
  ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}

TOTAL: ${rupiah(obj.total)}
Terima Kasih`;
}

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}