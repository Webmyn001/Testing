import React from "react";


const Result = (props) => {
   
  
 
        
        

    
         const renderresult= props.master.map( (result )=>{
            const unique = result.id
           console.log(unique)
            
          
            return (
                
                <div className="shadow-sm bg-gradient-to-r from-[#815b5b] to-[#9e7676]
                  p-5  border-l-8 border-2 border-[#594545] flex justify-between rounded-lg" key={unique}>
                       
                        
                   
                    <ol className="text-xl font-semiold tracking-wide text-[#fff8ea] " >
                        <li>Course Title: <span className="italic font-bold text-[#fff8ea] capitalize"> {result.tittle}</span> </li>
                        <li> Course Units: <span className="italic font-bold text-[#fff8ea]">{result.units}</span> </li>
                        <li>Grade Point:   <span className="italic font-bold text-[#fff8ea]">{result.grade}</span></li>
                        
            
                    </ol>


                </div>
            )

         })
    
    

    return(
        <div className="shadow-sm bg-gradient-to-r from-[#815b5b] to-[#9e7676] "> 
        {props.calc2.length === 0 ? <h1></h1> :<h1 className=" text-center font-bold tracking-wide text-2xl text-[#fff8ea]  underline">Your Results</h1>}
         <div className="flex gap-6 flex-col  p-6  bg-gradient-to-r from-[#815b5b] to-[#9e7676] ">
         {renderresult}
            </div>  
        {console.log(props.calc2)}
          {console.log(typeof props.calc2.length)}
        
              { props.calc2.length === 0 || typeof props.calc2 === undefined ? <h1></h1>:  
               <div className="shadow-sm bg-gradient-to-r from-[#815b5b] to-[#9e7676]
                text-center border-2 border-l-8 border-r-8 rounded-lg mb-0 m-5 text-[#fff8ea]   text-xl 
                font-bold italic border-[#594545]">
                 <h1>Total Credit Unit   = {props.calc}</h1> 
                 <h1>Total Quality Point =  {props.calc2}</h1>
               </div> }
              
        
        
        </div>
    )
}

export default Result