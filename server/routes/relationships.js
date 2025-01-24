/*
    Description: This file is the entry point for our application. It is responsible for setting up the server and connecting to the database.
    File: /routes/relationships.js
    Created Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

import express from "express";
import {
  getRelationships,
  addRelationship,
  deleteRelationship,
} from "../controllers/relationship.js";

const router = express.Router();

router.get("/", getRelationships);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

export default router;
