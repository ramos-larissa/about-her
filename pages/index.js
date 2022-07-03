import styles from "../styles/Home.module.css";
import ColoredLetters from "../components/coloredLetters";
import Menu from "../components/menu";
import Heart from "../components/heart";
import MenuBottom from "../components/menuBottom";

export default function Home() {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.menuMobile}>
                <MenuBottom />
            </div>
            <ColoredLetters />
            <div className={styles.heartMenu}>
                <span>I</span>
                <Heart />
                <span>U</span>
            </div>
            <div className={styles.warningHome}>
                <p>
                    Don't forget! This website will be under constant
                    construction, as my love for you.
                </p>
            </div>
        </div>
    );
}
