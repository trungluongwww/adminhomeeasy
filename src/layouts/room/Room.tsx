import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputBase,
    InputLabel, MenuItem, OutlinedInput, Pagination,
    Paper,
    Select,
    Typography
} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Search} from "@mui/icons-material";
import TableRoom from "../../components/room/TableRoom";
import {ChangeEvent, useEffect, useState} from "react";
import {
    IDistrictResponse,
    IProvinceResponse, IRoomAllQuery,
    IRoomResponse,
    IUserResponse,
    IWardResponse
} from "../../interface/response";
import service from "../../service";
import AppToast from "../../utils/AppToast";

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
    const [rooms, setRooms] = useState<Array<IRoomResponse>>([])
    const [total, setTotal] = useState<number>(0)

    const [provinces, setProvinces] = useState<Array<IProvinceResponse>>([])
    const [districts, setDistricts] = useState<Array<IDistrictResponse>>([])
    const [wards, setWard] = useState<Array<IWardResponse>>([])

    const fetchProvinces = async () => {
        const res = await service.location.getProvinces()
        if (res instanceof Error) {
            return AppToast({message: res.message, isSuccess: false})
        }

        setProvinces(res.provinces)
    }

    const fetchDistricts = async (provinceId: string) => {
        const res = await service.location.getDistricts(provinceId)
        if (res instanceof Error) {
            return AppToast({message: res.message, isSuccess: false})
        }

        setDistricts(res.districts)
    }

    const fetchWards = async (districtId: string) => {
        const res = await service.location.getWards(districtId)
        if (res instanceof Error) {
            return AppToast({message: res.message, isSuccess: false})
        }

        setWard(res.wards)
    }

    const fetchRooms = async(page:number)=>{
        const res = await service.room.getAll({
            page: page,
        } as IRoomAllQuery)

        if (res instanceof Error) {
            return AppToast({message: res.message, isSuccess: false})
        }

        setTotal(res.total)
        setRooms(res.rooms)
    }

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    const handleProvinceChange = (event: any) => {
        if (event.target.value) {
            setWard([])
            setSelectedProvince(event.target.value);
            fetchDistricts(event.target.value).then();
        }
    };
    const handleDistrictChange = (event: any) => {
        if (event.target.value) {
            setSelectedDistrict(event.target.value);
            fetchWards(event.target.value).then();
        }
    };
    const handleWardChange = (event: any) => {
        if (event.target.value) {
            setSelectedWard(event.target.value);
        }
    };

    const handleChangePage = (event:ChangeEvent<unknown>,val:number) =>{
        fetchRooms(val-1).then()
    }

    useEffect(() => {
        fetchProvinces().then()
        fetchRooms(0).then()
    }, [])

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
                            value={selectedProvince}
                            input={<OutlinedInput label="Name"/>}
                            onChange={handleProvinceChange}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                            {provinces.map((province) => (
                                <MenuItem key={province.id} value={province.id}>
                                    {province.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2} alignSelf={'flex-end'}>
                    <FormControl sx={{width: '100%', marginTop: 4}}>
                        <InputLabel id="demo-single-name-label">Quận/Huyện</InputLabel>
                        <Select
                            labelId="demo-single-name-label"
                            id="demo-single-name"
                            value={selectedDistrict}
                            input={<OutlinedInput label="Name"/>}
                            onChange={handleDistrictChange}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                            {districts.map((district) => (
                                <MenuItem key={district.id} value={district.id}>
                                    {district.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={2} alignSelf={'flex-end'}>
                    <FormControl sx={{width: '100%', marginTop: 4}}>
                        <InputLabel id="demo-single-name-label">Phường/Xã</InputLabel>
                        <Select
                            labelId="demo-single-name-label"
                            id="demo-single-name"
                            value={selectedWard}
                            input={<OutlinedInput label="Name"/>}
                            onChange={handleWardChange}
                        >
                            <MenuItem value="">-- Không chọn --</MenuItem>
                            {wards.map((ward) => (
                                <MenuItem key={ward.id} value={ward.id}>
                                    {ward.name}
                                </MenuItem>
                            ))}
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
                <div style={{marginTop:12, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Pagination count={Math.floor(total/20)+1} onChange={handleChangePage} color="primary"/>
                </div>
            </Box>
        </Box>
    )
}

export default Room;