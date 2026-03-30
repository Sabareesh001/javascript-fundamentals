# Task 9: Progressive Data Loading with Shards

## Objective

Create an infinite scroll-like experience by progressively loading data from multiple JSON files (shards) and rendering content dynamically until the page height exceeds the viewport.

## Features

- **Progressive Loading**: Loads data shards incrementally
- **Auto-Loading**: Automatically loads shards until content fills the viewport
- **Data Accumulation**: Combines data from multiple shards into one display
- **Dynamic Rendering**: Renders blocks with titles, descriptions, categories, and tags
- **Tag Display**: Shows tags as styled span elements
- **Efficient Loading**: Only loads what's needed initially
- **Metadata Display**: Shows category and tags for each item

## Technologies Used

- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript (ES6)
- JSON for shard data files

## Getting Started

### Setup Instructions

1. Ensure all `shard-1.json` through `shard-10.json` files are in the `shards/` directory
2. Open `index.html` in a web browser
3. No external dependencies required

### How to Use

1. Page loads and automatically fetches data shards
2. Blocks are rendered and displayed as the data loads
3. Loading stops once the content fills the viewport
4. Scroll down to view all loaded content
5. More shards can be loaded on demand (see enhancements)

## File Structure

- `index.html` - Page layout and blocks container
- `index.js` - Data loading and rendering logic
- `styles.css` - Styling for blocks, tags, and layout
- `shards/` - Directory containing shard JSON files
  - `shard-1.json` through `shard-10.json`

## Data Format (shards/\*.json)

```json
{
  "data": [
    {
      "title": "Item Title",
      "description": "Item description text",
      "category": "Category Name",
      "tags": ["tag1", "tag2", "tag3"]
    }
  ]
}
```

## Key Functions

- `loadNextShard(shardNumber)` - Async function to fetch and load a shard
  - Fetches `shards/shard-{number}.json`
  - Parses JSON response
  - Appends data to `loadedData` array
  - Triggers `renderBlocks()` to display new content

- `renderBlocks(data)` - Renders all loaded data as block elements
  - Clears container for fresh render
  - Maps tags array to HTML spans
  - Creates block div for each item
  - Includes title, description, category, and tags

## Initialization Flow

```javascript
// On DOMContentLoaded:
// 1. Load shards until viewport is filled
// 2. Keep loading pairs of shards until body height > window height
// 3. Stop loading once content exceeds viewport
```

## Learning Concepts

- Async/await for asynchronous operations
- Fetch API for loading JSON files
- Array methods: `push()`, `map()`, `.join()`
- DOM manipulation with `createElement()` and `innerHTML`
- Conditional loops (`while` loop)
- Template literals for dynamic HTML
- Event listeners for page initialization
- DOM measurements: `clientHeight`, `innerHeight`
- Data aggregation and accumulation

## Height Measurement

```javascript
const bodyHeight = body[0].clientHeight; // Total content height
const windowHeight = window.innerHeight; // Visible viewport height

// Load more if body height <= viewport height
while (body[0].clientHeight <= window.innerHeight) {
  // Load more shards...
}
```

## Tag Rendering

```javascript
item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
```

- Maps tag strings to HTML span elements
- Joins with empty string for concatenation

## Block Structure (Generated HTML)

```html
<div class="block">
  <h3>Title</h3>
  <p>Description</p>
  <div class="meta">
    <p><strong>Category:</strong> Category Name</p>
    <div style="margin-top: 10px;">
      <span class="tag">tag1</span>
      <span class="tag">tag2</span>
      <span class="tag">tag3</span>
    </div>
  </div>
</div>
```

## Shard Loading Strategy

- Loads shards in pairs for efficiency
- Shard number calculated: `Math.ceil(loadedData.length / 3) + 1`
- Continues loading until viewport is filled
- Each shard contains multiple items

## Performance Considerations

- Batches loading (prevents individual requests)
- Clears and re-renders entire container efficiently
- Waits for async operations with `await`
- Uses template literals for fast HTML generation

## Data Structure

- `loadedData` array accumulates all loaded items
- Each item contains: title, description, category, tags array
- No persistence (data lost on page refresh)

## Potential Enhancements

- Infinite scroll: Load more shards on scroll near bottom
- Pagination: Load shards on button click
- Search/Filter: Filter blocks by category or tags
- localStorage persistence: Save loaded data
- Lazy loading: Load images as they come into view
- Virtual scrolling: Only render visible blocks
- UI indicators: Show loading spinner while fetching
- Error handling: Handle failed shard loads
- Performance optimization: Cache loaded shards
- Expandable blocks: Click to see more details

## Browser API Usage

- `document.DOMContentLoaded` - Ensure DOM is ready
- `document.getElementById()` - Access container
- `element.clientHeight` - Get element height
- `window.innerHeight` - Get viewport height

## Async Operations

- `fetch()` - HTTP GET request for JSON
- `.json()` - Parse JSON response
- `async/await` - Handle asynchronous loading
- Proper error handling with try/catch (optional enhancement)
