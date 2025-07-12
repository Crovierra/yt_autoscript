import { useUser } from "../context/userContext"

export const useSubscription = () => {
    const { setSuccessPayment} = useUser()
    async function paymentIntent(priceId) {
        const token = sessionStorage.getItem("token")
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/api/stripe/pay`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                credentials: "include",
                body: JSON.stringify({priceId})
            })
            const data = await response.json()
            if(!response.ok) throw new Error(data.message)
                
            sessionStorage.setItem("payment", true)
            
            window.location.href= data.url

            
            console.log("Success creating payment intent")
        } catch (error) {
            console.log("Failed to create payment intent :", error.message)
        }
    }

    return {paymentIntent}
}