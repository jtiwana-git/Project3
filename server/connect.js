import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Create a connection to the database
/*
Inserting the connections details to .env file doesnt work
*/
export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "social",
});
