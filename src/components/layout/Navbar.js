import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <Link to='/'>
                    <h1>Remember</h1>
                </Link>
                {   user
                        ?   <ul>
                                <li>
                                    <p>Welcome {user.name}</p> 
                                </li>
                                <li>
                                    <Link onClick={logout} to='/'>Logout</Link>
                                </li>
                            </ul>
                        :   <ul>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/register'>Register</Link>
                                </li>
                            </ul>
                }
            </div>
        </nav>    
    )
}

export default Navbar