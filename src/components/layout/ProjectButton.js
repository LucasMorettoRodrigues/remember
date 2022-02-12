import styles from '../layout/ProjectButton.module.css'
import { AiOutlineDoubleRight } from "react-icons/ai";

const ProjectButton = ({ name, active, handleOnClick }) => {

    return (
        <li 
            className={`${styles.project_container} ${active ? styles.selected : null}`}
            onClick={handleOnClick}
        >
            <div className={styles.project_btn}>
                <AiOutlineDoubleRight/> 
                {name}
            </div>
        </li>
    )
}

export default ProjectButton