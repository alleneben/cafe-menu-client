
import styles from './navbar.module.scss';

const NavBar = ({ title }) => {


    return (
        <nav className={styles.nav}>
            <div className={styles.brand}> {title} </div>
        </nav>
    )
}

export default NavBar;