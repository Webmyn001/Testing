import React from "react";
import {Link} from "react-router-dom"
function Navlinks (props) {
    const Links = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"Docs",
            link:"/docs"
        },
        {
            name:"Get started",
            link:"/getstarted"
        },
        {
            name:"About",
            link:"/about"
        },
        
    ]
    return(
        <>
               {Links.map((link,i) => (
                <li key={i} className="font-semibold text-[#fff8ea]">
                
                <Link to={link.link} onClick={props.handleClick} >{link.name} </Link> 
                </li>
               ))
               
               }
        </>
    )
}

export default Navlinks