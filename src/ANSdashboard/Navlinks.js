import React from "react";
import {Link} from "react-router-dom"
function Navlinks (props) {
    const Links = [
        {
            name:"Home",
            link:"/dashboard"
        },
        {
            name:"post lectures",
            link:"/post"
        },
        
        {
            name:"Comment",
            link:"/Comments"
        },
        
    ]
    return(
        <>
               {Links.map((link,i) => (
                <li key={i} className="font-semibold text-[#fff8ea] hover:text-[#1047dfaf]">
                
                <Link to={link.link} onClick={props.handleClick} >{link.name} </Link> 
                </li>
               ))
               
               }
        </>
    )
}

export default Navlinks