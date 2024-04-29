import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    status: {
      type: String,
    },
    showHeader: {
      type: String,
    },
    shopByCategory: {
      type: String,
    },
    ourCategory: {
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Category", categorySchema);