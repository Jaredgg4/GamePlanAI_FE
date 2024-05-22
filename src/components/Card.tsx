import styles from './Card.module.css';
import Link from 'next/link';

type props ={
    href: string;
    href2: string;
}
const Card: React.FC<props> = ({href, href2}) => {

    return(
        <div className={styles.container}>
            <div className={styles.card}>Your Parlays</div>
            <Link href={href} className={styles.card}><div>Games</div></Link>
            <Link href={href2} className={styles.card}><div>A.I.</div></Link>
            <div className={styles.card}>About Us</div>
        </div>
    )
}

export default Card;

