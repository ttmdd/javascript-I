// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2, 
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 var total = 0;
 
 // Exercise 1
 function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
     for (let i = 0; i < products.length; i++) {
         if (id === products[i].id) {
             cartList.push(products[i]);
         }
     }
     return cartList
 }
 
 // Exercise 2
 function cleanCart() {
     let table = document.getElementById("cart_list");
     let cartTotal = document.getElementById("total_price")
     while (table.hasChildNodes()) {
         table.removeChild(table.firstChild);
         cartTotal.innerHTML = 0;
     }
 }
 
 // Exercise 3
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
     for (let i = 0; i < cartList.length; i++) {
         total += cartList[i].price;
     }
     return total;
 }
 
 // Exercise 4
 function generateCart() {
     // Using the "cartlist" array that contains all the items in the shopping cart, 
     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
 
     for (let i = 0; i < cartList.length; i++) {
        if (cart.includes(cartList[i])) {
            const product = cart.find((product) => product.id === cartList[i].id);
            product.quantity += 1;
            product.subtotal = product.quantity * product.price;
        } else {
            cart.push(cartList[i]);
            const product = cart.find((product) => product.id === cartList[i].id);
            product.quantity = 1;
            product.subtotal = product.price;
        }
    }

    //  cartList.sort((a, b) => a.id - b.id);
 
    //  const productCount = {};
     
    //  cartList.forEach(product => {
    //      productCount[product.id] = (productCount[product.id] || 0) + 1;
    //  });
     
    //      for (let i = 0; i < cartList.length; i++) {
     
    //          cartList[i].quantity = productCount[cartList[i].id];
     
    //          if (cartList[i + 1]){
    //              if (cartList[i].id !== cartList[i + 1].id) {
    //              cart.push(cartList[i])
    //          }
    //          } else  {
    //              cart.push(cartList[i])
    //          }
    //  }
    //  return cart;
}

 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"
 
     let subtotal = 0;
     let discount = 0;
     // let test = 0;
 
     for (let i = 0; i < cart.length; i++) {
         if (cart[i].offer) {
             if (cart[i].quantity >= cart[i].offer.number) {
                 subtotal = (cart[i].price * cart[i].quantity);
                 cart[i].subtotal = subtotal;
                 discount = (subtotal/100) * cart[i].offer.percent;
                 cart[i].subtotalWithDiscount = subtotal - discount;
 
                 // test = (cart[i].price * cart[i].quantity) - ((cart[i].price * cart[i].quantity) / 100) * cart[i].offer.percent;
                 // console.log(test);
                 
             } else {
                 cart[i].subtotal = (cart[i].price * cart[i].quantity);
             }
         } else {
             cart[i].subtotal = (cart[i].price * cart[i].quantity);
         }
     }
     return cart;
 }
 
 // Exercise 6
 function printCart() {
     // Fill the shopping cart modal manipulating the shopping cart dom
 
     // remove hardcoded elements from the table
     let table = document.getElementById("cart_list");
     while (table.hasChildNodes()) {
         table.removeChild(table.firstChild);
     }
 
     let finalTotal = 0;
 
     // fill the cart with selected products
     for (let i = 0; i < cart.length; i++) {

         // generate new rows
         let row = table.insertRow();
         let th = row.insertCell();
         let td1 = row.insertCell();
         let td2 = row.insertCell();
         let td3 = row.insertCell();
         th.innerHTML = cart[i].name;
         th.style.fontWeight = "bold";
         td1.innerHTML = cart[i].price;
         td2.innerHTML = cart[i].quantity;
         td3.innerHTML = cart[i].subtotalWithDiscount || cart[i].subtotal;
 
         // calculate the total
         finalTotal += cart[i].subtotalWithDiscount || cart[i].subtotal;
     }
 
     // show the total in the cart (limit to only 2 decimals)
     let cartTotal = document.getElementById("total_price")
     cartTotal.innerHTML = finalTotal.toFixed(2);
 
     return table;
 
 }
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
     // Refactor previous code in order to simplify it 
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cart array or update its quantity in case it has been added previously.
 }
 
 // Exercise 8
 function removeFromCart(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 }
 
 function open_modal(){
     console.log("Open Modal");
     generateCart();
     applyPromotionsCart()
     printCart();
 }