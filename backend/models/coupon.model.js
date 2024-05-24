import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    couponCode: {
      type: String,
    },
    type: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Coupon", couponSchema);