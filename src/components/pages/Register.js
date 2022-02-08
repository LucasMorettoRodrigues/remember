import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import styles from "./Sign.module.css"

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Sign up</h2>
                <form action="">
                    <Input id="user" text="User"/>
                    <Input id="password" text="Password"/>
                    <SubmitButton text="Sing up"/>
                </form>
            </div>
        </div>
    )
}

export default Register