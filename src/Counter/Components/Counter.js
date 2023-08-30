import React from "react"
import { useState } from "react"

function Counter ({setInitial,initial}) {


    const increament =()=>{
        setInitial(initial+1)
    }
    const decrement =()=>{
        setInitial(initial-1)

    }

    const restart =()=>{
        setInitial(0)
    }
    return(
        <div className=" flex items-center justify-center gap-x-5 pt-[40px] " >
            <button className="bg-[#EB5E28] focus:outline-0 rounded-2xl text-2xl  hover:shadow-[0px_11px_26px_#eb5e28]
            font-bold text-white px-4 hover:border-2 hover:border-[#3f3e3e] duration-500 transition-all py-2"
                 onClick={decrement}>-</button>
            <button className="bg-[#EB5E28] focus:outline-0 hover:shadow-[0px_11px_26px_#eb5e28]
             rounded-2xl text-2xl font-bold text-white px-4 hover:border-2 hover:border-[#3f3e3e] py-2 duration-500 transition-all " onClick={increament}  >+</button>
            <button className="bg-[#3f3e3e]  focus:outline-0 rounded-lg text-white 
            font-serif font-semibold hover:shadow-[0px_11px_26px_#3F3E3E] duration-500 transition-all  py-2 px-5" onClick={restart} > Restart </button>


        </div>
    )
}

export default Counter