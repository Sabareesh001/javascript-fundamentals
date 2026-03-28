// Get all block elements from DOM
const blocks = document.querySelectorAll(".block");
let draggedElement = null;
// Loop through each block to add event listeners
blocks.forEach((block, index) => {
  // Click handler - highlights block on click
  block.addEventListener("click", () => {
    console.log(`Block ${index + 1} clicked!`);
    block.style.backgroundColor = "#ffd700"; // Change to gold

    // Revert to original color after 500ms
    setTimeout(() => {
      block.style.backgroundColor = "";
    }, 500);
  });

  block.addEventListener("dragstart", () => {
    draggedElement = block;
  });
  block.addEventListener("dragend", () => {
    draggedElement = null;
  });
  // Dragover - REQUIRED to enable drop
  block.addEventListener("dragover", (e) => {
    if (draggedElement && draggedElement === block) return;
    console.log(`Dragging over Block ${index + 1}`);
    e.dataTransfer.dropEffect = "move"; // Show move cursor
    if (draggedElement && draggedElement !== block) {
      e.preventDefault(); // This allows the drop event to fire
      block.className = "block drag-over";
      console.log(draggedElement === block);
    }
  });
  block.addEventListener("dragleave", (e) => {
    if (draggedElement && draggedElement === block) return;
    e.preventDefault();
    console.log(`Left Block ${index + 1}`);
    block.className = "block";
  });
  // Drag handler - allows reordering blocks
  block.addEventListener("drop", (e) => {
    e.preventDefault();
    block.className = "block";
    block.insertAdjacentElement("beforebegin", draggedElement);
  });
});
