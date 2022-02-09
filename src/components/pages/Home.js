import styles from './Home.module.css'
import homeImg from '../../img/checklist.png'

const Home = () => {
    return (
        <main>
            <div className={styles.row}>
                <div className={styles.col_2}>
                    <h1>Organize Your Life Now!</h1> < br/>
                    <p>Manage your projects and tasks from anywhere.</p>
                    <button>Sing up now !</button>
                </div>
                <div className={styles.col_2}>
                    <img src={homeImg} alt="Checklist"/>
                </div>
            </div>
        </main>
    )
}

export default Home