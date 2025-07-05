import { FaMoon } from "react-icons/fa6";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { useUser } from '../context/userContext.jsx';
import { IoIosPartlySunny } from "react-icons/io";

const Navbar = () => {
  const {darkTheme, changeTheme, currentUser, logout} = useUser()

  return (
    <div className="flex flex-row justify-between items-center w-screen h-[80px] px-[10%] drop-shadow-xs">
    <div className="flex flex-row gap-2">
      <BsFillBadgeCcFill className="text-blue-400 w-[40px] h-[40px]"/>
      <h1 className="font-bold text-3xl text-blue-400">YT Autoscript</h1>
    </div>
      <ul className="flex flex-row justify-evenly items-center gap-5">
        <li><a href="/">Home</a></li>
        <li><a href="/instruction">How it works</a></li>
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
        <li><button className="cursor-pointer pt-[5px]" onClick={changeTheme}>{darkTheme ? <IoIosPartlySunny className="text-orange-400"/> :<FaMoon />}</button></li>
      </ul>
    </div>
  )
}

export default Navbar
