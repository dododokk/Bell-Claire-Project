import styles from "./Detail.module.css";
import main from "../../assets/Detail/Jp/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Jp/withItem1.svg";
import withItem2 from "../../assets/Detail/Jp/withItem2.svg";
import withItem3 from "../../assets/Detail/Jp/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Jp/sub1.svg";
import sub2 from "../../assets/Detail/Jp/sub2.svg";
import sub3 from "../../assets/Detail/Jp/sub3.svg";
import sub4 from "../../assets/Detail/Jp/sub4.svg";
import sub5 from "../../assets/Detail/Jp/sub5.svg";
import sub6 from "../../assets/Detail/Jp/sub6.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Jp/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "상품이 화면과 유사해요", percent: 86 },
    { text: "포장이 꼼꼼해요", percent: 74 },
    { text: "포인트를 줄 수 있어요", percent: 48 },
];

const Jp = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>{`[유니크/러블리]\n로슈아 셔링 프릴 나일론 후드 바람막이 JP`}</p>
                        <p className={styles.price}>58,900원</p>
                        <span className={styles.explanation}>
                            - 은은하게 비치는 시스루 무드<br />
                            - 허리 스트링으로 실루엣 조절 가능<br />
                            - 가볍게 툭 걸치기 좋은 데일리 아우터<br />
                            - 러플 디테일로 귀여운 분위기 연출
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["white", "mint"]} />
                        <Option title="size" options={["s", "m", "l", "xl"]} />
                        <button className={styles.button}>구매하기</button>
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[들뜸zero] 로라 원오프 슬랜더 TOP" price={22000} img={withItem1} />
                <WithItem title="치크 벌룬 체크 숏 PT" price={18000} img={withItem2} />
                <WithItem title={`[수지니트]\nyes or no 글램 오프 NT`} price={79000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <img src={sub1} alt="사진" />
                <img src={sub2} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub3} alt="사진" />
                    <img src={sub4} alt="사진" />
                </div>
                <img src={sub5} alt="사진" />
                <img src={sub6} alt="사진" />
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

export default Jp;