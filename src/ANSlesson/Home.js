import React, { useEffect, useState }  from "react";
import { Link,  } from "react-router-dom";
import HomeImage from "./HomeImage";




 const Home =()=> {
     
 
   
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
     setOpen(true)
     },3000)
    },[])

    return(
        <div className="bg-gradient-to-t min-h-screen text-[#7f030d] from-white to-[#fffadd] shadow-sm ">
                {/* date and time */}
       

          <h1 className="text-center font-bold  text-2xl md:text-3xl 
           tracking-wider pb-5 ">
         <span className={`${open? "text-[#7f030d]" : "text-[#3eb361]"} font-serif`}>Agricultural</span> 
          <span className={`${open? "text-[#3eb361]" : "text-[#7f030d]"} font-serif`}>Genetics</span></h1>
                         
              

        {/* Home image */}
    <div className="md:flex md:gap-x-5 md:flex-row flex flex-col items-center justify-center gap-y-5">
        
        <div><HomeImage/></div>
          
          <div className="w-[350px] sm:w-[400px] md:w-[500px] flex flex-col"> 
         <h2 className="text-[#7f030d] text-xl text-center p-4 font-semibold ">
             Agricultural Genetics deals with the study of .............
           
         <h2 className="pt-4 text-sm"> 
           Kindly <Link to="/lesson"> 
           <button className="text-[#1048a9]">Click here</button></Link> to 
           veiw lectures available.
            </h2>

            <h2 className="pt-4 text-sm"> 
           You can also <Link to="/comment"> 
           <button className="text-[#1048a9]">Click here</button></Link> to 
           drop your comments about the lectures .
            </h2>
       </h2>
       
         </div>
      
     </div>
        
 </div>
    )
 }

 export default Home