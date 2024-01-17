import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, useMediaQuery } from '@mui/material';
import Header from 'components/Header';
import NewsItem from './NewsItem';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a9d7e8d0257140469c35c9b14a76a6d1')
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
                    <NewsItem
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

export default NewsList