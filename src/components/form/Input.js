import styles from './Input.module.css'

const Input = ({ id, text, onChange }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{text} :</label>
            <input type="text" id={id} name={id} onChange={onChange}/>
        </div>
    )
}

export default Input