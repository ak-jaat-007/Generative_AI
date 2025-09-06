// aiproviders/models/gemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiProvider {
  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY not found in environment variables");
    }
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  }

  async generate(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw new Error(`Gemini API Error: ${error.message}`);
    }
  }
}

module.exports = GeminiProvider;