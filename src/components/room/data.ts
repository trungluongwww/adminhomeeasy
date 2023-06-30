import {IRoomResponse, IUserResponse} from "../../interface/response";

const rooms:Array<IRoomResponse> =  [
    {
        "id": "6495678ffe20a48bfe1c26ce",
        "name": "phòng trọ cao cấp chú 4",
        "description": "💥 CHo thuê phòng trọ khu vực Hoà khánh💥\n\n📍 Địa chỉ: k127/12 Đồng Kè, Hoà Khánh Bắc, Liên Chiểu.\n⭐️ Phòng trọ sạch sẽ, có gác lửng, có cửa sổ thoáng mát.\n⭐️ phòng có bếp, Wifi, tolet riêng, có sân phơi.\n⭐️ Gần chợ Hoà Khánh, trường đh Bách Khoa, cao đẳng kt kế hoạch, đh sư phạm.\n⭐️ Khu vực an ninh tốt, Có camera an ninh, sân để xe rộng rãi.\n⭐️ Phòng có thể ở gia đình \n⭐️ Giờ giấc tự do, không chung chủ\n⭐️ Giá phòng: 2tr\nLh: 0982517505( chị phương )",
        "rentPerMonth": 2000000,
        "deposit": 500000,
        "squareMetre": 42,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d0fd",
            "name": "Quận Liên Chiểu",
            "code": "1530",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315b0",
            "name": "Phường Hòa Khánh Nam",
            "code": "40504",
            "districtId": "6415bd0dfef66ec1cca5d0fd",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "999 Vạn Xuân",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:36:15.107Z"),
        "updatedAt": new Date("2023-06-23T16:36:15.107Z"),
        "files": [
            {
                "id": "6495678ffe20a48bfe1c26d0",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512971918CMxn-FB_IMG_1687504558491.jpg",
                    "name": "photo1687512971918CMxn-FB_IMG_1687504558491_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 540,
                    "originName": "FB_IMG_1687504558491.jpg"
                },
                "createdAt": new Date("2023-06-23T16:36:15.109Z")
            },
            {
                "id": "6495678ffe20a48bfe1c26cf",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875129718866nJo-FB_IMG_1687504556321.jpg",
                    "name": "photo16875129718866nJo-FB_IMG_1687504556321_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 540,
                    "originName": "FB_IMG_1687504556321.jpg"
                },
                "createdAt": new Date("2023-06-23T16:36:15.109Z")
            }
        ],
        "owner": {
            "id": "649564fafe20a48bfe1c26b4",
            "name": "Trung Lương",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "6495668afe20a48bfe1c26c6",
        "name": "Phòng Chú Tư ",
        "description": "🏠 PHÒNG BAN CÔNG THOÁNG MÁT 🏠\n 💵:1.x00.000đ\n • Có máy giặt 🩱\n • Giờ giấc tự do 🕔\n • Camera an ninh\n • Được nấu ăn🍜🥘\n • Toilet riêng trong phòng\n • Địa chỉ: 58/43 Ngô Thì Nhậm (gần Đại Học Bách Khoa, Đại học Sư Phạm, Đại học Duy Tân, Cao đằng thương mại…) \n\n☎️ or zalo: 0387370664",
        "rentPerMonth": 1800000,
        "deposit": 50000,
        "squareMetre": 12,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d0fd",
            "name": "Quận Liên Chiểu",
            "code": "1530",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315b0",
            "name": "Phường Hòa Khánh Nam",
            "code": "40504",
            "districtId": "6415bd0dfef66ec1cca5d0fd",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "34 TÔN ĐỨC THẮNG",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:31:54.388Z"),
        "updatedAt": new Date("2023-06-23T16:31:54.388Z"),
        "files": [
            {
                "id": "6495668afe20a48bfe1c26c7",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo168751271332112Vo-FB_IMG_1687504830009.jpg",
                    "name": "photo168751271332112Vo-FB_IMG_1687504830009_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504830009.jpg"
                },
                "createdAt": new Date("2023-06-23T16:31:54.391Z")
            },
            {
                "id": "6495668afe20a48bfe1c26c8",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512713579qShP-FB_IMG_1687504834625.jpg",
                    "name": "photo1687512713579qShP-FB_IMG_1687504834625_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504834625.jpg"
                },
                "createdAt": new Date("2023-06-23T16:31:54.391Z")
            }
        ],
        "owner": {
            "id": "649564fafe20a48bfe1c26b4",
            "name": "Trung Lương",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "64956605fe20a48bfe1c26bd",
        "name": "Phòng trọ Bách Khoa Đà Nẵng",
        "description": "🏠 PHÒNG TRỌ GIÁ RẺ\n   800k\n• WC riêng, có chỗ để xe, phơi đồ, camera an ninh\n• Giờ giấc tự do.\n• Điện: 3k2/ số\n• Nước 30k/ người\n• Địa chỉ: 58/43 Ngô Thì Nhậm, Hoà Khánh Nam \n• Gần Đại học Bách Khoa, Đại học Sư Phạm, Đại học Duy Tân, Đại học thể dục thể thao, Cao đẳng Thương Mại, KCN Hoà Khánh\n☎️0328230203 hoặc ib",
        "rentPerMonth": 800000,
        "deposit": 500000,
        "squareMetre": 12,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d0fd",
            "name": "Quận Liên Chiểu",
            "code": "1530",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315b1",
            "name": "Phường Hòa Hiệp Nam",
            "code": "40502",
            "districtId": "6415bd0dfef66ec1cca5d0fd",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "44 Ngô Thị Nhậm",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:29:41.970Z"),
        "updatedAt": new Date("2023-06-23T16:29:41.970Z"),
        "files": [
            {
                "id": "64956605fe20a48bfe1c26bf",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512580178iMbk-FB_IMG_1685252189810.jpg",
                    "name": "photo1687512580178iMbk-FB_IMG_1685252189810_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1685252189810.jpg"
                },
                "createdAt": new Date("2023-06-23T16:29:41.974Z")
            },
            {
                "id": "64956605fe20a48bfe1c26be",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512580110YBOG-FB_IMG_1685252183957.jpg",
                    "name": "photo1687512580110YBOG-FB_IMG_1685252183957_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1685252183957.jpg"
                },
                "createdAt": new Date("2023-06-23T16:29:41.974Z")
            }
        ],
        "owner": {
            "id": "649564fafe20a48bfe1c26b4",
            "name": "Trung Lương",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "649563e2fe20a48bfe1c26a5",
        "name": "Phòng trọ cô Thi",
        "description": "💥 CHO THUÊ CĂN HỘ MINI GIÁ RẺ (không chung chủ)💥\n\n🏡 123A Tô Hiến Thành, Sơn Trà, Đà Nẵng ( gần cây xăng Nguyễn Văn Thoại)\n✔️ Nằm ở khu đông cư, tuyến phố du lịch, cách biển Mỹ Khê 650m, cách chợ An Hải Đông 1,2km. \n\n✔️ Phòng đã được trang bị: \n- Giường nệm, tủ quần áo, bàn làm việc.\n- Tủ bếp, kệ chén inox, 1 bếp từ, bồn rửa chén bát. \n- Tủ lạnh mini \n- Máy điều hoà\n- Thang máy, Free Wifi, có camera giám sát.\n- Có chỗ để xe, có máy giặt. \n- Nhà vệ sinh khép kín\n- Phòng đều có cửa sổ, cửa kính thoáng mát\n\n💰Giá từ 3.500.000 đến 4.000.000 ( điện 3.500/ chữ, nước 50.000/ người/ tháng)\n\n☎️ Liên hệ xem ",
        "rentPerMonth": 3500000,
        "deposit": 500000,
        "squareMetre": 40,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d101",
            "name": "Quận Sơn Trà",
            "code": "1528",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315cf",
            "name": "Phường Phước Mỹ",
            "code": "40306",
            "districtId": "6415bd0dfef66ec1cca5d101",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "143 Tô Hiến Thành",
        "type": {
            "value": "Căn hộ",
            "key": "apartment"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:20:34.759Z"),
        "updatedAt": new Date("2023-06-23T16:20:34.759Z"),
        "files": [
            {
                "id": "649563e2fe20a48bfe1c26a7",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512031062FngF-FB_IMG_1687504767922.jpg",
                    "name": "photo1687512031062FngF-FB_IMG_1687504767922_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 540,
                    "originName": "FB_IMG_1687504767922.jpg"
                },
                "createdAt": new Date("2023-06-23T16:20:34.762Z")
            },
            {
                "id": "649563e2fe20a48bfe1c26a6",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687512031046cyvh-FB_IMG_1687504810135.jpg",
                    "name": "photo1687512031046cyvh-FB_IMG_1687504810135_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504810135.jpg"
                },
                "createdAt": new Date("2023-06-23T16:20:34.762Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "649560f4824ed4167abd1965",
        "name": "PHÒNG TRỌ SIÊU RẺ",
        "description": "phòng trọ siêu rẻ cho sinh viên\nở tối đa 2 người",
        "rentPerMonth": 1000000,
        "deposit": 200000,
        "squareMetre": 10,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d100",
            "name": "Quận Hải Châu",
            "code": "1526",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315c9",
            "name": "Phường Hải Châu  I",
            "code": "40103",
            "districtId": "6415bd0dfef66ec1cca5d100",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "101 Lê Lợi",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:08:04.342Z"),
        "updatedAt": new Date("2023-06-23T16:08:04.342Z"),
        "files": [
            {
                "id": "649560f4824ed4167abd1967",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687511282873R38v-FB_IMG_1687504698520.jpg",
                    "name": "photo1687511282873R38v-FB_IMG_1687504698520_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504698520.jpg"
                },
                "createdAt": new Date("2023-06-23T16:08:04.347Z")
            },
            {
                "id": "649560f4824ed4167abd1966",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687511282775fmgq-FB_IMG_1687504695854.jpg",
                    "name": "photo1687511282775fmgq-FB_IMG_1687504695854_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504695854.jpg"
                },
                "createdAt": new Date("2023-06-23T16:08:04.347Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "6495604b824ed4167abd195d",
        "name": "PHÒNG TRỌ GẦN ĐẠI HỌC KINH TẾ",
        "description": "TÌM NGƯỜI THUÊ\nYêu cầu là sinh viên, giới tính Nam\nỞ sạch sẽ, miến phí tiền nước\nĐiện 15k/ 1 chữ\nỞ tối đa 3 người",
        "rentPerMonth": 2000000,
        "deposit": 500000,
        "squareMetre": 18,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d103",
            "name": "Quận Ngũ Hành Sơn",
            "code": "1529",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315d5",
            "name": "Phường Mỹ An",
            "code": "40404",
            "districtId": "6415bd0dfef66ec1cca5d103",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "88 Ngũ Hành Sơn",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T16:05:15.990Z"),
        "updatedAt": new Date("2023-06-23T16:05:15.990Z"),
        "files": [
            {
                "id": "6495604b824ed4167abd195f",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875111145839Smm-FB_IMG_1687504686017.jpg",
                    "name": "photo16875111145839Smm-FB_IMG_1687504686017_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504686017.jpg"
                },
                "createdAt": new Date("2023-06-23T16:05:15.992Z")
            },
            {
                "id": "6495604b824ed4167abd195e",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687511114531p66F-FB_IMG_1687504682021.jpg",
                    "name": "photo1687511114531p66F-FB_IMG_1687504682021_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504682021.jpg"
                },
                "createdAt": new Date("2023-06-23T16:05:15.992Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "64955f08824ed4167abd194f",
        "name": "Căn Hộ Cao Cấp Quỳnh's house",
        "description": "💚💚💚CĂN HỘ CAO CẤP 💚💚💚\nCó thang máy \nỞ tối đa 4 người \nChỗ để xe rộng rãi thoải mái\nKhông giới hạn thời gian ra vào\nPhòng có khóa vân tay",
        "rentPerMonth": 4500000,
        "deposit": 1000000,
        "squareMetre": 35,
        "province": {
            "id": "6415b5b93f1b06c9140b134e",
            "name": "Hà Nội",
            "code": "201",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d127",
            "name": "Quận Cầu Giấy",
            "code": "1485",
            "provinceId": "6415b5b93f1b06c9140b134e",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d317dc",
            "name": "Phường Nghĩa Đô",
            "code": "1A0604",
            "districtId": "6415bd0dfef66ec1cca5d127",
            "createdAt": new Date("2023-04-26T17:03:01.730Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.730Z")
        },
        "address": "102 Lý Thái Tổ",
        "type": {
            "value": "Căn hộ",
            "key": "apartment"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T15:59:52.909Z"),
        "updatedAt": new Date("2023-06-23T15:59:52.909Z"),
        "files": [
            {
                "id": "64955f08824ed4167abd1950",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687510790613PEFn-FB_IMG_1687504825987.jpg",
                    "name": "photo1687510790613PEFn-FB_IMG_1687504825987_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 720,
                    "originName": "FB_IMG_1687504825987.jpg"
                },
                "createdAt": new Date("2023-06-23T15:59:52.914Z")
            },
            {
                "id": "64955f08824ed4167abd1952",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875107906687M6N-FB_IMG_1687504805217.jpg",
                    "name": "photo16875107906687M6N-FB_IMG_1687504805217_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504805217.jpg"
                },
                "createdAt": new Date("2023-06-23T15:59:52.914Z")
            },
            {
                "id": "64955f08824ed4167abd1951",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687510790649NkeU-FB_IMG_1687504810135.jpg",
                    "name": "photo1687510790649NkeU-FB_IMG_1687504810135_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504810135.jpg"
                },
                "createdAt": new Date("2023-06-23T15:59:52.914Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "649550a306823f2dfd078528",
        "name": "Tìm bạn nữ ở ghép ",
        "description": "Cần tìm người ở ghép\nyêu cầu: giới tính NỮ, ở sạch sẽ, ngăn nấp gọn gàng.\nTiền phòng 3 triệu chia đôi, điện nước chia đôi",
        "rentPerMonth": 1500000,
        "deposit": 0,
        "squareMetre": 25,
        "province": {
            "id": "6415b5b93f1b06c9140b134d",
            "name": "Hồ Chí Minh",
            "code": "202",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d10d",
            "name": "Thành Phố Thủ Đức",
            "code": "3695",
            "provinceId": "6415b5b93f1b06c9140b134d",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d31656",
            "name": "Phường Thủ Thiêm",
            "code": "90750",
            "districtId": "6415bd0dfef66ec1cca5d10d",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "13 Lê Thánh Tông",
        "type": {
            "value": "Tìm người ở ghép",
            "key": "share"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T14:58:27.284Z"),
        "updatedAt": new Date("2023-06-23T14:58:27.284Z"),
        "files": [
            {
                "id": "649550a306823f2dfd07852a",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687507103943DHuy-FB_IMG_1687504561305.jpg",
                    "name": "photo1687507103943DHuy-FB_IMG_1687504561305_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504561305.jpg"
                },
                "createdAt": new Date("2023-06-23T14:58:27.288Z")
            },
            {
                "id": "649550a306823f2dfd078529",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875071039172oRv-FB_IMG_1687504593217.jpg",
                    "name": "photo16875071039172oRv-FB_IMG_1687504593217_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 540,
                    "originName": "FB_IMG_1687504593217.jpg"
                },
                "createdAt": new Date("2023-06-23T14:58:27.288Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "64954f4406823f2dfd07851f",
        "name": "PHÒNG TRỌ GẦN ĐẠI HỌC BÁCH KHOA",
        "description": "Chỉ cho sinh viên trường Đại học Bách Khoa\nYêu cầu: ý thức chung, sạch sẽ ngăn nắp, không gây ồn ào làm phiền các phòng xung quanh",
        "rentPerMonth": 1500000,
        "deposit": 500000,
        "squareMetre": 15,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d0fd",
            "name": "Quận Liên Chiểu",
            "code": "1530",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315ae",
            "name": "Phường Hòa Khánh Bắc",
            "code": "40503",
            "districtId": "6415bd0dfef66ec1cca5d0fd",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "63 Ngô Sỹ Liên",
        "type": {
            "value": "Phòng trọ",
            "key": "room"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T14:52:36.410Z"),
        "updatedAt": new Date("2023-06-23T14:52:36.410Z"),
        "files": [
            {
                "id": "64954f4406823f2dfd078520",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875067530197ZZc-FB_IMG_1687504451409.jpg",
                    "name": "photo16875067530197ZZc-FB_IMG_1687504451409_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504451409.jpg"
                },
                "createdAt": new Date("2023-06-23T14:52:36.413Z")
            },
            {
                "id": "64954f4406823f2dfd078521",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687506753041JLB3-FB_IMG_1687504477965.jpg",
                    "name": "photo1687506753041JLB3-FB_IMG_1687504477965_720_720.jpg",
                    "type": "photo",
                    "width": 720,
                    "height": 540,
                    "originName": "FB_IMG_1687504477965.jpg"
                },
                "createdAt": new Date("2023-06-23T14:52:36.413Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    },
    {
        "id": "64954e3f06823f2dfd078511",
        "name": "NHÀ MẶT TIỀN ĐƯỜNG VÕ NGUYÊN GIÁP",
        "description": "Nhà cho thuê nguyên căn\n👌Nội thất đầy đủ, chỉ cần dọn vào ở\n👌2 Tầng, 3 phòng ngủ, 1 nhà bếp, 2 nhà vệ sinh.\n\nYÊU CẦU ĐÓNG TIỀN ĐẦU MỖI THÁNG",
        "rentPerMonth": 15000000,
        "deposit": 2000000,
        "squareMetre": 78,
        "province": {
            "id": "6415b5b93f1b06c9140b134c",
            "name": "Đà Nẵng",
            "code": "203",
            "createdAt": new Date("2023-04-26T17:03:00.978Z"),
            "updatedAt": new Date("2023-04-26T17:03:00.978Z")
        },
        "district": {
            "id": "6415bd0dfef66ec1cca5d101",
            "name": "Quận Sơn Trà",
            "code": "1528",
            "provinceId": "6415b5b93f1b06c9140b134c",
            "createdAt": new Date("2023-04-26T17:03:01.004Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.004Z")
        },
        "ward": {
            "id": "6417a98bc733158791d315ce",
            "name": "Phường Mân Thái",
            "code": "40304",
            "districtId": "6415bd0dfef66ec1cca5d101",
            "createdAt": new Date("2023-04-26T17:03:01.697Z"),
            "updatedAt": new Date("2023-04-26T17:03:01.697Z")
        },
        "address": "12 Võ Nguyên Giáp",
        "type": {
            "value": "Toàn bộ nhà ở",
            "key": "house"
        },
        "status": {
            "value": "Đang tìm người thuê",
            "key": "active"
        },
        "createdAt": new Date("2023-06-23T14:48:15.525Z"),
        "updatedAt": new Date("2023-06-23T14:48:15.525Z"),
        "files": [
            {
                "id": "64954e3f06823f2dfd078513",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687506482552PEMD-FB_IMG_1687504445558.jpg",
                    "name": "photo1687506482552PEMD-FB_IMG_1687504445558_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504445558.jpg"
                },
                "createdAt": new Date("2023-06-23T14:48:15.534Z")
            },
            {
                "id": "64954e3f06823f2dfd078514",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo1687506483573mg5t-FB_IMG_1687504448735.jpg",
                    "name": "photo1687506483573mg5t-FB_IMG_1687504448735_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504448735.jpg"
                },
                "createdAt": new Date("2023-06-23T14:48:15.534Z")
            },
            {
                "id": "64954e3f06823f2dfd078512",
                "info": {
                    "url": "https://capstoneprojectdut.s3.ap-southeast-1.amazonaws.com/photo16875064759626gvR-FB_IMG_1687504443042.jpg",
                    "name": "photo16875064759626gvR-FB_IMG_1687504443042_720_720.jpg",
                    "type": "photo",
                    "width": 540,
                    "height": 720,
                    "originName": "FB_IMG_1687504443042.jpg"
                },
                "createdAt": new Date("2023-06-23T14:48:15.534Z")
            }
        ],
        "owner": {
            "id": "649545232ab494cf32c7c0a1",
            "name": "Cosy Stay",
            "avatar": ""
        } as IUserResponse,
        "conveniences": []
    }
]

export default rooms;