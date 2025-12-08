import styles from "./Detail.module.css";
import main from "../../assets/Detail/Cody/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Cody/withItem1.svg";
import withItem2 from "../../assets/Detail/Cody/withItem2.svg";
import withItem3 from "../../assets/Detail/Cody/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Cody/sub1.svg";
import sub2 from "../../assets/Detail/Cody/sub2.svg";
import sub3 from "../../assets/Detail/Cody/sub3.svg";
import sub4 from "../../assets/Detail/Cody/sub4.svg";
import sub5 from "../../assets/Detail/Cody/sub5.svg";
import sub6 from "../../assets/Detail/Cody/sub6.svg";
import sub7 from "../../assets/Detail/Cody/sub7.svg";
import sub8 from "../../assets/Detail/Cody/sub8.svg";
import sub9 from "../../assets/Detail/Cody/sub9.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Cody/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "배송이 빨라요", percent: 100 },
    { text: "데일리로 입기 좋아요", percent: 72 },
    { text: "비싼만큼 가치가 있어요", percent: 48 },
];

const Cody = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>{`[오늘의 코디/벨르 PICK]\n벨르 세틴 아일렛 TOP 코디set`}</p>
                        <p className={styles.prevPrice}>210,000원</p>
                        <p className={styles.saleWrapper}><span className={styles.sale}>25%</span><span className={styles.salePrice}>157,500원</span></p>
                        <span className={styles.explanation}>
                            - 오늘 하루 예쁜 코디 추천<br />
                            - 이렇게 입어보는건 어때요? ♥<br />
                            - 오직 벨클레르의 픽으로만 준비된 코디
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["오늘의 코디 세트"]} />
                        <Option title="size" options={["s", "m", "l", "xl"]} />
                        <button className={styles.button}>구매하기</button>
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[발레코어] 샤 포그 프릴 캉캉 sk" price={25350} img={withItem1} />
                <WithItem title="에스닉 라운디 빈티지 벨트" price={20000} img={withItem2} />
                <WithItem title="모아 시스루 결 CD" price={21700} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <p className={styles.set}>구성 1. [ MADE / 발레코어 ] 벨르 세틴 아일렛 TOP (44,000원)</p>
                <img src={sub1} alt="사진" />
                <img src={sub2} alt="사진" />
                <p className={styles.set}>구성 2.[MADE] fiancée organza rich long sk  (57,000원)</p>
                <img src={sub3} alt="사진" />
                <img src={sub4} alt="사진" />
                <p className={styles.set}>구성 3. pierce eyelet stiletto heel (6cm) (54,700원)</p>
                <img src={sub5} alt="사진" />
                <img src={sub6} alt="사진" />
                <p className={styles.set}>구성 4. poin ribbon strap over knee socks (11,800원)</p>
                <img src={sub7} alt="사진" />
                <img src={sub8} alt="사진" />
                <p className={styles.set}>♥ 벨 클레르의 오늘 하루 코디 추천 ♥</p>
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

export default Cody;