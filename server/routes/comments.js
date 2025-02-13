/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/comment.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

// Importing express
import express from "express";
// Importing comment controller
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.js";

// Creating express router
const router = express.Router();

// Find all comments
router.get("/", getComments);
// Add comment
router.post("/", addComment);
// Delete comment by the api route (id)
router.delete("/:id", deleteComment);
// Update comment by id by the api route (id)
router.put("/:id", updateComment);

export default router;
