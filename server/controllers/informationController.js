// controllers/informationController.js
import mongoose from "mongoose";
import Information from "../models/Information.js"

export const getAllInformation = async (req, res) => {
    try {
        const information = await Information.find();
        res.json(information);
    } catch (error) {
        console.error('Error fetching information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createInformation = async (req, res) => {
    const { title, content, image, author } = req.body;

    try {
        const newInformation = new Information({ title, content, image, author });
        const savedInformation = await newInformation.save();
        res.json(savedInformation);
    } catch (error) {
        console.error('Error creating information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const updateInformation = async (req, res) => {
    const { id } = req.params;
    const { title, content, image, author } = req.body;

    try {
        const updatedInformation = await Information.findByIdAndUpdate(
            id,
            { title, content, image, author },
            { new: true }
        );
        res.json(updatedInformation);
    } catch (error) {
        console.error('Error updating information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteInformation = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedInformation = await Information.findByIdAndDelete(id);
        res.json(deletedInformation);
    } catch (error) {
        console.error('Error deleting information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
