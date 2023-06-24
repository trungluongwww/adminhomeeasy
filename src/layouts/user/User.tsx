import {Avatar, Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ro} from "date-fns/locale";
import {IUserResponse} from "../../interface/response";
import UserRowItem from "../../components/user/UserRowItem";

const componentStyle = {
    padding: 24,
}

const fontTitle = {
    fontSize: '16px',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.9)'
}

const table= {
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}

const user : Array<IUserResponse> = [
    {
        id:'wejq8923kawe23',
        name:'Trung luong',
        phone:'0704074926',
        email:'trung@gmail.com'
    } as IUserResponse,
    {
        id:'wejq8923kawe23',
        name:'Trung luong',
        phone:'0704074926',
        email:'trung@gmail.com'
    } as IUserResponse,
    {
        id:'wejq8923kawe23',
        name:'Trung luong',
        phone:'0704074926',
        email:'trung@gmail.com'
    } as IUserResponse,
    {
        id:'wejq8923kawe23',
        name:'Trung luong',
        phone:'0704074926',
        email:'trung@gmail.com'
    } as IUserResponse,
]

const User= ()=>{
    return (
        <div>
        <Box style={componentStyle}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={2} md={2}></Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Paper style={table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={fontTitle}>ID</TableCell>
                                    <TableCell style={fontTitle}>Người dùng</TableCell>
                                    <TableCell style={fontTitle}>Số điện thoại</TableCell>
                                    <TableCell style={fontTitle}>Email</TableCell>
                                    <TableCell align={'center'} style={fontTitle}>Xem chi tiết</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map((e)=>{
                                    return <UserRowItem user={e}/>
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
}

export default User;