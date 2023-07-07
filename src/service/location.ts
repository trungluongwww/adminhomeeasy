import {ILocationAllDistrict, ILocationAllProvince, ILocationAllWard} from "../interface/response";
import axiosClient from "./axios";


const location =  {
    getProvinces: async ():Promise<ILocationAllProvince|Error>=>{
        try{
            const res = await axiosClient.get("/locations/provinces")

            return res.data.data as ILocationAllProvince
        }catch (e:any){
            return Error(e.response.data.message)
        }
    },
    getDistricts: async (provinceId:String):Promise<ILocationAllDistrict|Error> =>{
        try{
            const res = await axiosClient.get(`/locations/districts`,{ params: { provinceId } })

            return res.data.data as ILocationAllDistrict
        }catch (e:any){
            return Error(e.response.data.message)
        }
    },

    getWards: async (districtId:String):Promise<ILocationAllWard|Error> =>{
        try{
            const res = await axiosClient.get(`/locations/wards`,{ params: { districtId } })

            return res.data.data as ILocationAllWard
        }catch (e:any){
            return Error(e.response.data.message)
        }
    },
}

export default location;