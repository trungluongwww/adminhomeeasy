
interface ILoginPayload {
    email:string,
    password:string
}

interface IConvenienceCreatePayload {
    name: string;
    code: string;
    order: number;
}


interface IConvenienceUpdatePayload {
    name: string;
    code: string;
    order: number;
}

interface IUserAllQuery {
    page: number;
    provinceId: string;
    wardId: string;
    districtId: string;
    searchText: string;
}

export type {
    //auth
    ILoginPayload,

    // convenience
    IConvenienceCreatePayload,
    IConvenienceUpdatePayload,

    // user
    IUserAllQuery,
}