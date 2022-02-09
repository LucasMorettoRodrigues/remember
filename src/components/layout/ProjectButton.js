import styles from '../layout/ProjectButton.module.css'

const ProjectButton = ({ text }) => {
    return (
        <li className={styles.project_button}>
            <button>
                {text}
            </button>
        </li>
    )
}

export default ProjectButton