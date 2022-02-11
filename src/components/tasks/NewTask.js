import styles from './NewTask.module.css'

import Input from '../form/Input'

const NewTask = ({ handleClose, handleSubmit, handleTaskChange, handleDateChange}) => {
    return (
        <div className={styles.new_task}>
            <form onSubmit={handleSubmit}>
                <h2>New Task</h2>
                <Input id="task" text="Task Name" onChange={handleTaskChange}/>
                <label htmlFor='date'>Date: </label>
                <input type="date" id="date" onChange={handleDateChange}/>
                <div>
                    <button className={styles.red} onClick={handleClose}>Close</button>
                    <button className={styles.green} type="submit">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default NewTask