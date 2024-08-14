"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const admin_1 = __importDefault(require("./routes/admin"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "images")));
app.use((0, cors_1.default)());
const fileStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "dist/images");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    var _a;
    const fileExtension = (_a = file.originalname.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (fileExtension === "png" ||
        fileExtension === "jpg" ||
        fileExtension === "jpeg") {
        console.log("Added images!");
        cb(null, true);
    }
    else {
        console.log("Did not add images!");
        cb(null, false);
    }
};
app.use((0, body_parser_1.json)());
app.use((0, multer_1.default)({
    storage: fileStorage,
    fileFilter: fileFilter,
}).array("imageFiles", 5));
app.use(admin_1.default);
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
