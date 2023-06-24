import React from "react";
import {Box, Grid, Paper, Typography} from '@mui/material';
import {styled} from "@mui/system";
import {AddComment, Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {blueGrey, green, grey} from "@mui/material/colors";
import LoginIcon from '@mui/icons-material/Login';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardStatistic from "../../components/dashboard/CardStatistic";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import RoomStatistic from "../../components/dashboard/RoomStatistic";
import UserStatistic from "../../components/dashboard/UserStatistic";

const IConStatisticStyle = {
    flex: '0 0 25%',
    fontSize: 48,
    textAlign: 'center',
    marginRight: 2,
}

const TitleStyle = styled(Typography)({
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
})

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{
                maxWidth: `calc(100vw - 250px)`,
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                <Box style={{marginLeft: 24, marginTop: 8}}>
                    <TitleStyle sx={{color: grey[800]}}>Hoạt động người dùng hôm nay</TitleStyle>
                </Box>
                <Grid container spacing={2} style={{boxSizing: 'border-box', marginLeft: 24, marginRight: 24}}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <CardStatistic title={"Lượt truy cập"} count={265}
                                           Icon={<LoginIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Đăng ký tài khoản"} count={35}
                                           Icon={<PersonAddAltIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Phòng mới tạo"} count={26}
                                           Icon={<AddCircleOutlineIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Cuộc trò chuyện mới"} count={43}
                                           Icon={<AddComment sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Tin nhắn mới"} count={2335}
                                           Icon={<MessageIcon sx={IConStatisticStyle}/>}/>

                        </Grid>
                    </Grid>
                </Grid>

            </div>
            <div>
                <Box style={{marginLeft: 24, marginTop: 8}}>
                    <TitleStyle sx={{color: grey[800]}}>Thống kê dữ liệu hệ thống</TitleStyle>

                </Box>
                <Box style={{width: '90%', marginLeft: 0}}>
                    <Grid container justifyContent={'space-between'} spacing={4} style={{boxSizing: 'border-box', marginLeft: 24, marginRight: 24}}>
                        <Grid item xs={12} sm={6} md={6}>
                            <RoomStatistic/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <UserStatistic/>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Dashboard