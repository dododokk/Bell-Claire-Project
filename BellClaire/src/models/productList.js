import made1 from "../assets/Made/made1.svg";
import made2 from "../assets/Made/made2.svg";
import made3 from "../assets/Made/made3.svg";
import made4 from "../assets/Made/made4.svg";
import new1 from "../assets/New/new1.svg";
import new2 from "../assets/New/new2.svg";
import new3 from "../assets/New/new3.svg";
import new4 from "../assets/New/new4.svg";

const productList = [
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
    }
]

export default productList;