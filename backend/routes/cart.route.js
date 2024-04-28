import express from "express";
import { clearCart, createCart, deleteCart, fetchCart, updateCart } from "../controllers/cart.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

// router object
const router = express.Router();

// routes
router.post("/create-user-cart", isLoggedIn, createCart);
router.get("/fetch-user-cart", isLoggedIn, fetchCart);
router.put("/update-user-cart/:id", isLoggedIn, updateCart);
router.delete("/delete-user-cart/:id", isLoggedIn, deleteCart);
router.delete("/clear-user-cart/:id", isLoggedIn, clearCart);

export default router;