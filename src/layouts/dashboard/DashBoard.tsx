import React, {useEffect, useState} from "react";
import {Box, Grid, Typography} from '@mui/material';
import {styled} from "@mui/system";
import {AddComment, } from "@mui/icons-material";
import { grey} from "@mui/material/colors";
import LoginIcon from '@mui/icons-material/Login';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardStatistic from "../../components/dashboard/CardStatistic";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import RoomStatistic from "../../components/dashboard/RoomStatistic";
import UserStatistic from "../../components/dashboard/UserStatistic";
import {IStatisticCommonTodayResponse} from "../../interface/response";
import service from "../../service";
import AppToast from "../../utils/AppToast";

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
    const [data,setData] = useState<IStatisticCommonTodayResponse>({} as IStatisticCommonTodayResponse)

    const fetchData = async ()=>{
        const res = await service.statistic.getCommon()

        if(res instanceof Error) {
            return AppToast({message:res.message,isSuccess:false})
        }

        setData(res)
    }
    useEffect(()=>{
        fetchData().then()
    },[])
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
                            <CardStatistic title={"Lượt truy cập"} count={data.totalAccess}
                                           Icon={<LoginIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Đăng ký tài khoản"} count={data.totalRegister}
                                           Icon={<PersonAddAltIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Phòng mới tạo"} count={data.totalRoomCreated}
                                           Icon={<AddCircleOutlineIcon sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Cuộc trò chuyện mới"} count={data.totalConversationCreated}
                                           Icon={<AddComment sx={IConStatisticStyle}/>}/>
                            <CardStatistic title={"Tin nhắn mới"} count={data.totalMessage}
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