import express from "express";
import upload from "../middleware/multer.middleware.js";
import { createCategory, deleteCategory, fetchAllCategory, fetchSingleCategory, updateCategory } from "../controllers/category.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-category", upload.single("image"), createCategory);
router.get("/all-category", fetchAllCategory);
router.get("/single-category/:id", fetchSingleCategory);
router.put("/update-category/:id", upload.single("image"), updateCategory);
router.delete("/delete-category/:id", deleteCategory);

export default router;