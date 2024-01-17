// components/FeedbackForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from 'components/Header';
import {
    Box,
    Typography,
    useTheme,
} from "@mui/material";

const FeedbackForm = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const theme = useTheme();
    useEffect(() => {
        // Fetch feedbacks when the component mounts
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('https://kms-api.vercel.app/api/feedback/feedback');
            if (response.data.success) {
                setFeedbacks(response.data.feedbacks);
            } else {
                console.log('Failed to fetch feedbacks:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        }
    };
    const [feedbackData, setFeedbackData] = useState({ name: '', email: '', feedback: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFeedbackSubmit = async () => {
        try {
            await axios.post('https://kms-api.vercel.app/api/feedback/feedback', feedbackData);
            alert('Feedback submitted successfully!');
            setFeedbackData({ name: '', email: '', feedback: '' }); // Clear form after submission
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Error submitting feedback. Please try again.');
        }
    };

    return (
        <div className='info-container'>

            <Header title="FEEDBACKS DESK" subtitle="Get all the Feedback you need from here." />
            <div className='second-box'>
                <Header title="ADD FEEDBACK" subtitle="Please leave the feedback for other people." />
                <form>
                    <Box mt="2rem" width="100%">
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} >Name : </Typography>

                            <input type="text" name="name" value={feedbackData.name} onChange={handleInputChange} />
                        </Box>
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} > Email : </Typography>
                            <input type="email" name="email" value={feedbackData.email} onChange={handleInputChange} />
                        </Box>
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} > Feedback : </Typography>
                            <textarea name="feedback" value={feedbackData.feedback} onChange={handleInputChange} />

                        </Box>
                    </Box>
                    <button onClick={handleFeedbackSubmit}>Submit Feedback</button>

                </form>
            </div>

            <div>
                <h2>Feedbacks</h2>
                {feedbacks.length === 0 ? (
                    <p>No feedbacks available.</p>
                ) : (
                    <ul>
                        {feedbacks.map((feedback) => (
                            <li key={feedback._id}>
                                <strong>{feedback.name}</strong> - {feedback.feedback}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    );
};

export default FeedbackForm;