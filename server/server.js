/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /server/server.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

/* fs allows us to interact with the local file system it in our project*/
const fs = require("fs");
// express is a web framework for Node.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About us</h1>");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
