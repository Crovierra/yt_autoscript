import { createContext, useContext } from "react"
import { useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const userTheme = sessionStorage.getItem("theme")
        return userTheme ? userTheme : "light"
    },
)

    return (
        <ThemeContext.Provider value={{setCurrentTheme, currentTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useCurrentTheme = () => useContext(ThemeContext)