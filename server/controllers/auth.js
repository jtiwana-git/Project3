/*
    Description: This file is for authentication controller.
    File: /controller/auth.js
    Created Date: 21/01/2025
    Author: Jagdeep Tiwana
 */

// Importing the required Datatbase connection
import { database } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Check user if exists
  const queryUser = "SELECT * FROM users WHERE username = ?";
  database.query(queryUser, [req.body.username], (error, data) => {
    // this is the error message
    if (error) return res.status(500).json(error, "Unknown error");
    // if the user already exists
    if (data.length > 0) return res.status(409).json("Account already exists");
    // Create user
    // Hash password (which means the password is encrypted (ie password1 converted to friwa_uf3we))
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const queryNewUser =
      "INSERT INTO users (username, email, password, name) VALUES (?)";

    //   values for the query
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    database.query(queryNewUser, [values], (error, data) => {
      if (error)
        return res
          .status(500)
          .json(error, "Unknown error - Something went wrong!");
      return res.status(201).json("User has been created");
    });
  });
};
export const login = (req, res) => {
  const queryLogin = "SELECT * FROM users WHERE username = ?";

  database.query(queryLogin, [req.body.username], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Incorrect username or password");

    // Create token
    // Sign in as user ID once password is correct
    const token = jwt.sign({ id: data[0].id }, "SECRET");

    // Hide password but show other data
    const { password, ...others } = data[0];

    // Send token in cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

// Logout
export const logout = (req, res) => {
  // Clear cookie/token
  res
    .clearCookie("accessToken", {
      secure: true,
      httpOnly: "none",
    })
    .status(200)
    .json("User has been logged out");
};
