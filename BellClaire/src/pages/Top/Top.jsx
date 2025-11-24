import { useNavigate } from "react-router-dom";
import styles from "./Top.module.css";
import Header from "../../components/Header/Header";
import LabelList from "../../components/MainMenu/LabelList";
import Product from "../../components/MainMenu/Product";
import bottomLabel from "../../assets/bottomLogo.svg";

const labels = ["T-shirt", "Blouse/Shirt"];

const Top = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={()=>navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; TOP &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Top</span>
                    <span className={styles.productNum}>8 product</span>
                </div>
            </div>
            <LabelList labels={labels} />
            <Product label="T-shirt" />
            <Product label="Blouse/Shirt"/>
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Top;