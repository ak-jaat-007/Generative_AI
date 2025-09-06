// aiproviders/index.js
require("dotenv").config();

const GeminiProvider = require("./models/gemini");
const OpenAIProvider = require("./models/openai");
const ClaudeProvider = require("./models/claude");
const DeepSeekProvider = require("./models/deepseek"); // Add DeepSeek

async function testAllProviders() {
  const prompt = "Explain quantum entanglement in simple terms.";
  
  console.log("\n🔹 Gemini:");
  try {
    const gemini = new GeminiProvider();
    console.log(await gemini.generate(prompt));
  } catch (error) {
    console.error("Gemini Error:", error.message);
  }

  console.log("\n🔹 OpenAI:");
  try {
    const openai = new OpenAIProvider();
    console.log(await openai.generate(prompt));
  } catch (error) {
    console.error("OpenAI Error:", error.message);
  }

  console.log("\n🔹 Claude:");
  try {
    const claude = new ClaudeProvider();
    console.log(await claude.generate(prompt));
  } catch (error) {
    console.error("Claude Error:", error.message);
  }

  console.log("\n🔹 DeepSeek:");
  try {
    const deepseek = new DeepSeekProvider();
    console.log(await deepseek.generate(prompt));
  } catch (error) {
    console.error("DeepSeek Error:", error.message);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testAllProviders();
}

module.exports = {
  GeminiProvider,
  OpenAIProvider,
  ClaudeProvider,
  DeepSeekProvider // Export DeepSeekProvider
};