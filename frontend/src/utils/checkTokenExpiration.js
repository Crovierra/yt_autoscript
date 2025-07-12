import {jwtDecode} from "jwt-decode"

const checkTokenExpiration = () => {
    const token = sessionStorage.getItem("token")

    if(!token) return false

    try {
        const decodedToken = jwtDecode(token)
        const currentTime = Date.now() / 1000

        if(decodedToken.exp < currentTime){ 
            sessionStorage.removeItem("token")  //Remove token
            sessionStorage.removeItem("name")  //Remove name in sessionStorage

            window.location.href = "/login"

            return false
        }
        return true
    } catch (error) {
        console.error("Error decoding token :", error)
        return false
    }
}

export default checkTokenExpiration