import React, { useState, useEffect } from 'react'
import {

    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    useTheme,
} from "@mui/material";
import axios from 'axios'
import { Box, useMediaQuery } from '@mui/material';
import Header from 'components/Header';

const MarketDataItem = ({ title, description, url, author, publishedAt }) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>


                <Typography variant="h4" component="div">
                    <a href={url} style={{ textDecoration: "none", color: theme.palette.secondary[100], }}>{title}</a>
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    See More
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
                    <Typography variant="body2">Author : {author}</Typography>
                    <Typography variant="body2">{description}</Typography>
                    <Typography variant="body2">Published At : {publishedAt}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}



const MarketData = () => {
    const [articles, setArticles] = useState([]);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a9d7e8d0257140469c35c9b14a76a6d1')
            console.log(response);
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="NEWS" subtitle="See all the Latest News." />


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
                {articles.map(article => (
                    <MarketDataItem
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        author={article.author}
                        publishedAt={article.publishedAt}
                    />
                )
                )}
            </Box>

        </Box>
    )
}

export default MarketData