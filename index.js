const express = require("express");

const PORT = process.env.PORT || 3070;

console.log("Server is running");

// Initialize Express app
const app = express();
app.use("/", (req, res) => {
  res.send("Hello, Express.js!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
