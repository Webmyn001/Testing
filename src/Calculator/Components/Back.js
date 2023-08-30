import React from "react";
import {BsArrowLeft} from "react-icons/bs"
import { Link } from "react-router-dom";
const Back = () => {
    return(
        <div>
           
            <div className="flex space-x-3 items-center justify-end p-4 ">
            <Link to="/" >
            <BsArrowLeft/>
            <h1 className="text-sm text-[#fff8ea] font-mono">Back to Home page</h1>
            </Link>
            </div>
    
        </div>
    )
}

export default Back