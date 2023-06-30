import axiosClient from "./axios";


export default {
    getALl:  async () =>{
        return await axiosClient.get(`/locations/provinces`)
    }
}