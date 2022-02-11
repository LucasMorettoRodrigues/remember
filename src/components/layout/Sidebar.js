import styles from './SideBar.module.css'

import ProjectButton from '../layout/ProjectButton'
import Input from '../form/Input'

import { getProjects, createProject } from '../../services/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState(true)
    const [newProjectName, setNewProjectName] = useState('')
    const [showCreateProjectForm, setShowCreateProjectForm] = useState(false)

    useEffect(() => {
        (async () => {
            const data = await getProjects()
            setProjects( data.data.projects )
            setLoading(false)
        })()
    }, [])

    if(loading) {
        return <div>Loading...</div>
    }

    const showNewProjectForm = () => {
        setShowCreateProjectForm(true)
    }

    const createNewProject = async (e) => {
        e.preventDefault()
        await createProject(newProjectName);
        const data = await getProjects()
        setProjects( data.data.projects )
        setShowCreateProjectForm(false)
    }

    return(
        <aside className={styles.bar}>
            <ProjectButton 
                text="All Tasks" 
                handleOnClick={() => navigate(`../project`)}
                active={window.location.pathname === `/project` ? "active" : null}
            />
            <h2>Projects</h2>
            <ul>
                {
                    projects.map((project) => (
                        <ProjectButton 
                            key={project._id} 
                            active={window.location.pathname === `/project/${project._id}` ? "active" : null}
                            id={project._id} 
                            text={project.name} 
                            handleOnClick={() => navigate(`../project/${project._id}`)}
                        />
                    ))
                }
            </ul>
            {
                showCreateProjectForm ? 
                    <form className={styles.new_project} onSubmit={createNewProject}>
                        <Input id="newProjectName" text="Project Name" onChange={(e) => setNewProjectName(e.target.value)}/>
                        <div>
                            <button className={styles.red} onClick={() => setShowCreateProjectForm(false)}>Close</button>
                            <button className={styles.green} type='submit' value="Create">Create</button>
                        </div>
                    </form> :
                    <button className={styles.new_project_button} onClick={showNewProjectForm}>+ New Project</button>
            }
        </aside>
    )
}

export default Sidebar