import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Comments() {

  // this is to go back to users in order to post comment 

  const deleteUser = async (id) => {
    try{
      await axios.delete(`https://gold-busy-beaver.cyclic.app/api/comment/${id}`);
      alert("Comment deleted.")
        }catch (err) 
    {
    console.log(err);
    alert("Unable to delete, Kindly refresh this page")
     }
     getComments();
  }
  const [getcomments, setgetcomments] =useState([])

  const getComments = async ()=> {
    axios.get("https://gold-busy-beaver.cyclic.app/api/comment/")
    .then((res)=> setgetcomments(res.data) )
    .catch((err)=> console.log(err))
    
  }

  useEffect(()=>{
    getComments()
  },[])
  return (
    <div className='bg-gradient-to-t min-h-screen from-white to-[#fffadd] flex flex-col items-center '>
      

      <h1 className='font-bold text-xl pt-5 text-[#7f030d] text-center'> Comments from the Users.</h1>
      {
        getcomments.map((comment)=>(
          <div key={comment._id} className=" w-[350px] border border-[#5a5542] mb-3 rounded-md px-3 py-3 shadow-2xl flex flex-col justify-center items-center">
      <h1 className='font-semibold text-xs px-3 '>{comment.Name}</h1>
      <h1 className='font-semibold text-xs px-3 '>{comment.Comment}</h1>

      <button onClick={()=>deleteUser(comment._id)}
      className="bg-[#7f030d] text-[#fefbe9] mt-3 rounded-md px-2 py-1">Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default  Comments