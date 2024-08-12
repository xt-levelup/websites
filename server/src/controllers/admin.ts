import { NextFunction, Request, Response } from "express";
import Product from "../models/product";

export const addProduct = (req: Request, res: Response, next: NextFunction) => {
  const title: string = req.body.title;
  const desc: string = req.body.desc;
  const imageFiles = req.files as Express.Multer.File[];
  const userId: string = req.body.userId;
  const category: string = req.body.category;

  console.log("title:", title);
  console.log("desc:", desc);
  console.log("imageFiles:", imageFiles);
  console.log("userId:", userId);
  console.log("category:", category);

  if (!title || !desc || !userId) {
    res.status(400).json({
      message: "Please add full informations!",
    });
  } else {
    const newProduct = new Product({
      title: title,
      desc: desc,
      imageUrls: imageFiles,
      addBy: userId,
      category: category,
    });

    newProduct
      .save()
      .then((product) => {
        res.status(201).json({
          message: "Add product successfuly!",
        });
      })
      .catch((err) => {
        console.log("error at addProduct:", err);
      });
  }
};
