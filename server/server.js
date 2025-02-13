/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /server/server.js
    Created Date: 21/01/2025
    Modified Date: 25/01/2025
    Author: Jagdeep Tiwana
 */

// express is a web framework for Node.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
// Initializes an instance of an Express application
const app = express();

// MIDDLEWARE

app.use((req, res, next) => {
  // Send cookes to the client
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.urlencoded({ extended: true }));

// This middleware parses incoming requests with JSON payloads. It is based on body-parser, and it makes the req.body property available in your request handlers.
app.use(express.json());

// This middleware enables Cross-Origin Resource Sharing (CORS). CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. This is useful for enabling API access from different domains.
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// This middleware parses cookies attached to the client request object. It populates the req.cookies property with an object keyed by the cookie names. This is useful for handling cookies in your application.
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

/*
The app.listen method in a Node.js application using the Express framework is used to bind and listen for connections on a specified host and port. Essentially, it starts the server and makes it listen for incoming requests.
*/
app.listen(3001, () => {
  console.log("Port is running");
});
