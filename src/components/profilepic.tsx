import styles from './styles/profilepic.module.css'

type prop = {
    href: string,
}

export const ProfilePic: React.FC<prop> = ({href}) => {
    return(
        <div>
            <img src={href} className={styles.pic}></img>
        </div>
    )
}