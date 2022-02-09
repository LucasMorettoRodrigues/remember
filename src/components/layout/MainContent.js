import styles from './MainContent.module.css'

const MainContent = () => {
    return(
        <section className={styles.main_content}>
            <h2>Project Name</h2>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
                <li>Task 5</li>
            </ul>
        </section>
    )
}

export default MainContent