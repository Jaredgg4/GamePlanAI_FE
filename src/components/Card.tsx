import styles from './Card.module.css';

type props ={
    href: string;
}
const Card: React.FC<props> = ({href}) => {

    return(
        <div className={styles.container}>
            <div className={styles.card}>Your Parlays</div>
            <a href={href} className={styles.card}><div>Games</div></a>
            <div className={styles.card}>A.I.</div>
            <div className={styles.card}>About Us</div>
        </div>
    )
}

export default Card;

