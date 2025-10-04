const dotenv = require("dotenv");
dotenv.config(); // Load env variables first

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const queryRouter = require("./router/query");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Routes
app.use("/api/v1", queryRouter);

app.get("/", (req, res) => {
  res.send("Hello! Server is running.");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
