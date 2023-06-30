import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputBase,
    InputLabel, MenuItem, OutlinedInput,
    Paper,
    Select,
    Typography
} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Search} from "@mui/icons-material";
import TableRoom from "../../components/room/TableRoom";
import rooms from "../../components/room/data";
const searchComponent = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
    padding: '2px 4px',
}

const searchInputStyle = {
    marginLeft: 1,
    flex: 1,
}

const searchIconStyle = {
    padding: 10
}
const Room = () =>{
    return (
        <Box style={{maxWidth:'98%', boxSizing:'border-box'}}>
            <Box style={{width:"100%",borderBottom:`1px solid ${grey[200]}`}}>
                <Typography style={{color:grey[400],fontWeight:600,fontSize:14,padding:'8px 0px 8px 24px'}}>Phòng</Typography>
            </Box>
            <Box style={{padding:'24px 0 32px 12px',width:'100%'}}>
                <Typography variant={'h5'} style={{color:grey[900], fontWeight:'bold'}}>Danh dánh phòng</Typography>
            </Box>
            <Grid container spacing={2} style={{width: '100%',padding:12 }} justifyContent={'center'} alignItems={"flex-end"}>
                <Grid item xs={12} sm={12} md={3} alignSelf={'flex-end'}>
                    <Typography variant={'h6'}> Tìm kiếm</Typography>
                    <Paper style={searchComponent}>
                        <InputBase
                            style={searchInputStyle}
                            placeholder="Mã người dùng/Tên phòng"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <IconButton style={searchIconStyle} aria-label="search">
                            <Search/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4} md={2} alignSelf={'flex-end'}>
                    <FormControl sx={{width: '100%', marginTop: 4}}>
                        <InputLabel id="demo-single-name-label">Thành Phố/Tỉnh</InputLabel>
                        <Select
                            labelId="demo-single-name-label"
                            id="demo-single-name"
                            value={""}
                            input={<OutlinedInput label="Name"/>}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2} alignSelf={'flex-end'}>
                    <FormControl sx={{width: '100%', marginTop: 4}}>
                        <InputLabel id="demo-single-name-label">Quận/Huyện</InputLabel>
                        <Select
                            labelId="demo-single-name-label"
                            id="demo-single-name"
                            value={""}
                            input={<OutlinedInput label="Name"/>}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2} alignSelf={'flex-end'}>
                    <FormControl sx={{width: '100%', marginTop: 4}}>
                        <InputLabel id="demo-single-name-label">Phường/Xã</InputLabel>
                        <Select
                            labelId="demo-single-name-label"
                            id="demo-single-name"
                            value={""}
                            input={<OutlinedInput label="Name"/>}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={3} alignSelf={'flex-end'}>
                    <div>
                        <Button variant={'contained'}>Lọc</Button>
                    </div>
                </Grid>
            </Grid>
            <Box>
                <TableRoom rooms={rooms} total={rooms.length}/>
            </Box>
        </Box>
    )
}

export default Room;