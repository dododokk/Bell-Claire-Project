import styles from "./Detail.module.css";
import main from "../../assets/Detail/Socks/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Socks/withItem1.svg";
import withItem2 from "../../assets/Detail/Socks/withItem2.svg";
import withItem3 from "../../assets/Detail/Socks/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Socks/sub1.svg";
import sub2 from "../../assets/Detail/Socks/sub2.svg";
import sub3 from "../../assets/Detail/Socks/sub3.svg";
import sub4 from "../../assets/Detail/Socks/sub4.svg";
import sub5 from "../../assets/Detail/Socks/sub5.svg";
import sub6 from "../../assets/Detail/Socks/sub6.svg";
import sub7 from "../../assets/Detail/Socks/sub7.svg";
import sub8 from "../../assets/Detail/Socks/sub8.svg";
import sub9 from "../../assets/Detail/Socks/sub9.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Socks/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "옷이 튼튼해요", percent: 36 },
    { text: "비싼만큼 가치가 있어요", percent: 18 },
];

const Socks = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>Preto twinkle high knee socks</p>
                        <p className={styles.price}>3,900원</p>
                        <span className={styles.explanation}>
                            -글리터 원사를 믹스해 예쁘게 반짝이는 양말<br />
                            -5가지의 다양한 색상<br />
                            -하루종일 쾌적한 부드러운 소재<br />
                            -부드러운 촉감의 면과 땀이 나도 잘 마르는 폴리 원단 혼방
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["silver", "black"]} />
                        <Option title="size" options={["free"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="반 하이 원턱 하프 PT" price={36000} img={withItem1} />
                <WithItem title={`[MADE]\nfiancée organza rich long sk`} price={57000} img={withItem2} />
                <WithItem title="포인리본라인 셔츠" price={64000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <div className={styles.imgSet}>
                    <img src={sub1} alt="사진" />
                    <img src={sub2} alt="사진" />
                </div>
                <img src={sub3} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub4} alt="사진" />
                    <img src={sub5} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub6} alt="사진" />
                    <img src={sub7} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub8} alt="사진" />
                    <img src={sub9} alt="사진" />
                </div>
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

export default Socks;