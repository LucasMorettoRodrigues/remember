import styles from './SideBar.module.css'
import ProjectButton from '../layout/ProjectButton'

import { getProjects } from '../../services/api'
import { useState, useEffect } from 'react'

const Sidebar = () => {

    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState(true)

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

    return(
        <aside className={styles.bar}>
            <ProjectButton text="All Tasks"/>        
            <h2>Projects</h2>
            {projects.map((project) => console.log(project))}
            <ul>
                {
                    projects.map((project) => (
                        <ProjectButton key={project._id} id={project._id} text={project.name}/>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Sidebar