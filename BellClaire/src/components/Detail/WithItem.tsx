import styles from "./WithItem.module.css";

type itemProps = {
    title: string;
    price: number;
    img: string;
}

const WithItem = ({title, price, img}:itemProps) => {
    return(
        <div className={styles.itemWrapper}>
            <img src={img} alt="상품 이미지" className={styles.itemImg}/>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price.toLocaleString()}</p>
        </div>
    )
}

export default WithItem;