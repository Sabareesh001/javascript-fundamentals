# Task 8: Single Page Application (SPA) Router

## Objective

Create a single-page application with client-side routing that displays different page content based on URL hash without page reloads.

## Features

- **Hash-based Routing**: Navigate between pages using URL hash (#home, #about, #contact)
- **Dynamic Page Display**: Shows/hides content based on current route
- **Home Page Default**: Displays home page when no hash is present
- **404 Page**: Shows 404 error for undefined routes
- **No Page Reloads**: Smooth transitions between pages
- **Browser History Support**: Back/forward buttons work correctly
- **Page Caching**: All pages are loaded simultaneously for instant switching

## Technologies Used

- HTML5 for page structure
- CSS3 for styling
- Vanilla JavaScript (ES6)
- Browser Hash API

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. No external dependencies required
3. No build process needed

### How to Use

1. Navigate using the navigation menu links:
   - Click **Home** to view the home page
   - Click **About** to view the about page
   - Click **Contact** to view the contact page
   - Click **Products** to view the products page
2. Use browser back/forward buttons to navigate history
3. Edit the URL hash manually (e.g., `index.html#products`)
4. Invalid routes show a 404 page

## File Structure

- `index.html` - All page content and navigation structure
- `index.js` - Routing logic and page switching
- `styles.css` - Styling for all pages

## HTML Structure

```html
<!-- Navigation menu -->
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <a href="#products">Products</a>
</nav>

<!-- Page content containers -->
<div id="home" class="page"><!-- Home content --></div>
<div id="about" class="page"><!-- About content --></div>
<div id="contact" class="page"><!-- Contact content --></div>
<div id="404" class="page"><!-- 404 content --></div>
```

## Key Functions

- `route()` - Main routing function
  - Gets current hash from `window.location.hash`
  - Hides all pages
  - Shows the matching page
  - Displays 404 if page not found

## Event Listeners

- `hashchange` event - Fires when URL hash changes
- `load` event - Triggers routing on initial page load

## Route Logic

```javascript
// Extract hash (remove # character)
const hash = window.location.hash;
const pageId = hash.slice(1); // "home" from "#home"

// Get page div by ID
const contentDiv = document.getElementById(pageId);

// Display selected page or 404
if (contentDiv === null) {
  document.getElementById("404").style.display = "block";
} else {
  contentDiv.style.display = "block";
}
```

## Learning Concepts

- Hash-based routing and URL manipulation
- `window.location.hash` - Reading current route
- `hashchange` event - Detecting route changes
- `load` event - Initial page load
- DOM visibility control with `display: none/block`
- querySelectorAll for selecting multiple elements
- forEach loops for mass operations
- String manipulation with `slice()`
- Conditional logic for navigation

## Navigation Flow

1. User clicks a link (e.g., `href="#about"`)
2. URL hash changes to `#about`
3. `hashchange` event fires
4. `route()` function executes
5. All pages are hidden
6. About page is shown
7. No page reload occurs

## URL Examples

- `index.html` → Shows home (default)
- `index.html#home` → Shows home
- `index.html#about` → Shows about
- `index.html#contact` → Shows contact
- `index.html#invalid` → Shows 404

## CSS Display Control

```javascript
div.style.display = "none"; // Hide
div.style.display = "block"; // Show
```

## Page Classes

- `.page` - Applied to all page containers for consistent styling
- Can be styled with display properties or visibility

## Browser API Usage

- `window.location.hash` - Gets/sets the URL hash
- `window.addEventListener()` - Listens for navigation events

## Advantages of This Approach

- No server-side routing needed
- Single HTML file (easy deployment)
- Instant page transitions
- Browser history support
- SEO limitations (content not indexed differently by route)

## Limitations

- All pages load upfront (not lazy-loaded)
- Not ideal for large applications
- SEO considerations for search engines

## Potential Enhancements

- Lazy load page content via fetch()
- Add URL state management with parameters
- Animate page transitions
- Add active link styling
- Implement dynamic page generation
- Add query parameters (e.g., `#product?id=123`)
- Integrate with more complex routing library
- Add page transition animations
