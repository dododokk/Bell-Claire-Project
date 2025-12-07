import styles from "./Detail.module.css";
import main from "../../assets/Detail/Satin/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Satin/withitem1.svg";
import withItem2 from "../../assets/Detail/Satin/withitem2.svg";
import withItem3 from "../../assets/Detail/Satin/withitem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Satin/sub1.svg";
import sub2 from "../../assets/Detail/Satin/sub2.svg";
import sub3 from "../../assets/Detail/Satin/sub3.svg";
import sub4 from "../../assets/Detail/Satin/sub4.svg";
import sub5 from "../../assets/Detail/Satin/sub5.svg";
import sub6 from "../../assets/Detail/Satin/sub6.svg";
import sub7 from "../../assets/Detail/Satin/sub7.svg";
import sub8 from "../../assets/Detail/Satin/sub8.svg";
import sub9 from "../../assets/Detail/Satin/sub9.svg";
import sub10 from "../../assets/Detail/Satin/sub10.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Satin/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "옷이 튼튼해요", percent: 82 },
    { text: "데일리로 입기 좋아요", percent: 61 },
];

const Satin = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[MADE/발레코어] 벨르 세틴 아일렛 TOP</p>
                        <p className={styles.price}>44,000원</p>
                        <span className={styles.explanation}>
                            - 고급스러운 엔틱무드의 fiancée satin & back eyelet top<br />
                            - 새틴 광택에 쉬어한 오간를 덧대어 신비로운 디테일<br />
                            - 스킨 or 이너 노출없이 꽈악 잡아주는 백 아일렛<br />
                            - 슬림한 상체라인 연출, 프론트 절개 detail<br />
                            - 탈/착용 이지한 사이드 풀 오픈 지퍼
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["pink", "yellow"]} />
                        <Option title="size" options={["free"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[발레코어] 샤 포그 프릴 캉캉 sk" price={25350} img={withItem1} />
                <WithItem title="[벨르 PICK/스판] 스웨이드 JP" price={64000} img={withItem2} />
                <WithItem title="라운드토 무광 레이스업 리본 장화" price={27000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <div className={styles.imgSet}>
                    <img src={sub1} alt="사진" />
                    <img src={sub2} alt="사진" />
                </div>
                <img src={sub3} alt="사진" />
                <img src={sub4} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub5} alt="사진" />
                    <img src={sub6} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub7} alt="사진" />
                    <img src={sub8} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub9} alt="사진" />
                    <img src={sub10} alt="사진" />
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

export default Satin;