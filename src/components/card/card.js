import styles from './card.module.scss';
import CardFooter from './card-footer';
import CardBody from './card-body';

const Card = ({ data,onEdit, onDelete }) => {
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
                <p className={styles['footer-buttons']}><span id={styles.edit} onClick={onEdit}>Edit</span> <span id={styles.delete} onClick={onDelete}>Delete</span></p>
            </CardFooter>
        </div>
    )
}

export default Card;