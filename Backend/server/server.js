require("dotenv").config();  // Load environment variables from a .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();  // Initialize the Express app

// Constants for configuration
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware setup for Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: process.env.CLIENT_URL,  // Allow access from specific origin (frontend URL)
    methods: ["GET", "POST", "DELETE", "PUT"],  // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
  })
);

app.use(express.json());  // Middleware to parse JSON data

// MongoDB connection setup
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  // Connect to MongoDB
  .then(() => console.log("MongoDB is connected"))  // Success message
  .catch((error) => {
    console.error("Database connection error:", error);  // Log connection errors
    process.exit(1);  // Exit process on connection failure
  });

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack trace for debugging
  res.status(500).json({
    success: false,
    message: "Something went wrong",  // Send a generic error message to the client
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
