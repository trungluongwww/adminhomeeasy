import Navbar from "../../components/appbar/AppBar";
import LeftBar from "../../components/leftbar/LeftBar";
import {Outlet, } from "react-router-dom";
import React from "react";

const MainLayout = () => {
    return (
        <div className="app">
            <Navbar/>
            <LeftBar/>
            <div style={{marginLeft: 250, marginTop: 50}}>
                <Outlet/>
            </div>
        </div>
    )

}

export default MainLayout;