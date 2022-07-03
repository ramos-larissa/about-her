import styles from '../../styles/components/Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.allingButtons}>
    <a href="/">
        <button className={styles.btnMenu}>Home</button>
    </a>
    <a href="letters">
        <button className={styles.btnMenu}>Letters</button>
    </a>
    <a href="songs-about-you">
        <button className={styles.btnMenu}>Songs</button>
    </a>
    <a href="curiosities">
        <button className={styles.btnMenu}>Curiosities</button>
    </a>
    <a href="goals">
        <button className={styles.btnMenu}>Goals</button>
    </a>
</div>
  )
}