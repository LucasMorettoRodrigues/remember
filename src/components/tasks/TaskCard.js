import styles from './TaskCard.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

const TaskCard = ({ task, date, handleDelete, taskId }) => {
    return (
        <li className={styles.task_card}>
            <div className={styles.task_container}>
                <input type='checkbox'/>
                <h3>{task}</h3>
                <h4>{date}</h4>
                <button id={taskId} onClick={handleDelete}><FaRegTrashAlt /></button>
            </div>
        </li>
    )
}

export default TaskCard