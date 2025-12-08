import styles from "./Detail.module.css";
import main from "../../assets/Detail/Set/main.svg";
import Option from "../../components/Detail/Option";
import Tag from "../../components/Detail/Tag";
import withItem1 from "../../assets/Detail/Set/withItem1.svg";
import withItem2 from "../../assets/Detail/Set/withItem2.svg";
import withItem3 from "../../assets/Detail/Set/withItem3.svg";
import WithItem from "../../components/Detail/WithItem";
import message from "../../assets/Detail/message.svg";
import sub1 from "../../assets/Detail/Set/sub1.svg";
import sub2 from "../../assets/Detail/Set/sub2.svg";
import sub3 from "../../assets/Detail/Set/sub3.svg";
import sub4 from "../../assets/Detail/Set/sub4.svg";
import sub5 from "../../assets/Detail/Set/sub5.svg";
import sub6 from "../../assets/Detail/Set/sub6.svg";
import sub7 from "../../assets/Detail/Set/sub7.svg";
import sub8 from "../../assets/Detail/Set/sub8.svg";
import sub9 from "../../assets/Detail/Set/sub9.svg";
import guide from "../../assets/Detail/guide.svg";
import qna from "../../assets/Detail/Set/qna.svg";
import Review from "../../components/Detail/Review";
import Header from "../../components/Header/Header";
import bottomLabel from "../../assets/bottomLogo.svg";

type ReviewItem = {
    text: string;
    percent: number;
};

const reviewItems: ReviewItem[] = [
    { text: "핏이 좋아요", percent: 77 },
    { text: "옷이 튼튼해요", percent: 36 },
    { text: "활동하기 편해요", percent: 18 },
];

const Set = () => {
    return (
        <>
            <Header />
            <div className={styles.info}>
                <img src={main} alt="상품 메인 사진" className={styles.mainImg} />
                <div className={styles.infoText}>
                    <div>
                        <p className={styles.title}>[MADE] shirt-pointed dress bustier set</p>
                        <p className={styles.price}>59,900원</p>
                        <span className={styles.explanation}>
                            - 셔츠 원피스와 코디에 포인트가 되는 리본 뷔스티에 세트<br />
                            - 롱 하게 떨어지는 기장과 여유 있는 핏으로 체형 커버<br />
                            - 사이드 라인을 둥글게 디자인하여 여리한 무드<br />
                            - 리본으로 묶어서 연출이 가능한 뷔스티에 디자인으로 밋밋하지 않게 레이어드
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
                <WithItem title="[러블리] 메이플 언발 OPS" price={35000} img={withItem1} />
                <WithItem title="[벨르 PICK] 티그 드롭 포인 PT" price={27900} img={withItem2} />
                <WithItem title={`[벨르 PICK/블러효과 ☁]\n베비 슬림 소프트 오프 NT`} price={28900} img={withItem3} />
            </div>
            <Tag title="DETAIL" />
            <div className={styles.imgWrapper}>
                <img src={message} alt="벨 클레르 대표 편지" />
                <div className={styles.imgSet}>
                    <img src={sub1} alt="사진" />
                    <img src={sub2} alt="사진" />
                </div>
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

export default Set;