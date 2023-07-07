import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import {grey} from "@mui/material/colors";
import {styled} from "@mui/system";
import DateTimeUtils from "../../utils/DateTimeUtils";


interface Log {
    id: string,
    userId: string,
    roomId: string,
    action: string,
    createdAt: string
}

const StyleCellTitle = styled(TableCell)({
    color: grey[900],
    fontWeight: 600
})

const StyleCell = styled(TableCell)({
    color: grey[700],
    fontWeight: 600
})

const rows = [
    {
        id: '1',
        userId: 'user1',
        roomId: 'room1',
        action: 'Login',
        createdAt: '2023-06-23T09:30:00Z',
    },
    {
        id: '2',
        userId: 'user2',
        roomId: 'room2',
        action: 'Logout',
        createdAt: '2023-06-23T10:15:00Z',
    },
    // ...
];

const TrackingLog = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyleCellTitle>ID người dùng</StyleCellTitle>
                            <StyleCellTitle align="left">Hành động</StyleCellTitle>
                            <StyleCellTitle align="left">ID phòng</StyleCellTitle>
                            <StyleCellTitle align="left">Thời gian thực hiện</StyleCellTitle>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{}}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {border: 0},
                                }}>
                                <StyleCell component="th" scope="row">
                                    <Link to={`/user/${row.userId}`} style={{color:grey[700]}}>{row.userId}</Link>
                                </StyleCell>
                                <StyleCell component="th" align="left" scope="row">
                                    {row.action}
                                </StyleCell>
                                <StyleCell align="left">{row.roomId}</StyleCell>
                                <StyleCell align="left">{DateTimeUtils.formatDate(new Date(row.createdAt))}</StyleCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TrackingLog;
