require("dotenv").config();

const express = require("express");

const app = express();

const notificationRoutes = require("./routes/notificationRoutes");

app.use(express.json());

app.use("/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Notification service running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});