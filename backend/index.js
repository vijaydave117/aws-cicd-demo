// test trigger
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅✅ AWS Backend CI/CD Test Successful!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
