
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import {Oval, TailSpin} from 'react-loader-spinner'

function Viewcomment() {
    

  const [loading, setloading] =  useState(false)

    const deleteUser = async (id) => {
        try{
          await axios.delete(`https://easy-crown-bull.cyclic.app/api/comment/${id}`);
          alert("Comment deleted.")
            }catch (err) 
        {
        console.log(err);
        alert("Unable to delete, Kindly refresh this page")
         }
         getComments();
      }
      const [getcomments, setgetcomments] =useState([])
    
      const getComments = async ()=> {
        axios.get("https://easy-crown-bull.cyclic.app/api/comment/")
        .then((res)=> {
          setgetcomments(res.data)
          setloading(true)
        })
        
        .catch((err)=> console.log(err))
        
      }
    
      
    useEffect(()=> {
      AOS.init({duration:2000})
    
    },[])
    
    useEffect(()=>{
        getComments()
      },[])
      console.log(getcomments)

     const LatestComment = getcomments.slice(0,1)
  return (
    <div>

{loading ? <div></div>:<div className="flex min-h-[320px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
{ getcomments.length === 0 ? 
      <div className={`min-h-[320px]   text-indigo-800 flex ${loading ? "block" : "hidden"} font-montserat justify-center items-center`}>No Lecture Available</div>  :
        LatestComment.map((comment, i)=>(
        <div key={i}>
          <div className={`shadow-sm ${loading ? "block" : "hidden"} p-2 w-[250px] m-3 rounded-xl mt-7 border-2 font-josefins border-[#7f030d] flex flex-col justify-center items-center rounded-lg"key={comment._id} data-aos="zoom-in`}>
            <ol className="text-sm font-semiold flex flex-col items-center justify-center text-[#7f030d]">
                <li>  <span className="text-center font-bold text-[#7f030d]  capitalize"> {comment.Name}</span> </li>
                <li>  <span className=" text-center font-semibold text-[#7f030d] " >{comment.School}</span> </li>
                <li>   <span className="italic text-center font-bold text-[#7f030d] " >{comment.Department}</span></li>
                <li>  <span className=" text-center font-semibold text-[#7f030d] " >Level: {comment.Level} </span> </li>
                <li>   <span className=" text-center text-[#7f030d] "><Typewriter 
             options={{
              loop:false,
              autoStart:true,
              delay: 50,
              strings:`${comment.Comment}`
             }}
           />
           </span> </li>
     </ol>
        </div>

         <div className='w-full justify-end flex text-indigo-800 text-xs  items-center p-2'>
         <button>
         <Link to={ {pathname:`/allcomments`}}  state={getcomments}>
          View all comments
         </Link>
         </button>
        </div>

      </div>
        ))
      
      }
    </div>
  )
}

export default Viewcomment