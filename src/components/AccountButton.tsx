import styles from './styles/AccountButton.module.css'
import Link from 'next/link';

type props ={
    href: string
}

const AccountButton: React.FC<props> = ({href}) => {
    return (
        <Link href={href}><button className={styles.button}>Sign In</button></Link>
    )
}

export default AccountButton;