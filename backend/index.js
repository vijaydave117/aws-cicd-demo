const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Blue/Green Deploy Test ok working fine, test to chech deployment wait or fail");
});

app.get("/health", (req, res) => res.status(200).send("Healthy"));
app.get("/ok", (req, res) => res.status(200).send("OK"));

const port = 8080;
app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port", port);
});