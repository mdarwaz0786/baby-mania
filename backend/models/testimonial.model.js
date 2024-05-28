import mongoose from "mongoose";

const testimonilSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    review: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Testimonial", testimonilSchema);
