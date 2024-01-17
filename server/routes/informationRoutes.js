// routes/informationRoutes.js
import express from "express";
import {
    getAllInformation,
    createInformation,
    updateInformation,
    deleteInformation
} from "../controllers/informationController.js";

const router = express.Router();

// Get all information
router.get('/information', getAllInformation);

// Create new information
router.post('/information', createInformation);

// Update information
router.put('/information/:id', updateInformation);

// Delete information
router.delete('/information/:id', deleteInformation);

export default router;
