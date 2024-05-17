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
import checkoutRoute from "./routes/payment.route.js";

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
// checkout route
server.use("/api/v1/order", checkoutRoute);

// Middleware for serving frontend static files
server.use(express.static(path.join(__dirname, "/frontend/dist")), (req, res, next) => { next() });

// Middleware for serving admin static files
server.use(express.static(path.join(__dirname, "/admin/dist")), (req, res, next) => { next() });

// Routes for serving frontend index.html
server.get("/test", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/success", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/cancel", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/product", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/product/shop/:category", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/product/single-product/:id", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/product/search", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/contact-us", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/about-us", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/cart", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/wishlist", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/login", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });
server.get("/logout", (req, res) => { res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")) });

// Routes for serving admin index.html
server.get("/admin", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/order-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/order-detail/:id", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/size-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/add-size", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/edit-size/:id", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/color-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/add-color", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/edit-color/:id", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/category-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/add-category", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/edit-category/:id", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/product-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/add-product", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/edit-product/:id", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });
server.get("/admin/customer-list", (req, res) => { res.sendFile(path.join(__dirname, "/admin/dist", "index.html")) });

// environment variable
const port = process.env.PORT || 8080;
const mode = process.env.Node_Mode;

// server listen
server.listen(port, () => { console.log(`server is successfully running in ${mode} on port number ${port}`) }); 