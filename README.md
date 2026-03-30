# JavaScript Fundamentals - Learning Repository

A comprehensive collection of 10 JavaScript projects designed to progressively build skills from DOM manipulation to advanced state management and API integration.

## Repository Overview

This repository tracks progress through practical JavaScript fundamentals exercises. Each task focuses on specific concepts and builds foundational web development skills.

## Task List

| # | Task | Objective | Key Concepts |
|---|------|-----------|--------------|
| 1 | [Todo List](#task-1-todo-list) | Interactive task management | DOM manipulation, event listeners, state management |
| 2 | [Calculator](#task-2-calculator) | Arithmetic operations | Input validation, string parsing, function logic |
| 3 | [Image Gallery Modal](#task-3-image-gallery) | Image viewing with modal | Event handling, CSS overlays, DOM classes |
| 4 | [Weather App](#task-4-weather-app) | Real-time weather data | Fetch API, async/await, error handling, JSON |
| 5 | [Quiz Application](#task-5-quiz) | Interactive quiz with scoring | JSON data loading, state tracking, calculations |
| 6 | [Drag & Drop](#task-6-drag-drop) | Block reordering | HTML5 Drag API, event lifecycle, DOM manipulation |
| 7 | [Chat Interface](#task-7-chat) | Message exchange simulator | DOM creation, timing, user experience patterns |
| 8 | [SPA Router](#task-8-spa) | Client-side page navigation | Hash-based routing, event listeners, visibility control |
| 9 | [Progressive Loading](#task-9-shards) | Data-driven infinite scroll | Async loops, dynamic rendering, height calculations |
| 10 | [E-Commerce Cart](#task-10-ecommerce) | Product browsing & checkout | localStorage, filtering, calculations, multi-page logic |

## Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- No npm or build tools required

### Setup
1. Clone or download this repository
2. Open any `task-X/index.html` file in your browser
3. Check the `task-X/README.md` for specific setup instructions

## Task Details

### Task 1: Todo List
- **Description**: Create and manage a list of tasks with checkboxes
- **Skills**: DOM manipulation, event listeners, input validation
- **[Full Documentation](./task-1/README.md)**
- **Time**: ~30 minutes

### Task 2: Calculator
- **Description**: Build a functional calculator with basic operations
- **Skills**: Input validation, operator handling, mathematical operations
- **[Full Documentation](./task-2/README.md)**
- **Time**: ~45 minutes

### Task 3: Image Gallery Modal
- **Description**: Display images with click-to-enlarge modal functionality
- **Skills**: Event handling, CSS overlays, DOM event targeting
- **[Full Documentation](./task-3/README.md)**
- **Time**: ~30 minutes

### Task 4: Weather App
- **Description**: Fetch and display real-time weather using OpenWeatherMap API
- **Skills**: Fetch API, async/await, error handling, API integration
- **[Full Documentation](./task-4/README.md)**
- **Time**: ~60 minutes

### Task 5: Quiz Application
- **Description**: Interactive quiz with questions loaded from JSON and score tracking
- **Skills**: JSON parsing, state management, array operations, calculations
- **[Full Documentation](./task-5/README.md)**
- **Time**: ~90 minutes

### Task 6: Drag & Drop Block Manager
- **Description**: Reorder blocks using HTML5 drag and drop API
- **Skills**: HTML5 Drag API, event lifecycle, DOM reordering
- **[Full Documentation](./task-6/README.md)**
- **Time**: ~45 minutes

### Task 7: Chat Interface
- **Description**: Send/receive messages with automated bot response simulation
- **Skills**: DOM creation, event handling, timing, UX patterns
- **[Full Documentation](./task-7/README.md)**
- **Time**: ~45 minutes

### Task 8: Single Page Application Router
- **Description**: Navigate between pages using URL hash without page reloads
- **Skills**: Hash-based routing, event listeners, visibility control
- **[Full Documentation](./task-8/README.md)**
- **Time**: ~50 minutes

### Task 9: Progressive Data Loading
- **Description**: Incrementally load and render data shards until viewport is filled
- **Skills**: Async loops, async/await, dynamic rendering, height calculations
- **[Full Documentation](./task-9/README.md)**
- **Time**: ~60 minutes

### Task 10: E-Commerce Shopping Cart
- **Description**: Full-featured e-commerce app with products, cart, and checkout
- **Skills**: localStorage, filtering, array methods, multi-page state management
- **[Full Documentation](./task-10/README.md)**
- **Time**: ~120 minutes

## Learning Path

### Beginner (Tasks 1-3)
- DOM manipulation fundamentals
- Event handling basics
- CSS styling and classes

### Intermediate (Tasks 4-6)
- API integration
- Advanced event handling
- HTML5 APIs

### Advanced (Tasks 7-10)
- State management patterns
- Multi-page applications
- localStorage persistence
- Complex data operations

## Key Concepts Covered

### JavaScript Fundamentals
- Variables and data types
- Functions and scope
- Closures
- Callbacks and promises
- Async/await

### DOM Manipulation
- `querySelector()` / `querySelectorAll()`
- `createElement()` / `appendChild()`
- `innerHTML` and text content
- Event listeners and event handling
- CSS class manipulation

### Browser APIs
- Fetch API for HTTP requests
- localStorage for persistence
- HTML5 Drag and Drop
- URL hash and routing
- Window and document objects

### Array Methods
- `map()`, `filter()`, `reduce()`
- `find()`, `includes()`
- `forEach()`, `slice()`
- Spread operator

### Modern JavaScript
- Template literals
- Arrow functions
- Destructuring
- Classes (where applicable)
- Async/await patterns

## File Structure

```
js-fundamentals/
├── README.md (this file)
├── task-1/
│   ├── index.html
│   ├── index.js
│   ├── styles.css
│   └── README.md
├── task-2/
│   ├── index.html
│   ├── index.js
│   ├── styles.css
│   └── README.md
├── ... (tasks 3-9 follow same pattern)
└── task-10/
    ├── index.html
    ├── cart.html
    ├── index.js
    ├── cart.js
    ├── styles.css
    ├── products.json
    └── README.md
```

## How to Use This Repository

1. **Start with Task 1**: Begin with the Todo list app to get comfortable with DOM manipulation
2. **Read Each README**: Each task folder contains a detailed README with setup, features, and learning concepts
3. **Follow the Code**: Read through the JavaScript files to understand the implementation
4. **Experiment**: Modify the code and test changes to reinforce learning
5. **Complete Enhancements**: Each README includes potential enhancements to practice further
6. **Progress Sequentially**: Tasks build on previous concepts in difficulty

## Dependencies

### Core Projects
- **No external libraries** - All projects use vanilla JavaScript
- **No build tools** - No npm, webpack, or bundlers required
- **Browser requirement** - Modern browser with ES6+ support

### Task-Specific Requirements
- **Task 4 (Weather)**: OpenWeatherMap API key (free tier)
- **Task 5 (Quiz)**: JSON data file included
- **Task 9 (Shards)**: JSON shard files included
- **Task 10 (E-Commerce)**: products.json included

## Setup Tips

### Windows (PowerShell)
```powershell
# Navigate to task folder
cd task-1

# Open in browser (replace with your browser path)
Start-Process index.html
```

### Mac/Linux
```bash
# Navigate to task folder
cd task-1

# Open in default browser
open index.html
# or
firefox index.html
```

## Common Issues & Solutions

### Task 4: Weather App
- **Issue**: API key not configured
- **Solution**: Get free key from openweathermap.org and update `index.js`

### Task 5: Quiz App
- **Issue**: Questions not loading
- **Solution**: Ensure `data.json` is in the same directory as `index.html`

### Task 9: Progressive Loading
- **Issue**: No content appears
- **Solution**: Verify shard files are in `shards/` directory

### Task 10: Cart Data Missing
- **Issue**: Cart doesn't persist
- **Solution**: localStorage must be enabled in browser; check browser settings

## Progress Tracking

Use this checklist to track your progress:

- [ ] Task 1: Todo List - Completed
- [ ] Task 2: Calculator - Completed
- [ ] Task 3: Image Gallery - Completed
- [ ] Task 4: Weather App - Completed
- [ ] Task 5: Quiz App - Completed
- [ ] Task 6: Drag & Drop - Completed
- [ ] Task 7: Chat Interface - Completed
- [ ] Task 8: SPA Router - Completed
- [ ] Task 9: Progressive Loading - Completed
- [ ] Task 10: E-Commerce Cart - Completed

## Next Steps After Completion

### Beginner Projects
- Add localStorage persistence to Task 1 (Todo list)
- Create calculator memory functions
- Build dropdown menus and navigation

### Intermediate Projects
- Build a real chat app with Socket.io
- Create a weather dashboard with multiple cities
- Build a product filter with API

### Advanced Projects
- Full-stack e-commerce with backend
- Real-time collaborative applications
- Progressive Web App (PWA) features
- Mobile app conversion with React/Vue

## Resources

### Learning Resources
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [JavaScript.info - Comprehensive Guide](https://javascript.info)

### Official Documentation
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [Web APIs at W3C](https://www.w3.org/TR/architecture/)

### Practice & Challenges
- [LeetCode JavaScript](https://leetcode.com)
- [HackerRank JavaScript](https://www.hackerrank.com)
- [Codewars](https://www.codewars.com)

## Tips for Success

1. **Read the Comments**: Each JavaScript file has detailed comments explaining the logic
2. **Use Browser DevTools**: Open DevTools (F12) to inspect and debug code
3. **Test Incrementally**: Make small changes and test frequently
4. **Read Error Messages**: Console errors are helpful guides
5. **Experiment**: Break the code intentionally to understand how it works
6. **Reference the README**: Each task README has comprehensive documentation

## License

This is a learning repository created for educational purposes.

---

**Last Updated**: March 30, 2026
**Status**: Complete with documentation for all 10 tasks