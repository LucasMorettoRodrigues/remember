import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import { useState, useContext } from "react"
import { registerUser } from "../../services/api"
import { AuthContext } from '../../contexts/auth'

import styles from "./Sign.module.css"

const Register = () => {

    const { login } = useContext(AuthContext)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await registerUser(user, password)
            await login(user, password)
        } catch {   
            setError('Failed to register.')     
        }
    } 

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        id="user" 
                        text="User" 
                        minLength={3}
                        maxLength={30}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Input 
                        type="text" 
                        id="password" 
                        text="Password"
                        minLength={6}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    { error && <p>{error}</p>}
                    <SubmitButton text="Sing up"/>
                </form>
            </div>
        </div>
    )
}

export default Register