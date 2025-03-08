/*
Created on:21/02/2025
File: connection.js
*/

const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-2025",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
