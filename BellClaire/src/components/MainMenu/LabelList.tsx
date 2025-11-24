import { useNavigate } from "react-router-dom";
import styles from "./LabelList.module.css";

type LabelProps = {
    name: string;
    labels: string[];
};

const LabelList = ({ labels, name }: LabelProps) => {
    const navigate = useNavigate();
    const handleClick = (item: string) => {
        if (item === "MADE") navigate("/made");
        else if (item === "NEW 5%") navigate("/new");
        else if (item === "오늘출발") navigate("/today");
        else if (item === "BEST 30") navigate("/best");
        else if (item === "오늘 뭐 입지?") navigate("/ootd");
        else if (item === "T-shirt") navigate("/tshirt");
        else if (item === "Blouse/Shirt") navigate("/blouse");
        else if  (item === "ACC") navigate("/acc");
        else if (item === "DRESS") navigate("/dress");
        else if (item === "TOP") navigate("/top");
    }

    return (
        <div className={styles.labels}>
            {labels.map((item) => {
                const isActive = item === name;

                return (
                    <button
                        key={item}
                        onClick={() => handleClick(item)}
                        className={isActive ? styles.active : styles.basic}>{item}</button>
                )
            })}
        </div>
    );
};

export default LabelList;