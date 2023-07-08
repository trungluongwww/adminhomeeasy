const convenienceCode = [
    "washing_machine",
    "motorbike",
    "air_condition",
    "window_closed_variant",
    "television",
    "bed",
    "toilet",
    "fridge",
    "beekeeper",
    "clock",
    "wifi",
    "air_filter",
    "sofa_single",
    "desk"
]

const roomStatus = {
    active: "active",
    inactive: "inactive",
    banned: "banned",
    all: ["active", "inactive", "banned"],
}

const roomType =  {
    apartment: "apartment",
        house: "house",
        room: "room",
        share: "share",
        all: ["apartment", "house", "room", "share"],
}

const roomTypeObjects = [
    {
        key: roomType.room,
        value: "Phòng trọ",
        isDefault: true,
    },
    {
        key: roomType.apartment,
        value: "Căn hộ",
        isDefault: false,
    },
    {
        key: roomType.house,
        value: "Nhà",
        isDefault: false,
    },
    {
        key: roomType.share,
        value: "Ở ghép",
        isDefault: false,
    },
]

const value = {
    convenienceCode,
    roomStatus,
    roomTypeObjects,
}

export default value;