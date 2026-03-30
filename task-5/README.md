# Task 5: Quiz Application

## Objective

Create an interactive quiz application that loads questions from a JSON file, tracks progress, and calculates the user's final score.

## Features

- **Dynamic Question Loading**: Questions loaded from `data.json` file
- **Multiple Choice**: Select from multiple answer options
- **Progress Tracking**: Shows current question number and total questions
- **Score Calculation**: Tracks correct answers and calculates final score
- **Answer Review**: Review answers and compare with correct responses
- **Answer Navigation**: Jump to specific questions or go next/previous
- **Visual Feedback**: Highlights correct and incorrect answers
- **Results Display**: Shows final score and percentage at the end

## Technologies Used

- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript (ES6)
- JSON for data storage

## Getting Started

### Setup Instructions

1. Ensure `data.json` is in the same directory as `index.html`
2. Open `index.html` in a web browser
3. No external dependencies required

### How to Use

1. Click **Start Quiz** to begin
2. Read the question carefully
3. Click on an answer option to select it
4. Click **Next** to move to the next question
5. Use question number buttons to jump to specific questions
6. Click **View Results** to see your final score
7. Review your answers on the results page

## File Structure

- `index.html` - Quiz interface and question display
- `index.js` - Quiz logic and answer tracking
- `styles.css` - Styling and layout
- `data.json` - Quiz questions and answers

## Data Format (data.json)

```json
{
  "quiz": [
    {
      "question": "Question text here?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "answerIndex": 0
    }
  ]
}
```

## Key Functions

- `loadQuizData()` - Fetches and parses quiz questions from JSON
- `initializeQuiz()` - Sets up quiz state and displays first question
- `displayQuestion()` - Renders current question and options
- `selectAnswer(index)` - Records user's answer selection
- `nextQuestion()` - Moves to the next question
- `previousQuestion()` - Moves to the previous question
- `calculateScore()` - Computes final score
- `displayResults()` - Shows results and review section

## Learning Concepts

- Async/await for file fetching
- JSON data parsing and structure
- Array manipulation and indexing
- Event handling and state management
- DOM manipulation for dynamic content
- Conditional rendering based on quiz state
- Score calculation and percentage computation

## Quiz Features

- **Question Tracking**: Maintains current question index
- **Answer Storage**: Stores user responses in `answeredQuestions` object
- **Correct Answer Tracking**: Tracks which questions were answered correctly
- **Progress Display**: Shows "3 of 10" style progress indicator
- **Answer Feedback**: Visual indication of correct/incorrect answers

## Answer Storage Format

```javascript
answeredQuestions = {
  0: 1, // Question 0, selected option 1
  1: 2, // Question 1, selected option 2
  // ...
};
```

## Potential Enhancements

- Add timer/time limits per question
- Display question categories
- Add difficulty levels
- Show explanation for correct answers
- Save scores to localStorage
- Leaderboard functionality
- Randomize answer options
- Question shuffle functionality
