// Get DOM elements
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.querySelector(".chat-messages");

// Event listener for send button
sendBtn.addEventListener("click", sendMessage);

// Event listener for Enter key
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to send message
function sendMessage() {
  const message = messageInput.value.trim();

  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");

  // Clear input
  messageInput.value = "";
  messageInput.focus();

  // Simulate bot response
  setTimeout(() => {
    addMessage("This is a bot response!", "bot");
  }, 1000);
}

// Function to add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = text;

  messageDiv.appendChild(messageParagraph);
  chatMessages.appendChild(messageDiv);

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
