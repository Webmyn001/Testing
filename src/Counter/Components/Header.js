import React from "react"
import {  useState } from "react"

import logo from "./Image/Mylogo.jpg"
 function Header () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}
    return(
        <div>
            
                     {/* large screen */}
          <div className=" bg-[#EB5E28] flex items-center justify-center h-[60px]">
            {/* logo */}
            <a href="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-[60px] p-2 rounded-full"/>
           </a>

            <h1 className=" text-white text-center p-1 font-semibold">Counter Web App</h1>
               
          </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Header