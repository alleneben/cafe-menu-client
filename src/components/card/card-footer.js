import styles from './card.module.scss';


const CardFooter = (props) => {



    return(
        <div className={styles.cardfooter}>
            { props.children }
        </div>
    )
}

export default CardFooter;