import React from "react";
import {AiOutlineCopyright} from "react-icons/ai"

 function Footer () {
    return (
        <div className="text-[#fde2f3]  w-full h-[80px] text-base font-sans tracking-wider bg-[#2a2f4f]">
            <div className="flex flex-col justify-center items-center pt-3 ">
                <h1 className="flex items-center font-semibold gap-x-1"> Webmyn <span><AiOutlineCopyright/></span> 2023</h1>
                <h1>bellomuhyideen0001@gmail.com</h1>
            </div>
        </div>
    )
 }

  export default Footer