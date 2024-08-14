"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imgUrls: {
        type: Array,
    },
    category: {
        type: String,
        required: true,
    },
    addBy: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model("Products", productSchema);
