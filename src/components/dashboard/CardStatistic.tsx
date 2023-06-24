import {Box, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/system";
import {blue, grey} from "@mui/material/colors";

const PaperStyle = styled(Paper)({
    height: 160,
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    margin: 2,
    textAlign: 'center',
    background: "#f6f7f9d9",
    color: grey[700],
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
})


const ContentStyle = styled('div')({
    flex: '1 1 auto',
    textAlign: 'left',
})

const TitleStyle = styled(Typography)({
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
})

const ValueStyle = styled(Typography)({
    fontSize: 36,
    fontWeight: 'bold',
    color: blue[400]
})

interface CardStatisticProps {
    title: string;
    count: number;
    Icon: any;
}

const CardStatistic = ({ title, count, Icon }: CardStatisticProps) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Box style={{marginTop: 12}}>
                <PaperStyle>
                    {Icon && Icon}
                    <ContentStyle>
                        <TitleStyle>
                            {title || ""}
                        </TitleStyle>
                        <ValueStyle>
                            {count}
                        </ValueStyle>
                    </ContentStyle>
                </PaperStyle>
            </Box>
        </Grid>
    )
}

export default CardStatistic;