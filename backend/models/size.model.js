import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Size", sizeSchema);
