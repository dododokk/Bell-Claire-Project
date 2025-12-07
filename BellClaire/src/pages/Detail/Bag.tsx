import styles from "./Detail.module.css";
import main from "../../assets/Detail/Bag/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Bag/withitem1.svg";
import withItem2 from "../../assets/Detail/Bag/withitem2.svg";
import withItem3 from "../../assets/Detail/Bag/withitem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Bag/sub1.svg";
import sub2 from "../../assets/Detail/Bag/sub2.svg";
import sub3 from "../../assets/Detail/Bag/sub3.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Bag/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "다양한 코디가 가능해요", percent: 36 },
    { text: "비싼만큼 가치가 있어요", percent: 28 },
];

const Bag = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>보부상 투웨이 빅사이즈 숄더백</p>
                        <p className={styles.price}>35,900원</p>
                        <span className={styles.explanation}>
                            -유니크한 무드<br />
                            -부드럽게 구겨진듯한 텍스처<br />
                            -탈부착 가능한 크로스끈 디테일<br />
                            -여행 캐리어 손잡이 걸칠 수 있는 디자인<br />
                            -넉넉한 수납력<br />
                            -심플하면서 포인트가 되는 디자인<br />
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["ivory"]} />
                        <Option title="size" options={["one"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="모아 시스루 결 CD" price={21700} img={withItem1} />
                <WithItem title="치크 벌룬 체크 숏 PT" price={18000} img={withItem2} />
                <WithItem title="화이트 오브 플럼 롱 SK" price={38000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <img src={sub1} alt="사진" />
                <img src={sub2} alt="사진" />
                <img src={sub3} alt="사진" />
            </div>
            <Tag title="GUIDE" />
            <div className={styles.guideWrapper}>
                <img src={guide} alt="가이드라인" />
            </div>
            <Tag title="REVIEW" />
            <Review items={reviewItems} />
            <Tag title="Q&A" />
            <div className={styles.qnaWrapper}>
                <img src={qna} alt="QnA" />
            </div>
        </>
    )
}

export default Bag;