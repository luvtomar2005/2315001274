const express = require("express");
const Log = require("./services/logger_Service");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "route",
    "Root route accessed"
  );

  res.send("Server running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});