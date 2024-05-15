import styles from './Title.module.css';

const Title: React.FC = () => {
    return(
        <h1 contentEditable="true" className={styles.title}>GAME PLAN A.I.</h1>
    )
}

export default Title;