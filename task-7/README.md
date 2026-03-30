# Task 7: Chat Application (Bot Simulator)

## Objective

Build a chat interface that allows users to send messages and receive automatic bot responses with proper message formatting and auto-scrolling.

## Features

- **Send Messages**: Type and send messages to the chat
- **User Messages**: User messages appear on the right side
- **Bot Responses**: Automated bot responses appear on the left side after 1 second delay
- **Enter Key Support**: Press Enter to send messages quickly
- **Input Clearing**: Input field automatically clears after sending
- **Auto-Scroll**: Chat automatically scrolls to the latest message
- **Message Focus**: Input field automatically focuses after sending

## Technologies Used

- HTML5 for structure
- CSS3 for styling and message layout
- Vanilla JavaScript (ES6)

## Getting Started

### Setup Instructions

1. Open `index.html` in a web browser
2. No external dependencies required
3. No backend server needed (uses local simulation)

### How to Use

1. Type a message in the input field at the bottom
2. Press **Enter** or click **Send** button
3. Your message appears on the right side of the chat
4. Wait 1 second for the bot response to appear on the left
5. Continue the conversation by sending more messages
6. Scroll up to view message history

## File Structure

- `index.html` - Chat layout and message container
- `index.js` - Message handling and bot simulation
- `styles.css` - Chat styling and message styling

## Key Functions

- `sendMessage()` - Processes user input and sends message
  - Validates input (non-empty)
  - Adds user message to chat
  - Clears input field
  - Focuses input for next message
  - Triggers bot response after delay
- `addMessage(text, sender)` - Creates and adds message to chat
  - Creates message div with sender class
  - Appends message to chat container
  - Auto-scrolls to bottom
  - `sender` parameter: "user" or "bot"

## Learning Concepts

- Event listeners for buttons and keyboard events
- DOM manipulation with `createElement()` and `appendChild()`
- CSS classes for styling different message types
- setTimeout for delayed responses
- String validation with `trim()`
- Scroll behavior with `scrollHeight` and `scrollTop`
- User experience improvements (auto-focus, auto-scroll)

## Event Handling

- **Send Button Click**: Triggers `sendMessage()`
- **Enter Key Press**: Triggers `sendMessage()` if key is "Enter"
- **Both events**: Execute the same message-sending logic

## Message Structure

```html
<div class="message user-message">
  <p>User's message text</p>
</div>

<div class="message bot-message">
  <p>Bot's response text</p>
</div>
```

## CSS Styling

- `.chat-messages` - Container for all messages with scroll
- `.message` - Base message styling
- `.user-message` - User message styling (right-aligned)
- `.bot-message` - Bot message styling (left-aligned)

## Auto-Scroll Mechanism

```javascript
chatMessages.scrollTop = chatMessages.scrollHeight;
```

- Scrolls to the bottom of the chat container
- Ensures latest message is always visible

## Bot Response

- Static message: "This is a bot response!"
- 1000ms (1 second) delay using `setTimeout()`
- Appears as a separate message with bot styling

## Potential Enhancements

- Random bot responses from a pool
- Integrate with actual chatbot API
- Message timestamps
- User avatars/icons
- Emoji support
- Message editing/deletion
- Typing indicators
- Sound notifications
- Chat history persistence with localStorage
- Multiple user support
