import { useNavigate } from "react-router-dom";
import styles from "./Skirt.module.css";
import Header from "../../../components/Header/Header";
import LabelList from "../../../components/MainMenu/LabelList";
import Product from "../../../components/MainMenu/Product";
import bottomLabel from "../../../assets/bottomLogo.svg";

const labels = ["Long", "Mini"];

const Skirt = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={()=>navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; <span onClick={()=>navigate('/bottom')} style={{ cursor: "pointer" }}>BOTTOM</span> &gt; Skirt &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Skirt</span>
                    <span className={styles.productNum}>8 product</span>
                </div>
            </div>
            <LabelList labels={labels} />
            <Product label="Long" />
            <Product label="Mini"/>
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Skirt;