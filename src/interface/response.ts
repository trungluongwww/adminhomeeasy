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

interface IUserAllResponse {
    users: Array<IUserResponse>;
    total: number;
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

// common
interface ICommonKeyValue {
    key: string;
    value: string;
    option?: string;
    isDefault?: boolean;
}

// Room
interface IRoomResponse {
    id: string;
    name: string;
    owner: IUserResponse;
    description: string;
    rentPerMonth: number;
    deposit: number;
    squareMetre: number;
    province: IProvinceResponse;
    district: IDistrictResponse;
    ward: IWardResponse;
    address: string;
    status: ICommonKeyValue;
    type: ICommonKeyValue;
    createdAt: Date;
    updatedAt: Date;
    files: Array<IRoomFileResponse>;

    conveniences: Array<IConvenienceResponse>;
}

interface IRoomAllQuery {
    provinceId: string;
    districtId: string;
    wardId: string;
    limit: number;
    page: number;
    keyword: string;
    orderField: string;
    orderValue: "ASC" | "DESC";
    type: string;
    maxPrice: number;
}

interface IRoomFileResponse {
    id: string;
    info: IUploadSingleFileResponse;
    createdAt: Date;
}

interface IUploadSingleFileResponse {
    name: string;
    originName: string;
    width: number;
    height: number;
    type: string;
    url: string;
    thumbnail?: IUploadThumbnailResponse;
}

interface IUploadThumbnailResponse {
    name: string;
    originName: string;
    width: number;
    height: number;
    url: string;
}

interface IRoomAllResponse {
    rooms: Array<IRoomResponse>;
    total: number;
    pageToken: string;
}

interface ICommonUpsertResponse {
    data:any
    message:string
}

interface IRoomDetailResponse {
    room: IRoomResponse;
}


interface IStatisticCommonTodayResponse {
    totalRegister: number;
    totalAccess: number;
    totalMessage: number;
    totalRoomCreated: number;
    totalConversationCreated: number;
    totalRoomFavorites: number;
}

interface IStatisticRoomResponse {
    total: number;
    totalActive: number;
    totalInactive: number;
    totalBanned: number;
    totalPostToday: number;
}

interface IStatisticUserResponse {
    total: number;
    totalSeeker: number;
    totalLessor: number;
    totalRegisterToday: number;
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
    IUserAllResponse,

    // convenience
    IConvenienceAllResponse,
    IConvenienceResponse,

    // room
    IRoomResponse,
    IRoomAllQuery,
    IRoomAllResponse,
    ICommonUpsertResponse,
    IRoomDetailResponse,

    // statistic
    IStatisticCommonTodayResponse,
    IStatisticRoomResponse,
    IStatisticUserResponse,
}