// test trigger
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend CICD pipeline is workng fine!");
});

app.get("/", (req, res) => res.status(200).send("OK")); 
app.get("/health", (req, res) => res.status(200).send("Healthy"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
