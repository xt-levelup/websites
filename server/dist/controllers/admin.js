"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const addProduct = (req, res, next) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const imageFiles = req.files;
    const userId = req.body.userId;
    const category = req.body.category;
    console.log("title:", title);
    console.log("desc:", desc);
    console.log("imageFiles:", imageFiles);
    console.log("userId:", userId);
    console.log("category:", category);
    if (!title || !desc || !userId) {
        res.status(400).json({
            message: "Please add full informations!",
        });
    }
    else {
        const newProduct = new product_1.default({
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
exports.addProduct = addProduct;
