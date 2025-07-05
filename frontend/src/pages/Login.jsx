import CustomInput from "../components/CustomInput"
import {useLogin } from "../hooks/useLogin"

const Login = () => {
  const {passwordRef, emailRef, handleSubmit} = useLogin();

  return (
    <div className="flex flex-col justify-center items-center mt-[10%] max-md:mt-[20%]">
    <form action="POST" className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
      <CustomInput forLabel="email" label="Email" type="email" id="email" placeholder="example@mail.com"  ref={emailRef}/>
      <CustomInput forLabel="password" label="Password" type="password" id="password" placeholder="Enter your password" ref={passwordRef}/>
      <p>Don't have an account ? <a className="text-blue-400 font-semibold"  href="/register">Register</a> now</p>
      <button className="bg-blue-400 w-[100px] h-[30px] rounded-lg text-white transform ease-in-out transform hover:translate-y-[-4px] shadow-md cursor-pointer hover:shadow-lg mt-[20px] duration-300">Submit</button>
    </form>
    </div>
  )
}

export default Login
