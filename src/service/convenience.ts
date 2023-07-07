import {IConvenienceCreatePayload, IConvenienceUpdatePayload} from "../interface/request";
import axiosClient from "./axios";
import {ICommonUpsertResponse, IConvenienceAllResponse} from "../interface/response";


export default {
    getAll: async ():Promise<IConvenienceAllResponse|Error> => {
        try {
            const res = await axiosClient.get('/conveniences')
            return res.data.data as IConvenienceAllResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },
    create: async (data: IConvenienceCreatePayload): Promise<ICommonUpsertResponse | Error>  => {
        try {
            const res = await axiosClient.post("/conveniences", data)
            return res.data as ICommonUpsertResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },
    update: async (id: string, data: IConvenienceUpdatePayload): Promise<ICommonUpsertResponse | Error> => {
        try {
            const res = await axiosClient.put(`/conveniences/${id}`, data)
            return res.data as ICommonUpsertResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    }
}
