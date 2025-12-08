import styles from "./Product.module.css";
import productList from "../../models/productList";
import { useNavigate } from "react-router-dom";

type ProductProps = {
    label: string;
};

const Product = ({ label }: ProductProps) => {
    const navigate = useNavigate();
    const found = productList.find((product) => product.label === label);

    const handleClick = (itemName: string) => {
        if (itemName === "메이플 언발 OPS") {
            navigate("/ops");
        }
        else if (itemName === "Gossip girl slim eyelet shirt (tie set)") {
            navigate("/gossip");
        }
        else if (itemName === "fiancée organza rich long sk") {
            navigate("/organza");
        }
        else if (itemName === "셔츠 쉬폰 포인 뷔스티에 OPS") {
            navigate("/set");
        }
        else if (itemName === "벨르 세틴 아일렛 TOP") {
            navigate("/satin");
        }
        else if (itemName === "Preto twinkle high knee socks") {
            navigate("/socks");
        }
        else if (itemName === "디픈 쉬머 새틴 스트랩 SK") {
            navigate("/balletsk");
        }
        else if (itemName === "보부상 투웨이 빅사이즈 숄더백") {
            navigate("/bag");
        }
        else if (itemName === "발레코어 스트링 데일리 시크 JK") {
            navigate("/balletjk");
        }
        else if (itemName === "머스트 여리핏 썸머 니트 가디건") {
            navigate("/summer");
        }
        else if (itemName === "포인리본라인 셔츠") {
            navigate("/poin");
        }
        else if (itemName === "로슈아 셔링 프릴 나일론 후드 바람막이 JP") {
            navigate("/jp");
        }
        else if (itemName === "빈트 랩 플리츠 버튼 맥시 SL") {
            navigate("/sl");
        }
        else if (itemName === "데일리 스트랩 통굽 구두"){
            navigate("/heel");
        }
        else if (itemName === "벨르 세틴 아일렛 TOP 코디set"){
            navigate("/cody");
        }
    }
    return (
        <div className={styles.productWrapper}>
            {found?.items.map((item) => (
                <div className={styles.productItem} onClick={() => handleClick(item.name)}>
                    <img src={item.image} alt={item.name} />
                    <p className={styles.itemFeature}>{item.feature}</p>
                    <p className={styles.itemName}>{item.name}</p>
                    {item.sale ? (
                        <div className={styles.saleWrapper}>
                            <span className={styles.sale}>{item.sale}</span>
                            <span className={styles.price}>{item.price.toLocaleString()}원</span>
                            <span className={styles.salePrice}>{item.salePrice?.toLocaleString()}원</span>
                        </div>
                    ) : (
                        <p className={styles.itemPrice}>{item.price.toLocaleString()}원</p>
                    )}
                </div>
            ))
            }
        </div >
    )
}

export default Product;