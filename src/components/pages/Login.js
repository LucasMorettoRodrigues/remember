import { useState, useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import styles from "./Sign.module.css"

const Login = () => {
    const { login } = useContext(AuthContext)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login(userName, password)
        } catch {
            setError('Failed to login.')
        }
        
    }

    return (
        <div className={styles.container}>  
            <div className={styles.form}>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <Input type="text" id="user" text="User" onChange={(e) => setUserName(e.target.value)}/>
                    <Input type="text" id="password" text="Password" onChange={(e) => setPassword(e.target.value)}/>
                    { error && <p>{error}</p>}
                    <SubmitButton text="Sing in"/>
                </form>
            </div>
        </div>
    )
}

export default Login