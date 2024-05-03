import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
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

const __dirname = path.resolve();

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

// Middleware for serving frontend static files
server.use(express.static(path.join(__dirname, "frontend", "dist")), (req, res, next) => {
  console.log("Serving static files from frontend/dist");
  next();
});

// Route for serving frontend index.html
server.get("/", (req, res) => {
  // Check if the request URL matches "/admin"
  if (req.originalUrl.startsWith("/admin")) {
    // If it matches, redirect to the admin interface
    res.sendFile(path.join(__dirname, "admin", "dist", "index.html"));
  } else {
    // Otherwise, serve the frontend interface
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  }
});

// Middleware for serving admin static files
server.use(express.static(path.join(__dirname, "admin", "dist")), (req, res, next) => {
  console.log("Serving static files from admin/dist");
  next();
});

// Route for serving admin index.html
server.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "dist", "index.html"));
});

// environment variable
const port = process.env.PORT || 8080;
const mode = process.env.Node_Mode;

// server listen
server.listen(port, () => {
  console.log(`server is successfully running in ${mode} on port number ${port}`);
}); 