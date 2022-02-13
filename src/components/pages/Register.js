import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../services/api"

import styles from "./Sign.module.css"

const Register = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(user, password)
        navigate('/')
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
                    <SubmitButton text="Sing up"/>
                </form>
            </div>
        </div>
    )
}

export default Register