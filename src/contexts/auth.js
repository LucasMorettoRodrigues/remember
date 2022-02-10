import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, createSession } from '../services/api'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        const token= localStorage.getItem('token')

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        api.defaults.headers.Authorization = `Bearer ${token}`
        setLoading(false)
    }, [])


    const login = async (userName, password) => {
        const response = await createSession(userName, password)
        console.log("login", response.data)
        const loggedUser = response.data.user
        const token = response.data.token
        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`
        setUser(loggedUser)
        navigate("/projects")
    }
    
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider 
            value={{ authenticated: !!user, 
                    user, 
                    login, 
                    logout,
                    loading
                }}>
            {children}
        </AuthContext.Provider>
    )
}