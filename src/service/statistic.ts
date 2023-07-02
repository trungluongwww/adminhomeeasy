import axiosClient from "./axios";
import {
    ICommonUpsertResponse,
    IStatisticCommonTodayResponse,
    IStatisticRoomResponse,
    IStatisticUserResponse,
} from "../interface/response";


export default {
    getCommon: async (): Promise<IStatisticCommonTodayResponse | Error> => {
        try {
            const res = await axiosClient.get(`/statistics`)
            return res.data.data as IStatisticCommonTodayResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },

    getRoom: async (): Promise<IStatisticRoomResponse | Error> => {
        try {
            const res = await axiosClient.get(`/statistics/room`)
            return res.data.data as IStatisticRoomResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },

    getUser: async (): Promise<IStatisticUserResponse | Error> => {
        try {
            const res = await axiosClient.get(`/statistics/user`)
            return res.data.data as IStatisticUserResponse
        } catch (e: any) {
            return Error(e.response.data.message)
        }
    },
}