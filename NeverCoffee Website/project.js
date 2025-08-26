let cartItems = [];

const cartButtons = document.querySelectorAll('.cart-btn');
const cartCountSpan = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const cartItemsList = document.getElementById('cart-items');

window.addEventListener('load', () => {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartCount();
    updateCartPopup();
});

cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const itemName = parent.querySelector('h3').textContent;
        const itemImage = parent.querySelector('img').getAttribute('src');
        const itemPrice = parent.querySelector('p').textContent;

        const item = { name: itemName, image: itemImage, price: itemPrice };
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        updateCartCount();
        updateCartPopup();

// ✅ Show toast
const toast = document.getElementById('toast-message');
toast.classList.add('show');
setTimeout(() => {
    toast.classList.remove('show');
}, 500);

    });
});

cartIcon.addEventListener('click', () => {
    window.location.href = 'cartproject.html'; // ✅ Same tab
});

function updateCartCount() {
    if (cartCountSpan) {
        cartCountSpan.textContent = cartItems.length;
    }
}

function updateCartPopup() {
    if (!cartItemsList) return;
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
        cartItemsList.appendChild(li);
    });
}
