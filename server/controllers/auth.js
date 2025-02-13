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
    // Query to insert the new user - which is the username, email, password and name
    const queryNewUser =
      "INSERT INTO users (username, email, password, name) VALUES (?)";

    //   values for the query
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    //  query to insert the values
    database.query(queryNewUser, [values], (error, data) => {
      // if there is an error then return the error
      if (error)
        return (
          res
            // status 500 is for internal server error
            .status(500)
            // .json is used to send the response in json format
            .json(error, "Unknown error - Something went wrong!")
        );
      // status 201 is for created
      return res.status(201).json("User has been created");
    });
  });
};

// Login query
export const login = (req, res) => {
  // Check if user exists
  const queryLogin = "SELECT * FROM users WHERE username = ?";
  // Query to check if the user exists
  database.query(queryLogin, [req.body.username], (error, data) => {
    // If there is an error then return the error
    if (error) return res.status(500).json(error);
    // if data is empty then return user not found
    if (data.length === 0) return res.status(404).json("User not found");
    // Check password using bcrypt compareSync
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    // Not true then return incorrect username or password
    if (!checkPassword)
      return res.status(400).json("Incorrect username or password");
    // Create cookie/token
    // Sign in as user ID once password is correct
    const token = jwt.sign({ id: data[0].id }, "SECRET");
    // Hide password but show other data
    const { password, ...other } = data[0];
    // Send token in cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
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
