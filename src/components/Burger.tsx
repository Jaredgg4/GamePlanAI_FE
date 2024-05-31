import styles from './styles/Burger.module.css';

const Burger: React.FC = () => {
    return(
        <label className={styles.burger} htmlFor="burger">
            <input type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default Burger;