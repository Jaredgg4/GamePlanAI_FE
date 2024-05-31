import styles from './styles/Card.module.css';
import Link from 'next/link';

type props ={
    href: string;
    href2: string;
    href3: string
}
const Card: React.FC<props> = ({href, href2, href3}) => {

    return(
        <div className={styles.container}>
            <Link href={href3} className={styles.card}><div>Your Parlays</div></Link>
            <Link href={href} className={styles.card}><div>Games</div></Link>
            <Link href={href2} className={styles.card}><div>A.I.</div></Link>
            <div className={styles.card}>About Us</div>
        </div>
    )
}

export default Card;

