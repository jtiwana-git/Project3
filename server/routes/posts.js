/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/posts.js
    Created Date: 21/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
