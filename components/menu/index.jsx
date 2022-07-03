import styles from '../../styles/components/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className={styles.allingButtons}>
    <Link to="/">
        <button className={styles.btnMenu}>Home</button>
    </Link>
    <Link to="letters">
        <button className={styles.btnMenu}>Letters</button>
    </Link>
    <Link to="songs-about-you">
        <button className={styles.btnMenu}>Songs</button>
    </Link>
    <Link to="curiosities">
        <button className={styles.btnMenu}>Curiosities</button>
    </Link>
    <Link to="goals">
        <button className={styles.btnMenu}>Goals</button>
    </Link>
</div>
  )
}