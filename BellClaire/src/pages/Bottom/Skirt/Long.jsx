import { useNavigate } from "react-router-dom";
import styles from "./Long.module.css";
import Header from "../../../components/Header/Header";
import LabelList from "../../../components/MainMenu/LabelList";
import Product from "../../../components/MainMenu/Product";
import bottomLabel from '../../../assets/bottomLogo.svg';

const labels = ["Long", "Mini"];

const Long = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={()=>navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; <span onClick={()=>navigate('/bottom')} style={{ cursor: "pointer" }}>BOTTOM</span> &gt; <span onClick={()=>navigate('/skirt')} style={{ cursor: "pointer" }}>Skirt</span> &gt; Long &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Long</span>
                    <span className={styles.productNum}>4 product</span>
                </div>
            </div>
            <LabelList labels={labels} name="Long" />
            <Product label="Long" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Long;