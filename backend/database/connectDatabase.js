import mongoose from "mongoose";

// connect MongoDB database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Server is successfully connected to MongoDB databse");
  } catch (error) {
    console.log("Error while connecting MongoDB database", error.message);
  };
};

export default connectDatabase;