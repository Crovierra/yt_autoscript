import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"


export const useRegister = () => {
    const passwordRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const [registerError, setRegisterError] = useState("")
    const [regisLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    async function newRegister(e){
        e.preventDefault()
        try {
            setLoading(true)
            const user = {
                name: nameRef.current.value || "",
                email: emailRef.current.value || "",
                password: passwordRef.current.value || "",
                member_type: "free"
            }
            const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/api/auth/register`, {
                method: "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify(user)
            })
            const data = await response.json()

            if(!response.ok) throw new Error(data.message)
            console.log("Register success")
            setTimeout(()=>{
                navigate("/login")
            }, 3000)
        } catch (error) {
            setRegisterError(error.message)
            console.log("Registration error :", error.message)
        } finally {
            setLoading(false)
        }
    }

    return {newRegister, passwordRef, registerError, regisLoading, nameRef, emailRef}
}