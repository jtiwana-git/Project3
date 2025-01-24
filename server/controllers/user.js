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

export const getUser = (req, res) => {
  const userId = req.params.id;
  const queryGetUser = `SELECT * FROM users WHERE id=?`;

  database.query(queryGetUser, [userId], (error, data) => {
    if (error) return res.status(500).json(error);
    const { password, ...user } = data[0];
    res.status(200).json(user);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryUpdateUser =
      "UPDATE users SET name=?, coverPic=?, profilePic=?, city=?, website=? WHERE id=?";

    const values = [
      req.body.name,
      req.body.coverPic,
      req.body.profilePic,
      req.body.website,
      req.body.city,
      userInfo.id,
    ];

    database.query(queryUpdateUser, values, (error, data) => {
      if (error) return res.status(500).json(error);
      //
      if (data.affectedRows > 0) return res.status(200).json("Updated!");
      return res.status(403).json("You can update only your profile!");
    });
  });
};
