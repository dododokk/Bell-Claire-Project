import styles from "./Detail.module.css";
import main from "../../assets/Detail/Heel/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Heel/withItem1.svg";
import withItem2 from "../../assets/Detail/Heel/withItem2.svg";
import withItem3 from "../../assets/Detail/Heel/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Heel/sub1.svg";
import sub2 from "../../assets/Detail/Heel/sub2.svg";
import sub3 from "../../assets/Detail/Heel/sub3.svg";
import sub4 from "../../assets/Detail/Heel/sub4.svg";
import sub5 from "../../assets/Detail/Heel/sub5.svg";
import sub6 from "../../assets/Detail/Heel/sub6.svg";
import sub7 from "../../assets/Detail/Heel/sub7.svg";
import sub8 from "../../assets/Detail/Heel/sub8.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Heel/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 90 },
    { text: "포인트를 줄 수 있어요", percent: 68 },
    { text: "비싼만큼 가치가 있어요", percent: 48 },
];

const Heel = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>데일리 스트랩 통굽 구두</p>
                        <p className={styles.price}>54,000원</p>
                        <span className={styles.explanation}>
                            -탄탄한 통굽으로 안정감 있게 키 라인 업<br />
                            -안정감 있는 메리제인 스트랩 포인트<br />
                            -데일리 룩에도, 포멀 룩에도 매치 쉬움<br />
                            -둥근 앞코로 부담 없이 편하게 착용 가능
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["black"]} />
                        <Option title="size" options={["225", "230", "235", "240", "245", "250"]} />
                        <button className={styles.button}>구매하기</button>
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="치크 벌룬 체크 숏 PT" price={18000} img={withItem1} />
                <WithItem title="[벨르 PICK] 티그 드롭 포인 PT" price={27900} img={withItem2} />
                <WithItem title="[러블리] 슈가 화이트 프릴 SK화" price={33000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <img src={sub1} alt="사진" />
                <img src={sub2} alt="사진" />
                <img src={sub3} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub4} alt="사진" />
                    <img src={sub5} alt="사진" />
                </div>
                <img src={sub6} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub7} alt="사진" />
                    <img src={sub8} alt="사진" />
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
            <img src={bottomLabel} alt="Bell Clair 로고" className={styles.bottomLogo} />
        </>
    )
}

export default Heel;