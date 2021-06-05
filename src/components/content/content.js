import styles from './content.module.scss';

const Container = (props) => {

        return(
            <div className={`${styles.content} ${styles[props.flex]}`} style={props.style}>
                { props.children }
            </div>
        )

}

export default Container;