export const useLogout = () => {
    async function handleLogout(){
    try {
        const token = sessionStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json",
                "Authorization" : `BEARER ${token}`
            }
        })

        const data = await response.json()
        if(!response.ok){
            throw new Error(data.message)
        }
        sessionStorage.removeItem("token")
        console.log("Logout successfully", data)
    } catch (error) {
        throw new Error(error.message)
    }
    }

    return {handleLogout}
}