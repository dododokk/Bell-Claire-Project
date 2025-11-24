import styles from "./Ootd.module.css";
import Header from "../../components/Header/Header";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const labels = ["MADE", "NEW 5%", "오늘출발", "BEST 30", "오늘 뭐 입지?", "ALL"];

const Ootd = () => {
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <span className={styles.label}>오늘 뭐 입지?</span>
                <span className={styles.productNum}>4 product</span>
            </div>
            <LabelList labels={labels} name="오늘 뭐 입지?" />
            <Product label="오늘 뭐 입지?" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo}/>
        </>
    )
}

export default Ootd;