import { useCurrentTheme } from "../context/themeContext.jsx"

export const useTheme = () => {
    // const [theme, setTheme] = useState(() => sessionStorage.getItem("theme") || "light")
    const {setCurrentTheme, currentTheme} = useCurrentTheme() 

    // Update theme in sessionStorage and send API request
    async function updateTheme() {
        toggleTheme()
        try {
            const token = sessionStorage.getItem("token")
            
            // Ensure theme is updated in sessionStorage
            
            const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/api/auth/theme`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                credentials: "include",
                body: JSON.stringify({ currentTheme }),  // Send theme as JSON object
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.message)

            console.log("Successfully updated theme preferences")
        } catch (error) {
            console.log("Failed to update theme:", error.message)
        }
    }

    // You can also add a function to toggle between themes locally
    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light"
            sessionStorage.setItem("theme", newTheme)  // Store the new theme
            return newTheme
        })
    }

    return { currentTheme, updateTheme, toggleTheme }
}