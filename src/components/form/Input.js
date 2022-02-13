import styles from './Input.module.css'

const Input = ({ id, text, onChange, type, maxLength, minLength}) => {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{text} :</label>
            <input 
                type={type} 
                id={id} 
                name={id} 
                onChange={onChange} 
                maxLength={maxLength} 
                minLength={minLength}
                required/>
        </div>
    )
}

export default Input