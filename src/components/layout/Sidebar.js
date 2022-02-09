import styles from './SideBar.module.css'
import ProjectButton from '../layout/ProjectButton'

const Sidebar = () => {
    return(
        <aside className={styles.bar}>
            <ProjectButton text="All Tasks"/>            
            <h2>Projects</h2>
            <ul>
                <ProjectButton text="Gym"/>
                <ProjectButton text="Work"/>
                <ProjectButton text="Reading"/>
            </ul>
        </aside>
    )
}

export default Sidebar