import { useState } from 'react';
import styles from './field.module.scss';


const Field = (props) => {
    
    const [combo, setcombo] = useState([])
    const { label, fieldtype, data } = props;

    const onmousedown = (e) => {
        let selectdata = data.map((data,key) => <option key={key} value={data.id}>{data.name}</option>)
        setcombo(selectdata)
    }

    return(
        <div className={styles.formitem}>
            <label>{ label }</label>
            {
                fieldtype === 'input' ?
                    <input {...props} /> 
                    : fieldtype === 'textarea' ?
                    <textarea {...props}/>
                    : fieldtype === 'upload' ?
                    <input {...props} className={styles['custom-file-input']}/> 
                    :
                    <>
                    <select {...props} onMouseDown={ (e) => onmousedown(e)}>
                        <option value="">Choose</option>
                        { combo }
                    </select>
                    <div className={styles.select}>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                    </div>
                    </>

            }
        </div>
    )
}


export default Field;