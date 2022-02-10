import styles from '../layout/ProjectButton.module.css'

const ProjectButton = ({ text, id, active, handleOnClick }) => {

    return (
        <li className={styles.project_button}>
            <button className={active ? styles.selected : null} onClick={handleOnClick}>
                {text}
            </button>
        </li>
    )
}

export default ProjectButton