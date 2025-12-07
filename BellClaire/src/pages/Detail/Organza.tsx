import styles from "./Detail.module.css";
import main from "../../assets/Detail/Organza/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Organza/withitem1.svg";
import withItem2 from "../../assets/Detail/Organza/withitem2.svg";
import withItem3 from "../../assets/Detail/Organza/withitem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Organza/sub1.svg";
import sub2 from "../../assets/Detail/Organza/sub2.svg";
import sub3 from "../../assets/Detail/Organza/sub3.svg";
import sub4 from "../../assets/Detail/Organza/sub4.svg";
import sub5 from "../../assets/Detail/Organza/sub5.svg";
import sub6 from "../../assets/Detail/Organza/sub6.svg";
import sub7 from "../../assets/Detail/Organza/sub7.svg";
import sub8 from "../../assets/Detail/Organza/sub8.svg";
import sub9 from "../../assets/Detail/Organza/sub9.svg";
import sub10 from "../../assets/Detail/Organza/sub10.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Organza/qna.svg";
import Review from "../../components/Detail/Review";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "데일리로 입기 좋아요", percent: 76 },
    { text: "옷이 튼튼해요", percent: 59 },
    { text: "비싼만큼 가치가 있어요", percent: 44 },
];

const Organza = () => {
    return (
        <>
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[MADE] fiancée organza rich long sk</p>
                        <p className={styles.price}>57,000원</p>
                        <span className={styles.explanation}>
                            - 새틴&오간자 믹스로 신비로운 fiancée organza rich long sk<br />
                            - 쉬어한 오간자 겉감과 매끈&묵직한 새틴 안감의 조화<br />
                            - 밀도 다른 두 소재의 자연스러운 레이어링<br />
                            - top : '양' 만으로는 절대 표현할 수 없는 풍성한 쉐입의 오간자<br />
                            - base : 물감을 섞은 듯 딥한 색감으로 잡아주는 새틴<br />
                            - 체형제한 없이 누구나 페미닌한 무드로 착용되는 flare<br />
                            - 편안함까지 추구, 와이드 백 밴딩과 사이드 콘솔 지퍼<br />
                            - 채도 빠진 여리여리 핑크 + 마일드한 톤의 pale pink<br />
                            - 물안개 낀 듯 뽀용한 컬러감의 클리어한 soft Ivory
                        </span>
                    </div>
                    <div className={styles.optionWrapper}>
                        <Option title="color" options={["pink"]} />
                        <Option title="size" options={["free"]} />
                    </div>
                </div>
            </div>
            <Tag title="WITH ITEM" />
            <div className={styles.withItemWrapper}>
                <WithItem title="[들뜸zero] 로라 원오프 슬랜더 TOP" price={22000} img={withItem1} />
                <WithItem title="[러블리] 슈가 화이트 프릴 SK" price={33000} img={withItem2} />
                <WithItem title={`[수지니트]\nyes or no 글램 오프 NT`} price={79000} img={withItem3} />
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

export default Organza;