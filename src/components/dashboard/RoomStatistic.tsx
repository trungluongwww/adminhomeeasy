import {Box, Grid, LinearProgress, Typography} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import {styled} from "@mui/system";
import {useEffect, useState} from "react";
import {IStatisticRoomResponse} from "../../interface/response";
import service from "../../service";
import AppToast from "../../utils/AppToast";

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

const RoomStatistic = () => {
    const [data,setData] = useState<IStatisticRoomResponse>({total:0,totalActive:0,totalBanned:0,totalInactive:0,totalPostToday:0})

    const fetchData = async ()=>{
        const res = await service.statistic.getRoom()

        if(res instanceof Error) {
            return AppToast({message:res.message,isSuccess:false})
        }

        setData(res)
    }
    useEffect(()=>{
        fetchData().then()
    },[])

    return (
        <Box style={ComponentStyle}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={nameStyle}>
                    <h3 style={titleStyle}>Thống kê phòng</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={6} style={leftContentStyle}>
                    <div>
                        <Typography variant="h6">Tổng số phòng</Typography>
                        <Typography variant="h4" style={ValueStyle}>{data.total}</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Số phòng hoạt động</Typography>
                        <Typography variant="h4" style={ValueStyle}>{data.totalActive}</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Số phòng không hoạt động</Typography>
                        <Typography variant="h4" style={ValueStyle}>{data.totalInactive}</Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} justifyContent="center" alignItems={'center'} height={'100%'}>
                        <Typography variant="h6">Tỉ lệ phòng mới hôm nay: +{(data.totalPostToday/data.total * 100).toFixed(2)}%</Typography>
                        <LinearProgress variant="determinate" value={(data.totalPostToday/data.total * 100)} style={{height:12}} />
                </Grid>
            </Grid>
        </Box>
    )
}


export default RoomStatistic;