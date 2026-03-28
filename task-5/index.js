// Quiz questions data - loaded from data.json
let quizQuestions = [];

// Quiz state
let currentQuestion = 0;
let score = 0;
let answeredQuestions = {};
let correctAnswersTracker = []; // Track if each question was answered correctly

// Load quiz data from JSON file
async function loadQuizData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    // Convert answerIndex to correct for compatibility
    quizQuestions = data.quiz.map((q) => ({
      ...q,
      correct: q.answerIndex,
    }));
    displayQuestion();
  } catch (error) {
    console.error("Error loading quiz data:", error);
  }
}

// Initialize quiz
function initializeQuiz() {
  document.getElementById("total-questions").textContent = quizQuestions.length;
  document.getElementById("total").textContent = quizQuestions.length;
  document.getElementById("score").textContent = "0";
  correctAnswersTracker = new Array(quizQuestions.length).fill(false);
  displayQuestion();
}

// Display current question
function displayQuestion() {
  const question = quizQuestions[currentQuestion];

  // Update question text
  document.getElementById("question-text").textContent = question.question;

  // Update counters
  document.getElementById("current-question").textContent = currentQuestion + 1;

  // Clear previous options
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // Create option buttons
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "option-btn";
    optionBtn.textContent = option;
    optionBtn.onclick = () => selectAnswer(index);

    // Highlight selected answer if already answered
    if (answeredQuestions[currentQuestion] === index) {
      optionBtn.classList.add("selected");
    }

    optionsContainer.appendChild(optionBtn);
  });

  // Update button visibility and states
  updateButtonStates();
}

// Handle answer selection
function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedIndex === question.correct;
  const wasCorrect = correctAnswersTracker[currentQuestion];

  // Store the answer
  answeredQuestions[currentQuestion] = selectedIndex;

  // Update score based on answer change
  if (isCorrect && !wasCorrect) {
    // Changed to correct answer
    score++;
    correctAnswersTracker[currentQuestion] = true;
    document.getElementById("score").textContent = score;
  } else if (!isCorrect && wasCorrect) {
    // Changed from correct to wrong answer
    score--;
    correctAnswersTracker[currentQuestion] = false;
    document.getElementById("score").textContent = score;
  }

  // Highlight the selected option
  const optionBtns = document.querySelectorAll(".option-btn");
  optionBtns.forEach((btn) => btn.classList.remove("selected"));
  optionBtns[selectedIndex].classList.add("selected");
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  }
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

// Update button states
function updateButtonStates() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitContainer = document.getElementById("submit-container");

  // Disable/enable previous button
  prevBtn.disabled = currentQuestion === 0;

  // Check if on last question
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  if (isLastQuestion) {
    nextBtn.style.display = "none";
    submitContainer.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    submitContainer.style.display = "none";
  }
}

// Submit quiz and show results
function submitQuiz() {
  const percentage = Math.round((score / quizQuestions.length) * 100);

  // Display results
  document.querySelector(".quiz-content").style.display = "none";
  document.querySelector(".button-container").style.display = "none";
  document.getElementById("submit-container").style.display = "none";

  const resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "block";

  document.getElementById("final-score").textContent = score;
  document.getElementById("final-total").textContent = quizQuestions.length;
  document.getElementById("percentage").textContent =
    `Percentage: ${percentage}%`;
}

// Restart quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answeredQuestions = {};
  correctAnswersTracker = new Array(quizQuestions.length).fill(false);

  document.querySelector(".quiz-content").style.display = "block";
  document.querySelector(".button-container").style.display = "flex";
  document.getElementById("results").style.display = "none";

  document.getElementById("score").textContent = "0";

  displayQuestion();
}

// Initialize quiz when page loads
window.addEventListener("DOMContentLoaded", async () => {
  await loadQuizData();
  initializeQuiz();
});
