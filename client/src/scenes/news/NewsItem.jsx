import React, { useState } from 'react'
import {

    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    useTheme,
} from "@mui/material";

const NewsItem = ({ title, description, url, author, publishedAt }) => {
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

export default NewsItem