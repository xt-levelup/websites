import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { json } from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer, { diskStorage, FileFilterCallback } from "multer";
import adminRoutes from "./routes/admin";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "images")));

app.use(cors());

const fileStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "src/images");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(json());

app.use(
  multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).array("imageFiles", 5)
);

app.use(adminRoutes);

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
