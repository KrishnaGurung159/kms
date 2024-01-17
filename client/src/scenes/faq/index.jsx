import React, { useState } from "react";
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
import Header from "components/Header";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const FAQItem = ({ title, description, }) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <CardContent sx={{ textAlign: "center", p: "0.5rem 0rem 0rem 0rem" }}>
                <Typography color={theme.palette.secondary[400]} variant="h3">
                    {title}
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    sx={{ alignItems: "center" }}
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <KeyboardArrowDownOutlinedIcon />
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
                    <Typography variant="h4">{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

const FAQ = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Frequently Asked Questions" subtitle="Need help. Search if there is any solutions in FAQ." />
            <Box
                mt="60px"
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                justifyContent="space-between"
                rowGap="20px"
                columnGap="1.33%"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
            >
                <FAQItem title={"What is PR?"}
                    description={"PR stands for public relations. The dictionary says its “the business of inducing the public to have understanding for and goodwill toward a person, firm, or institution”. We say PR support is about creating strategies and campaigns to showcase our clients brilliant work We help them get noticed by the right audience at the right time."} />
                <FAQItem title={"How do I know if we are ready to handle high profile coverage?"}
                    description={"There are a number of things you should have in place before you do PR, as our What to get right before doing PR blog advises. We often work with people and businesses who haven’t done PR before, and we discuss the process and what might happen after you start to raise your profile."} />
                <FAQItem title={"How much time and money should you spend on PR?"}
                    description={"Good question. Marketing spend is sometimes talked about as 10% of a business’ revenue. We prefer to start with what you’re trying to achieve – your objectives – and then work out how much it could cost to achieve them.We bring a lot of experience, but because of where we’re based we don’t have big overheads, so we tend to price our services competitively. We will also estimate what you can achieve for a given budget."} />
                <FAQItem title={"What makes a story newsworthy?"}
                    description={"This depends on the context and the publication – what’s newsworthy for a title for HR professionals will be very different to for the construction trade press, for example. But generally, new news is important – don’t try and announce a newly launched product if you’ve already launched, for example. See if you can hook your news onto the news agenda and consider the angle carefully. Think about what your target press cover and adapt your news for that."} />
                <FAQItem title={"What makes a good press release?"}
                    description={"A press release is a good summary of a piece of news, written for journalists. It should give them the key information they need to write their story. We’ve provided a simple press release template on our site. There should be a clear angle in the release, meaning they have a reason to cover the news. We usually start the process by discussing what’s going on with our clients and what’s coming up, advise what could be newsworthy and for whom, and then write any releases with that in mind."} />
                <FAQItem title={"How do you measure success in PR?"}
                    description={"Success is different by client. We always start with objectives, which vary by client, project and industry. Once we’ve defined and agreed these we can measure against them using metrics, as outlined above."} />
                <FAQItem title={"Why should I hire a PR professional?"}
                    description={"PR isn’t rocket science. There’s no reason you can’t do it yourself if you have time and inclination and are willing to learn on the job. What a good PR agency will bring is experience and contacts. They should help you craft your message, advise on how to engage press, which ones to target and when to do it. They should also help you amplify your coverage."} />
                <FAQItem title={"How can you effectively measure PR?"}
                    description={"Measuring traditional ROI from PR activity can be tricky. However, as we always say PR is also a very transparent offering – you can see exactly what coverage has been achieved for an activity and measure against agreed objectives. We also use a tracking service called CoverageBook for each company we work with, which collates all coverage achieved and gives some very useful metrics for every campaign. We measure things like estimated coverage views (so how many times someone has seen each piece of coverage), links from coverage (how many times your company link has been used in online pieces) and domain authority (how authoritative the publication is)."} />
                <FAQItem title={"How often should I produce press releases?"}
                    description={"There’s no magic number – it’s more about when you have news that could be interesting to your target. However, if you want to develop a presence and get recognised in your key media, it’s a good idea to build up some momentum. Don’t expect to get a good amount of coverage each time if you only plan for one piece of news every 12 months, for example."} />
                <FAQItem title={"Why should I use PR instead of advertising?"}
                    description={"Ideally, PR and advertising should work hand-in-hand. We’ve done this on a number of projects. Here’s more about how we’ve worked with Sharp Thinking Marketing on projects. But if you have limited budget and new news (such as a launch) and would like to pack a punch, a tactical PR campaign can work really well. PR can be more cost-effective, can garner results more quickly and provide authoritative content to use elsewhere."} />
                <FAQItem title={"What’s the difference between PR and advertising??"}
                    description={"Advertising and PR are methods of promotion that can fall under the ‘marketing’ umbrella term. Both can be fantastic tools for business growth and development if used effectively. They share common goals including brand awareness, attracting and engaging your audience and selling products or services, but their means of achieving them and the way in which success is measured is different."} />
                <FAQItem title={"How important is PR to my small business?"}
                    description={"The good thing about PR for small business is that it’s a channel that can really make a big impact. We’re specialists in working with small businesses and can make a smaller budget go further. There’s no reason that a good product or offering can’t get national coverage – take a look at our work for The Doudoods. Equally, local coverage might be just as powerful for you. See our blog on the power of local and trade coverage."} />
            </Box>
        </Box>
    );
};




export default FAQ;