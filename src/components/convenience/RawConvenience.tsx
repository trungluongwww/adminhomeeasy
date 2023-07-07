import {
    Box, Button,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TableCell,
    TableRow,
    TextField,
} from "@mui/material";
import React, {useState} from "react";
import {Edit} from "@mui/icons-material";
import {styled} from "@mui/system";
import {IConvenienceResponse} from "../../interface/response";
import constant from "../../constant";
import service from "../../service";
import {IConvenienceUpdatePayload} from "../../interface/request";
import AppToast from "../../utils/AppToast";
import DateTimeUtils from "../../utils/DateTimeUtils";

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

export default function ({convenience, refresh}: {convenience:IConvenienceResponse,refresh:Function}) {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    // edit
    const [name, setName] = useState(convenience.name);
    const [order, setOrder] = useState(convenience.order);
    const [code, setCode] = useState(convenience.code);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(Number(event.target.value));
    };

    const handleCodeChange = (event: any) => {
        setCode(event.target.value as string);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await service.convenience.update(convenience.id,{
            code:code,
            order:order,
            name:name,
        } as IConvenienceUpdatePayload)

        if (res instanceof  Error){
            setCode(convenience.code)
            return AppToast({message:res.message, isSuccess:false})
        }else{
            refresh();
            handleClose();
            return AppToast({message:res.message, isSuccess:true})
        }

    };

    return (
        <StyledTableRow key={convenience.id}>
            <TableCell sx={font} align={'center'} component="th" scope="row">
                {convenience.order}
            </TableCell>
            <TableCell sx={font} align="center">{convenience.name}</TableCell>
            <TableCell sx={font} align="center">{convenience.code}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(convenience.createdAt)}</TableCell>
            <TableCell sx={font} align="center">{DateTimeUtils.formatDate(convenience.updatedAt)}</TableCell>
            <TableCell sx={font} align="center"><StyledEdit  onClick={handleOpen}/></TableCell>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={handleNameChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Order"
                            value={order}
                            onChange={handleOrderChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type={"number"}
                        />
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel>Code</InputLabel>
                            <Select value={code} onChange={handleCodeChange} label="Code">
                                {
                                    constant.Value.convenienceCode.map((item)=>{
                                        return <MenuItem value={item}>{item}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">
                            Cập nhập
                        </Button>
                    </form>
                </Box>
            </Modal>
        </StyledTableRow>
    )
}