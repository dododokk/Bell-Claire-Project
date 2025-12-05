import styles from "./Review.module.css";

type ReviewItem = {
    text: string;
    percent: number;
};

type ReviewProps = {
    items: ReviewItem[];
};

const Review = ({ items }: ReviewProps) => {
    return (
        <div className={styles.reviewWrapper}>
            <p className={styles.summaryTitle}>상품기획 요약</p>

            {items.map((item) => (
                <div className={styles.row} key={item.text}>
                    <div className={styles.barWrapper}>

                        <div
                            className={styles.barFill}
                            style={{ width: `${item.percent}%` }}
                        >
                            <span className={styles.barText}>“{item.text}”</span>
                        </div>

                        <span className={styles.percent}>{item.percent}%</span>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Review;
