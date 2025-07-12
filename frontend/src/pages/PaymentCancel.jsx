import { useCurrentTheme } from "../context/themeContext"
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "../context/userContext"

const PaymentCancel = () => {
    const { currentTheme } = useCurrentTheme()
    const { isPayment } = useUser()
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isPayment){
            navigate("/")
        } else {
            setTimeout(()=>{
                navigate("/")
                sessionStorage.removeItem("payment")
            }, 3000)
        }
    },[])
  return (
    <div className={`flex min-h-screen  overflow-h-auto justify-center items-center ${currentTheme === "dark" ? "bg-neutral-700" : "bg-neutral-400"}`}>
            <div className={`flex flex-col ${currentTheme === "dark" ? "bg-neutral-900 text-white" : "bg-white"} min-h-[240px] min-w-[350px] w-[20%] p-[20px] justify-center items-center shadow-xl rounded-lg duration-300 transform-all hover:translate-y-[-6px]`}>
                <MdCancel className="text-red-400 text-4xl"/>
                <p className="font-bold text-2xl pb-[10px]">Payment Canceled!</p>
                <br></br>
                <p className="italic text-neutral-500 text-sm">Redirecting back to home page, please wait</p>
                <p className="text-sm">If the page not being redirected, click <a href="/" className="text-blue-400">here</a></p>
            </div>
    </div>
  )
}

export default PaymentCancel
