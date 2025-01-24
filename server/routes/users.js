/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/users.js
    Created Date: 21/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

// User by ID
router.get("/find/:userId", getUser);
// Update User by ID
router.put("/", updateUser);

export default router;
