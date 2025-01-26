import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "social",
});
