import {styled} from "@mui/system";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TableCell,
    TableRow,
    TextField
} from "@mui/material";
import {AvTimerSharp, Edit, Image} from "@mui/icons-material";
import {IRoomResponse} from "../../interface/response";
import DateTimeUtils from "../../utils/DateTimeUtils";
import constant from "../../constant";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IRowTableParams {
    room: IRoomResponse
    index: number
}

const RowTableRoom = ({room,index}:IRowTableParams)=>{
    return (
        <StyledTableRow key={room.id}>
            <TableCell sx={font} align={'center'} component="th" scope="row">
                {index}
            </TableCell>
            <TableCell><img src={room.files[0]?.info?.url} style={{width:'55px', height:'55px' }}/></TableCell>
            <TableCell sx={font} align="center">{room.name}</TableCell>
            <TableCell sx={font} align="center">{room.type?.value || ""}</TableCell>
            <TableCell sx={font} align="center">{room.status.value || ""}</TableCell>
            <TableCell sx={font} align="center">{room.rentPerMonth.toString() || ""}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(room.createdAt)}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(room.updatedAt)}</TableCell>
            <TableCell sx={font} align="center"><InfoIcon  /></TableCell>
        </StyledTableRow>
    )
}

export default RowTableRoom;