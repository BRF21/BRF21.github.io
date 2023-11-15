$(document).ready(function() {
    $(".main-category").hover(function() {
        $(".sub-categories").show();
    }, function() {
        $(".sub-categories").hide();
    });

    $("[data-category]").hover(function() {
        $(this).find(".sub-list").show();
    }, function() {
        $(this).find(".sub-list").hide();
    });
});

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productCards = document.querySelectorAll('.product-card');
const cartTotalElement = document.getElementById('cartTotal');
const cart = [];

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
});

productCards.forEach(card => {
    const addToCartButton = card.querySelector('button');
    const productName = card.querySelector('h3').textContent;
    const productPrice = parseFloat(card.querySelector('p').textContent.split(':')[1]);

    addToCartButton.addEventListener('click', () => {
        const cartItem = { name: productName, price: productPrice };
        cart.push(cartItem);
        updateCartTotal();
    });
});

const updateCartTotal = () => {
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
};
