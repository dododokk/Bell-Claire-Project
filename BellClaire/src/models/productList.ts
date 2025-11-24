import made1 from "../assets/Made/made1.svg";
import made2 from "../assets/Made/made2.svg";
import made3 from "../assets/Made/made3.svg";
import made4 from "../assets/Made/made4.svg";
import new1 from "../assets/New/new1.svg";
import new2 from "../assets/New/new2.svg";
import new3 from "../assets/New/new3.svg";
import new4 from "../assets/New/new4.svg";
import today1 from "../assets/Today/today1.svg";
import today2 from "../assets/Today/today2.svg";
import today3 from "../assets/Today/today3.svg";
import today4 from "../assets/Today/today4.svg";
import best1 from "../assets/Best/best1.svg";
import best2 from "../assets/Best/best2.svg";
import best3 from "../assets/Best/best3.svg";
import best4 from "../assets/Best/best4.svg";
import ootd1 from "../assets/OOTD/ootd1.svg";
import ootd2 from "../assets/OOTD/ootd2.svg";
import ootd3 from "../assets/OOTD/ootd3.svg";
import ootd4 from "../assets/OOTD/ootd4.svg";
import tshirt1 from "../assets/Tshirt/tshirt1.svg";
import tshirt2 from "../assets/Tshirt/tshirt2.svg";
import tshirt3 from "../assets/Tshirt/tshirt3.svg";
import tshirt4 from "../assets/Tshirt/tshirt4.svg";
import blouse1 from "../assets/Blouse/blouse1.svg";
import blouse2 from "../assets/Blouse/blouse2.svg";
import blouse3 from "../assets/Blouse/blouse3.svg";
import blouse4 from "../assets/Blouse/blouse4.svg";
import acc1 from "../assets/Acc/acc1.svg";
import acc2 from "../assets/Acc/acc2.svg";
import acc3 from "../assets/Acc/acc3.svg";
import acc4 from "../assets/Acc/acc4.svg";
import dress1 from "../assets/Dress/dress1.svg";
import dress2 from "../assets/Dress/dress2.svg";
import dress3 from "../assets/Dress/dress3.svg";
import dress4 from "../assets/Dress/dress4.svg";

export type ProductItem = {
    id: number;
    image: string;
    feature: string;
    name: string;
    price: number;
    sale?: string;
    salePrice?: number;
}

export type ProductCategory = {
    id: number;
    label: string;
    productNum: number;
    items: ProductItem[];
}

const productList: ProductCategory[] = [
    {
        id: 1,
        label: "MADE",
        productNum: 4,
        items: [
            {
                id: 1,
                image: made1,
                feature: "[MADE]",
                name: "fiancée organza rich long sk",
                price: 57000
            },
            {
                id: 2,
                image: made2,
                feature: "[MADE]",
                name: "fiancée satin & back eyelet top",
                price: 44000
            },
            {
                id: 3,
                image: made3,
                feature: "[MADE]",
                name: "Gossip girl slim eyelet shirt (tie set)",
                price: 79000
            },
            {
                id: 4,
                image: made4,
                feature: "[MADE / 벨르 PICK]",
                name: "셔츠 쉬폰 포인 뷔스티에 OPS",
                price: 59900
            },
        ]
    },
    {
        id: 2,
        label: "NEW 5%",
        productNum: 4,
        items: [
            {
                id: 1,
                image: new1,
                feature: "[러블리]",
                name: "메이플 언발 OPS",
                price: 35000
            },
            {
                id: 2,
                image: new2,
                feature: "[벨르 PICK]",
                name: "티그 드롭 포인 PT",
                price: 27900
            },
            {
                id: 3,
                image: new3,
                feature: "[벨르 PICK / 블러효과 ☁]",
                name: " 베비 슬림 소프트 오프 NT",
                price: 28900
            },
            {
                id: 4,
                image: new4,
                feature: "[발레코어]",
                name: "샤 포그 프릴 캉캉 sk",
                price: 25350
            },
        ]
    },
    {
        id: 3,
        label: "오늘출발",
        productNum: 4,
        items: [
            {
                id: 1,
                image: today1,
                feature: "[벨르 PICK / 블러효과 ☁]",
                name: "베비 슬림 소프트 오프 NT",
                price: 28900
            },
            {
                id: 2,
                image: today2,
                feature: "[들뜸zero]",
                name: "로라 원오프 슬랜더 TOP",
                price: 22000
            },
            {
                id: 3,
                image: today3,
                feature: "[수지니트]",
                name: "yes or no 글램 오프 NT",
                price: 79000
            },
            {
                id: 4,
                image: today4,
                feature: "[발레코어]",
                name: "샤 포그 프릴 캉캉 sk",
                price: 25350
            },
        ]
    },
    {
        id: 4,
        label: "BEST 30",
        productNum: 4,
        items: [
            {
                id: 1,
                image: best1,
                feature: "[MADE]",
                name: "fiancée organza rich long sk",
                price: 57000
            },
            {
                id: 2,
                image: best2,
                feature: "[벨르 PICK/스판]",
                name: "스웨이드 JP",
                price: 64000
            },
            {
                id: 3,
                image: best3,
                feature: "[벨르 PICK]",
                name: "나일론 리본 스트링 PT",
                price: 32000
            },
            {
                id: 4,
                image: best4,
                feature: "",
                name: "반 하이 원턱 하프 PT",
                price: 36000
            },
        ]
    },
    {
        id: 5,
        label: "오늘 뭐 입지?",
        productNum: 4,
        items: [
            {
                id: 1,
                image: ootd1,
                feature: "[오늘의 코디/벨르 PICK]",
                name: "벨르 세틴 아일렛 TOP 코디set",
                sale: "25%",
                price: 210000,
                salePrice: 157500
            },
            {
                id: 2,
                image: ootd2,
                feature: "[여리여리]",
                name: "모카 라떼 루즈 CD 코디set",
                sale: "20%",
                price: 140000,
                salePrice: 112000
            },
            {
                id: 3,
                image: ootd3,
                feature: "",
                name: "모던 프렙 셋업 JK 코디set",
                sale: "20%",
                price: 123000,
                salePrice: 99120
            },
            {
                id: 4,
                image: ootd4,
                feature: "",
                name: "히포 닷 라운드 니트 CD 코디set",
                sale: "20%",
                price: 110300,
                salePrice: 88240
            },
        ]
    },
    {
        id: 6,
        label: "T-shirt",
        productNum: 4,
        items: [
            {
                id: 1,
                image: tshirt1,
                feature: "[MADE/발레코어]",
                name: "벨르 세틴 아일렛 TOP",
                price: 44000
            },
            {
                id: 2,
                image: tshirt2,
                feature: "",
                name: "에트 여리핏 셔링반팔 TOP",
                price: 23000
            },
            {
                id: 3,
                image: tshirt3,
                feature: "",
                name: "twin dot 시스루 레이어 TOP",
                price: 39000
            },
            {
                id: 4,
                image: tshirt4,
                feature: "[발레코어🩰]",
                name: "롤링 딥 레이스 슬림 TOP",
                price: 59900
            },
        ]
    },
    {
        id: 7,
        label: "Blouse/Shirt",
        productNum: 4,
        items: [
            {
                id: 1,
                image: blouse1,
                feature: "",
                name: "포인리본라인 셔츠",
                price: 64000
            },
            {
                id: 2,
                image: blouse2,
                feature: "",
                name: "샐러드 인 라벨 시스루 BL",
                price: 41000
            },
            {
                id: 3,
                image: blouse3,
                feature: "[MADE]",
                name: "Gossip girl slim eyelet shirt (tie set)",
                price: 79000
            },
            {
                id: 4,
                image: blouse4,
                feature: "[MADE]",
                name: "shirt-pointed dress bustier set",
                price: 59900
            },
        ]
    },
    {
        id: 8,
        label: "Acc",
        productNum: 4,
        items: [
            {
                id: 1,
                image: acc1,
                feature: "",
                name: "Preto twinkle high knee socks",
                price: 3900
            },
            {
                id: 2,
                image: acc2,
                feature: "",
                name: "보부상 투웨이 빅사이즈 숄더백",
                price: 35900
            },
            {
                id: 3,
                image: acc3,
                feature: "",
                name: "에스닉 라운디 빈티지 벨트",
                price: 20000
            },
            {
                id: 4,
                image: acc4,
                feature: "",
                name: "핑크 스웨이드 보부상 호보백",
                price: 39900
            },
        ]
    },
    {
        id: 9,
        label: "Dress",
        productNum: 4,
        items: [
            {
                id: 1,
                image: dress1,
                feature: "[MADE/벨르 PICK]",
                name: "셔츠 쉬폰 포인 뷔스티에 OPS",
                price: 59900
            },
            {
                id: 2,
                image: dress2,
                feature: "[러블리]",
                name: "메이플 언발 OPS",
                price: 79000
            },
            {
                id: 3,
                image: dress3,
                feature: "",
                name: "헤이지 올 레이스 OPS",
                price: 59000
            },
            {
                id: 4,
                image: dress4,
                feature: "[여리여리/볼륨]",
                name: "칠링러브 슬림 OPS",
                price: 59900
            },
        ]
    },
]

export default productList;