import { useNavigate } from "react-router-dom";
import styles from "./Outer.module.css";
import Header from "../../components/Header/Header";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const labels = ["Jacket", "Jumper", "Cardigan"];

const Outer = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={() => navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; Outer &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Outer</span>
                    <span className={styles.productNum}>12 product</span>
                </div>
            </div>
            <LabelList labels={labels} />
            <Product label="Jacket" />
            <Product label="Jumper" />
            <Product label="Cardigan" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Outer;