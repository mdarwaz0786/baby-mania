import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  createSlider,
  deleteSlider,
  fetchAllSlider,
  updateSlider,
} from "../controllers/slider.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-slider", upload.single("image"), createSlider);
router.get("/all-slider", fetchAllSlider);
router.put("/update-slider/:id", updateSlider);
router.delete("/delete-slider/:id", deleteSlider);

export default router;
