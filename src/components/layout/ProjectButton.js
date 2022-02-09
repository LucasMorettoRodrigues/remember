import styles from '../layout/ProjectButton.module.css'

const ProjectButton = ({ text }) => {
    return (
        <button className={styles.project_button}>
            {text}
        </button>
    )
}

export default ProjectButton