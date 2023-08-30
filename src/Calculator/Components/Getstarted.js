import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../Subcomponents/Buttons";
import Back from "./Back";
import Footer from "./Footer";

const  Getstarted =()=>{
    
     
    return(
        <div  className="shadow-sm bg-gradient-to-tr from-[#815b5b] to-[#9e7676] min-h-screen">
        <div className="flex flex-col items-center justify-center  py-7">
           <h1 className="text-center text-2xl font-bold py-10 text-[#fff8ea] underline px-3"> Kindly select the
            type of Grading System you are using</h1>
   <div className="flex flex-col items-center justify-center gap-6 italic text-xl">
            
            
            <div >
                <Link to = "/result4">
                <Buttons alternative={true}> 4.00 Grading System </Buttons>
                </Link>
            </div>

            <div >
                <Link to = "/result5">
                <Buttons alternative={true}> 5.00 Grading system</Buttons>
                </Link>
            </div>

            <div >
                <Link to ="/result7">
                <Buttons alternative={true}> 7.00 Grading system</Buttons>
                </Link>
            </div>
            
            
     </div>
            
               
                
     
     </div>

     <div className="pt-[100px]">
     <Back/>  
     </div>
     
     
</div>
    )
}

export default Getstarted 