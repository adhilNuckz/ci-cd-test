const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD updated 🚀 test 2");
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
