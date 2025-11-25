import { useNavigate } from "react-router-dom";
import styles from "./Jumper.module.css";
import Header from "../../../components/Header/Header";
import LabelList from "../../../components/MainMenu/LabelList";
import Product from "../../../components/MainMenu/Product";
import bottomLabel from '../../../assets/bottomLogo.svg';

const labels = ["Jacket", "Jumper", "Cardigan"];

const Jumper = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <p className={styles.route}><span onClick={()=>navigate('/all')} style={{ cursor: "pointer" }}>ALL</span> &gt;&gt; <span onClick={()=>navigate('/outer')} style={{ cursor: "pointer" }}>OUTER</span> &gt; Jumper &gt;</p>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>Jumper</span>
                    <span className={styles.productNum}>4 product</span>
                </div>
            </div>
            <LabelList labels={labels} name="Jumper" />
            <Product label="Jumper" />
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Jumper;