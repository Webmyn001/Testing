import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {

    const Links = [
        {name: "Breaking News",
         link : "/"
        },
        {name: "International News",
        link : "/international"
       },
        {name: " Health News",
         link : "/health"
        },
        {name: "Technology News",
         link : "/technology"
        },
        {name: "Sport News",
         link : "/sport"
        },
        
        
       
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                     
                     <div key={i}>
                          <li key={i} className={`"font-semibold text-xs tracking-wide hover:text-[#fde2f3]
                           ${props.alternative ? "hover:text-[#fde2f3]" :"hover:text-[#fde2f3]" }`} onClick={props.handleClick} >
                       <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                          </li>
                    </div>

                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks