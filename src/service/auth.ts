import axiosClient from "./axios";
import {ILoginPayload} from "../interface/request";


export default {
    login : async (data:ILoginPayload) =>{
        return await axiosClient.post(`/users/login`,data)
    },
    profile: async ()=>{
        return await axiosClient.get(`/users/me`)
    }
}

