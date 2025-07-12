import CustomInput from "../components/CustomInput"
import { useCurrentTheme } from "../context/themeContext";
import {useLogin } from "../hooks/useLogin"

const Login = () => {
  const {passwordRef, emailRef, handleSubmit, loginError, loading} = useLogin();
  const { currentTheme } = useCurrentTheme()
  return (
    <div className={`flex flex-col justify-center items-center ${currentTheme === "dark" ? "bg-neutral-700 text-white" : ""} duration-300`}>
    <form action="POST" className="flex flex-col gap-2 items-center min-h-screen px-[20%] py-[100px] justify-center overflow-h-auto" onSubmit={handleSubmit}>
      <CustomInput forLabel="email" label="Email" type="email" id="email" placeholder="example@mail.com" theme={currentTheme === "dark" ? "bg-neutral-900" : ""}  ref={emailRef}/>
      <CustomInput forLabel="password" label="Password" type="password" id="password" placeholder="Enter your password" theme={currentTheme === "dark" ? "bg-neutral-900" : ""} ref={passwordRef}/>
      <p className="text-center">Don't have an account ? <a className={`${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"} font-semibold`}  href="/register">Register</a> now</p>
      {loginError ? <p className="text-red-500">{loginError}</p> : null}
      <button className="bg-sky-400 w-[100px] h-[30px] rounded-lg text-white transform ease-in-out transform hover:translate-y-[-4px] shadow-md cursor-pointer hover:shadow-lg mt-[20px] duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={loading}>{loading ? "Loading" : "Submit"}</button>
    </form>
    </div>
  )
}

export default Login
