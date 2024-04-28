import mongoose from "mongoose";

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    colorCode: {
      type: String,
    },
    status: {
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Color", colorSchema);