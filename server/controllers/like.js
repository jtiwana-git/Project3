/*
    Description: This file is for likes queries.
    File: /controller/like.js
    Created Date: 23/01/2025
    Created Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

// Importing the database connection
import { database } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const queryGetLikes = "SELECT userId FROM likes WHERE postId = ?";
  database.query(queryGetLikes, [req.query.postId], (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(data.map((like) => like.userId));
    }
  });
};

export const addLike = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");
    const queryAddLike = "INSERT INTO likes (userId, postId) VALUES (?)";

    const values = [userInfo.id, req.query.postId];

    database.query(queryAddLike, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Liked");
      }
    });
  });
};

export const deleteLike = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryDeleteLike = "DELETE FROM likes WHERE userId = ? AND postId = ?";

    const values = [userInfo.id, req.query.postId];

    database.query(queryDeleteLike, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Ukliked!!");
      }
    });
  });
};
