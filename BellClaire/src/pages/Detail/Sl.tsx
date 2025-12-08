import styles from "./Detail.module.css";
import main from "../../assets/Detail/Sl/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Sl/withItem1.svg";
import withItem2 from "../../assets/Detail/Sl/withItem2.svg";
import withItem3 from "../../assets/Detail/Sl/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Sl/sub1.svg";
import sub2 from "../../assets/Detail/Sl/sub2.svg";
import sub3 from "../../assets/Detail/Sl/sub3.svg";
import sub4 from "../../assets/Detail/Sl/sub4.svg";
import sub5 from "../../assets/Detail/Sl/sub5.svg";
import sub6 from "../../assets/Detail/Sl/sub6.svg";
import sub7 from "../../assets/Detail/Sl/sub7.svg";
import sub8 from "../../assets/Detail/Sl/sub8.svg";
import sub9 from "../../assets/Detail/Sl/sub9.svg";
import sub10 from "../../assets/Detail/Sl/sub10.svg";
import sub11 from "../../assets/Detail/Sl/sub11.svg";
import sub12 from "../../assets/Detail/Sl/sub12.svg";
import sub13 from "../../assets/Detail/Sl/sub13.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Sl/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "옷이 튼튼해요", percent: 76 },
    { text: "비싼만큼 가치가 있어요", percent: 68 },
];

const Sl = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[스판/레이온] 빈트 랩 플리츠 버튼 맥시 SL</p>
                        <p className={styles.price}>44,000원</p>
                        <span className={styles.explanation}>
                            - 아이템 특유의 고지식한 틀을 깨 준 SL🩶<br />
                            - 베이직 + 러블리 무드 한 스쿱<br />
                            - 슬림 웨이스트 , 힙 볼륨 ' 컷팅 플리츠 '<br />
                            - 세미 포인트 프론트 버튼 ✔<br />
                            - 실루엣 올 커버 맥시 & 와이드 FIT<br />
                            - 유니크 디자인 중심적 2컬러
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["gray", "black"]} />
                        <Option title="size" options={["s", "m", "l", "xl"]} />
                        <button className={styles.button}>구매하기</button>
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="에스닉 라운디 빈티지 벨트" price={20000} img={withItem1} />
                <WithItem title="화이트 오브 플럼 롱 SK" price={38000} img={withItem2} />
                <WithItem title="에트 여리핏 셔링반팔 TOP" price={23000} img={withItem3} />
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
                <div className={styles.imgSet}>
                    <img src={sub6} alt="사진" />
                    <img src={sub7} alt="사진" />
                </div>
                <img src={sub8} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub9} alt="사진" />
                    <img src={sub10} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub11} alt="사진" />
                    <img src={sub12} alt="사진" />
                </div>
                <img src={sub13} alt="사진" />
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

export default Sl;