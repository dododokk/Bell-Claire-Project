import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import mainPhoto from "../../assets/Home/mainPhoto.svg";
import background from "../../assets/Home/background.svg";
import item from "../../assets/Home/item.svg";
import store from "../../assets/Home/store.svg";
import call from "../../assets/Home/call.svg";
import car from "../../assets/Home/car.svg";
import bottomLabel from "../../assets/bottomLogo.svg";

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.mainImage}>
                <img src={mainPhoto} alt="메인사진" />
            </div>
            <div className={styles.outerWrapper}>
                <div className={styles.barWrapper}>
                    <img src={background} alt="배경사진" className={styles.background} />
                    <div className={styles.intro}>
                        <p>2026 s/s BELL CLAIR</p>
                        <p className={styles.pinkText}>bell clair🩷</p>
                        <p>Mon & Thu 5PM — New Update
                            <br />Enjoy 5% off
                            <br />new arrivals for 3 days!
                            <br /><br />Shop New In
                        </p>
                    </div>
                </div>
                <div className={styles.itemsWrapper}>
                    <p className={styles.introduction}>벨 클레르 베스트 아이템 지금 만나보세요 🖤</p>
                    <div className={styles.items}>
                        <img src={item} alt="아이템 사진" className={styles.itemsImage} />
                    </div>
                </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.storeWrapper}>
                <img src={store} alt="매장사진" className={styles.store} />
                <div className={styles.info}>
                    <p className={styles.title}>BELL CLAIR 본점 소개 안내</p>
                    <p className={styles.basic}>
                        서울 성동구 성수동2가 322-13 1F<br />
                        영업시간 10:00 ~ 22:00
                    </p>
                    <p className={styles.storeInfo}>
                        <img src={call} alt="전화" />
                        02-345-6789
                    </p>
                    <p className={styles.storeInfo}>
                        <img src={car} alt="주차불가" />
                        주차 불가
                    </p>
                    <p className={styles.storeFeature}>부드러운 곡선과 투명한 빛으로 완성된 공간, Bell Clair</p>
                    <p className={styles.storeDetails}>
                        - 부드러운 곡선과 파스텔 핑크 컬러가 조화를 이루며, 브랜드가 추구하는 우아함과 사랑스러움을 공간 전체에 담아냄
                        <br /><br/>
                        - 매일 오늘 뭐입지 컨셉의 옷 DP
                    </p>
                    <p className={styles.lastMent}>동화 속 한 장면처럼 고객이 매장에 들어서는 순간부터 특별한 설렘 제공</p>
                </div>
            </div>
            <hr className={styles.hr}/>
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Home;