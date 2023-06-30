import {Avatar, TableCell, TableRow, Typography} from "@mui/material";
import {IUserResponse} from "../../interface/response";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {grey} from "@mui/material/colors";
import InfoIcon from '@mui/icons-material/Info';
import {styled} from "@mui/system";

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
    return (
        <StyledTableRow>
            <TableCell style={fontValue}><ContentCopyIcon sx={copyIconStyle}/></TableCell>
            <TableCell style={ avatarCell}>
                <Avatar style={avatar} src={user.avatar}/>
                <Typography style={fontValue}>{user.name}</Typography>
            </TableCell>
            <TableCell  style={fontValue}>{user.phone}</TableCell>
            <TableCell style={fontValue}>{user.email}</TableCell>
            <TableCell align={'center'} style={fontValue}><InfoIcon sx={copyIconStyle}/></TableCell>
        </StyledTableRow>
    )
}

export default UserRowItem;