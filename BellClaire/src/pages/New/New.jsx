import styles from "./New.module.css";
import Header from "../../components/Header/Header";
import cover from "../../assets/New/cover.svg";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const New = () => {
    return (
        <>
            <Header />
            <div className={styles.imgWrapper}>
                <img src={cover} alt="new cover image" className={styles.coverImage} />
            </div>
            <div className={styles.labelName}>
                <span className={styles.label}>NEW 5%</span>
                <span className={styles.productNum}>4 product</span>
            </div>
            <LabelList name="NEW 5%" />
            <Product label="NEW 5%" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo}/>
        </>
    )
}

export default New;