import express from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { createOrderWithStripe } from "../controllers/payment.controller.js";

// router object
const router = express.Router();

// create a new order
router.post("/checkout", isLoggedIn, createOrderWithStripe);

export default router;