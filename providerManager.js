require("dotenv").config();
const createGemini = require("./providers/gemini");
const createOpenAI = require("./providers/openai");
const createClaude = require("./providers/claude");

// Registry of providers
const providers = {
  gemini: createGemini(process.env.GEMINI_API_KEY, "gemini-2.0-flash"),
  openai: createOpenAI(process.env.OPENAI_API_KEY, "gpt-4o-mini"),
  claude: createClaude(process.env.CLAUDE_API_KEY, "claude-3-opus-20240229"),
};

// Function to get active provider
function getProvider(name = "gemini") {
  if (!providers[name]) throw new Error(`Provider ${name} not found`);
  return providers[name];
}

module.exports = { getProvider };
