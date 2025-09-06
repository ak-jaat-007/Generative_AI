# 🧠Generative AI App

A simple, ChatGPT-style AI assistant interface built with **HTML, CSS, and JavaScript**.  
It provides a chat UI with sidebar history, multi-model provider options, and interactive message actions.

---

## 🚀 Features

- 📑 **Chat History** stored in browser `localStorage`
- 🖼️ **Modern UI** inspired by chat apps (dark theme)
- 🤖 **Multiple AI providers** (dropdown to select: OpenAI, Gemini, Claude, DeepSeek)
- ⌨️ **Smart Input Box** (auto-resizing, Enter to send, Shift+Enter for new line)
- ✍️ **Message Actions**:
  - Edit & resend user messages
  - Copy messages
  - Thumbs up/down feedback for bot responses
- 🗑️ **Conversation Management**
  - Start new chat
  - Clear all history with confirmation modal
- 🎤 **Voice input (placeholder)**
- 📎 **File attach (placeholder)**
- ⌛ **Typing indicator** for bot responses
- 📱 **Responsive Design** (works on desktop & mobile)

---

## 📂 Project Structure
Generative_AI_project/
├── aiproviders/ # Providers (OpenAI, Gemini, Claude, DeepSeek)

├── public/ # Static frontend (index.html, styles, scripts)

├── main.js # App entry point

├── router.js # Express routes

├── models.js # Common data structures

├── .gitignore # Ignored files (node_modules, .env)

├── package.json # Dependencies & scripts

└── README.md # Documentation


---

## 🛠️ Getting Started

1. **Clone this repo**
   ```bash
   git clone https://github.com/ak-jaat-007/Generative_AI.git
   cd Generative_AI
2.Install dependencies
  npm install

3. Set up environment variables
Create a .env file in the root directory:
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
CLAUDE_API_KEY=your_claude_key
DEEPSEEK_API_KEY=your_deepseek_key
PORT=5000

4. Run the app
5. Open in browser
Navigate to:
👉 http://localhost:3000

Future Improvements

🔗 Enhance support for additional AI providers

💾 Store chat history in a database instead of localStorage

🗣️ Implement  file upload

🎨 Add theme switching (light/dark)

🔍 Add search in history


Author

Made with ❤️ by Aman Kaliramna
