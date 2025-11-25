import { useNavigate } from "react-router-dom";
import styles from "./All.module.css";
import Header from "../components/Header/Header";
import LabelList from "../components/MainMenu/LabelList";
import Product from "../components/MainMenu/Product";
import bottomLabel from "../assets/bottomLogo.svg";

const labels = ["TOP", "BOTTOM", "DRESS", "OUTER", "SHOES", "ACC"];

const All = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.labelName}>
                <div className={styles.labelWrapper}>
                    <span className={styles.label}>All</span>
                    <span className={styles.productNum}>44 product</span>
                </div>
            </div>
            <LabelList labels={labels} />
            <Product label="T-shirt" />
            <Product label="Blouse/Shirt"/>
            <Product label="Pants"/>
            <Product label="Long"/>
            <Product label="Mini"/>
            <Product label="Dress"/>
            <Product label="Jacket"/>
            <Product label="Jumper"/>
            <Product label="Cardigan"/>
            <Product label="Shoes"/>
            <Product label="Acc"/>
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default All;