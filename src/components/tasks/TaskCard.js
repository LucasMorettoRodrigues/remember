import styles from './TaskCard.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

const TaskCard = ({ task, date, handleDelete, taskId, completed, handleComplete }) => {

    return (
        <li className={`${styles.task_card} ${completed && styles.completed}`}>
            <div className={styles.task_container}>
                <input id={taskId} type='checkbox' onChange={handleComplete} checked={completed}/>
                <h3>{task}</h3>
                <h4>{date.slice(0,10)}</h4>
                <button id={taskId} onClick={handleDelete}><FaRegTrashAlt /></button>
            </div>
        </li>
    )
}

export default TaskCard