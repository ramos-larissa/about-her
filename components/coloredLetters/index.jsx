import styles from "../../styles/components/ColoredLetters.module.css";

export default function ColoredLetters() {
    return (
        <div className={styles.coloredLetters}>
            <ul>
                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>I</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}></div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>L</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>O</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>V</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>E</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}></div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>Y</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>O</div>
                    </li>
                    \
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>U</div>
                    </li>
                </div>

                <div className={styles.containerDiv}>
                    <li>
                        <input type="checkbox" />
                        <div className={styles.contentDiv}>!</div>
                    </li>
                </div>
            </ul>
        </div>
    );
}
