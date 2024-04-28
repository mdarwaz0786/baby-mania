import express from "express";
import upload from "../middleware/multer.middleware.js";
import { createProduct, deleteProduct, fetchAllProduct, fetchSingleProduct, updateProduct } from "../controllers/product.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-product", upload.single("image"), createProduct);
router.get("/all-product", fetchAllProduct);
router.get("/single-product/:id", fetchSingleProduct);
router.put("/update-product/:id", upload.single("image"), updateProduct);
router.delete("/delete-product/:id", deleteProduct);


export default router;
