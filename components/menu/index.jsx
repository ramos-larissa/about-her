import styles from '../../styles/components/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className={styles.allingButtons}>
    <Link href="/">
        <button className={styles.btnMenu}>Home</button>
    </Link>
    <Link href="letters">
        <button className={styles.btnMenu}>Letters</button>
    </Link>
    <Link href="songs-about-you">
        <button className={styles.btnMenu}>Songs</button>
    </Link>
    <Link href="curiosities">
        <button className={styles.btnMenu}>Curiosities</button>
    </Link>
    <Link href="goals">
        <button className={styles.btnMenu}>Goals</button>
    </Link>
</div>
  )
}