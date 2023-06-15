
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

export type {
    //auth
    ILoginPayload,

    // convenience
    IConvenienceCreatePayload,
    IConvenienceUpdatePayload
}