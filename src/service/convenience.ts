import {IConvenienceCreatePayload, IConvenienceUpdatePayload, ILoginPayload} from "../interface/request";
import axiosClient from "./axios";


export default {
    getAll : async () =>{
        return await axiosClient.get('/conveniences')
    },
    create: async (data:IConvenienceCreatePayload) =>{
        return await axiosClient.post("/conveniences",data)
    },
    update: async (id:string, data: IConvenienceUpdatePayload) =>{
        return await axiosClient.put(`/conveniences/${id}`,data)
    }
}
