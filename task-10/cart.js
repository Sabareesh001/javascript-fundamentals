let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const cartBadge = document.getElementById("cartBadge");
let allProducts = [];

// Function to display cart items
function displayCart() {
  const cartContent = document.getElementById("cartContent");

  // If cart is empty
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty</p>
        <a href="index.html" class="btn-link">Continue Shopping</a>
      </div>
    `;
    return;
  }

  // Create cart items HTML
  let cartItemsHTML = '<div class="cart-items">';
  let subtotal = 0;
  let totalDiscount = 0;

  cart.forEach((cartItem) => {
    const product = allProducts.find((p) => p.id == cartItem.id);

    if (product) {
      const discountPercent = product.discount || 0;
      const discountAmount = product.price * (discountPercent / 100);
      const finalPrice = product.price - discountAmount;
      const itemSubtotal = product.price * cartItem.quantity;
      const itemDiscount = discountAmount * cartItem.quantity;
      const itemTotal = finalPrice * cartItem.quantity;

      subtotal += itemSubtotal;
      totalDiscount += itemDiscount;

      cartItemsHTML += `
        <div class="cart-item">
          <div class="cart-item-image">${product.image}</div>
          <div class="cart-item-details">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p>
            <div class="price-breakdown">
              <p class="price">Price: $${product.price.toFixed(2)}</p>
              ${
                discountPercent > 0
                  ? `
                <p class="discount">Discount (-${discountPercent}%): -$${itemDiscount.toFixed(2)}</p>
                <p class="final-price">Final Price: $${finalPrice.toFixed(2)}</p>
              `
                  : ""
              }
            </div>
            <div class="quantity-controls">
              <button class="qty-btn minus-btn" data-id="${product.id}">-</button>
              <span class="quantity-value">${cartItem.quantity}</span>
              <button class="qty-btn plus-btn" data-id="${product.id}">+</button>
            </div>
            <p class="total">Total: $${itemTotal.toFixed(2)}</p>
            <button class="remove-btn" data-id="${product.id}">Remove</button>
          </div>
        </div>
      `;
    }
  });

  cartItemsHTML += "</div>";

  // Calculate tax and total
  const TAX_RATE = 0.18;
  const subtotalAfterDiscount = subtotal - totalDiscount;
  const tax = subtotalAfterDiscount * TAX_RATE;
  const finalTotal = subtotalAfterDiscount + tax;

  // Add cart summary
  const cartSummary = `
    <div class="cart-total">
      <h2>Cart Summary</h2>
      <p>Total Items: ${cart.length}</p>
      <div class="price-breakdown-summary">
        <p>Subtotal: <strong>$${subtotal.toFixed(2)}</strong></p>
        ${totalDiscount > 0 ? `<p class="discount">Total Discount: -$${totalDiscount.toFixed(2)}</p>` : ""}
        <p>Subtotal After Discount: <strong>$${subtotalAfterDiscount.toFixed(2)}</strong></p>
        <p>Tax (18%): <strong>$${tax.toFixed(2)}</strong></p>
        <p class="final-total">Final Total: <strong>$${finalTotal.toFixed(2)}</strong></p>
      </div>
      <a href="index.html" class="btn-link">Continue Shopping</a>
      <button class="btn checkout-btn">Checkout</button>
    </div>
  `;

  cartContent.innerHTML = cartItemsHTML + cartSummary;

  // Setup event listeners
  setupRemoveListeners();
  setupQuantityListeners();
  setupCheckoutListener();
}

// Function to remove item from cart
function setupRemoveListeners() {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = button.getAttribute("data-id");

      // Remove from cart
      cart = cart.filter((item) => item.id != productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartBadge.innerText = cart.length;

      // Refresh display
      displayCart();
    });
  });
}

// Function to setup quantity buttons
function setupQuantityListeners() {
  // Plus button
  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = btn.getAttribute("data-id");
      const item = cart.find((item) => item.id == productId);

      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        const quantityDisplay =
          btn.parentElement.querySelector(".quantity-value");
        quantityDisplay.textContent = item.quantity;

        // Update total price
        const product = allProducts.find((p) => p.id == productId);
        const discountPercent = product.discount || 0;
        const discountAmount = product.price * (discountPercent / 100);
        const finalPrice = product.price - discountAmount;
        const total = btn.parentElement.parentElement.querySelector(".total");
        total.textContent = `Total: $${(finalPrice * item.quantity).toFixed(2)}`;

        // Update cart summary
        updateCartSummary();
      }
    });
  });

  // Minus button
  document.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = btn.getAttribute("data-id");
      const item = cart.find((item) => item.id == productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        const quantityDisplay =
          btn.parentElement.querySelector(".quantity-value");
        quantityDisplay.textContent = item.quantity;

        // Update total price
        const product = allProducts.find((p) => p.id == productId);
        const discountPercent = product.discount || 0;
        const discountAmount = product.price * (discountPercent / 100);
        const finalPrice = product.price - discountAmount;
        const total = btn.parentElement.parentElement.querySelector(".total");
        total.textContent = `Total: $${(finalPrice * item.quantity).toFixed(2)}`;

        // Update cart summary
        updateCartSummary();
      }
    });
  });
}

// Function to update cart summary without full refresh
function updateCartSummary() {
  let subtotal = 0;
  let totalDiscount = 0;

  cart.forEach((cartItem) => {
    const product = allProducts.find((p) => p.id == cartItem.id);
    if (product) {
      const discountPercent = product.discount || 0;
      const discountAmount = product.price * (discountPercent / 100);
      subtotal += product.price * cartItem.quantity;
      totalDiscount += discountAmount * cartItem.quantity;
    }
  });

  const TAX_RATE = 0.18;
  const subtotalAfterDiscount = subtotal - totalDiscount;
  const tax = subtotalAfterDiscount * TAX_RATE;
  const finalTotal = subtotalAfterDiscount + tax;

  const cartTotal = document.querySelector(".cart-total");
  cartTotal.innerHTML = `
    <h2>Cart Summary</h2>
    <p>Total Items: ${cart.length}</p>
    <div class="price-breakdown-summary">
      <p>Subtotal: <strong>$${subtotal.toFixed(2)}</strong></p>
      ${totalDiscount > 0 ? `<p class="discount">Total Discount: -$${totalDiscount.toFixed(2)}</p>` : ""}
      <p>Subtotal After Discount: <strong>$${subtotalAfterDiscount.toFixed(2)}</strong></p>
      <p>Tax (18%): <strong>$${tax.toFixed(2)}</strong></p>
      <p class="final-total">Final Total: <strong>$${finalTotal.toFixed(2)}</strong></p>
    </div>
    <a href="index.html" class="btn-link">Continue Shopping</a>
    <button class="btn checkout-btn">Checkout</button>
  `;

  setupCheckoutListener();
}

// Function to setup checkout button
function setupCheckoutListener() {
  const checkoutBtn = document.querySelector(".checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length > 0) {
        alert("Thank you for your purchase!");
        // Clear cart
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        cartBadge.innerText = 0;
        displayCart();
      }
    });
  }
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

    // Display cart
    displayCart();
  } catch (error) {
    console.error("Error:", error);
    const cartContent = document.getElementById("cartContent");
    cartContent.innerHTML =
      "<p style='text-align: center; color: red;'>Error loading cart. Please refresh the page.</p>";
  }
});
