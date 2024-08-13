import express from "express";

import { addProduct } from "../controllers/admin";

const router = express.Router();

router.post("/add-product", addProduct);

export default router;
