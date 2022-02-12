import styles from './Input.module.css'

const Input = ({ id, text, onChange, type}) => {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{text} :</label>
            <input type={type} id={id} name={id} onChange={onChange} required/>
        </div>
    )
}

export default Input