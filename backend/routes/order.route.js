import express from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { createOrder, deleteOrder, fetchAllOrder, fetchOrderById, updateOrder } from "../controllers/order.controller.js";

// router object
const router = express.Router();

// create a new order
router.post("/create-order", isLoggedIn, createOrder);

// fetch all order
router.get("/all-order", fetchAllOrder);

// fetch a single order by ID
router.get("/single-order/:id", fetchOrderById);

// update an order by ID
router.put("/update-order/:id", isLoggedIn, updateOrder);

// delete an order by ID
router.delete("/delete-order/:id", isLoggedIn, deleteOrder);

export default router;
