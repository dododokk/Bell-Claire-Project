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