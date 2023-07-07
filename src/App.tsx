import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DashBoard from "./layouts/dashboard/DashBoard";
import MainLayout from "./layouts/main/MainLayout";
import PrivateRouter from "./utils/PrivateRouter";
import Login from "./layouts/login/Login";
import Convenience from "./layouts/convenience/Convenience";
import Room from "./layouts/room/Room";
import {accountData} from "./context/DataProvider";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import User from "./layouts/user/User";

const App = () => {
    const [login, setLogin] = useState(false)
    const {account} = useContext(accountData)
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<PrivateRouter user={account}/>}>
                        <Route element={<MainLayout/>} path="/">
                            <Route path="/" element={<DashBoard/>}/>
                            <Route path="/convenience" element={<Convenience/>}/>
                            <Route path="/room" element={<Room/>}/>
                            <Route path="/user" element={<User/>}/>
                        </Route>
                    </Route>
                    <Route element={<Login setLogin={setLogin}/>} path="/login"/>
                </Routes>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default App;
