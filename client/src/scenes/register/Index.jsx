// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, Typography, useTheme } from '@mui/material';
import Header from 'components/Header';
import image1 from "../../assets/profile.jpg"


const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('client');
    const [registrationMessage, setRegistrationMessage] = useState('');
    const theme = useTheme();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5001/user/register', {
                username,
                password,
                email,
                role,
            });

            // Reset the input fields and display a success message
            setUsername('');
            setPassword('');
            setEmail('');
            setRole('user');
            setRegistrationMessage('User registered successfully');

            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error.response?.data?.error);
        }
    };

    return (
        <Box m="1.5rem 2.5rem" >
            <Header title="REGISTER" subtitle="Register new user and admin in this page." />

            <Card sx={{
                m: "2rem 5rem", height: "75vh",
                backgroundColor: theme.palette.background.alt,
                backgroundImage: "none",
                borderRadius: "0.55rem",
            }}>
                <form>
                    <Box display="flex">


                        <Box width="40%" p="4rem 3rem">
                            <div style={{ height: "1rem" }}>
                                {registrationMessage && <p style={{ color: 'green' }}>{registrationMessage}</p>}
                            </div>
                            <div>
                                <label>
                                    <Typography variant='h3' m="1rem 0.5rem">
                                        Username
                                    </Typography>
                                </label>
                            </div>
                            <div>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='John Doe' style={{ width: "100%", height: "40px", fontSize: "22px" }} />
                            </div>
                            <div>
                                <label><Typography variant='h3' m="1rem 0.5rem">Password</Typography> </label>
                            </div>
                            <div>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", height: "40px", fontSize: "22px" }} />
                            </div>
                            <div>
                                <label><Typography variant='h3' m="1rem 0.5rem">Email</Typography> </label>
                            </div>
                            <div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", height: "40px", fontSize: "22px" }} />
                            </div>
                            <div>
                                <label><Typography variant='h3' m="1rem 0.5rem">Role</Typography> </label>
                            </div>
                            <Box m="1rem 0.5rem">
                                <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: "100%", height: "40px", fontSize: "22px" }}>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="manager">Manager</option>
                                    <option value="employee">Employee</option>
                                    <option value="client">Client</option>
                                </select>
                            </Box>
                            <Box mt="4rem">
                                <button onClick={handleRegister} style={{ width: "100%", height: "60px", backgroundColor: theme.palette.secondary[400], fontSize: "22px" }} >Register</button>

                            </Box>
                        </Box>
                        <Box
                            component="img"
                            alt="profile"
                            src={image1}
                            width="60%"
                            height="100%"
                            sx={{ objectFit: "cover" }}

                        />
                    </Box>

                </form>
            </Card>

        </Box >
    );
};

export default App;


