const cart = {
    productA: { quantity: 0, price: 5.50 },
    productB: { quantity: 0, price: 4.00 },
    productC: { quantity: 0, price: 4.50 },
    productD: { quantity: 0, price: 7.00 },
    productE: { quantity: 0, price: 8.00 },
    productF: { quantity: 0, price: 5.00 },
    productG: { quantity: 0, price: 6.50 },
    productH: { quantity: 0, price: 5.50 },
    productI: { quantity: 0, price: 6.50 },
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

    for (const product in cart) {
        const quantity = cart[product].quantity;
        const productElement = document.getElementById(`${product}-quantity`);
        productElement.innerText = quantity;

        totalPrice += quantity * cart[product].price;
    }

    document.getElementById('total-price').innerText = totalPrice;
};