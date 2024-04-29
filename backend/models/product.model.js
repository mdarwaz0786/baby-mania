import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    skuCode: {
      type: String,
    },
    mrpPrice: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    availability: {
      type: Number,
    },
    status: {
      type: String,
    },
    featuredProduct: {
      type: String,
    },
    latestProduct: {
      type: String,
    },
    bestSellingProduct: {
      type: String,
    },
    specialProduct: {
      type: String,
    },
    newProduct: {
      type: String,
    },
    smallInfo: {
      type: String,
    },
    description: {
      type: String,
    },
    items: [
      {
        image: {
          type: String
        },
        cloudinary_id: {
          type: String,
        },
        color: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Color",
        }],
        size: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Size",
        }],
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Product", productSchema);