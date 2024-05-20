import styles from './Card.module.css';

type props ={
    href: string;
    href2: string;
}
const Card: React.FC<props> = ({href, href2}) => {

    return(
        <div className={styles.container}>
            <div className={styles.card}>Your Parlays</div>
            <a href={href} className={styles.card}><div>Games</div></a>
            <a href={href2} className={styles.card}><div>A.I.</div></a>
            <div className={styles.card}>About Us</div>
        </div>
    )
}

export default Card;

