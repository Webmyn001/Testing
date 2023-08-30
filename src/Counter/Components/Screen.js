import React from "react"

function Screen (props) {
    return(
        <div className="bg-white mx-2 h-[70px]  flex items-center justify-center rounded-[10px] shadow-[0px_11px_26px_#0000000d]">                       
            <h3 className="text-[#EB5E28]  text-xl font-medium py-2 px-2">You Counted {props.initial}</h3>
        </div>
    )
}

export default Screen