import styles from './MainContent.module.css'
import TaskCard from '../tasks/TaskCard'

const MainContent = () => {
    return(
        <section className={styles.main_content}>
            <div className={styles.top_container}>
                <h2>Project Name</h2>
                <button> New Task</button> 
            </div>
            <ul>
                <TaskCard task="Task 1" date="10/04/2022"/>
                <TaskCard task="Task 2" date="10/04/2022"/>
                <TaskCard task="Task 3" date="10/04/2022"/>
                <TaskCard task="Task 4" date="10/04/2022"/>
                <TaskCard task="Task 5" date="10/04/2022"/>
            </ul>
        </section>
    )
}

export default MainContent