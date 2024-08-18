import express from "express";
import { getProducts } from "../controllers/product";

const router = express.Router();

router.get("/getProducts", getProducts);

export default router;
