import styles from './SubmitButton.module.css'

const SubmitButton = ({ text }) => {
    return (
        <div className={styles.button}>
            <input type="submit" value={text} />
        </div>
    )
}

export default SubmitButton