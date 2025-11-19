import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import menu from "../../assets/Header/menu.svg";
import logo from "../../assets/Header/logo.svg";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <img src={menu} alt="menu" className={styles.headerMenu} />
            <img
                src={logo}
                alt="logo"
                onClick={() => navigate('/')}
                className={styles.headerLogo}
            />
        </div>
    )
}

export default Header;