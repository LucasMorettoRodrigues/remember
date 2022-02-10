import Sidebar from "../layout/Sidebar"
import MainContent from "../layout/MainContent"

import styles from "./Projects.module.css"

const Project = () => {
    return (
        <main className={styles.main_container}>
            <Sidebar />
            <MainContent />
        </main>
    )
}

export default Project