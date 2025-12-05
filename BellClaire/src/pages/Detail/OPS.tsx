import styles from "./Detail.module.css";
import main from "../../assets/Detail/OPS/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/OPS/withitem1.svg";
import withItem2 from "../../assets/Detail/OPS/withitem2.svg";
import withItem3 from "../../assets/Detail/OPS/withitem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/OPS/sub1.svg";
import sub2 from "../../assets/Detail/OPS/sub2.svg";
import sub3 from "../../assets/Detail/OPS/sub3.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/OPS/qna.svg";
import Review from "../../components/Detail/Review";

type ReviewItem = {
  text: string;
  percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 90 },
    { text: "포인트를 줄 수 있어요", percent: 68 },
    { text: "비싼만큼 가치가 있어요", percent: 48 },
];

const OPS = () => {
    return (
        <>
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[러블리] 메이플 언발 OPS</p>
                        <p className={styles.price}>79,000원</p>
                        <span className={styles.explanation}>
                            -여리여리의 끝판왕 언발 롱 원피스<br />
                            -넥 라인에 주름을 줄 수 있어 더욱 더 여성스러운 연출 모습 가능!<br />
                            -앞모습은 짧지만 뒷모습은 긴 기장감의 원피스가 핵심 포인트<br />
                            -데이트룩으로 찰떡인 이 제품 강추!!<br />
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
                <WithItem title="젤린 소프트 캉캉 미니 SK" price={29800} img={withItem1} />
                <WithItem title="[벨르 pick] 티그 드롭 포인 PT" price={27900} img={withItem2} />
                <WithItem title="라운드토 무광 레이스업 리본 장화" price={27000} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <img src={main} alt="사진" />
                <div className={styles.imgSet}>
                    <img src={sub1} alt="사진" />
                    <img src={sub2} alt="사진" />
                </div>
                <img src={sub3} alt="사진" />
            </div>
            <Tag title="GUIDE" />
            <div className={styles.guideWrapper}>
                <img src={guide} alt="가이드라인" />
            </div>
            <Tag title="REVIEW"/>
            <Review items={reviewItems} />
            <Tag title="Q&A"/>
            <div className={styles.qnaWrapper}>
                <img src={qna} alt="QnA" />
            </div>
        </>
    )
}

export default OPS;