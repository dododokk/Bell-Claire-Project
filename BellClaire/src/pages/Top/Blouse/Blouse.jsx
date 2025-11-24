import { useNavigate } from "react-router-dom";
import styles from "./Blouse.module.css";
import Header from "../../../components/Header/Header";
import LabelList from "../../../components/MainMenu/LabelList";
import Product from "../../../components/MainMenu/Product";
import bottomLabel from '../../../assets/bottomLogo.svg';

const labels = ["T-shirt", "Blouse/Shirt"];

const Blouse = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={()=>navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; <span onClick={()=>navigate('/top')} style={{ cursor: "pointer" }}>TOP</span> &gt; Blouse/Shirt &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Blouse/Shirt</span>
                    <span className={styles.productNum}>4 product</span>
                </div>
            </div>
            <LabelList labels={labels} name="Blouse/Shirt" />
            <Product label="Blouse/Shirt" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Blouse;