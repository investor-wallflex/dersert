let cartCount = 0
const cartCountDisplay = document.getElementById('cart-count');
const cartTotalDisplay = document.getElementById('cart-total');

document.getElementById('add-to-cart').addEventListener('click', function() {
	cartCount++;
	updateCart();
});

document.getElementById('remove-from-cart').addEventListener('click', function() {
	if (cartCount > 0) {
		cartCount--;
		updateCart();
	}
});

function updateCart() {
	const totalPrice = (cartCount * itemPrice).toFixed(2);
	cartCountDisplay.textContent = cartCount;
	cartTotalDisplay.textContent = totalPrice;
}
function increment(productId) {
    const quantityElement = document.getElementById(productId);
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}
