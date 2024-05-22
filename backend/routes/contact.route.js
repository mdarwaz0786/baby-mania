import express from "express";
import { createContact, deleteContact, fetchAllContact, fetchSingleContact, updateContact } from "../controllers/contact.controller.js";

// router object
const router = express.Router();

// routes
router.post("/create-contact", createContact);
router.get("/all-contact", fetchAllContact);
router.get("/single-contact/:id", fetchSingleContact);
router.put("/update-contact/:id", updateContact);
router.delete("/delete-contact/:id", deleteContact);

export default router;