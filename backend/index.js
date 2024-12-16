import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = process.env.PORT  || 4000;
app.use(cors());

app.listen(PORT, () => {
  console.log("server is running on port 4000");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`database not connected due to : ${err.message}`);
  });
