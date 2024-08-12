import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const mongodbUrl =
  "mongodb+srv://xitrumvndn5:2991981DBok@cluster0.jwcb9.mongodb.net/shop";

mongoose
  .connect(mongodbUrl)
  .then(() => {
    app.listen(5000);
    console.log("Server connected!");
  })
  .catch((err) => {
    console.log("err from mongoose connect:", err);
  });
