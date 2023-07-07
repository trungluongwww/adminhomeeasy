import {
    Avatar,
    Box,
    Modal,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";
import {IUserResponse} from "../../interface/response";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {grey} from "@mui/material/colors";
import InfoIcon from '@mui/icons-material/Info';
import {styled} from "@mui/system";
import React from "react";
import AppToast from "../../utils/AppToast";

const fontValue = {
    fontSize: '16px',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.6)'
}

const copyIconStyle = {
    '&:hover': {
        backgroundColor: grey[200],
    },
    cursor:'pointer',
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
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const avatarCell= {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.6)'
}
const avatar= {
    marginRight: 4
}
interface UserRowParams {
    user: IUserResponse
}

const UserRowItem = ({user}:UserRowParams ) =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCopyID = () =>{
        navigator.clipboard.writeText(user.id).then(()=>{
            AppToast({message:"đã sao chép ID người dùng",isSuccess:true})
        });
    }

    return (
        <StyledTableRow>
            <TableCell style={{...fontValue, cursor:'pointer'}}><ContentCopyIcon onClick={handleCopyID} sx={copyIconStyle}/></TableCell>
            <TableCell style={ avatarCell}>
                <Avatar style={avatar} src={user.avatar}/>
                <Typography style={fontValue}>{user.name}</Typography>
            </TableCell>
            <TableCell  style={fontValue}>{user.phone}</TableCell>
            <TableCell style={fontValue}>{user.email}</TableCell>
            <TableCell align={'center'} style={fontValue}><InfoIcon onClick={handleOpen} sx={copyIconStyle}/></TableCell>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
                        <Avatar src={user.avatar} style={{width:150, height:150}}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>ID:</Typography>
                        <Typography>{user.id}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Tên:</Typography>
                        <Typography>{user.name}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Số điện thoại :</Typography>
                        <Typography>{user.phone}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Email:</Typography>
                        <Typography>{user.email}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Thành phố:</Typography>
                        <Typography>{user.province?.name}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Quận:</Typography>
                        <Typography>{user.district?.name}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Phường:</Typography>
                        <Typography>{user.ward?.name}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Tên đường, số nhà:</Typography>
                        <Typography>{user.address}</Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px', borderBottom:`1px solid ${grey[200]}`}}>
                        <Typography>Quyền truy cập:</Typography>
                        <Typography>{user.root?"ADMIN":"USER"}</Typography>
                    </div>
                </Box>
            </Modal>
        </StyledTableRow>
    )
}

export default UserRowItem;