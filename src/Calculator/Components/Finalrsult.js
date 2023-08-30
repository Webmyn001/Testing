import React from "react"
import Back from "./Back"
import Footer from "./Footer"

function Finalresult (props){
    const final = props.finalresult.toFixed(2)
    console.log(final)
    console.log(typeof final)
    return(
    <div className=" shadow-sm bg-gradient-to-r from-[#815b5b] to-[#9e7676]">
        <div className= " text-center p-10">
            { isNaN(final)   ? <h1></h1> : <h1 className=" border-4 border-[#fff8ea]
             inline bg-gradient-to-r from-[#815b5b] to-[#9e7676] font-bold text-xl shadow-md text-[#fff8ea]
             p-4 border-l-8 border-r-8 rounded-full">
                Your G.P.A is  {final}</h1>
              }
        </div>
           <Back/>
           <Footer/>
        </div>
    )
}

export default Finalresult