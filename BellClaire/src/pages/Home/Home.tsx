import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import mainPhoto from "../../assets/Home/mainPhoto.svg";

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.mainImage}>
                <img src={mainPhoto} alt="메인사진" />
                {/* <img src={mainPhoto2} alt="메인사진" /> */}
            </div>
        </>
    )
}

export default Home;