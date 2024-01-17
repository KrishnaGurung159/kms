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
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

const Rewards = ({ title, reward, points }) => {
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
        <Typography variant="h3" component="div" textAlign="center">
          {title}
        </Typography>
        <Box fontSize="50px" display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt="1rem">
          <CardGiftcardOutlinedIcon style={{ fontSize: "80px" }} />
          <Typography variant="body2">{points}</Typography>
        </Box>
        <Typography variant="h3" textAlign="center" mt="1rem">{reward}</Typography>
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
          <Typography>Id : </Typography>
          <Typography>Supply Left: </Typography>
          <Typography>
            Yearly Sales This Year:
          </Typography>
          <Typography>
            Yearly Units Sold This Year:
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const RedeemPoints = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="REDEEM POINTS" subtitle="Exchange your points to receive wonderful rewards." />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <Rewards title="REDEEM BOOKS" reward="1000 points" points="1000" />
        <Rewards title="REDEEM VACATIONS" reward="1000 points" points="1000" />
        <Rewards title="REDEEM CD/DVDs" reward="1000 points" points="1000" />
      </Box>
    </Box>
  )
}

export default RedeemPoints