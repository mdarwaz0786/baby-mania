import express from "express"
import { createColor, deleteColor, fetchAllColor, fetchSingleColor, updateColor } from "../controllers/color.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-color", createColor);
router.get("/all-color", fetchAllColor);
router.get("/single-color/:id", fetchSingleColor);
router.put("/update-color/:id", updateColor);
router.delete("/delete-color/:id", deleteColor);

export default router;