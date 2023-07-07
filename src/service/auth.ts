import axiosClient from "./axios";
import {ILoginPayload} from "../interface/request";



const auth =  {
    login : async (data:ILoginPayload) =>{
        return await axiosClient.post(`/auth/login`,data)
    },
    profile: async ()=>{
        return await axiosClient.get(`/auth/me`)
    }
}

export default auth;