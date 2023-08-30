
import React, { useEffect } from "react";

import {Link, useLocation} from "react-router-dom"

import Footer from "./Footer";


import AOS from "aos";
import "aos/dist/aos.css";

function Newsdetails (props) {
    
    const location = useLocation()
     const data = location.state

     console.log(data)
       
useEffect(()=> {
  AOS.init({duration:2000})

},[])
       return (
        
          <div className=" bg-[#fde2f3] text-[#2a2f4f]">
            <div className=" flex items-center text-[#2a2f4f] justify-center ">
               <div className="flex flex-col items-center  max-w-[400px] sm:max-w-[500px] md:max-w-[800px] shadow-2xl justify-center">
             <h1 className="font-bold text-xl p-5"> {data.title}</h1>
             
             <h1 className="font-semibold text-xl p-5"> {data.description}</h1>

             <img src={data.image_url} alt="Sorry! Not Found" className={`"rounded-sm h-[350px] text-xl
             object-cover  shadow-sm my-5 w-[350px] sm:w-[600px] ${data.image_url===null? "hidden" : "block" } sm:h-[500px] w-[350px]"`} data-aos="zoom-in"/>

             <h1 className=" text-[16px] font-normal text-[#2a2f4f]  px-5"> {data.content}</h1>
                
             <div className="flex flex-col items-start pl-5 pb-3 pt-4 text-[#2a2f4f] font-semibold w-full justify-center">
                              <p> Source : {data.source_id}</p>
                              <p> Published at : {data.pubDate}</p>

                   </div>
                
            <div className="flex flex-col  items-center max-w-[400px] mb-5 justify-">
                   <div>
                  
                     <a href={data.link} className="text-center text-xs font-bold hover:text-black text-red-500 ">Continue reading ...</a>
                   </div>
                   <div>
                   <Link to="/">
                   <button className="bg-[#2a2f4f] border-2 border-[#2a2f4f] px-2 mt-4 py-1 text-[#fde2f3] font-bold font-mono
                   tracking-wide hover:bg-black hover:text-red-500 rounded-full">Back</button>
                   </Link>

                   </div>
                  
                </div>

                   

                </div>
                
                  
                   

                 
             </div>
              <Footer/>

            </div>
              );
                   }

     export default Newsdetails;
