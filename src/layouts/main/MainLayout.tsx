import Navbar from "../../components/appbar/AppBar";
import LeftBar from "../../components/leftbar/LeftBar";
import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";
import DashBoard from "../dashboard/DashBoard";
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