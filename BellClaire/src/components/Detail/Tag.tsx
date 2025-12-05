import styles from "./Tag.module.css";

type TagProps = {
  title: string;
};

const Tag = ({title}: TagProps) => {
    return(
        <div className={styles.title}>{title}</div>
    );
}

export default Tag;