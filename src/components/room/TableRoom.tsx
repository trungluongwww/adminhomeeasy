import {IRoomResponse} from "../../interface/response";
import {styled} from "@mui/system";
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import RawConvenience from "../convenience/RawConvenience";
import RowTableRoom from "./RowTableRoom";


const TableContainerStyle = styled(TableContainer)({
    borderRadius: '8px',
    border: '6px solid #e7ebf0',
    maxWidth: '100%',
    fontSize: 16,
    fontWeight: 600,

})

const font = {
    fontSize: '16px',
    fontWeight: 700,
    color: '#212121'
}

interface ITableRoomParameters {
    rooms : Array<IRoomResponse>
    total: number
    refresh:Function
}

const TableRoom = ({rooms,refresh,total}:ITableRoomParameters)=>{
    return (
        <Box style={{padding:'0px 12px', maxWidth:'95%',boxSizing:'border-box'}}>
        <TableContainerStyle>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={font} align="center">Thứ tự</TableCell>
                        <TableCell sx={font} align="center">Hình ảnh</TableCell>
                        <TableCell sx={font} align="center">Tên phòng</TableCell>
                        <TableCell sx={font} align="center">Loại</TableCell>
                        <TableCell sx={font} align="center">Trạng thái</TableCell>
                        <TableCell sx={font} align="center">Giá tiền</TableCell>
                        <TableCell sx={font} align="center">Ngày tạo</TableCell>
                        <TableCell sx={font} align="center">Ngày cập nhật</TableCell>
                        <TableCell sx={font} align="center"> Xem chi tiết </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rooms.map((r,i)=>{
                            return <RowTableRoom refresh={refresh} room={r} index={i}/>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainerStyle>
        </Box>
    )
}

export default TableRoom;