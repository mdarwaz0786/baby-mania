import express from "express";
import { createNewsletter, deleteNewsletter, fetchAllNewsletter, fetchSingleNewsletter, updateNewsletter } from "../controllers/newsletter.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-newsletter", createNewsletter);
router.get("/all-newsletter", fetchAllNewsletter);
router.get("/single-newsletter/:id", fetchSingleNewsletter);
router.put("/update-newsletter/:id", updateNewsletter);
router.delete("/delete-newsletter/:id", deleteNewsletter);

export default router;