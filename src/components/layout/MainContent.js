import styles from './MainContent.module.css'
import TaskCard from '../tasks/TaskCard'
import NewTask from '../form/NewTask'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useProjects } from '../../contexts/projects'

import { getAllTasks, deleteTask, createTask, updateTask, deleteProject } from '../../services/api'

const MainContent = () => {

    const { projects } = useProjects()
    const navigate = useNavigate()
    const { id } = useParams()

    const [tasks, setTasks] = useState([])
    const [newTaskForm, setNewTaskForm] = useState(false)
    const [loading, setLoading] = useState(true)
    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")

    useEffect(() => {
        (async () => {
            const data = await getAllTasks( id )
            setTasks(data.data.tasks)
            setLoading(false)
        })()
        }
    , [ id ])

    const getTasks = async () => {
        const data = await getAllTasks(id)
        setTasks(data.data.tasks)
        setLoading(false)
    }

    const handleCreateTask = async (e) => {
        e.preventDefault()
        setLoading(true)
        await createTask(id, taskName, taskDate)
        setNewTaskForm(false)
        getTasks()
    }

    const handleUpdateTask = async (e) => {
        setLoading(true)
        await updateTask(e.target.id, e.target.checked ? true : false)
        getTasks()
    }

    const handleDelete = async (e) => {
        setLoading(true)
        await deleteTask(e.currentTarget.id)
        getTasks()
    }

    const handleDeleteProject = async () => {
        setLoading(true)
        tasks.map((task) => task.project === id ? deleteTask(task._id) : null )
        await deleteProject(id)
        navigate('/project')
        setLoading(false)
    }

    if(loading) {
        return <div>Loading...</div>
    }

    return(
        <section className={styles.main_content}>
            <div className={styles.top_container}>
                <h2>{id ? projects.find(p => p._id === id).name : "All Tasks"}</h2>
                {id && 
                    <div>
                        <button className={styles.green} onClick={() => setNewTaskForm(true)}> New Task </button>
                        <button className={styles.red} onClick={handleDeleteProject}> Delete Project  </button>
                    </div>
                }
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
                    <TaskCard 
                        handleDelete={handleDelete} 
                        key={task._id} taskId={task._id} 
                        task={task.task} 
                        date={task.date}
                        completed={task.completed}
                        handleComplete={handleUpdateTask}
                    />
                ))}
            </ul>
        </section>
    )
}

export default MainContent