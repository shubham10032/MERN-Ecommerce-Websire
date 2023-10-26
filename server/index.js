import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv"
import DefaultData from "./default.js";
 
const app = express();
// const username = process.env.DB_USERNAME
// const password = process.env.DB_PASSWORD

dotenv.config();
const PORT = 8000;

Connection()
app.listen(PORT, ()=> console.log(`Server is running on port  ${PORT} hello`))

DefaultData();