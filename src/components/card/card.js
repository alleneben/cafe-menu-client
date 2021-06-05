import styles from './card.module.scss';
import CardFooter from './card-footer';
import CardBody from './card-body';

const Card = ({ data }) => {
    const { name, price, img_name, typeid } = data

    let course = typeid === 1 ? 'Main Course' : 'Side';

    return(
        <div className={styles.card}>
            <CardBody>
                { img_name }
            </CardBody>
            <CardFooter>
                <div className={styles.course}>{ course }<span>{ price }</span></div>
                <div className={styles['menu-name']}>{ name }</div>
            </CardFooter>
        </div>
    )
}

export default Card;