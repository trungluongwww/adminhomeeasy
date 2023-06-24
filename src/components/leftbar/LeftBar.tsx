import React, {useEffect, useState} from 'react';

import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    ListItemSecondaryAction
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import HouseIcon from '@mui/icons-material/House';
import {styled} from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import {Link, useLocation} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
const MyComponent = styled('div')({
    marginTop: 50,
    backgroundColor: '#212121',
    color: "#ffffffa6",
    width: '250px',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
});

const TurnRight = () => {
    return <div style={{position: 'absolute', right: 8}}>
        <KeyboardArrowRightIcon/>
    </div>
}

enum ItemLeftBar {
    DashBoard,
    Convenience,
    Room,
    User

}

const LeftBar = () => {
    const [selectedItem, setSelectedItem] = useState<ItemLeftBar>(ItemLeftBar.DashBoard);

    const handleItemClick = (item: ItemLeftBar) => {
        setSelectedItem(item);
    };

    const location = useLocation()

    useEffect(() => {
        const currentPath = window.location.pathname;

        if (currentPath.startsWith('/convenience') ){
            setSelectedItem(ItemLeftBar.Convenience)
        }else if(currentPath.startsWith('/room')){
            setSelectedItem(ItemLeftBar.Room)
        }else if(currentPath.startsWith('/user')){
            setSelectedItem(ItemLeftBar.User)
        }else if(currentPath.startsWith('/')){
            console.log("dashboard")
            setSelectedItem(ItemLeftBar.DashBoard)
        }




    }, [location]);

    return (
        <MyComponent>
            <List>
                <ListItemButton component={Link} to={'/'} style={{position: 'relative'}}
                                onClick={() => handleItemClick(ItemLeftBar.DashBoard)}>
                    <ListItemIcon style={{color: selectedItem == ItemLeftBar.DashBoard ? 'white' : '#ffffffa6'}}>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"
                                  style={{color: selectedItem == ItemLeftBar.DashBoard ? 'white' : '#ffffffa6'}}/>
                    <div style={{position: 'absolute', right: 8}}>
                        {selectedItem == ItemLeftBar.DashBoard && <KeyboardArrowRightIcon
                            style={{color: 'white'}}/>}
                    </div>
                </ListItemButton>
                <ListItemButton component={Link} to={'/convenience'} style={{position: 'relative'}}
                                onClick={() => handleItemClick(ItemLeftBar.Convenience)}>
                    <ListItemIcon style={{color: selectedItem == ItemLeftBar.Convenience ? 'white' : '#ffffffa6'}}>
                        <LocalConvenienceStoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Thiết lặp nội thất"
                                  style={{color: selectedItem == ItemLeftBar.Convenience ? 'white' : '#ffffffa6'}}/>
                    <div style={{position: 'absolute', right: 8}}>
                        {selectedItem == ItemLeftBar.Convenience && <KeyboardArrowRightIcon style={{color: 'white'}}/>}
                    </div>
                </ListItemButton>
                <ListItemButton component={Link} to={'/user'} style={{position: 'relative'}}
                                onClick={() => handleItemClick(ItemLeftBar.User)}>
                    <ListItemIcon style={{color: selectedItem == ItemLeftBar.User ? 'white' : '#ffffffa6'}}>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Người dùng"
                                  style={{color: selectedItem == ItemLeftBar.User ? 'white' : '#ffffffa6'}}/>
                    <div style={{position: 'absolute', right: 8}}>
                        {selectedItem == ItemLeftBar.User && <KeyboardArrowRightIcon style={{color: 'white'}}/>}
                    </div>
                </ListItemButton>
                <ListItemButton component={Link} to={'/room'} style={{position: 'relative'}}
                                onClick={() => handleItemClick(ItemLeftBar.Room)}>
                    <ListItemIcon style={{color: selectedItem == ItemLeftBar.Room ? 'white' : '#ffffffa6'}}>
                        <HouseIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Danh sách phòng"
                                  style={{color: selectedItem == ItemLeftBar.Room ? 'white' : '#ffffffa6'}}/>
                    <div style={{position: 'absolute', right: 8}}>
                        {selectedItem == ItemLeftBar.Room && <KeyboardArrowRightIcon
                            style={{color: 'white'}}/>}
                    </div>
                </ListItemButton>
            </List>
        </MyComponent>
    );
};

export default LeftBar;
