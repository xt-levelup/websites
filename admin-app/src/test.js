// Bước 1: Cài đặt các package cần thiết
// Trước tiên, bạn cần cài đặt các package cần thiết:

// npm install express mongoose multer firebase-admin
// npm install --save-dev typescript @types/express @types/mongoose @types/multer

// Bước 2: Cấu hình Firebase
// Tạo một dự án trên Firebase và tải xuống tệp JSON chứa thông tin xác thực. Sau đó, thêm tệp này vào dự án của bạn.

// Bước 3: Cấu hình TypeScript
// Tạo tệp tsconfig.json nếu chưa có:

// JSON

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 4: Cấu hình Firebase Admin SDK
// Tạo tệp firebase.ts trong thư mục src:

// TypeScript

import admin from 'firebase-admin';
import serviceAccount from './path/to/your/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-project-id.appspot.com'
});

const bucket = admin.storage().bucket();
export { bucket };

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 5: Tạo schema Products trong MongoDB
// Tạo tệp product.model.ts trong thư mục src/models:

// TypeScript

import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Product = model('Product', productSchema);
export default Product;

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 6: Tạo middleware Multer để upload file
// Tạo tệp upload.ts trong thư mục src/middleware:

// TypeScript

import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 7: Tạo controller để xử lý upload và lưu link ảnh
// Tạo tệp product.controller.ts trong thư mục src/controllers:

// TypeScript

import { Request, Response } from 'express';
import { bucket } from '../firebase';
import Product from '../models/product.model';

export const uploadImage = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  blobStream.on('error', (err) => {
    res.status(500).send({ message: err.message });
  });

  blobStream.on('finish', async () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    const product = new Product({
      name: req.body.name,
      imageUrl: publicUrl
    });

    await product.save();
    res.status(200).send(product);
  });

  blobStream.end(req.file.buffer);
};

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 8: Tạo route để xử lý yêu cầu upload
// Tạo tệp product.routes.ts trong thư mục src/routes:

// TypeScript

import { Router } from 'express';
import upload from '../middleware/upload';
import { uploadImage } from '../controllers/product.controller';

const router = Router();

router.post('/upload', upload.single('image'), uploadImage);

export default router;

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 9: Tạo server Express
// Tạo tệp server.ts trong thư mục src:

// TypeScript

import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/products', productRoutes);

mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});

// AI-generated code. Review and use carefully. More info on FAQ.
// Bước 10: Biên dịch và chạy server
// Biên dịch TypeScript và chạy server:

// tsc
// node dist/server.js

// Vậy là bạn đã hoàn thành việc tạo chức năng upload file ảnh lên Firebase và lưu link ảnh vào MongoDB. Nếu có bất kỳ câu hỏi nào, đừng ngần ngại hỏi thêm nhé!