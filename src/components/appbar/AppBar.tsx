import React, {useContext, useState} from 'react';
import {AppBar, Typography, Button, IconButton, Avatar} from '@mui/material';
import {styled} from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {accountData} from "../../context/DataProvider";
import {useNavigate} from "react-router-dom";



const MainAppBar = styled(AppBar)({
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    position: "fixed",
    backgroundColor:'#212121',
    boxShadow:'none',
})

const Logo = styled('img')({
    marginRight: '20px',
    height: '30px',
})

const RightSection = styled('div')({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    cursor:'pointer',
})

const Row = styled('div')({
    height: '50px',
    display: 'flex',
    alignItems: 'center'
})

const LogoutButton = styled(Button)({
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: '10px',
    color:'black',
    boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px',
    index:99,
    backgroundColor:"white"
})

const IconButtonUser = styled(IconButton)({
    marginLeft: '5px',

})

const Navbar = () => {
    const { account, setAccount } = useContext(accountData);
    const navigate = useNavigate()
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const handleUsernameClick = () => {
        setShowLogoutButton(!showLogoutButton);
    };

    const onLogout = () =>{
        setAccount({})
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <MainAppBar>
            <Row>
                <Logo src={`/logo_main.png`} alt="Logo" style={{width:50,height:50}}/>
                <Typography variant="h6">COZY STAY</Typography>
            </Row>
            <RightSection onClick={handleUsernameClick}>
                <Avatar style={{height:30,width:30, marginRight:8}} src={account.avatar}/>
                <Typography variant="subtitle1" >
                    {account.name}
                </Typography>
                <IconButtonUser >
                    <ExpandMoreIcon style={{color:'white'}} />
                </IconButtonUser>
                {showLogoutButton && (
                        <LogoutButton color="inherit" onClick={onLogout}>
                            Đăng xuất
                        </LogoutButton>
                )}

            </RightSection>
        </MainAppBar>
    );
};

export default Navbar;