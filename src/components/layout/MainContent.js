import styles from './MainContent.module.css'
import TaskCard from '../tasks/TaskCard'
import Input from '../form/Input'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getAllTasks, deleteTask } from '../../services/api'

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

    const handleDelete = async (e) => {
        await deleteTask( id, e.currentTarget.id )
        const data = await getAllTasks()
        const resp = data.data.tasks
        id ? setTasks(resp.filter((resp) => resp.project === id )) : setTasks( resp )
    }

    const createTask = (e) => {
        e.preventDefault()
        console.log(`Create ${taskName}, date: ${taskDate}`);
        setNewTaskForm(false)
    }

    return(
        <section className={styles.main_content}>
            <div className={styles.top_container}>
                <h2>Project Name</h2>   
                <button onClick={() => setNewTaskForm(true)}> New Task </button>
            </div>
            {newTaskForm && 
                <div>
                    <form onSubmit={createTask}>
                        <h2>New Task</h2>
                        <Input id="task" text="Task" onChange={(e) => setTaskName(e.target.value)}/>
                        <input type="date" onChange={(e) => setTaskDate(e.target.value)}/>
                        <button type="submit">Create Task</button>
                        <button onClick={() => setNewTaskForm(false)}>Close</button>
                    </form>
                </div>
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