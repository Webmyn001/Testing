import React from "react";

const Buttons = ({children,alternative}) => {
    return(
    
        <button className={ `px-4 py-3 ${alternative ? "bg-[#594545] border-[#594545] hover:border-[#fff8ea] hover:text-[#594545]" 
        :"bg-[#594545] focus:outline-0  border-[#594545] hover:border-[#fff8ea] hover:text-[#594545] transition-all duration-500"}
          hover:bg-white hover:text-gray-500 border-2 focus:outline-0 rounded-full text-white tracking-wide shadow-2xl`}> 
        {children}
        </button>


    )
}

export default Buttons