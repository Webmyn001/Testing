import React from "react";
import {Link} from "react-router-dom"
function Navlinks (props) {
    const Links = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"Lessons",
            link:"/lesson"
        },
        
        {
            name:" About Us",
            link:"/about"
        },
          
        {
            name:"Dashboard",
            link:"/dashboard"
        },
        
    ]
    return(
        <>
               {Links.map((link,i) => (
                <li key={i} className="font-semibold text-[#fff8ea] hover:text-[#6a7880]">
                
                <Link to={link.link} onClick={props.handleClick} >{link.name} </Link> 
                </li>
               ))
               
               }
        </>
    )
}

export default Navlinks