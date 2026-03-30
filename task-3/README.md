# Task 3: Image Modal Gallery

## Objective

Create an interactive image gallery with modal overlay functionality for viewing full-size images.

## Features

- **Click to Enlarge**: Click any image to view it in a modal overlay
- **Modal Display**: Full-screen image viewing with overlay background
- **Close Modal**: Click the close button or overlay background to close
- **Image Source Mapping**: Modal displays the clicked image source
- **Responsive Design**: Works across different screen sizes

## Technologies Used

- HTML5 for structure
- CSS3 for modal styling and overlays
- Vanilla JavaScript (ES6)

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. Ensure all images are in the `assets/` directory
3. No external dependencies required

### How to Use

1. Browse the gallery of images
2. Click any image to open it in the modal
3. Click the close button (X) to close the modal
4. Click outside the image on the overlay to close the modal
5. View full-size versions of images without navigation away

## File Structure

- `index.html` - Gallery and modal structure
- `index.js` - Modal logic and event handling
- `styles.css` - Gallery and modal styling
- `assets/` - Image directory

## Key Functions

- `displayImage()` - Opens modal and sets image source on click
- Modal event listener for closing on overlay click
- Close button handler

## Learning Concepts

- Event delegation and event listeners
- DOM manipulation for dynamic content
- CSS flexbox for modal centering
- Event target checking (`classList.contains()`)
- CSS overlays and z-index management

## Notes

- Uses `event.target` to get the clicked image source
- Modal appears with flexbox centering for responsive design
- Images are contained within the modal for proper display

## Potential Enhancements

- Add keyboard navigation (Esc to close, arrow keys to navigate)
- Image zoom functionality
- Previous/Next navigation between images
- Thumbnail navigation
