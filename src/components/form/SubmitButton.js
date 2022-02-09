import styles from './SubmitButton.module.css'

const SubmitButton = ({ text, customClass }) => {
    return (
        <div className={styles.button}>
            <input type="submit" value={text} />
        </div>
    )
}

export default SubmitButton