import React, {useEffect, useState} from "react";
import {IConvenienceResponse} from "../../interface/response";
import service from "../../service";
import RawConvenience from "../../components/convenience/RawConvenience";
import {
    Box,
    Button,
    FormControl, InputLabel, MenuItem, Modal, Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {styled} from "@mui/system";
import {green} from "@mui/material/colors";
import AppToast from "../../utils/AppToast";
import constant from "../../constant";
import {IConvenienceCreatePayload} from "../../interface/request";

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

const Convenience = () => {
    const [conveniences, setConveniences] = useState<Array<IConvenienceResponse>>([])

    const fetchConv = async () => {
        try {
            const res = await service.convenience.getAll()
            if(res instanceof Error){
                return AppToast({message:res.message,isSuccess:false})
            }
            setConveniences(res.conveniences)
        } catch (e) {
        }
    }

    useEffect(() => {
        fetchConv().then()
    }, [])


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitCreate = async (event:any) =>{
        event.preventDefault();

        if(event.target.elements.name.value.trim().length ===0 || event.target.elements.code.value.trim().length ===0){
            return
        }

        const res = await service.convenience.create({
            name: event.target.elements.name.value,
            order:Number(event.target.elements.order.value) ,
            code:event.target.elements.code.value,
        } as IConvenienceCreatePayload)

        if(res instanceof Error){
            return AppToast({message:res.message,isSuccess:false})
        }
        fetchConv().then()
        handleClose()
    }

    return (

        <div style={{marginTop: 112}}>
            <Box style={{display:'flex', justifyContent:'space-between', marginLeft:60,marginRight:60,marginBottom:12,alignItems:'center'}}>
                <h2>Nội thất có sẵn</h2>
                <Button variant={'contained'} style={{backgroundColor:green[400]}} onClick={handleOpen}>Thêm nội thất</Button>
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

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={submitCreate}>
                        <TextField
                            label="Name"
                            defaultValue={""}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name={"name"}
                        />
                        <TextField
                            label="Order"
                            defaultValue={""}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type={"number"}
                            name={"order"}
                        />
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel>Code</InputLabel>
                            <Select name={"code"} label="Code">
                                {
                                    constant.Value.convenienceCode.map((item)=>{
                                        return <MenuItem value={item}>{item}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">
                            Thêm
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Convenience;