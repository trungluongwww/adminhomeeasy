import {blue, grey} from "@mui/material/colors";
import {Box, Grid, LinearProgress, Typography} from "@mui/material";

const ComponentStyle = {
    padding: 12,
    margin: 2,
    background: "#f6f7f9d9",
    color: grey[700],
    borderRadius: 10,
    height: 400,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}

const nameStyle = {
    borderBottom: `1px solid ${grey[200]}`,
}

const leftContentStyle = {
    marginTop: 12,
    height: '100%',
}

const titleStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    color: grey[700],
}

const ValueStyle = {
    fontSize: 36,
    fontWeight: 'bold',
    color: blue[400],
    marginLeft: 24
}
const UserStatistic = () => {
    return (
        <Box style={ComponentStyle}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={nameStyle}>
                    <h3 style={titleStyle}>Thống kê người dùng</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={6} style={leftContentStyle}>
                    <div>
                        <Typography variant="h6">Số người dùng hệ thống</Typography>
                        <Typography variant="h4" style={ValueStyle}>150</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Người tìm kiếm phòng</Typography>
                        <Typography variant="h4" style={ValueStyle}>92</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Người cho thuê phòng</Typography>
                        <Typography variant="h4" style={ValueStyle}>58</Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} justifyContent="center" alignItems={'center'} height={'100%'}>
                    <Typography variant="h6">Tỉ lệ người dùng mới hôm nay: +{30}%</Typography>
                    <LinearProgress variant="determinate" value={30} style={{height: 12}}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserStatistic;