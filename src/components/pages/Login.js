import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import styles from "./Sign.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Sign in</h2>
                <form action="">
                    <Input id="user" text="User"/>
                    <Input id="password" text="Password"/>
                    <SubmitButton text="Sing in"/>
                </form>
            </div>
        </div>
    )
}

export default Login