/*
    Description: This file is for comments queries.
    File: /controller/comment.js
    Created Date: 21/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

// Importing the database connection
import moment from "moment/moment.js";
import { database } from "../connect.js";
import jwt from "jsonwebtoken";

export const getComments = (req, res) => {
  /* SELECT p.id, p.postDescription, p.userId, u.name, u.profilePic FROM posts p JOIN users u ON u.id=p.userId WHERE p.userId = ?*/

  /*SELECT c.*, u.id, u.name, u.profilePic FROM comments c JOIN users u WHERE c.postId = postId ORDER BY c.commentedDate DESC
  
  
  SELECT c.id, c.commentDescription, c.userId, c.postId, c.commentedDate FROM comments c JOIN users u ON u.id = c.userId WHERE c.postId = ?
  
  */
  const queryAllComments =
    "SELECT c.*, u.id AS userId, name, profilePic FROM comments c JOIN users u ON (u.id = c.userId)";
  database.query(queryAllComments, [req.query.postId], (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(data);
    }
    console.log(data);
  });
};

export const addComment = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    /* EXAMPLE -    "SELECT p.id, p.postDescription, p.userId, u.name, u.profilePic FROM posts p JOIN users u ON u.id=p.userId ";*/

    const queryCreateComment =
      "INSERT INTO comments (commentDescription, commentedDate, userId, postId) VALUES (?)";

    const values = [
      req.body.commentDescription,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];

    database.query(queryCreateComment, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Comment has been created!");
      }
    });
  });
};

export const deleteComment = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryDeleteComment = "DELETE FROM comments WHERE id=? AND userId=?";

    database.query(
      queryDeleteComment,
      [req.params.id, userInfo.id],
      (error, data) => {
        console.log(req.params.id);
        console.log(userInfo.id);
        if (error) return res.status(500).json(error);
        if (data.affectedRows > 0)
          return res.status(200).json("Comment has been deleted!");
        return res.status(403).json("You can delete only your comment!");
      }
    );
  });
};
export const updateComment = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryUpdateComment =
      "UPDATE comments SET commentDescription=? WHERE id=? AND userId=?";

    const values = [req.body.commentDescription, req.params.id, userInfo.id];
    console.log("Before query actioned " + values);

    database.query(queryUpdateComment, values, (error, data) => {
      if (error) return res.status(500).json(error);
      if (data.affectedRows > 0)
        return res.status(200).json("Comment has been updated!");
      return res.status(403).json("You can update only your comment!");
    });
    console.log(values);
  });
};
