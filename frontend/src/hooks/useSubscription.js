export const useSubscription = () => {
    async function paymentIntent(subsPrice) {
        const token = sessionStorage.getItem("token")
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/api/stripe/create_subscription`,{
                method: "POST",
                headers: {"Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                credentials: "include",
                body: JSON.stringify(subsPrice)
            })
            const data = await response.json()
            if(!response.ok) throw new Error(data.message)
            
            console.log("Success creating payment intent")
        } catch (error) {
            console.log("Failed to create payment intent :", error.message)
        }
    }

    return {paymentIntent}
}