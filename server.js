/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /server/server.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

/* fs allows us to interact with the local file system it in our project*/
const fs = require("fs");

/* Creating a file - We use the fs.writeFile method, specifying file name, content, and a call 
back function to handle errors and success*/

// Create a file with some content
fs.writeFile("example.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});
