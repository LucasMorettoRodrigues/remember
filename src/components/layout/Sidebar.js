import styles from './SideBar.module.css'

import { AiFillPlusCircle } from "react-icons/ai";

import ProjectButton from '../layout/ProjectButton'
import NewProject from '../form/NewProject'

import { getProjects, createProject } from '../../services/api'
import { useProjects } from '../../contexts/projects';

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Sidebar = () => {

    const { projects, setProjects } = useProjects()

    const navigate = useNavigate()
    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    const [newProjectName, setNewProjectName] = useState('')
    const [showCreateProjectForm, setShowCreateProjectForm] = useState(false)

    useEffect(() => {
        (async () => {
            const data = await getProjects()
            setProjects( data.data.projects )
            setLoading(false)
        })()
    }, [id, setProjects])

    const handleCreateProject = async (e) => {
        e.preventDefault()
        await createProject(newProjectName);
        const data = await getProjects()
        setProjects( data.data.projects )
        setShowCreateProjectForm(false)
    }

    if(loading) {
        return <></>
    }

    return(
        <aside className={styles.bar}>
            <ul>
                <ProjectButton 
                    name="All Tasks" 
                    handleOnClick={() => {
                        navigate(`../project`)
                    }}
                    active={window.location.pathname === `/project` ? "active" : null}
                />
            </ul>
            <h2>Projects</h2>
            <ul>
                {
                    projects.map((project) => (
                        <ProjectButton 
                            key={project._id} 
                            active={window.location.pathname === `/project/${project._id}` ? "active" : null}
                            id={project._id} 
                            name={project.name} 
                            handleOnClick={() => {
                                navigate(`../project/${project._id}`)
                            }}
                        />
                    ))
                }
            </ul>
            { showCreateProjectForm &&
                <NewProject 
                    handleSubmit={handleCreateProject} 
                    handleClose={() => setShowCreateProjectForm(false)}
                    handleNameChange={(e) => setNewProjectName(e.target.value)}
                />
            }       
            <button 
                className={styles.new_project_button} 
                onClick={() => setShowCreateProjectForm(true)}>
                <AiFillPlusCircle className={styles.icon} />
                <p>New Project</p>
            </button>
        </aside>
    )
}

export default Sidebar