/*
    Description: This file is for user queries.
    File: /controller/user.js
    Created Date: 23/01/2025
    Modified Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

// Importing the database connection
import { database } from "../connect.js";
import jwt from "jsonwebtoken";

// Get a user
export const getUser = (req, res) => {
  // Get the user id from the request
  const userId = req.params.id;
  const queryGetUser = `SELECT * FROM users WHERE id=?`;

  // Query the database
  database.query(queryGetUser, [userId], (error, data) => {
    // If there is an error, return the error. 500 is a server error
    if (error) return res.status(500).json(error);
    // variable to store the user data without the password.  Data[0] is the first row of the data
    const { password, ...user } = data[0];
    res.status(200).json(user);
  });
};

export const updateUser = (req, res) => {
  // Get the token from the cookies
  const token = req.cookies.accessToken;

  // If there is no token, return a 401 error
  if (!token) return res.status(401).json("Not logged in!");

  // Verify the token
  jwt.verify(token, "SECRET", (error, userInfo) => {
    // If there is an error, return a 403 error
    if (error) return res.status(403).json("Invalid token!");

    // Query to update the user
    const queryUpdateUser =
      "UPDATE users SET name=?, coverPic=?, profilePic=?, city=?, website=? WHERE id=?";

    // Values to update the user
    const values = [
      req.body.name,
      req.body.coverPic,
      req.body.profilePic,
      req.body.website,
      req.body.city,
      userInfo.id,
    ];

    // Query the database
    database.query(queryUpdateUser, values, (error, data) => {
      if (error) return res.status(500).json(error);
      // If the affected rows are more than 0, return a 200 status
      if (data.affectedRows > 0) return res.status(200).json("Updated!");
      // If the affected rows are 0, return a 403 status
      return res.status(403).json("You can update only your profile!");
    });
  });
};
