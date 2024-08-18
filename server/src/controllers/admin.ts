import { NextFunction, Request, Response } from "express";
import Product from "../models/product";

export const addProduct = (req: Request, res: Response, next: NextFunction) => {
  interface FormTypes {
    title: string;
    desc: string;
    imageFiles: Express.Multer.File[];
    userId: string;
    category: string;
  }

  const title = <FormTypes["title"]>req.body.title;
  const desc = <FormTypes["desc"]>req.body.desc;
  const imageFiles = <FormTypes["imageFiles"]>req.files;
  const userId = <FormTypes["userId"]>req.body.userId;
  const category = <FormTypes["category"]>req.body.category;

  let imgUrl: string[] = [];

  if (imageFiles && imageFiles.length > 0) {
    imgUrl = imageFiles.map((file) => {
      const correctFilePath = file.path.replace("dist\\", "");
      console.log("correctFilePath:", correctFilePath);
      return correctFilePath;
    });
  }

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
      imgUrls: imgUrl,
      addBy: userId,
      category: category,
    });

    newProduct
      .save()
      .then((product) => {
        res.status(201).json({
          message: "Add product successfuly!",
          product: product,
        });
      })
      .catch((err) => {
        console.log("error at addProduct:", err);
      });
  }
};
