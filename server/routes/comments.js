/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/comment.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.js";

const router = express.Router();

// Find post by ID
router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

export default router;
