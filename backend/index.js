// Simple Express backend for ECS CI/CD demo
const express = require("express");
const app = express();

// Root route — visible in browser
app.get("/", (req, res) => {
  res.send("🚀 Backend CI/CD pipeline is working fine! Version 9");
});

// Health check endpoints for ECS / ALB
app.get("/ok", (req, res) => res.status(200).send("OK"));
app.get("/health", (req, res) => res.status(200).send("Healthy"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));