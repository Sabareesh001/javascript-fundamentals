# Task 1: Todo List Application

## Objective

Build an interactive todo list application where users can add, view, and manage tasks with checkboxes.

## Features

- **Add Tasks**: Dynamically add tasks to the list using the input field
- **Enter Key Support**: Press Enter to quickly add tasks
- **Checkboxes**: Each task includes a checkbox for marking completion status
- **Clear Tasks**: Remove all tasks from the list with the clear button
- **Input Validation**: Prevents adding empty or whitespace-only tasks

## Technologies Used

- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript (ES6)

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. No build process or external dependencies required

### How to Use

1. Type a task name in the input field
2. Press `Enter` or click the **Add Task** button
3. Check the checkbox to mark tasks as complete
4. Click **Clear** to remove all tasks from the list

## File Structure

- `index.html` - Main HTML structure and buttons
- `index.js` - JavaScript logic for task management
- `styles.css` - Styling and layout

## Key Functions

- `addTask()` - Creates and adds a new task to the list
- `clearTasks()` - Removes all tasks from the list
- Event listeners for Enter key and button clicks

## Learning Concepts

- DOM manipulation with `createElement()` and `appendChild()`
- Event listeners and event handling
- String validation and trimming
- CSS class management

## Notes

- Tasks are stored in the DOM only (not persisted to localStorage)
- No external libraries or frameworks required
