// router.js
const express = require("express");
const router = express.Router();
const ProviderManager = require("./aiproviders/providerManager");

// Create a provider manager instance
const providerManager = new ProviderManager();

// POST /ask → Unified provider endpoint
router.post("/ask", async (req, res) => {
  try {
    const { provider, prompt } = req.body;

    if (!provider || !prompt) {
      return res.status(400).json({ error: "Provider and prompt are required" });
    }

    // Get the provider instance
    const providerInstance = providerManager.getProvider(provider);

    // Call selected provider
    const response = await providerInstance.generate(prompt);

    res.json({ response });
  } catch (err) {
    console.error("Router error:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET /providers → List available providers
router.get("/providers", (req, res) => {
  try {
    const providers = providerManager.listProviders();
    res.json({ providers });
  } catch (err) {
    console.error("Router error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;