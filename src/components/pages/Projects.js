import Sidebar from "../layout/Sidebar"
import MainContent from "../layout/MainContent"

import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <main className={styles.main_container}>
            <Sidebar />
            <MainContent />
        </main>
    )
}

export default Projects