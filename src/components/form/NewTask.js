import styles from './NewItemForm.module.css'
import Input from './Input'

const NewTask = ({ handleClose, handleSubmit, handleTaskChange, handleDateChange}) => {
    return (
        <div className={styles.form_window}>
            <form className={styles.new_project} onSubmit={handleSubmit}>
                <h3>New Task</h3>
                <Input type="text" id="task" text="Task Name" maxLength={40} onChange={handleTaskChange} />
                <Input type="date" id="date" text="Date" onChange={handleDateChange} />
                <div>
                    <button className={styles.red} onClick={handleClose}>Close</button>
                    <button className={styles.green} type="submit">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default NewTask