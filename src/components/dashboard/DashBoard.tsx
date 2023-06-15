import React from "react";
import {Box, Grid, Paper, Typography} from '@mui/material';
import {styled} from "@mui/system";
import {Person} from "@mui/icons-material";
import { useNavigate} from "react-router-dom";

const PaperStyle = styled(Paper)({
    height: 200,
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    margin: 2,
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, #ff9a9e, #fad0c4)',
    color: 'white',
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
})

const TitleStyle = styled(Typography)({
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
})

const IconStyle = styled(Person)({
    flex: '0 0 25%',
    fontSize: 48,
    textAlign: 'center',
    marginRight: 2,
})

const ContentStyle = styled('div')({
    flex: '1 1 auto',
    textAlign: 'left',
})

const ValueStyle = styled(Typography)({
    fontSize: 36,
    fontWeight: 'bold',
})

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            maxWidth: `calc(100vw - 250px)`,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            <Grid container spacing={2} style={{boxSizing: 'border-box'}}>
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box style={{marginTop:32,marginLeft:24}} >
                                <PaperStyle >
                                    <IconStyle/>
                                    <ContentStyle>
                                        <TitleStyle>
                                            Total Users
                                        </TitleStyle>
                                        <ValueStyle>
                                            100
                                        </ValueStyle>
                                    </ContentStyle>
                                </PaperStyle>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box style={{marginTop:32,}}>
                                <PaperStyle>
                                    <IconStyle/>
                                    <ContentStyle>
                                        <TitleStyle>
                                            Total Users
                                        </TitleStyle>
                                        <ValueStyle>
                                            100
                                        </ValueStyle>
                                    </ContentStyle>
                                </PaperStyle>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box style={{marginTop:32,}}>
                                <PaperStyle>
                                    <IconStyle/>
                                    <ContentStyle>
                                        <TitleStyle>
                                            Total Users
                                        </TitleStyle>
                                        <ValueStyle>
                                            100
                                        </ValueStyle>
                                    </ContentStyle>
                                </PaperStyle>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box style={{marginTop:32,marginRight:24}}>
                                <PaperStyle>
                                    <IconStyle/>
                                    <ContentStyle>
                                        <TitleStyle>
                                            Total Users
                                        </TitleStyle>
                                        <ValueStyle>
                                            100
                                        </ValueStyle>
                                    </ContentStyle>
                                </PaperStyle>
                            </Box>
                        </Grid>
                        {/* Add more grid items for other statistics */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard