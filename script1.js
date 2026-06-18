const products = [
  {
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    name: "Smart Watch",
    price: 89.99,
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    name: "Laptop",
    price: 799.99,
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    name: "Gaming Mouse",
    price: 29.99,
    image: "https://picsum.photos/300/200?random=4"
  }
];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let cart = 0;

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
          <button class="btn">Add to Cart</button>
      </div>
  `;

  card.querySelector(".btn").addEventListener("click", () => {
      cart++;
      cartCount.textContent = cart;
  });

  productContainer.appendChild(card);
});