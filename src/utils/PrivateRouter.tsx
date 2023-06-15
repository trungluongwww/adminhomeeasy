import {Outlet,Navigate} from "react-router-dom";
import {IUserResponse} from "../interface/response";

interface IProps {
    user : IUserResponse
}

const PrivateRouter = (props:IProps) =>{
    return (
        props.user.id? <Outlet/> : <Navigate to={"/login"}/>
    )
}

export default PrivateRouter;