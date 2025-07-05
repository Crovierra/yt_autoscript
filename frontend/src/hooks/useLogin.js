import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/userContext.jsx"


export const useLogin = () =>{
    const navigate = useNavigate()
    const { getUserData, login } = useUser()
    const passwordRef = useRef()
    const emailRef = useRef()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const user = {email : emailRef.current.value || "", 
                        password : passwordRef.current.value || "" }
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers : {"Content-type" : "application/json"},
                body: JSON.stringify(user)
            })

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message)
            }
            
            //Store data after success login
            sessionStorage.setItem("token", data.token)
            getUserData(data)
            console.log("Login successfully")
            
            login()
            navigate("/")

        } catch (error) {
            throw new Error(error.message)
        }
    }

    return {emailRef, passwordRef, handleSubmit}
}