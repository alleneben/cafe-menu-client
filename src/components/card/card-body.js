import styles from './card.module.scss';


const CardBody = (props) => {



    return(
        <div className={styles.cardbody}>
            { props.children }
        </div>
    )
}

export default CardBody;