// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5001/user/login', credentials);

            if (response.data.success) {
                // Redirect to another page after successful login
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                navigate('/dashboard');
            } else {
                console.log('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 style={{ textAlign: "center", fontSize: "36px", color: "black" }} >Welcome to Hill nad Knowlton </h1>
                <h3 style={{ textAlign: "center", fontSize: "18px", color: "black" }}>Knowledge Management System</h3>
                <h2 style={{ textAlign: "center", fontSize: "24px", color: "black" }}>Login</h2>
                <label className='label'>
                    Username:
                    <input className='input' type="text" name="username" value={credentials.username} onChange={handleInputChange} />
                </label>
                <label className='label'>
                    Password:
                    <input type="password" className='input' name="password" value={credentials.password} onChange={handleInputChange} />
                </label>
                <button onClick={handleLogin} className='button'>Login</button>
            </div>
        </div>
    );
};

export default Login;
