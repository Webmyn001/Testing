import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import PreviousMap from "postcss/lib/previous-map";
import React, { useEffect, useState } from "react";
import Buttons from "../Subcomponents/Buttons";
import { v4 as uuid } from 'uuid';
import { getFID } from "web-vitals";
import { BiRefresh } from "react-icons/bi";
import Back from "./Back";
import Footer from "./Footer";

const Gpcalc4 =({getinfo,calculate, getid})=>{
    const [info, setInfo] = useState({
        tittle : "",
        units : "",
        grade : "",
        id: "" ,
        
    })

    
    const [calc, setcalc] = useState([])
    const [calc2, setcalc2] = useState([])
    
    
    
    
    console.log(calc)
     console.log(calc2)
    
    const [summunits, setsumunits] = useState([])
    const [grade, setgrade] = useState([])

    const gradenum = grade.map( (gnum) => {
        return Number(gnum)
        
    })

    const snum = summunits.map((num) => {
        return Number(num)
    })

    const final = []
     
    for  (let i=0 ; i < gradenum.length ; i++){
       final.push(snum[i] * gradenum[i])
    }

    console.log(final)
    
    const add1 =(e)=> {
        setInfo({...info , tittle:e.target.value})
        
    }
    const add2 =(e)=> {
        setInfo({...info , units : e.target.value  })
        
    }
    const add3 =(e)=> {
        setInfo({...info , grade: e.target.value })
        
    }

    const every = snum.reduce(function (a,b){
        return a+b ; 
    },0)
 
    const totalpoint = final.reduce(function (a,b){
        return a+b;
    }, 0)
  
      const refreshpage = () => {
          window.location.reload(false)
      }
   
    const fill =(e)=>{
        e.preventDefault();
       
        const idv = uuid()
         
        setsumunits([...summunits, info.units])
        setgrade([...grade, info.grade])
        
        getinfo(info)
        setInfo({...info  , units:"", tittle:"" , id : idv })
        
         
         console.log(gradenum)
         console.log(snum)
         
    }
       
     
          console.log(info)


    const done =(e)=> {
       
        e.preventDefault()
       
          setcalc(every)
          setcalc2(totalpoint)
          calculate(every, totalpoint)
        console.log(every)
        console.log(totalpoint)
    }
    return(
        <div>
        <div className="bg-gradient-to-r from-[#815b5b] to-[#9e7676] h-full pt-5 flex flex-col items-center justify-center ">
            <h1 className="text-center text-[#fff8ea] font-bold text-2xl underline tracking-wide">Gp calculator 5.00</h1>
           
           
            <form className="flex flex-col justify-center items-center pb-1 py-5" onSubmit={fill}>
                
                <label className="italic text-[#fff8ea] text-xl py-1 ">Course Tittle</label>
                <input placeholder="Example MTH 101" value={info.tittle} onChange={add1}
                className=" border-[#594545] focus:outline-0 border-2 rounded-lg px-3 text-[#594545]"/>
                

            
                <label className="italic text-xl text-[#fff8ea] pt-4">Course Unit</label>
                <input type="number" value={info.units} onChange= {add2} 
                className="border-[#594545] focus:outline-0 border-2 rounded-lg px-3 text-[#594545]" />
                

                
                <label className="italic text-xl text-[#fff8ea] pt-4">Grade</label>
                <select onChange={add3} className="border-[#594545] focus:outline-0 border-2 rounded-lg px-3 text-[#594545] " >
                     <option value={false} className ="disabled:" >SELECT YOUR GRADE</option>
                    <option value="5" className="text-green-400">A</option>
                    <option value="4" className="text-green-600">B</option>
                    <option value="3" className="text-green-900">C</option>
                    <option value="2" className="text-red-200">D</option>
                    <option value="1" className="text-red-400">E</option>
                    <option value="0" className="text-red-700">F</option>
                </select>

              <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div >
                     <Buttons>Add</Buttons>
                 </div>
               
                 <div onClick={done} >
               <Buttons alternative={true}>Calculate</Buttons>
               </div>  
           
              
               
                
             </div>  

         </form>
            
            

         <div onClick={refreshpage} className="flex items-center
          cursor-pointer pb-10 justify-center text-xl tracking-wider  text-[#fff8ea]"> 
                
           <BiRefresh className="text-3xl"/>
            <h2>Reset</h2>
             </div>
             
        </div>
        
    
    </div>
    )
}

export default Gpcalc4