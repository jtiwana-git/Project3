/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/auth.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router();

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Logout
router.post("/logout", logout);

export default router;
