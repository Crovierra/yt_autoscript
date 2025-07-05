import {createContext, useContext, useState } from "react"
import { useLogout } from "../hooks/useLogout.js"

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const { handleLogout } = useLogout();
    const [darkTheme, setDarkTheme] = useState(false)
    const [currentUser, setCurrentUser] = useState(() => {
        if(typeof window !== "undefined"){
            const token = sessionStorage.getItem("token")
            const name = sessionStorage.getItem("name")
            return name && token ? name : null
        }
    })

    const changeTheme = async () =>{
        setDarkTheme(prevValue => !prevValue)
    }

    const getUserData = (data) => {
        sessionStorage.setItem("name", data.name)
    }

    const login = () => {
        const name = sessionStorage.getItem("name")
        setCurrentUser(name)
    }

    const logout = () => {
        handleLogout()
        setCurrentUser(null)
    }

    return (
        <UserContext.Provider value={{changeTheme, darkTheme, getUserData, currentUser, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

