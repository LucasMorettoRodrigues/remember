import { useState, useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from "./Sign.module.css"

const Login = () => {
    const { login } = useContext(AuthContext)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit", { userName, password })
        login(userName, password);
    }

    return (
        <div className={styles.container}>  
            <div className={styles.form}>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <Input id="user" text="User" onChange={(e) => setUserName(e.target.value)}/>
                    <Input id="password" text="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <SubmitButton text="Sing in"/>
                </form>
            </div>
        </div>
    )
}

export default Login