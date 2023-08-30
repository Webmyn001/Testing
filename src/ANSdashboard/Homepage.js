import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";


function Homepage(props) {
 
 console.log(props.data)
 const result = props.data
 console.log(result)
 const deleteUser = async (id) => {
  // i want to do yes or no alert here
  alert("This lecture will be deleted")
  try{
    await axios.delete(`https://gold-busy-beaver.cyclic.app/api/lessons/${id}`);
    alert("Data deleted.")
    props.getList();
      }catch (err) 
  {
  console.log(err);
  alert("Unable to delete, Kindly refresh this page")
   }
}


  return (
    <div className='bg-gradient-to-t min-h-screen from-white to-[#fffadd]'>
      <div >
     <h1 className=" text-[#7f030d] text-center p-1 text-2xl font-bold">Webmyn Dashboard for Agricultural Genetics tutorials.</h1>
     </div>

     {
           result.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center">
                            <div  className="flex  bg-gradient-to-b  from-[#f3e1c1] to-[#fefbe9] flex-col rounded-lg items-center justify-center w-[400px] md:w-[500px]  shadow-2xl my-8 ">

                         
                            <img src={info.image1.url}
                             alt="..." className='rounded-lg object-cover py-4 w-[350px] md:w-[400px]' />

                              
                            <h1 className="text-2xl font-bold px-4 pt-1 pb-0 mt-1">  {info.Title} </h1>
                            <h1 className="text-2xl font-bold  px-4 pt-1 pb-0 mt-1">  {info.Subtitle} </h1>

                              
                              
                              
                              <div className="flex px-8  pb-2 text-[#7f030d] font-semibold w-full items-center justify-between">
                              
                             <Link to={ {pathname:`/fulldetails/${info._id}`}}  state={info}>
                              <h1 className="text-base sm:text-xl text-[#7f030d] hover:text-red-500 font-semibold pt-0 ">Full details</h1>
                              </Link>

                              <Link to={ `editpost/${info._id}`}>
                              <h1 className="text-base sm:text-xl text-[#7f030d] hover:text-red-500 font-semibold pt-0 ">edit</h1>
                              </Link>

                              <button onClick={()=>deleteUser(info._id)}
                              className="bg-red-500 text-base sm:text-xl text-white rounded-md px-2 py-1">Delete</button>
                            </div>   
                            </div>
                        </div>
                        ))
                    }

    </div>
  )
}

export default Homepage