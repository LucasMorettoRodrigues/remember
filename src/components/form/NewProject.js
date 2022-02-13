import Input from './Input'
import styles from './NewItemForm.module.css'

const NewProject = ({ handleSubmit, handleClose, handleNameChange }) => {
    return (
        <div className={styles.form_window}>
            <form className={styles.new_project} onSubmit={handleSubmit}>
                <h3>New Project</h3>
                <Input 
                    type="text" 
                    id="newProjectName" 
                    text="Project Name" 
                    onChange={handleNameChange}
                    maxLength={10}
                />
                <div>
                    <button className={styles.red} onClick={handleClose}>Close</button>
                    <button className={styles.green} type='submit' value="Create">Create</button>
                </div>
            </form>
        </div> 
    )
}

export default NewProject

