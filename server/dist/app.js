"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const mongodbUrl = "mongodb+srv://xitrumvndn5:2991981DBok@cluster0.jwcb9.mongodb.net/shop";
mongoose_1.default
    .connect(mongodbUrl)
    .then(() => {
    app.listen(5000);
    console.log("Server connected!");
})
    .catch((err) => {
    console.log("err from mongoose connect:", err);
});
