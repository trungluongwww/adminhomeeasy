import {IConvenienceResponse} from "../../interface/response";
import {Box, Typography} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ({convenience }:{convenience: IConvenienceResponse}){
    return (
        <Box sx={style}>
            <Typography variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography  sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
    )
}