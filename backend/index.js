import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());



app.listen(PORT, () => {
  console.log("server is running on port 4000");
});
