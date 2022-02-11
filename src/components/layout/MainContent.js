import styles from './MainContent.module.css'
import TaskCard from '../tasks/TaskCard'
import NewTask from '../tasks/NewTask'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getAllTasks, deleteTask, createTask } from '../../services/api'

const MainContent = () => {
    
    const { id } = useParams() //Pega id vindo da URL 

    const [tasks, setTasks] = useState()
    const [newTaskForm, setNewTaskForm] = useState(false)
    const [loading, setLoading] = useState(true)
    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")

    useEffect(() => {
        (async () => {
            const data = await getAllTasks()
            const resp = data.data.tasks
            id ? setTasks(resp.filter((resp) => resp.project === id )) : setTasks( resp )
            setLoading(false)
        })()
        }
    , [ id ])

    if(loading) {
        return <div>Loading...</div>
    }

    const getTasks = async () => {
        const data = await getAllTasks()
        const resp = data.data.tasks
        id ? setTasks(resp.filter((resp) => resp.project === id )) : setTasks( resp )
    }

    const handleDelete = async (e) => {
        await deleteTask( id, e.currentTarget.id )
        getTasks()
    }

    const handleCreateTask = async (e) => {
        e.preventDefault()
        await createTask(id, taskName, taskDate)
        setNewTaskForm(false)
        getTasks()
    }

    return(
        <section className={styles.main_content}>
            <div className={styles.top_container}>
                <h2>Tasks</h2>   
                <button onClick={() => setNewTaskForm(true)}> New Task </button>
            </div>
            {newTaskForm && 
                <NewTask 
                    handleClose={() => setNewTaskForm(false)}
                    handleSubmit={handleCreateTask}
                    handleTaskChange={(e) => setTaskName(e.target.value)}
                    handleDateChange={(e) => setTaskDate(e.target.value)}
                />
            }
            <ul>
                {tasks.map((task) => (
                    <TaskCard handleDelete={handleDelete} key={task._id} taskId={task._id} task={task.task} date={task.date}/>
                ))}
            </ul>
        </section>
    )
}

export default MainContent