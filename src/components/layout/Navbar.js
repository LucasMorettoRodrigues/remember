import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <Link to='/'>
                    <h1>Remember</h1>
                </Link>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </div >
        </nav>    
    )
}

export default Navbar