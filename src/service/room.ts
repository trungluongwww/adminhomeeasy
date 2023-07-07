import axiosClient from "./axios";
import {
    IRoomAllQuery, IRoomAllResponse,
    ICommonUpsertResponse,
    IRoomDetailResponse,
} from "../interface/response";


const room = {
    getAll: async (params: IRoomAllQuery): Promise<IRoomAllResponse | Error> => {
        try {

            const res = await axiosClient.get(`/rooms`, {params: params})

            return res.data.data as IRoomAllResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },
    getDetail: async (id: string): Promise<IRoomDetailResponse | Error> => {
        try {

            const res = await axiosClient.get(`/rooms/${id}`)

            return res.data.data as IRoomDetailResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },
    changeStatus: async (id: string, status: "banned" | "active" | "inactive"): Promise<ICommonUpsertResponse | Error> => {
        try {

            const res = await axiosClient.patch(`/rooms/${id}/status`, {status: status})

            return res.data as ICommonUpsertResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    }
}

export default room;