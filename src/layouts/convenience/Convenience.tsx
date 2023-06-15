import {useEffect, useState} from "react";
import {IConvenienceResponse} from "../../interface/response";
import service from "../../service";
import RawConvenience from "../../components/convenience/RawConvenience";
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {styled} from "@mui/system";
import {green} from "@mui/material/colors";

const TableContainerStyle = styled(TableContainer)({
    margin: 'auto',
    borderRadius: '8px',
    border: '6px solid #e7ebf0',
    maxWidth: '90%',
    fontSize: 16,
    fontWeight: 600,

})

const font = {
    fontSize: '16px',
    fontWeight: 700,
    color: '#212121'
}

const Convenience = () => {
    const [conveniences, setConveniences] = useState<Array<IConvenienceResponse>>([])

    const fetchConv = async () => {
        try {
            const res = await service.convenience.getAll()
            if (res.status.toString().startsWith('2')) {
                if (res.data.data.conveniences) {
                    setConveniences(res.data.data.conveniences || [])
                }
            }
        } catch (e) {
        }
    }

    useEffect(() => {
        fetchConv().then()
    }, [])

    return (

        <div style={{marginTop: 112}}>
            <Box style={{display:'flex', justifyContent:'space-between', marginLeft:60,marginRight:60,marginBottom:12,alignItems:'center'}}>
                <h2>Nội thất có sẵn</h2>
                <Button variant={'contained'} style={{backgroundColor:green[400]}}>Thêm nội thất</Button>
            </Box>
            <TableContainerStyle>
                <Table aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={font} align="center">Thứ tự</TableCell>
                            <TableCell sx={font} align="center">Tên hiển thị</TableCell>
                            <TableCell sx={font} align="center">Mã</TableCell>
                            <TableCell sx={font} align="center">Ngày tạo</TableCell>
                            <TableCell sx={font} align="center">Cập nhật lần cuối</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {conveniences.map((row, index) => (
                            <RawConvenience convenience={row} refresh={fetchConv} key={row.id}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainerStyle>
        </div>
    )
}

export default Convenience;