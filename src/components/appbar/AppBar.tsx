import React, {useEffect, useRef, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
import {styled} from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    position: 'relative'
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
    boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px'
})

const IconButtonUser = styled(IconButton)({
    marginLeft: '5px',

})

const Navbar = () => {
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const handleUsernameClick = () => {
        setShowLogoutButton(!showLogoutButton);
    };

    return (
        <MainAppBar>
            <Row>
                <Logo src={'http://localhost:3000/logo512.png'} alt="Logo"/>
                <Typography variant="h6">HOME EASY</Typography>
            </Row>
            <RightSection onClick={handleUsernameClick}>
                <Typography variant="subtitle1" >
                    Tên Người Dùng
                </Typography>
                <IconButtonUser >
                    <ExpandMoreIcon style={{color:'white'}} />
                </IconButtonUser>
                {showLogoutButton && (
                        <LogoutButton color="inherit">
                            Đăng xuất
                        </LogoutButton>
                )}

            </RightSection>
        </MainAppBar>
    );
};

export default Navbar;