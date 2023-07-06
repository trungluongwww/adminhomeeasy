import {styled} from "@mui/system";
import {
    Avatar,
    Box,
    Button,
    FormControl, Grid, IconButton, ImageList, ImageListItem,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TableCell,
    TableRow,
    TextField, Typography
} from "@mui/material";
import {AvTimerSharp, Edit, Image} from "@mui/icons-material";
import {IRoomResponse} from "../../interface/response";
import DateTimeUtils from "../../utils/DateTimeUtils";
import constant from "../../constant";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {grey, red} from "@mui/material/colors";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import ImageModal from "../image/ImageModal";
import service from "../../service";
import AppToast from "../../utils/AppToast";

const font = {
    fontSize: '16px',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.68)'
}

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: "#fafafa",

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

    '&:hover': {
        background: "#f1f1f1",
    },
});

const StyledEdit = styled(Edit)({
    '&:hover': {
        color: "#52be74",
    },
})

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    maxHeight: '100vh',
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IRowTableParams {
    room: IRoomResponse
    index: number
    refresh: Function
}

const RowTableRoom = ({room, index, refresh}: IRowTableParams) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmitChangeStatus = (status:"banned"|"active"|"inactive")=>{
       const ok =  window.confirm("Xác nhận thực hiện thay đổi trạng thái phòng ?")

        if(ok){
            service.room.changeStatus(room.id,status).then((res)=>{
                if (res instanceof Error){
                    return AppToast({message:res.message,isSuccess:false})
                }
                refresh();
                setOpen(false);
                return AppToast({message:res.message,isSuccess:true})
            })
        }
    }

    return (
        <StyledTableRow key={room.id}>
            <TableCell sx={font} align={'center'} component="th" scope="row">
                {index}
            </TableCell>
            <TableCell><img src={room.files[0]?.info?.url} style={{width: '55px', height: '55px'}}/></TableCell>
            <TableCell sx={font} align="center">{room.name}</TableCell>
            <TableCell sx={font} align="center">{room.type?.value || ""}</TableCell>
            <TableCell sx={font} align="center">{room.status.value || ""}</TableCell>
            <TableCell sx={font} align="center">{room.rentPerMonth.toLocaleString() || ""}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(room.createdAt)}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(room.updatedAt)}</TableCell>
            <TableCell sx={font} align="center"><InfoIcon onClick={handleOpen}/></TableCell>
            <Modal
                style={{borderRadius: 8}}
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div style={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                        <Typography variant={'h5'} style={{fontWeight: 'bold'}}>{room.name}</Typography>
                        {
                            room.status.key === constant.Value.roomStatus.banned ?
                                <Button color={"primary"} onClick={()=>handleSubmitChangeStatus("active")} startIcon={<LockOpenIcon/>}>Mở khóa phòng</Button>
                                :
                                <Button color={"warning"} onClick={()=>handleSubmitChangeStatus("banned")} startIcon={<LockIcon/>}>Khóa phòng</Button>
                        }
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Mô tả</Typography>
                        <Typography style={{fontWeight: 500}}>{room.description}</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Giá thuê một tháng</Typography>
                        <Typography style={{fontWeight: 500}}>{room.rentPerMonth.toLocaleString()} VNĐ</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Yêu cầu tiền cọc</Typography>
                        <Typography style={{fontWeight: 500}}>{room.deposit.toLocaleString()} VNĐ</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Diện tích</Typography>
                        <Typography style={{fontWeight: 500}}>{room.squareMetre} m²</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Địa chỉ</Typography>
                        <Typography
                            style={{fontWeight: 500}}>{`${room.province?.name}, ${room.district?.name}, ${room.ward?.name}, ${room.address}`}</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Trạng thái</Typography>
                        <Typography style={{fontWeight: 500}}>{room.status.value}</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Loại cho thuê</Typography>
                        <Typography style={{fontWeight: 500}}>{room.type.value}</Typography>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Typography style={{fontSize: 16, fontWeight: 600}}>Hình ảnh thực tế</Typography>
                        <ImageList sx={{width: 800, height: 150}} cols={4} rowHeight={150}>
                            {
                                room.files?.map((f) => {
                                    return (
                                        <ImageListItem id={f.id} key={f.id}>
                                            <ImageModal imageUrl={f.info?.url}/>
                                        </ImageListItem>
                                    )
                                })
                            }
                        </ImageList>
                    </div>
                </Box>
            </Modal>
        </StyledTableRow>
    )
}

export default RowTableRoom;