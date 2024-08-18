import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Product.find()
    .then((products) => {
      res.status(200).json({
        products: products,
      });
    })
    .catch((err) => {
      console.log("err catch getProducts:", err);
    });
};
