// aiproviders/models/deepseek.js
const OpenAI = require("openai");

class DeepSeekProvider {
  constructor() {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error("DEEPSEEK_API_KEY not found in environment variables");
    }
    
    this.client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: "https://api.deepseek.com",
    });
  }

  async generate(prompt) {
    try {
      const response = await this.client.chat.completions.create({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error("DeepSeek API Error:", error);
      throw new Error(`DeepSeek API Error: ${error.message}`);
    }
  }
}

module.exports = DeepSeekProvider;