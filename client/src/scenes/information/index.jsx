// components/InformationPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from 'components/Header';
import './information.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const InformationPage = () => {
    const [information, setInformation] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useTheme();
    const [newInformation, setNewInformation] = useState({ title: '', content: '', image: '', author: '' });
    const [selectedInformation, setSelectedInformation] = useState(null);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    useEffect(() => {
        const fetchInformation = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/info/information');
                setInformation(response.data);
            } catch (error) {
                console.error('Error fetching information:', error.response?.data?.error);
            }
        };

        fetchInformation();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInformation((prevInformation) => ({ ...prevInformation, [name]: value }));
    };

    const handleAddInformation = async () => {
        try {
            const response = await axios.post('http://localhost:5001/api/info/information', newInformation);
            setInformation((prevInformation) => [...prevInformation, response.data]);
            setNewInformation({ title: '', content: '', image: '', author: '' });
        } catch (error) {
            console.error('Error adding information:', error.response?.data?.error);
        }
    };

    const handleUpdateInformation = async () => {
        if (!selectedInformation) return;

        try {
            const response = await axios.put(
                `http://localhost:5001/api/info/information/${selectedInformation._id}`,
                newInformation
            );
            setInformation((prevInformation) =>
                prevInformation.map((info) => (info._id === response.data._id ? response.data : info))
            );
            setNewInformation({ title: '', content: '', image: '', author: '' });
            setSelectedInformation(null);
        } catch (error) {
            console.error('Error updating information:', error.response?.data?.error);
        }
    };

    const handleDeleteInformation = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/info/information/${id}`);
            setInformation((prevInformation) => prevInformation.filter((info) => info._id !== id));
        } catch (error) {
            console.error('Error deleting information:', error.response?.data?.error);
        }
    };

    const handleEditInformation = (info) => {
        setNewInformation({ ...info });
        setSelectedInformation(info);
    };

    return (
        <div className='info-container'>

            <Header title="INFORMATION DESK" subtitle="Get all the information you need from here." />
            <div className='second-box'>
                <Header title="ADD INFORMATION" subtitle="Get all the information you need from here." />
                <form>
                    <Box mt="2rem" width="100%">
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} >Title : </Typography>
                            <input className='input' type="text" name="title" value={newInformation.title} onChange={handleInputChange} />
                        </Box>
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} > Content : </Typography>
                            <textarea className='input' name="content" value={newInformation.content} onChange={handleInputChange} />
                        </Box>
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} >Image URL: : </Typography>
                            <input className='input' type="text" name="image" value={newInformation.image} onChange={handleInputChange} />
                        </Box>
                        <Box p="5px" display="flex" flexDirection="column">
                            <Typography p="5px" color={theme.palette.secondary[300]} >Author : </Typography>
                            <input className='input' type="text" name="author" value={newInformation.author} onChange={handleInputChange} />
                        </Box>
                    </Box>
                    {selectedInformation ? (
                        <button className='button1' type="button" onClick={handleUpdateInformation}>
                            Update Information
                        </button>
                    ) : (
                        <button className='button3' type="button" onClick={handleAddInformation}>
                            Add Information
                        </button>
                    )}
                </form>
            </div>


            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                justifyContent="space-between"
                rowGap="20px"
                columnGap="1.33%"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
            >
                {information.map((info) => (
                    <Card key={information._id}
                        sx={{
                            backgroundImage: "none",
                            backgroundColor: theme.palette.background.alt,
                            borderRadius: "0.55rem",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h4" component="div" textAlign="center">

                                {info.title}
                            </Typography>
                            <Box display="flex" flexDirection="column">
                                <Box
                                    component="img"
                                    alt="profile"
                                    src={info.image}
                                    width="100%"
                                    borderRadius="20px"
                                    sx={{ objectFit: "cover" }}
                                    p="1rem"
                                />

                            </Box>

                        </CardContent>
                        <CardActions>
                            <Button
                                variant="primary"
                                size="small"
                                onClick={() => setIsExpanded(!isExpanded)}
                                textAlign="center"
                                width="100%"
                                display="flex" justifyContent="center" alignItems="center"
                            >
                                See More &nbsp;&nbsp;&nbsp; <ExpandCircleDownOutlinedIcon />
                            </Button>
                        </CardActions>
                        <Collapse
                            in={isExpanded}
                            timeout="auto"
                            unmountOnExit
                            sx={{
                                color: theme.palette.neutral[300],
                            }}
                        >
                            <CardContent>
                                <Typography>{info.content}</Typography>
                                <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                                    <button className="button1" onClick={() => handleEditInformation(info)}>Edit</button>
                                    <button className="button2" onClick={() => handleDeleteInformation(info._id)}>Delete</button>
                                </Box>
                                <Typography mt="0.5rem" textAlign="center"> <b>Author</b> : {info.author}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </Box>
        </div>
    );
};

export default InformationPage;




