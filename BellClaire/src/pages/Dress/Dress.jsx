import styles from "./Dress.module.css";
import Header from "../../components/Header/Header";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const labels = ["TOP", "BOTTOM", "DRESS", "OUTER", "SHOES", "ACC"];

const Dress = () => {
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}>ALL &gt;&gt; Dress &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Dress</span>
                    <span className={styles.productNum}>4 product</span>
                </div>
            </div>
            <LabelList labels={labels} name="DRESS" />
            <Product label="Dress" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Dress;