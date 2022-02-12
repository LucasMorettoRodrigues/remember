import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const createSession = async (name, password) => {
    return api.post('/api/v1/auth/login', { name, password })
}

export const getProjects = async => {
    return api.get('/api/v1/projects')
}

export const createProject = async (name)=> {
    return api.post(`/api/v1/projects/`, { name })
}

export const deleteProject = async (id)=> {
    return api.delete(`/api/v1/projects/${id}`)
}

export const getAllTasks = async () => {
    return api.get(`/api/v1/project/tasks`)
}

export const createTask = async (id, task, date) => {
    return api.post(`/api/v1/project/${id}/tasks`, { task, date })
}

export const updateTask = async (taskId, completed)=> {
    return api.patch(`/api/v1/project/tasks/${taskId}`, { completed })
}

export const deleteTask = async (taskId)=> {
    return api.delete(`/api/v1/project/tasks/${taskId}`)
}