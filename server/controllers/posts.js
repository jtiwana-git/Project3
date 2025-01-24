/*
    Description: This file is for Posts queries.
    File: /controller/posts.js
    Created Date: 21/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

// Importing the database connection
import { database } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  // Get user id
  const userId = req.query.userId;

  // Access to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    /* SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS
    u ON (u.id = p.userId) LEFT JOIN relationships AS r ON (r.userId = r.followingUserID) WHERE r.followerUserId= ? OR p.userId =? ORDER BY p.createdAt DESC;
     */
    // const queryAllPosts =
    //   "SELECT p.id, p.postDescription, p.userId, u.name, u.profilePic FROM posts p JOIN users u ON u.id=p.userId";

    const queryAllPosts = userId
      ? "SELECT p.id, p.postDescription, p.userId, u.name, u.profilePic FROM posts p JOIN users u ON u.id=p.userId WHERE p.userId = ?"
      : "SELECT p.id, p.postDescription, p.userId, u.name, u.profilePic FROM posts p JOIN users u ON u.id=p.userId ";

    database.query(
      queryAllPosts,
      [userId ? userId : userInfo.id, userInfo.id],
      (error, data) => {
        if (error) {
          res.status(500).json(error);
        } else {
          res.status(200).json(data);
        }
      }
    );
  });
};

export const addPost = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryCreatePost =
      "INSERT INTO posts (postDescription, imgPost, userId) VALUES (?)";

    const values = [req.body.postDescription, req.body.imgPost, userInfo.id];

    database.query(queryCreatePost, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Post has been created!");
      }
    });
  });
};

export const deletePost = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryDeletePost = "DELETE FROM posts WHERE id=? AND userId=?";

    database.query(
      queryDeletePost,
      [req.params.id, userInfo.id],
      (error, data) => {
        if (error) returnres.status(500).json(error);
        if (data.affectedRows > 0)
          return res.status(200).json("Post has been deleted!");
        return res.status(403).json("You can delete only your post!");
      }
    );
  });
};

export const updatePost = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    // INSERT INTO posts (postDescription, imgPost, userId) VALUES (?)

    const queryUpdatePost =
      "UPDATE posts SET postDescription=?, imgPost=? WHERE id=? AND userId=?";

    const values = [
      req.body.postDescription,
      req.body.imgPost,
      req.params.id,
      userInfo.id,
    ];

    database.query(queryUpdatePost, values, (error, data) => {
      if (error) return res.status(500).json(error);
      if (data.affectedRows > 0)
        return res.status(200).json("Post has been updated!");
      return res.status(403).json("You can update only your post!");
    });
  });
};
