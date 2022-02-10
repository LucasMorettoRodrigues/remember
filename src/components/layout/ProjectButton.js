import styles from '../layout/ProjectButton.module.css'

import { useNavigate } from 'react-router-dom'

const ProjectButton = ({ text, id }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        console.log('click');
        navigate(`../project/${id}`)
    }

    return (
        <li className={styles.project_button}>
            <button onClick={handleOnClick}>
                {text}
            </button>
        </li>
    )
}

export default ProjectButton