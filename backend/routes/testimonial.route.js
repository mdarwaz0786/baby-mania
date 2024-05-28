import express from "express";
import {
  createTestimonial,
  deleteTestimonial,
  fetchAllTestimonial,
  fetchSingleTestimonial,
  updateTestimonial,
} from "../controllers/testimonial.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-testimonial", createTestimonial);
router.get("/all-testimonial", fetchAllTestimonial);
router.get("/single-testimonial/:id", fetchSingleTestimonial);
router.put("/update-testimonial/:id", updateTestimonial);
router.delete("/delete-testimonial/:id", deleteTestimonial);

export default router;
