import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import Buttons from "../Subcomponents/Buttons";
import Footer from "./Footer";

import Swipercomponent from "./Swiper";

 const Home =()=> {
     
    const [date, setDate] = useState(new Date())
   
     useEffect(()=> {
      var timer = setInterval(()=>setDate(new Date()), 1000)

      return function cleanup() {
         clearInterval(timer)
      }
     })
    return(
        <div className=" bg-gradient-to-tr from-[#815b5b] to-[#9e7676] w-full h-full shadow-sm ">
          <h1 className="text-center font-bold text-[#fff8ea]  text-2xl md:text-3xl animate-pulse tracking-wider pt-[50px]">
         G.P.A  Calculator</h1>
        
         <Swipercomponent />
         
          <p className="text-[#fff8ea] text-center p-4 text-2xl">
             Have you been looking for an easy way to compute your G.P.A ?
          <br/>
           You are in the right place, kindly click the <strong>Get started</strong> button to start using the Calculator. 
           </p>
          <div className="flex items-center justify-center gap-x-4 mt-4 md:pb-[50px] pb-[30px]">
        
        
          <Link to="/docs">
          <Buttons>Learn more</Buttons>
          </Link>
         
         <Link to="/getstarted" >
         <Buttons alternative={true}>Get started</Buttons>
         </Link>
      
       </div>
           
           <Footer/>
        </div>
    )
 }

 export default Home