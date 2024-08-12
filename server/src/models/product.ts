import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export default mongoose.model("Products", productSchema);
