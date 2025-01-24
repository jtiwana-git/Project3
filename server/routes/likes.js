/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/likes.js
    Created Date: 21/01/2025
    Modified Date: 23/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);

export default router;
