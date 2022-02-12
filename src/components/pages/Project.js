import Sidebar from "../layout/Sidebar"
import MainContent from "../layout/MainContent"

import styles from "./Projects.module.css"

import ProjectsProvider from "../../contexts/projects"

const Project = () => {

    return (
        <main className={styles.main_container}>
            <ProjectsProvider>
                <Sidebar/>
                <MainContent />  
            </ProjectsProvider>
        </main>
    )
}

export default Project