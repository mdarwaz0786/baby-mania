import express from "express";
import { deleteUser, fetchAllUser, fetchSingleUser, loggedInUser, loginUser, registerUser, updateUser } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

// router object
const router = express.Router();

// routes
router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/logged-in-user", isLoggedIn, loggedInUser);
router.get("/all-user", fetchAllUser);
router.get("/single-user/:id", fetchSingleUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;