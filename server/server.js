/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /server/server.cjs
    Created Date: 21/01/2025
    Modified Date: 22/01/2025
    Author: Jagdeep Tiwana
 */

/* fs allows us to interact with the local file system it in our project*/
// const fs = require("fs");
// express is a web framework for Node.js
import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likesRoutes);

app.listen(3000, () => {
  console.log("API working!");
});
