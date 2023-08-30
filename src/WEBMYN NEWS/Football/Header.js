import React from "react"
import {  useState } from "react"
import { Link } from "react-router-dom";


import Navlinks from "./Navlinks"
import logo from "../Images/Mylogo.jpg"
import {FaBars,FaTimes} from "react-icons/fa"

 function Header () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}
    return(
        <div>
            
                     {/* large screen */}
          <div className="bg-[#2a2f4f] flex text-[#fde2f3] h-[60px]">
            {/* logo */}
            <div>
            <Link to="/"> 
              <div className="flex gap-x-4 items-center">
              <img src={logo} alt="logo" className="h-[55px] p-1 cursor-pointer rounded-lg"/>
                <h1 className="text-xs sm:text-xl font-semibold  "> Webmyn News  </h1>
                </div>   
               </Link> 
             </div>
               
            
             <ul className=" hidden md:flex md:w-full md:px-2 md:gap-x-6 md:justify-end md:items-center">
           <Navlinks />
           </ul>

          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-[#2a2f4f] bg-opacity-95 w-2/3 h-[400px] right-0 shadow-2xl
                  flex flex-col gap-10 text-medium p-7 pt-20 rounded-2xl ease-in-out duration-500
                   ${open ? "top-0" : "right-[-200%]"}`}>
                    <Navlinks alternative={true} handleClick={handleClick} />
                  </ul>
           
                             {/* toggling icon */}
                  <div className="z-50 md:hidden text-[#fde2f3] cursor-pointer pr-8 flex w-full justify-end items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>
           
     </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Header