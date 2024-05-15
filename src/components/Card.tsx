import styles from './Card.module.css';

const Card: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.card}>Your Parlays</div>
            <div className={styles.card}>Player Stats</div>
            <div className={styles.card}>A.I.</div>
            <div className={styles.card}>About Us</div>
        </div>
    )
}

export default Card;

