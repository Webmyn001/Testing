import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

function Homepage(props) {

    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])
  return (
    <div className='text-[#1a456e]'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c] mt-2 py-[2px]'>Islamic Affairs Board (mssnoau)</h1>
       <h1 className='text-center font-bold text-xl font-josefins pt-4 '>Daily Reminder</h1>
  
       <div className='min-h-screen flex flex-col gap-2 justify-center items-center'>
        
       <div className='flex flex-col justify-start w-full p-4 sm:justify-center sm:items-center'>
          <h3>{props.list[0].date}</h3>
        </div>
      

                <img src={props.list[0].Image} alt={props.list[0].Title} className="rounded-xl shadow-2xl  w-[320px] h-[400px] sm:w-[400px] sm:h-[450px] object-cover" data-aos="zoom-in"/>

                <h1 className='p-3 font-bold pt-9'>{props.list[0].Title}</h1>
                <h1 className='p-3 font-medium'>{props.list[0].Content1}</h1>
                <h1 className='p-3 font-meduim'>{props.list[0].Content2}</h1>
                <h1 className='p-3 font-meduim'>{props.list[0].Conclusion}</h1>

       </div>
       
    </div>
  )
}

export default Homepage