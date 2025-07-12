import { IoCheckmarkCircle } from "react-icons/io5";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/userContext";
import { useCurrentTheme } from "../context/themeContext"

const PaymentSuccess = () => {
    const { currentTheme } = useCurrentTheme()
    const { isPayment } = useUser()
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isPayment){
            navigate("/")
        } else {
            setTimeout(() => {
                navigate("/")
                sessionStorage.removeItem("payment")
            }, 5000)
        }
    }, [])
  return (
    <div className={`flex min-h-screen  overflow-h-auto justify-center items-center ${currentTheme === "dark" ? "bg-neutral-700" : "bg-neutral-400"}`}>
        <div className={`flex flex-col ${currentTheme === "dark" ? "bg-neutral-900 text-white" : "bg-white"} min-h-[240px] min-w-[350px] w-[20%] p-[20px] justify-center items-center shadow-xl rounded-lg duration-300 transform-all hover:translate-y-[-6px]`}>
            <IoCheckmarkCircle className="text-green-400 text-4xl"/>
            <p className="font-bold text-2xl pb-[10px]">Payment Successful!</p>
            <p className="text-center pb-[10px]">Thank you for your payment. Your order is being processed</p>
            <div className={`${currentTheme === "dark" ? "bg-white" : "bg-black"} w-[90%] h-[1px] opacity-30`}></div>
            <br></br>
            <br></br>
            <br></br>
            <p className="italic text-neutral-500 text-sm">Redirecting back to home page, please wait</p>
            <p className="text-sm">If the page not being redirected, click <a href="/" className="text-blue-400">here</a></p>
        </div>
    </div>
  )
}

export default PaymentSuccess
