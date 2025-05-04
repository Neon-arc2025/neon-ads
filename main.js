// Sample JavaScript for dynamic content loading
document.addEventListener("DOMContentLoaded", () => {
    const featuredProducts = [
        { id: 1, name: "Product A", price: "$10" },
        { id: 2, name: "Product B", price: "$20" },
        { id: 3, name: "Product C", price: "$30" },
    ];

    const featuredDiv = document.getElementById('featured-products');
    featuredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        featuredDiv.appendChild(productDiv);
    });
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}