require("dotenv").config();

const express = require("express");
const path = require("path");
const ProviderManager = require("./aiproviders/providerManager");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Fallback to serve index.html from the root if it's not in public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// New: Endpoint to get a list of available providers
app.get("/providers", (req, res) => {
    // This is a simplified example. You should dynamically check which providers are configured with API keys.
    const availableProviders = ["gemini", "openai"];
    res.json({ providers: availableProviders });
});

// API endpoint for handling POST requests from the frontend
app.post("/ask", async (req, res) => {
  const { provider, prompt } = req.body;
  if (!provider || !prompt) {
    return res.status(400).json({ error: "Missing provider or prompt." });
  }

  const manager = new ProviderManager();
  
  try {
    const aiProvider = manager.getProvider(provider);
    const result = await aiProvider.generate(prompt);
    res.json({ response: result });
  } catch (error) {
    // Log the full error to the console for debugging
    console.error(`Error with ${provider}:`, error);
    
    // Send a clean, user-friendly error message to the frontend
    res.status(500).json({ 
      response: `Error with ${provider}: ${error.message}. Please check your API key and billing details.`
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});