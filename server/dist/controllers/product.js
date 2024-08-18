"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, res, next) => {
    product_1.default.find()
        .then((products) => {
        res.status(200).json({
            products: products,
        });
    })
        .catch((err) => {
        console.log("err catch getProducts:", err);
    });
};
exports.getProducts = getProducts;
