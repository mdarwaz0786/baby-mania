import express from "express";
import { createCoupon, deleteCoupon, fetchAllCoupon, fetchSingleCoupon, updateCoupon } from "../controllers/coupon.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-coupon", createCoupon);
router.get("/all-coupon", fetchAllCoupon);
router.get("/single-coupon/:id", fetchSingleCoupon);
router.put("/update-coupon/:id", updateCoupon);
router.delete("/delete-coupon/:id", deleteCoupon);

export default router;