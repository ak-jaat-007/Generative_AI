// aiproviders/providerManager.js
// No change to this file from the last correction.
// It's already set up to export the ProviderManager class.

const GeminiProvider = require("./models/gemini");
const OpenAIProvider = require("./models/openai");
const ClaudeProvider = require("./models/claude");
const DeepSeekProvider = require("./models/deepseek");

class ProviderManager {
  constructor() {
    this.providers = {};

    this.safeLoad("gemini", process.env.GEMINI_API_KEY, () => new GeminiProvider());
    this.safeLoad("openai", process.env.OPENAI_API_KEY, () => new OpenAIProvider());
    this.safeLoad("claude", process.env.CLAUDE_API_KEY, () => new ClaudeProvider());
    this.safeLoad("deepseek", process.env.DEEPSEEK_API_KEY, () => new DeepSeekProvider());
  }

  safeLoad(name, apiKey, initFn) {
    if (!apiKey) {
      console.warn(`[ProviderManager] Skipping ${name}: API key missing.`);
      return;
    }
    try {
      this.providers[name] = initFn();
      console.log(`[ProviderManager] Loaded ${name} provider successfully.`);
    } catch (err) {
      console.error(`[ProviderManager] Failed to load ${name}:`, err.message);
    }
  }

  getProvider(name) {
    if (!this.providers[name]) {
      throw new Error(`Provider ${name} not available. Check API key or initialization errors.`);
    }
    return this.providers[name];
  }

  listProviders() {
    return Object.keys(this.providers);
  }
}

module.exports = ProviderManager;