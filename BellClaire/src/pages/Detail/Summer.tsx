import styles from "./Detail.module.css";
import main from "../../assets/Detail/Summer/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Summer/withItem1.svg";
import withItem2 from "../../assets/Detail/Summer/withItem2.svg";
import withItem3 from "../../assets/Detail/Summer/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Summer/sub1.svg";
import sub2 from "../../assets/Detail/Summer/sub2.svg";
import sub3 from "../../assets/Detail/Summer/sub3.svg";
import sub4 from "../../assets/Detail/Summer/sub4.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Summer/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "옷이 튼튼해요", percent: 50 },
    { text: "비싼만큼 가치가 있어요", percent: 39 },
];

const Summer = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>머스트 여리핏 썸머 니트 가디건</p>
                        <p className={styles.price}>42,800원</p>
                        <span className={styles.explanation}>
                            - 여리여리 핏 완성<br />
                            -가볍게 걸쳐도 분위기 UP<br />
                            -데일리 & 데이트 룩 필수템
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["ivory"]} />
                        <Option title="size" options={["free"]} />
                        <button className={styles.button}>구매하기</button>
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="에스닉 라운디 빈티지 벨트" price={20000} img={withItem1} />
                <WithItem title={`[MADE/벨르 PICK]\n셔츠 쉬폰 포인 뷔스티에 OPS`} price={59900} img={withItem2} />
                <WithItem title={`[벨르 PICK/블러효과 ☁]\n베비 슬림 소프트 오프 NT`} price={28900} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <img src={sub1} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub2} alt="사진" />
                    <img src={sub3} alt="사진" />
                </div>
                <img src={sub4} alt="사진" />
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

export default Summer;