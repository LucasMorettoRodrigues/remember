import styles from './Input.module.css'

const Input = ({ id, text }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{text} :</label>
            <input type="text" id={id} name={id} />
        </div>
    )
}

export default Input