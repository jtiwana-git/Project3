/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/posts.js
    Created Date: 21/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

// Importing express
import express from "express";
// Importing post controller
import {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/posts.js";

// Creating express router
const router = express.Router();

// Find all posts
router.get("/", getPosts);
// Add post
router.post("/", addPost);
// Delete post by id by the api route (id)
router.delete("/:id", deletePost);
// Update post by id by the api route (id)
router.put("/:id", updatePost);

export default router;
