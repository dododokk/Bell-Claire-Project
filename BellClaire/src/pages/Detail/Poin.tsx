import styles from "./Detail.module.css";
import main from "../../assets/Detail/Poin/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Poin/withItem1.svg";
import withItem2 from "../../assets/Detail/Poin/withItem2.svg";
import withItem3 from "../../assets/Detail/Poin/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Poin/sub1.svg";
import sub2 from "../../assets/Detail/Poin/sub2.svg";
import sub3 from "../../assets/Detail/Poin/sub3.svg";
import sub4 from "../../assets/Detail/Poin/sub4.svg";
import sub5 from "../../assets/Detail/Poin/sub5.svg";
import sub6 from "../../assets/Detail/Poin/sub6.svg";
import sub7 from "../../assets/Detail/Poin/sub7.svg";
import sub8 from "../../assets/Detail/Poin/sub8.svg";
import sub9 from "../../assets/Detail/Poin/sub9.svg";
import sub10 from "../../assets/Detail/Poin/sub10.svg";
import sub11 from "../../assets/Detail/Poin/sub11.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Poin/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 73 },
    { text: "포장이 꼼꼼해요", percent: 66 },
    { text: "비싼만큼 가치가 있어요", percent: 31 },
];

const Poin = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>포인리본라인 셔츠</p>
                        <p className={styles.price}>64,000원</p>
                        <span className={styles.explanation}>
                            - 사랑스러움과 편안함을 가득 담은 포인리본라인 셔츠<br />
                            - 부드러운 폴리 레이온 혼방 소재
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["pink"]} />
                        <Option title="size" options={["s", "m", "l"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[러블리] 메이플 언발 OPS" price={35000} img={withItem1} />
                <WithItem title="젤린 소프트 캉캉 미니 SK" price={29800} img={withItem2} />
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
                <img src={sub5} alt="사진" />
                <img src={sub6} alt="사진" />
                <img src={sub7} alt="사진" />
                <img src={sub8} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub9} alt="사진" />
                    <img src={sub10} alt="사진" />
                </div>
                <img src={sub11} alt="사진" />
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

export default Poin;