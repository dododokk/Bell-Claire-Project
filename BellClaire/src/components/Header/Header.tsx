import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import menu from "../../assets/Header/menu.svg";
import logo from "../../assets/Header/logo.svg";
import MenuBar from "../MainMenu/MenuBar";

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className={styles.header}>
                <img
                    src={menu}
                    alt="menu"
                    onClick={handleOpen}
                    className={styles.headerMenu}
                />
                <img
                    src={logo}
                    alt="logo"
                    onClick={() => navigate('/')}
                    className={styles.headerLogo}
                />
            </div>

            {open && <MenuBar onClose={handleClose} />}
        </>
    )
}

export default Header;