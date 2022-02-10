import styles from './MainContent.module.css'
import TaskCard from '../tasks/TaskCard'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getProjectTasks, deleteTask } from '../../services/api'

const MainContent = () => {
    
    const { id } = useParams() //Pega id vindo da URL 

    const [tasks, setTasks] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data = await getProjectTasks(id)
            setTasks( data.data.tasks )
            setLoading(false)
        })()
    }, [ id ])

    if(loading) {
        return <div>Loading...</div>
    }

    const handleDelete = async (e) => {
        await deleteTask( id, e.currentTarget.id )
        const data = await getProjectTasks(id)
        setTasks( data.data.tasks )
    }

    return(
        <section className={styles.main_content}>
            <div className={styles.top_container}>
                <h2>Project Name</h2>
                {console.log(tasks)}
                <button> New Task</button> 
            </div>
            <ul>
                {tasks.map((task) => (
                    <TaskCard handleDelete={handleDelete} key={task._id} taskId={task._id} task={task.task} date={task.date}/>
                ))}
            </ul>
        </section>
    )
}

export default MainContent