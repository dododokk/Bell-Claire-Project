import styles from "./Today.module.css";
import Header from "../../components/Header/Header";
import cover from "../../assets/Today/cover.svg";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const Today = () => {
    return (
        <>
            <Header />
            <div className={styles.imgWrapper}>
                <img src={cover} alt="new cover image" className={styles.coverImage} />
            </div>
            <div className={styles.labelName}>
                <span className={styles.label}>오늘출발</span>
                <span className={styles.productNum}>4 product</span>
            </div>
            <LabelList name="오늘출발" />
            <Product label="오늘출발" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo}/>
        </>
    )
}

export default Today;