interface IProvinceResponse {
    id: string;
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IDistrictResponse {
    id: string;
    name: string;
    code: string;
    provinceId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IWardResponse {
    id: string;
    name: string;
    code: string;
    districtId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ILocationAllProvince {
    provinces: Array<IProvinceResponse>;
    total: number;
}

interface ILocationAllDistrict {
    districts: Array<IDistrictResponse>;
    total: number;
}

interface ILocationAllWard {
    wards: Array<IWardResponse>;
    total: number;
}

interface IUserResponse {
    id: string;
    phone: string;
    email: string;
    name: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    address: string;
    root: boolean;
    province?: IProvinceResponse;
    district?: IDistrictResponse;
    ward?: IWardResponse;
}

// convenience
interface IConvenienceAllResponse {
    conveniences: Array<IConvenienceResponse>;
}

interface IConvenienceResponse {
    id: string;
    name: string;
    code: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

export type {
    // location
    IProvinceResponse,
    IDistrictResponse,
    IWardResponse,
    ILocationAllProvince,
    ILocationAllDistrict,
    ILocationAllWard,

    // user
    IUserResponse,

    // convenience
    IConvenienceAllResponse,
    IConvenienceResponse,
}