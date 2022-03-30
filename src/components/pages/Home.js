import styles from './Home.module.css'
import homeImg from '../../img/checklist.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className={styles.row}>
            <div className={styles.col_2}>
                <h1>Organize Your Todos Now!</h1> < br />
                <p>Manage your projects and tasks from anywhere.</p>
                <Link to='/register'>
                    <button>Sing up now !</button>
                </Link>
            </div>
            <div className={styles.col_2}>
                <img src={homeImg} alt="Checklist" />
            </div>
        </main>
    )
}

export default Home