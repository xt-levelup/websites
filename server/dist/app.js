"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importStar(require("multer"));
const admin_1 = __importDefault(require("./routes/admin"));
const product_1 = __importDefault(require("./routes/product"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// --- Cho phép client truy cập thư mục images-------
const imagesPath = path_1.default.join(__dirname, "images");
console.log("Static images path:", imagesPath); // Test đường dẫn
app.use("/images", express_1.default.static(imagesPath));
// --------------------------------------------------
const fileStorage = (0, multer_1.diskStorage)({
    destination: (req, file, cb) => {
        cb(null, imagesPath);
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
app.use(product_1.default);
// --- File .env phải được đặt cùng thư mục package.json! ---
const mongodbUrl = process.env.MONGO_URL;
if (!mongodbUrl) {
    throw new Error("mongodbUrl undefined!");
}
console.log("mongodbUrl:", mongodbUrl);
// ----------------------------------------------------------
mongoose_1.default
    .connect(mongodbUrl)
    .then(() => {
    app.listen(5000);
    console.log("Server connected!");
})
    .catch((err) => {
    console.log("err from mongoose connect:", err);
});
