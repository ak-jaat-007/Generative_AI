// aiproviders/models/claude.js
// Note: You'll need to install the Anthropic SDK: npm install @anthropic-ai/sdk
const Anthropic = require('@anthropic-ai/sdk');

class ClaudeProvider {
  constructor() {
    if (!process.env.CLAUDE_API_KEY) {
      throw new Error("CLAUDE_API_KEY not found in environment variables");
    }
    this.anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
    });
  }

  async generate(prompt) {
    try {
      const message = await this.anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });
      return message.content[0].text;
    } catch (error) {
      console.error("Claude API Error:", error);
      throw new Error(`Claude API Error: ${error.message}`);
    }
  }
}

module.exports = ClaudeProvider;