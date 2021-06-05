import styles from './message.module.scss';

const Message = (props) => {

    return(
        <div className={`${styles.message} ${styles[props.type]}`}>
            { props.text }
        </div>
    )
}

export default Message;