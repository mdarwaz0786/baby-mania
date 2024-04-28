import express from "express";
import { createSize, deleteSize, fetchAllSize, fetchSingleSize, updateSize } from "../controllers/size.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-size", createSize);
router.get("/all-size", fetchAllSize);
router.get("/single-size/:id", fetchSingleSize);
router.put("/update-size/:id", updateSize);
router.delete("/delete-size/:id", deleteSize);

export default router;




