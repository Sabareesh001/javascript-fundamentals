# Task 10: E-Commerce Shopping Cart

## Objective

Build a complete e-commerce application with product browsing, shopping cart management, filtering, and a checkout/cart page.

## Features

- **Product Catalog**: Display products from a JSON file with filtering
- **Add to Cart**: Add/remove items with quantity management
- **Cart Badge**: Dynamic counter showing items in cart
- **Price Calculations**: Calculate total prices with discount support
- **Search Functionality**: Filter products by name in real-time
- **Category Filtering**: Filter products by category
- **Cart Page**: Review items, update quantities, and calculate totals
- **localStorage Persistence**: Cart data persists across browser sessions
- **Quantity Controls**: Increase/decrease item quantities
- **Discount Badges**: Display discount percentages on products

## Technologies Used

- HTML5 for structure
- CSS3 for styling and layout
- Vanilla JavaScript (ES6)
- JSON for product data
- Browser localStorage API

## Getting Started

### Setup Instructions

1. Ensure `products.json` is in the task-10 directory
2. Open `index.html` in a web browser (main product listing)
3. Open `cart.html` in a new tab to view shopping cart
4. No external dependencies required

### How to Use

#### Product Browsing (index.html)

1. Products are displayed as cards in a grid
2. Click **Add to Cart** to add items to your cart
3. Use search bar to filter products by name
4. Click category buttons to filter by category
5. Cart count updates in the header badge
6. For items in cart, use +/- buttons to adjust quantity

#### Shopping Cart (cart.html)

1. View all items in your cart
2. Update quantities with +/- buttons
3. Remove items individually
4. See real-time total price calculation
5. Includes tax/shipping calculations
6. Proceed to checkout (can be enhanced)

## File Structure

- `index.html` - Main product listing page
- `cart.html` - Shopping cart review page
- `index.js` - Product display and cart management
- `cart.js` - Cart page logic
- `styles.css` - Styling for both pages
- `products.json` - Product data

## Product Data Format (products.json)

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 29.99,
      "category": "Electronics",
      "image": "📱",
      "discount": 10
    }
  ]
}
```

## Cart Data Structure (localStorage)

```javascript
cart = [
  {
    id: 1,
    name: "Product Name",
    price: 29.99,
    quantity: 2,
    discount: 10,
  },
];
```

## Key Functions

### Product Management (index.js)

- `displayProducts(productsToDisplay)` - Renders product cards
- `fetchProducts()` - Loads product data from JSON
- `searchProducts()` - Filters products by search term
- `filterByCategory(category)` - Filters by category
- `addToCart(productId)` - Adds/removes items from cart
- `updateQuantity(productId, delta)` - Changes item quantity
- `updateCartBadge()` - Updates item count badge

### Cart Management (cart.js)

- `displayCart()` - Shows all cart items
- `removeFromCart(productId)` - Removes item from cart
- `updateCartQuantity(productId, quantity)` - Updates quantity
- `calculateTotal()` - Computes cart subtotal
- `calculateTax()` - Calculates tax amount
- `calculateShipping()` - Calculates shipping (can vary by amount)

## Product Card HTML Structure

```html
<div class="product-card" id="product-1">
  <div class="product-image">📱</div>
  <div class="discount-badge">-10%</div>
  <h3>Product Name</h3>
  <p class="category-label">Electronics</p>
  <div class="price-section">
    <p class="original-price">$29.99</p>
    <p class="price">$26.99</p>
  </div>
  <div class="product-controls">
    <button class="add-to-cart-btn">Add to Cart</button>
    <div class="quantity-controls">
      <button class="qty-btn minus-btn">-</button>
      <span class="quantity-value">2</span>
      <button class="qty-btn plus-btn">+</button>
    </div>
  </div>
</div>
```

## Learning Concepts

- Fetch API to load JSON product data
- Array methods: `map()`, `filter()`, `find()`, `reduce()`
- Object manipulation and spread operator
- localStorage: Get, set, and parse JSON
- String methods: `toLowerCase()`, `includes()`, `trim()`
- DOM manipulation: createElement, innerHTML, event listeners
- Event delegation: Click handlers on parent elements
- CSS calculations for responsive grids
- Price calculations with discounts
- State management with cart variable

## Key Features Explained

### Add to Cart Logic

1. Check if item exists in cart
2. If exists: Update quantity
3. If new: Add item with quantity 1
4. Update cart badge
5. Update button text (Remove from Cart)

### Price Calculation

```javascript
const finalPrice = product.price * (1 - discount / 100);
```

### Discount Display

- Shows original price with strikethrough
- Displays final price in larger font
- Badge shows discount percentage

### localStorage Implementation

```javascript
// Save cart
localStorage.setItem("cart", JSON.stringify(cart));

// Load cart
cart = JSON.parse(localStorage.getItem("cart")) || [];
```

## Filtering Features

### Search Filter

- Real-time filtering as user types
- Case-insensitive search
- Filters by product name

### Category Filter

- Toggle buttons for each category
- Displays only selected category products
- "All" button to show everything

## Cart Persistence

- Cart saves to localStorage automatically
- Survives page refresh and browser restart
- Shared between index.html and cart.html
- Cleared only with localStorage.clear() or explicitly

## Tax & Shipping Calculation

- Tax: Typically 10% of subtotal
- Shipping: Flat rate or based on order total
- These can be customized per requirements

## Event Handling

- Click events on product buttons
- Input events on search box
- Click events on category filters
- Event delegation for dynamically created elements

## Responsive Design

- Mobile-first CSS Grid layout
- Cards stack on smaller screens
- Touch-friendly button sizes

## Potential Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Recommended/related products
- Coupon/promo code system
- Multiple shipping options
- Payment gateway integration
- Order history tracking
- Product image gallery
- In-stock notifications
- Promotions banner
- Checkout wizard
- Address validation
- Multiple payment methods
- Order tracking

## Dependencies (None)

- Pure JavaScript implementation
- Works with modern browsers
- No external libraries required

## Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- Requires localStorage support
- Requires ES6+ JavaScript support
