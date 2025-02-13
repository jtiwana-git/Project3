/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/auth.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

// Importing express
import express from "express";

// Importing the auth controller
import { login, register, logout } from "../controllers/auth.js";

// Creating the router
const router = express.Router();

// Routers the auth routes

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Logout
router.post("/logout", logout);

export default router;
