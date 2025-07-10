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
    <div className={`flex flex-row justify-between items-center h-[80px] px-[10%] drop-shadow-xs max-md:px-[5%] z-[1] fixed top-0 right-0 left-0 ${currentTheme === "dark" ? "bg-neutral-900" : "bg-white"} duration-300`}>
  <div className="flex flex-row gap-2">
    <BsFillBadgeCcFill className="text-blue-400 w-[40px] h-[40px]" />
    <h1 className={`font-bold text-3xl ${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"}`}>
      <a href="/">YT Autoscript</a>
    </h1>
  </div>

  {/* Hamburger Menu for Mobile */}
  <div className="sm:hidden flex items-center gap-4">
    {currentUser && (
        <button className="cursor-pointer" onClick={updateTheme}>
          {currentTheme === "dark" ? <IoIosPartlySunny className="text-orange-400 cursor-pointer" /> : <FaMoon />}
        </button>
      )}
    <button id="hamburger-button" className="text-2xl text-gray-600 cursor-pointer" onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

  {/* Normal Navbar Links (For Larger Screens) */}
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

  {/* Mobile Menu (Hidden by default) */}
  <div id="mobile-menu" className={`sm:hidden hidden absolute top-20 ${currentTheme === "dark" ? "bg-neutral-900" : "bg-white"} left-0 w-full bg-opacity-50 h-400px p-3`}>
    <nav className={`flex flex-col items-center ${currentTheme === "dark" ? "text-white" : "text-black"} space-y-4`}>
      <a href="/" className={`${currentTheme === "dark" ? "hover:text-sky-300" : "hover:text-blue-400"}`}>Home</a>
      <a href={currentUser && userTranscript ? "/transcript_success" : "/instruction"} className={`${currentTheme === "dark" ? "hover:text-sky-300" : "hover:text-blue-400"}`}>
        {currentUser && userTranscript ? "Transcript" : "How it works"}
      </a>
      <a href="/about_us" className={`${currentTheme === "dark" ? "hover:text-sky-300" : "hover:text-blue-400"}`}>About</a>
      {currentUser ? (
        <button className={`cursor-pointer ${currentTheme === "dark" ? "hover:text-sky-300" : "hover:text-blue-400 "} pb-[5px]`} onClick={logout}>Logout</button>
      ) : (
        <a href="/login" className={`${currentTheme === "dark" ? "hover:text-sky-300" : "hover:text-blue-400"} pb-[5px]`}>Login</a>
      )}
    </nav>
  </div>
</div>
  )
}

export default Navbar
