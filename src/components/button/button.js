import styles from './button.module.scss';

const Button = ({ text, onClick, style }) => {



    return(
        <button className={styles['btn-primray']} style={style} onClick={onClick}>
            { text }
        </button>
    )
}

export default Button;