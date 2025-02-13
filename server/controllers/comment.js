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
  // query to get all comments
  const queryAllComments =
    "SELECT c.*, u.id AS userId, name, profilePic FROM comments c JOIN users u ON (u.id = c.userId)";

  // query to get all comments for a specific post
  database.query(queryAllComments, [req.query.postId], (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(data);
    }
    console.log(data);
  });
};

// Add comment
export const addComment = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    // Create comment query based on user id and post id
    const queryCreateComment =
      "INSERT INTO comments (commentDescription, commentedDate, userId, postId) VALUES (?)";

    // Values to be inserted in the query
    const values = [
      req.body.commentDescription,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];
    // Execute the query by passing the values and 'queryCreateComment' variable
    database.query(queryCreateComment, [values], (error, data) => {
      // If error occurs, return the error
      if (error) {
        // status 500 is for internal server error
        res.status(500).json(error);
      } else {
        // status 200 is for OK
        res.status(200).json("Comment has been created!");
      }
    });
  });
};

// Delete comment
export const deleteComment = (req, res) => {
  // Access to post from token/cookies
  const token = req.cookies.accessToken;

  /* If token is not present, return 401 status code
   401 is for unauthorized */
  if (!token) return res.status(401).json("Not logged in!");

  // Verify the token/cookies
  jwt.verify(token, "SECRET", (error, userInfo) => {
    // If error occurs, return 403 status code. 403 is for forbidden ("The forbidden cookie!")"
    if (error) return res.status(403).json("Invalid token!");

    // Query to delete comment based on comment id and user id
    const queryDeleteComment = "DELETE FROM comments WHERE id=? AND userId=?";

    // Execute the query by passing the values and 'queryDeleteComment' variable. Req (request) and 'param' refers to the key-value pairs passed along with a URL request and is used to get the comment id
    database.query(
      queryDeleteComment,
      [req.params.id, userInfo.id],
      (error, data) => {
        console.log(req.params.id);
        console.log(userInfo.id);
        // If error occurs, return the error. 500 is for internal server error
        if (error) return res.status(500).json(error);

        // If affected rows are greater than 0, return 200 status code. 200 is for OK
        if (data.affectedRows > 0)
          return res.status(200).json("Comment has been deleted!");
        // If affected rows are not the user Id comment then it will return 403 status code. 403 is for forbidden
        return res.status(403).json("You can delete only your comment!");
      }
    );
  });
};
export const updateComment = (req, res) => {
  // Access to post from token/cookies
  const token = req.cookies.accessToken;

  // If token is not present, return 401 status code. 401 is for unauthorized ("Cookie jar can't open!")
  if (!token) return res.status(401).json("Not logged in!");

  // Verify the token/cookies
  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    // Query to update comment based on comment id and user id
    const queryUpdateComment =
      "UPDATE comments SET commentDescription=? WHERE id=? AND userId=?";

    // Variables for the query
    const values = [req.body.commentDescription, req.params.id, userInfo.id];
    console.log("Before query actioned " + values);

    // Execute the query by passing the values and 'queryUpdateComment' variable
    database.query(queryUpdateComment, values, (error, data) => {
      // Error handling, status 500 is for internal server error
      if (error) return res.status(500).json(error);
      // If affected rows are greater than 0, return 200 status code. 200 is for OK
      if (data.affectedRows > 0)
        return res.status(200).json("Comment has been updated!");
      // If affected rows are not the user Id comment then it will return 403 status code. 403 is for forbidden
      return res.status(403).json("You can update only your comment!");
    });
  });
};
