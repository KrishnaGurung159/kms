// routes/feedbackRoutes.js
import express from "express";
import { saveFeedback, getAllFeedbacks } from "../controllers/feedbackController.js";

const router = express.Router();

router.post('/feedback', saveFeedback);
router.get('/feedback', getAllFeedbacks);

export default router;