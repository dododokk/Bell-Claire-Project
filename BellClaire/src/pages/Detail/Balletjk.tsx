import styles from "./Detail.module.css";
import main from "../../assets/Detail/Balletjk/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Balletjk/withItem1.svg";
import withItem2 from "../../assets/Detail/Balletjk/withItem2.svg";
import withItem3 from "../../assets/Detail/Balletjk/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Balletjk/sub1.svg";
import sub2 from "../../assets/Detail/Balletjk/sub2.svg";
import sub3 from "../../assets/Detail/Balletjk/sub3.svg";
import sub4 from "../../assets/Detail/Balletjk/sub4.svg";
import sub5 from "../../assets/Detail/Balletjk/sub5.svg";
import sub6 from "../../assets/Detail/Balletjk/sub6.svg";
import sub7 from "../../assets/Detail/Balletjk/sub7.svg";
import sub8 from "../../assets/Detail/Balletjk/sub8.svg";
import sub9 from "../../assets/Detail/Balletjk/sub9.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Balletjk/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "상품이 화면과 유사해요", percent: 86 },
    { text: "비싼만큼 가치가 있어요", percent: 50 },
];

const Balletjk = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>발레코어 스트링 데일리 시크 JK</p>
                        <p className={styles.price}>64,000원</p>
                        <span className={styles.explanation}>
                            - 넉넉한 여유 핏과 부드러운 스판 소재<br />
                            - 허리 스트링으로 실루엣을 다양하게 조절하며 연출
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["black", "charcoal"]} />
                        <Option title="size" options={["s", "m", "l", "xl"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="젤린 소프트 캉캉 미니 SK" price={29800} img={withItem1} />
                <WithItem title="마들렌 레이스 트레이닝 쇼트 pt" price={15800} img={withItem2} />
                <WithItem title={`[MADE/발레코어]\n벨르 세틴 아일렛 TOP`} price={44000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <div className={styles.imgSet}>
                    <div className={styles.colorDec}>
                        <img src={sub1} alt="사진" />
                        <span>CHARCOAL</span>
                    </div>
                    <div className={styles.colorDec}>
                        <img src={sub2} alt="사진" />
                        <span>BLACK</span>
                    </div>
                </div>
                <img src={sub3} alt="사진" />
                <img src={sub4} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub5} alt="사진" />
                    <img src={sub6} alt="사진" />
                </div>
                <img src={sub7} alt="사진" />
                <img src={sub8} alt="사진" />
                <img src={sub9} alt="사진" />
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
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Balletjk;