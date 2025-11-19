import styles from "./Made.module.css";
import Header from "../../components/Header/Header";
import cover from "../../assets/Made/cover.svg";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const Made = () => {
    return (
        <>
            <Header />
            <div className={styles.imgWrapper}>
                <img src={cover} alt="made cover image" className={styles.coverImage} />
            </div>
            <div className={styles.labelName}>
                <span className={styles.label}>MADE</span>
                <span className={styles.productNum}>4 product</span>
            </div>
            <LabelList name="MADE" />
            <Product label="MADE" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo}/>
        </>
    )
}

export default Made;