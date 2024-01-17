// controllers/feedbackController.js
import mongoose from "mongoose";
import Feedback from "../models/feedback.js";

export const saveFeedback = async (req, res) => {
    try {
        const { name, email, feedback } = req.body;
        const newFeedback = new Feedback({ name, email, feedback });
        await newFeedback.save();
        res.json({ success: true, message: 'Feedback saved successfully!' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const getAllFeedbacks = async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find();
        res.json({ success: true, feedbacks: allFeedbacks });
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};