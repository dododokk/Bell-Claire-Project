import styles from "./Detail.module.css";
import main from "../../assets/Detail/Balletsk/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Balletsk/withItem1.svg";
import withItem2 from "../../assets/Detail/Balletsk/withItem2.svg";
import withItem3 from "../../assets/Detail/Balletsk/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Balletsk/sub1.svg";
import sub2 from "../../assets/Detail/Balletsk/sub2.svg";
import sub3 from "../../assets/Detail/Balletsk/sub3.svg";
import sub4 from "../../assets/Detail/Balletsk/sub4.svg";
import sub5 from "../../assets/Detail/Balletsk/sub5.svg";
import sub6 from "../../assets/Detail/Balletsk/sub6.svg";
import sub7 from "../../assets/Detail/Balletsk/sub7.svg";
import sub8 from "../../assets/Detail/Balletsk/sub8.svg";
import sub9 from "../../assets/Detail/Balletsk/sub9.svg";
import sub10 from "../../assets/Detail/Balletsk/sub10.svg";
import sub11 from "../../assets/Detail/Balletsk/sub11.svg";
import sub12 from "../../assets/Detail/Balletsk/sub12.svg";
import sub13 from "../../assets/Detail/Balletsk/sub13.svg";
import sub14 from "../../assets/Detail/Balletsk/sub14.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Balletsk/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "활동하기 편해요", percent: 56 },
    { text: "포인트를 줄 수 있어요", percent: 38 },
];

const Balletsk = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[발레코어🩰] 디픈 쉬머 새틴 스트랩 SK</p>
                        <p className={styles.price}>30,500원</p>
                        <span className={styles.explanation}>
                            -오간자 원단만의 오묘한 분위기 영-끌한 스커트🫧<br />
                            -바람에 가볍게 흩날리고 비침도 있는 소재감 여러겹 레이어드 해 더욱 매력적인 아이템 !<br />
                            -웨이스트는 굵은 밴딩+스트랩이 믹스되어, 발레코어 무드를 낭낭하게 섞어주었어요<br />
                            -허리부터 힙 아래까지 부담없는 기장감<br />
                            -플레어 쉐입으로 떨어져 바디 실루엣 부담없이 착용 가능
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["white", "black", "gray"]} />
                        <Option title="size" options={["free"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[발레코어] 샤 포그 프릴 캉캉 sk" price={25350} img={withItem1} />
                <WithItem title={`[MADE/벨르 PICK]\n셔츠 쉬폰 포인 뷔스티에 OPS`} price={59900} img={withItem2} />
                <WithItem title="[벨르 PICK/스판]스웨이드 JP" price={64000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <div className={styles.imgSet}>
                    <div className={styles.colorDec}>
                        <img src={sub1} alt="사진" />
                        <span>White</span>
                    </div>
                    <div className={styles.colorDec}>
                        <img src={sub2} alt="사진" />
                        <span>Black</span>
                    </div>
                    <div className={styles.colorDec}>
                        <img src={sub3} alt="사진" />
                        <span>Gray</span>
                    </div>
                </div>
                <div className={styles.imgSet}>
                    <img src={sub4} alt="사진" />
                    <img src={sub5} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub6} alt="사진" />
                    <img src={sub7} alt="사진" />
                </div>
                <img src={sub8} alt="사진" />
                <img src={sub9} alt="사진" />
                <img src={sub10} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub11} alt="사진" />
                    <img src={sub12} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub13} alt="사진" />
                    <img src={sub14} alt="사진" />
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

export default Balletsk;