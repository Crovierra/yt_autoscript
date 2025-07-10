import CustomInput from "../components/CustomInput"
import {useCurrentTheme} from "../context/themeContext"
import { useRegister } from "../hooks/useRegister"

const Register = () => {
  const {newRegister, passwordRef, emailRef, nameRef, regisLoading, registerError} = useRegister()
  const {currentTheme } = useCurrentTheme()
  return (
    <div className={`flex flex-col justify-center items-center w-screen h-screen max-md:mt-[20%] ${currentTheme === "dark" ? "bg-neutral-700 text-white" : ""} duration-300`}>
    <form action="POST" className="flex flex-col gap-2 items-center" onSubmit={newRegister}>
      <CustomInput ref={nameRef} forLabel="name" label="Name" type="text" id="name" placeholder="John Travolta" theme={currentTheme === "dark" ? "bg-neutral-900" : ""} />
      <CustomInput ref={emailRef} forLabel="email" label="Email" type="email" id="email" placeholder="example@mail.com" theme={currentTheme === "dark" ? "bg-neutral-900" : ""} />
      <CustomInput ref={passwordRef} forLabel="password" label="Password" type="password" id="password" placeholder="Enter your password" theme={currentTheme === "dark" ? "bg-neutral-900" : ""}/>
      <p>Don't have an account ? <a className={`${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"} font-semibold`}  href="/register">Login</a> now</p>
      { registerError ? <p className="text-red-500">{registerError}</p> : null}
      <button className="bg-sky-400 w-[100px] h-[30px] rounded-lg text-white transform ease-in-out transform hover:translate-y-[-4px] shadow-md cursor-pointer hover:shadow-lg mt-[20px] duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={regisLoading}>{regisLoading ? "Loading" : "Submit"}</button>
    </form>
    </div>
  )
}

export default Register
