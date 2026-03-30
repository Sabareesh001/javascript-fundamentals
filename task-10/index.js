let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const cartBadge = document.getElementById("cartBadge");
let allProducts = []; // Store all products

// Function to display products
function displayProducts(productsToDisplay) {
  const productGrid = document.querySelector(".products-grid");
  productGrid.innerHTML = ""; // Clear previous products

  if (productsToDisplay.length === 0) {
    productGrid.innerHTML =
      "<p style='text-align: center; grid-column: 1/-1;'>No products found</p>";
    return;
  }

  // Display each product
  productsToDisplay.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.id = product.id;

    const cartItem = cart.find((item) => item.id == product.id);
    const isInCart = !!cartItem;

    // Calculate discount
    const discountAmount = product.discount || 0;
    const finalPrice = product.price * (1 - discountAmount / 100);

    productDiv.innerHTML = `
      <div class="product-image">${product.image}</div>
      ${discountAmount > 0 ? `<div class="discount-badge">-${discountAmount}%</div>` : ""}
      <h3>${product.name}</h3>
      <p class="category-label">${product.category}</p>
      <div class="price-section">
        ${discountAmount > 0 ? `<p class="original-price">$${product.price.toFixed(2)}</p>` : ""}
        <p class="price">$${finalPrice.toFixed(2)}</p>
      </div>
      <div class="product-controls">
        <button class="add-to-cart-btn btn">${isInCart ? "Remove from Cart" : "Add to Cart"}</button>
        ${
          isInCart
            ? `
          <div class="quantity-controls">
            <button class="qty-btn minus-btn">-</button>
            <span class="quantity-value">${cartItem.quantity}</span>
            <button class="qty-btn plus-btn">+</button>
          </div>
        `
            : ""
        }
      </div>
    `;
    productGrid.appendChild(productDiv);
  });

  // Setup event listeners for buttons
  setupAddToCartListeners();
  setupQuantityListeners();
}

// Function to setup add to cart button listeners
function setupAddToCartListeners() {
  const addButtons = document.querySelectorAll(".add-to-cart-btn");

  addButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const productCard = button.closest(".product-card");
      const productId = productCard.id;

      // Check if product is already in cart
      const cartIndex = cart.findIndex((item) => item.id == productId);

      if (cartIndex !== -1) {
        // Remove from cart
        cart.splice(cartIndex, 1);
      } else {
        // Add to cart
        cart.push({ id: productId, quantity: 1 });
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      cartBadge.innerText = cart.length;

      // Update the display
      const searchValue = document.getElementById("searchInput").value;
      const categoryValue = document.getElementById("categorySelect").value;
      filterAndDisplay(searchValue, categoryValue);
    });
  });
}

// Function to setup quantity buttons
function setupQuantityListeners() {
  // Plus button
  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = btn.closest(".product-card").id;
      const item = cart.find((item) => item.id == productId);

      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        const quantityDisplay =
          btn.parentElement.querySelector(".quantity-value");
        quantityDisplay.textContent = item.quantity;
      }
    });
  });

  // Minus button
  document.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = btn.closest(".product-card").id;
      const item = cart.find((item) => item.id == productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        const quantityDisplay =
          btn.parentElement.querySelector(".quantity-value");
        quantityDisplay.textContent = item.quantity;
      }
    });
  });
}

// Function to filter and display products
function filterAndDisplay(searchValue, categoryValue) {
  let filtered = allProducts;

  // Filter by search
  if (searchValue) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  // Filter by category
  if (categoryValue) {
    filtered = filtered.filter((product) => product.category === categoryValue);
  }

  displayProducts(filtered);
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Update cart badge
    cartBadge.innerText = cart.length;

    // Fetch products from JSON
    const response = await fetch("./products.json");
    if (!response.ok) throw new Error("Failed to load products");
    allProducts = await response.json();

    // Display all products initially
    displayProducts(allProducts);

    // Search input listener
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value;
      const categoryValue = document.getElementById("categorySelect").value;
      filterAndDisplay(searchValue, categoryValue);
    });

    // Category select listener
    const categorySelect = document.getElementById("categorySelect");
    categorySelect.addEventListener("change", (e) => {
      const categoryValue = e.target.value;
      const searchValue = document.getElementById("searchInput").value;
      filterAndDisplay(searchValue, categoryValue);
    });
  } catch (error) {
    console.error("Error:", error);
    const productGrid = document.querySelector(".products-grid");
    productGrid.innerHTML =
      "<p style='text-align: center; color: red;'>Error loading products. Please refresh the page.</p>";
  }
});
