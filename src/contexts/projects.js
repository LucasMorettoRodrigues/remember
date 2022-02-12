import React, { createContext, useContext, useState } from "react";

const ProjectsContext = createContext()
 
export default function ProjectsProvider({ children }) {
    const [ projects, setProjects ] = useState('')

    return(
        <ProjectsContext.Provider 
            value={{
                projects,
                setProjects
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects() {
    const{ projects, setProjects } = useContext(ProjectsContext)
    return { projects, setProjects }
}