import { useState } from "react";
import styles from "./MenuBar.module.css";
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void;
};

const MenuBar = ({ onClose }: Props) => {
  const [page, setPage] = useState<"main" | "all">("main");

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />

      <aside className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <span>My Page</span>
          <button className={styles.closeBtn} onClick={onClose}>X</button>
        </div>

        <nav className={styles.menuList} data-page={page}>

          {/* ⭐ 메인 메뉴 화면 */}
          {page === "main" && (
            <>
              <Link to="/made">MADE</Link>
              <Link to="/today">오늘출발</Link>
              <Link to="/new">NEW</Link>
              <Link to="/best">BEST 30</Link>
              <Link to="/ootd">오늘 뭐 입지?</Link>

              {/* 클릭하면 메뉴 내부 화면만 변경 */}
              <button
                className={styles.linkBtn}
                onClick={() => setPage("all")}
              >
                ALL &gt;
              </button>
            </>
          )}

          {/* ⭐ ALL 메뉴 화면 */}
          {page === "all" && (
            <>
              <button className={styles.backBtn} onClick={() => setPage("main")}>
                &lt; 이전
              </button>

              <span className={styles.allView}>ALL 모두 보기</span>
            
              <Link to="/top">TOPS &gt;</Link>
              <Link to="/bottom">BOTTOM &gt;</Link>
              <Link to="/dress">DRESS</Link>
              <Link to="/outer">OUTER</Link>
              <Link to="/shoes">SHOES</Link>
              <Link to="/acc">ACC.</Link>
            </>
          )}

        </nav>
      </aside>
    </>
  );
};

export default MenuBar;
