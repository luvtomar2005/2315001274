require("dotenv").config();

const express = require("express");

const app = express();

const schedulerRoutes = require("./routes/schedulerRoutes");

app.use(express.json());

app.use("/schedule", schedulerRoutes);

app.get("/", (req, res) => {
  res.send("Running successfully");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});