# Task 6: Drag and Drop Block Manager

## Objective

Create an interactive drag-and-drop interface where users can reorder blocks by dragging them and clicking to highlight items.

## Features

- **Drag and Drop**: Reorder blocks by dragging and dropping them
- **Click to Highlight**: Click any block to highlight it temporarily with gold color
- **Visual Feedback**: Hover effect shows when blocks are being dragged over
- **Reordering**: Blocks swap positions when dropped in a different location
- **Smooth Animations**: Automatic color reversion after highlighting
- **Cursor Feedback**: Shows move cursor during drag operations

## Technologies Used

- HTML5 for structure (with draggable attribute)
- CSS3 for styling and transitions
- Vanilla JavaScript (ES6)

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. No external dependencies required
3. Works with touch events on supported devices

### How to Use

1. **Click Blocks**: Click any block to see it highlight (gold color for 500ms)
2. **Drag Blocks**: Click and hold a block, then drag it to a new position
3. **Drop Zone**: Hover over another block to see the drag effect
4. **Complete Reorder**: Release to drop the block in its new position
5. Blocks will move up or down the page based on where you drop them

## File Structure

- `index.html` - Block elements and drag-drop structure
- `index.js` - Drag-drop event handling and click logic
- `styles.css` - Block styling and drag-over effects

## Key Functions

- `dragstart` event handler - Sets the dragged element reference
- `dragend` event handler - Clears the dragged element reference
- `dragover` event handler - Enables drop with visual feedback
- `dragleave` event handler - Removes drag-over styling
- `drop` event handler - Reorders blocks using `insertAdjacentElement()`
- Click handler - Highlights blocks with temporary gold background

## HTML Attributes

- `draggable="true"` - Makes blocks draggable
- `class="block"` - Default block styling
- `class="drag-over"` - Applied during drag-over for visual feedback

## Learning Concepts

- HTML5 Drag and Drop API
- Event lifecycle: dragstart, dragover, dragleave, drop, dragend
- DOM manipulation with `insertAdjacentElement()`
- CSS class toggling for visual feedback
- querySelector and querySelectorAll for element selection
- forEach loops for event listener attachment
- setTimeout for delayed visual effects

## Drag and Drop Flow

1. User presses mouse down on a block (dragstart fires)
2. User moves mouse over other blocks (dragover fires, shows feedback)
3. When mouse leaves a block during drag (dragleave fires, removes feedback)
4. User releases mouse over a block (drop fires, reorders)
5. Reordering happens using `insertAdjacentElement("beforebegin", draggedElement)`

## CSS Classes

- `.block` - Standard block styling
- `.drag-over` - Applied when dragging over a valid target
- Automatically reverts after drop or drag-leave

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge
- IE 10+ with limited support
- Mobile support varies by browser

## Potential Enhancements

- Add persistence with localStorage
- Animate transitions between positions
- Add touch drag support for mobile
- Delete blocks on drag
- Copy blocks instead of move
- Drag between multiple containers
