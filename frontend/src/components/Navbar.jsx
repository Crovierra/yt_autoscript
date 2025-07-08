import { FaMoon } from "react-icons/fa6";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { useUser } from '../context/userContext.jsx';
import { IoIosPartlySunny } from "react-icons/io";
import { useCurrentTheme } from "../context/themeContext.jsx";
import { useTheme } from "../hooks/useTheme.js";

const Navbar = () => {
  const { currentUser, logout, userTranscript} = useUser()
  const { currentTheme } = useCurrentTheme()
  const { updateTheme } = useTheme()

  return (
    <div className={`flex flex-row justify-between items-center  h-[80px] px-[10%] drop-shadow-xs max-md:px-[5%] fixed top-0 right-0 left-0 ${currentTheme === "dark" ? "bg-neutral-900" : ""} duration-300`}>
    <div className="flex flex-row gap-2">
      <BsFillBadgeCcFill className="text-blue-400 w-[40px] h-[40px]"/>
      <h1 className={`font-bold text-3xl ${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"}`}><a href="/">YT Autoscript</a></h1>
    </div>
      <ul className={`flex flex-row justify-evenly items-center gap-5 max-sm:hidden max-md:gap-3 ${currentTheme === "dark" ? "text-white" : ""}`}>
        <li><a href="/">Home</a></li>
        <li>{currentUser && userTranscript ? <a href="/transcript_success">Transcript</a> : <a href="/instruction">How it works</a>}</li>
        <li><a href="/about_us">About</a></li>
        {currentUser ? (
          <>
          <li><button className='cursor-pointer' onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
          <li><a href="/login">Login</a></li>
          </>
        )}
        <li><button className={`cursor-pointer pt-[5px] ${currentUser ? "" : "hidden"}`} onClick={updateTheme}>{currentTheme === "dark" ? <IoIosPartlySunny className="text-orange-400"/> :<FaMoon/>}</button></li>
      </ul>
    </div>
  )
}

export default Navbar
