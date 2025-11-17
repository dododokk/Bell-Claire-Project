import styles from "./Header.module.css";
import menu from "../../assets/Header/menu.svg";
import logo from "../../assets/Header/logo.svg";

const Header = () => {
    return(
        <div className={styles.header}>
            <img src={menu} alt="menu" className={styles.headerMenu}/>
            <img src={logo} alt="logo" className={styles.headerLogo}/>
        </div>
    )
}

export default Header;