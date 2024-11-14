const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Make sure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// ... rest of the app code ...
