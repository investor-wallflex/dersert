const cart = {
    productA: {name:'productA', quantity: 0, price: 5.50, image:'addtocart/image-baklava-mobile.jpg', },
    productB: {name:'productB', quantity: 0, price: 4.00, image:'addtocart/image-baklava-mobile.jpg', },
    productC: {name:'productC', quantity: 0, price: 4.50, image:'addtocart/image-baklava-mobile.jpg', },
    productD: {name:'productD', quantity: 0, price: 7.00, image:'addtocart/image-baklava-mobile.jpg', },
    productE: {name:'productE', quantity: 0, price: 8.00, image:'addtocart/image-brownie-mobile.jpg', },
    productF: {name:'productF', quantity: 0, price: 5.00, image:'', },
    productG: {name:'productG', quantity: 0, price: 6.50, image:'', },
    productH: {name:'productH', quantity: 0, price: 5.50, image:'', },
    productI: {name:'productI', quantity: 0, price: 6.50, image:'', },
};

function increment(product, price) {
    cart[product].quantity++;
    updateCart();

}

function decrement(product) {
    if (cart[product].quantity > 0) {
        cart[product].quantity--;
    }
    updateCart();
}


function updateCart() {
    let totalPrice = 0;
    let cartTotal = 0;
    const cartItems = document.getElementById('cart-items');
    const emptyCartImage = document.getElementById('empty-cart-image');
    
    // clear the cart list before adding new ones

    cartItems.innerHTML = '';
    
    // loop through each product in the cart

    for (const product in cart) {
        const quantity = cart[product].quantity;
        const productElement = document.getElementById(`${product}-quantity`);
        productElement.innerText = quantity;
        
        //update cartTotal and totalPrice
        totalPrice += quantity * cart[product].price;
        cartTotal += quantity;
    }

        document.getElementById('cartTotal').innerText = cartTotal;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);

       
}


        
    
         /*if (quantity > 0) {
             const li = document.createElement('li');

             const productName = document.createElement('span');
             productName.innerText = `${cart[product].name} (x${quantity})`;

             const productImage = document.createElement('img');
             productImage.scr = cart[product].image;
             productImage.alt = cart[poduct].name;
             productImage.style.width = '50px';

             li.appendChild(productImage);
             li.appendChild(productName);

             cartItems.appendChild(li);
         }
     
        
    // //document.getElementById('cartTotal').innerText = cartTotal;
    // document.getElementById('total-price').innerText = totalPrice.toFixed(2)


     if (cartTotal === 0) {
         emptyCartImage.style.display = 'block';
     } else {
         emptyCartImage.style.display = 'none';
     }*/
       
