import express from "express";
import connectToDb from "./config/db.js";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// db connection
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
