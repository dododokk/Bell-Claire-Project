import styles from "./Detail.module.css";
import main from "../../assets/Detail/Gossip/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Gossip/withitem1.svg";
import withItem2 from "../../assets/Detail/Gossip/withitem2.svg";
import withItem3 from "../../assets/Detail/Gossip/withitem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Gossip/sub1.svg";
import sub2 from "../../assets/Detail/Gossip/sub2.svg";
import sub3 from "../../assets/Detail/Gossip/sub3.svg";
import sub4 from "../../assets/Detail/Gossip/sub4.svg";
import sub5 from "../../assets/Detail/Gossip/sub5.svg";
import sub6 from "../../assets/Detail/Gossip/sub6.svg";
import sub7 from "../../assets/Detail/Gossip/sub7.svg";
import sub8 from "../../assets/Detail/Gossip/sub8.svg";
import sub9 from "../../assets/Detail/Gossip/sub9.svg";
import sub10 from "../../assets/Detail/Gossip/sub10.svg";
import sub11 from "../../assets/Detail/Gossip/sub11.svg";
import sub12 from "../../assets/Detail/Gossip/sub12.svg";
import sub13 from "../../assets/Detail/Gossip/sub13.svg";
import sub14 from "../../assets/Detail/Gossip/sub14.svg";
import sub15 from "../../assets/Detail/Gossip/sub15.svg";
import sub16 from "../../assets/Detail/Gossip/sub16.svg";
import sub17 from "../../assets/Detail/Gossip/sub17.svg";
import sub18 from "../../assets/Detail/Gossip/sub18.svg";
import sub19 from "../../assets/Detail/Gossip/sub19.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Gossip/qna.svg";
import Review from "../../components/Detail/Review";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 100 },
    { text: "상품이 화면과 유사해요", percent: 69 },
    { text: "포인트를 줄 수 있어요", percent: 48 },
];

const Gossip = () => {
    return (
        <>
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[MADE] Gossip girl slim eyelet shirt (tie set)</p>
                        <p className={styles.price}>79,000원</p>
                        <span className={styles.explanation}>
                            - 'gossip girl' 무드 <br />
                            - 세로 mix-stripe 패턴 <br />
                            - 시그니쳐 실버 로고 <br />
                            - 백 아일렛 스트랩 <br />
                            - 코르셋 슬림 실루엣 <br />
                            - johnny 오픈 카라 <br />
                            - 넥 머플러 SET <br />
                            - 와이드 커프스 & 슬릿 <br />
                            - 프론트 버튼 오픈/클로징 <br />
                            - 클래식+시크 stone gray <br />
                            - 클린 + 퓨어 뉴 컬러 whitysh
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["white"]} />
                        <Option title="size" options={["free"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[벨르 PICK/스판] 스웨이드 JP" price={64000} img={withItem1} />
                <WithItem title="젤린 소프트 캉캉 미니 SK" price={27900} img={withItem2} />
                <WithItem title={`[MADE/벨르 PICK]\n셔츠 쉬폰 포인 뷔스티에 OPS`} price={59900} img={withItem3} />
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
                <img src={sub7} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub8} alt="사진" />
                    <img src={sub9} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub10} alt="사진" />
                    <img src={sub11} alt="사진" />
                </div>
                <img src={sub12} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub13} alt="사진" />
                    <img src={sub14} alt="사진" />
                    <img src={sub15} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub16} alt="사진" />
                    <img src={sub17} alt="사진" />
                </div>
                <div className={styles.imgSet}>
                    <img src={sub18} alt="사진" />
                    <img src={sub19} alt="사진" />
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

export default Gossip;