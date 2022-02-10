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

export const getProjectTasks = async (id)=> {
    return api.get(`/api/v1/project/${id}/tasks`, { id })
}