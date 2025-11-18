import styles from "./LabelList.module.css";

type LabelProps = {
    name: string;
};

const labels = ["MADE", "NEW 5%", "오늘출발", "BEST 30", "오늘 뭐 입지?", "ALL"];

const LabelList = ({name}: LabelProps) => {
    return(
        <div className={styles.labels}>
            {labels.map((item)=>{
                const isActive = item === name;

                return(
                    <button
                        key={item}
                        className={isActive ? styles.active : styles.basic}>{item}</button>
                )
            })}
        </div>
    );
};

export default LabelList;