import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Color",
        },
        size: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Size",
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    finalPrice: {
      type: Number,
    },
    status: {
      type: String,
    },
    paid: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
