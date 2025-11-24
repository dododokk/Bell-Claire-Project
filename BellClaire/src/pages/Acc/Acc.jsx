import styles from "./Acc.module.css";
import Header from "../../components/Header/Header";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const labels = ["TOP", "BOTTOM", "DRESS", "OUTER", "SHOES", "ACC"];

const Acc = () => {
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}>ALL &gt;&gt; Acc &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Acc</span>
                    <span className={styles.productNum}>4 product</span>
                </div>
            </div>
            <LabelList labels={labels} name="ACC" />
            <Product label="Acc" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Acc;