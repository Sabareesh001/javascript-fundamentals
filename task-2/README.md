# Task 2: Calculator Application

## Objective

Create a fully functional calculator that performs basic arithmetic operations with proper validation and decimal support.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Handle floating-point calculations
- **Input Validation**: Prevent invalid operations like multiple operators in a row
- **Delete Function**: Remove the last entered character
- **Clear Display**: Reset calculator to initial state (0)
- **Error Prevention**: Validates operators and decimals before allowing input

## Technologies Used

- HTML5 for structure
- CSS3 for styling and calculator layout
- Vanilla JavaScript (ES6)

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. No external dependencies required

### How to Use

1. Click number buttons to enter values
2. Click operator buttons (+, -, \*, /) to perform calculations
3. Use decimal button (.) to add decimal points
4. Click equals (=) to see the result
5. Use Delete button to remove the last character
6. Click Clear to reset the display to 0

## File Structure

- `index.html` - Calculator interface with buttons
- `index.js` - Core calculator logic and event handling
- `styles.css` - Calculator styling and button layouts

## Key Functions

- `appendNumber(number)` - Adds numbers to the display
- `appendOperator(operator)` - Adds operators with validation
- `appendDecimal()` - Adds decimal points with duplicate prevention
- `deleteLast()` - Removes the last character
- `clearDisplay()` - Resets to zero
- `calculate()` - Evaluates the mathematical expression

## Learning Concepts

- String manipulation and parsing
- Regular expressions for input validation
- Event handling for button clicks
- Mathematical operations in JavaScript

## Notes

- Uses JavaScript's `eval()` function for calculation (evaluate the code)
- Validates to prevent invalid operator sequences
- Handles edge cases like multiple decimals and operators
