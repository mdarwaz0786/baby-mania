import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./database/connectDatabase.js";
import testRoute from "./routes/test.route.js";
import colorRoute from "./routes/color.route.js";
import sizeRoute from "./routes/size.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import cartRoute from "./routes/cart.route.js";
import categoryRoute from "./routes/category.route.js";
import orderRoute from "./routes/order.route.js";
import allDataRoute from "./routes/allData.route.js";

// config
dotenv.config();

// connect database
connectDatabase();

// rest object
const server = express();

// middleware
server.use(express.json());
server.use(cors());

// test route
server.use("/api/v1", testRoute);
// category route
server.use("/api/v1/category", categoryRoute);
// color route
server.use("/api/v1/color", colorRoute);
// size route
server.use("/api/v1/size", sizeRoute);
// product route
server.use("/api/v1/product", productRoute);
// user route
server.use("/api/v1/user", userRoute);
// cart route
server.use("/api/v1/cart", cartRoute);
// order route
server.use("/api/v1/order", orderRoute);
// all data route
server.use("/api/v1/data", allDataRoute);

// environment variable
const port = process.env.PORT || 8080;
const mode = process.env.Node_Mode;

// server listen
server.listen(port, () => {
  console.log(`server is successfully running in ${mode} on port number ${port}`);
}); 