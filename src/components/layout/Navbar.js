import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default Navbar