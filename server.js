const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const queryRouter = require("./routes/query");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173", // local frontend
        "https://pg-website-productjs-fixed.vercel.app" // deployed frontend
    ]
}));
app.use(helmet());
app.use(morgan("dev"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Routes
app.use("/api/v1/queries", queryRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Server is running.");
});

// 404 handler
app.use((req, res) => {
  console.log(`❌ 404 - ${req.method} ${req.originalUrl}`);
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
