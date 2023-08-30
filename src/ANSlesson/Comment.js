import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
 

function Comment() {
// post comment
    const navigate = useNavigate();
    
  const [Name, setName]= useState("")
  const [School, setSchool]= useState("")
  const [Department, setDept]= useState("")
  const [Level, setLevel]= useState("")
  const [Comment, setcomment]= useState("")



  const submit = (e) => {
    e.preventDefault()
   
   


    axios.post(`https://gold-busy-beaver.cyclic.app/api/comment/addcomment`,{Name,School,Department,Level,Comment})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/dashboard");
    alert("form submitted succesfully")
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form")
    })
 }


  const OnchangeComment = (e) => {
    setcomment(e.target.value)
  };
  const OnchangeName = (e) => {
    setName(e.target.value)
  };
  const OnchangeSchool = (e) => {
    setSchool(e.target.value)
  };
  const OnchangeDept = (e) => {
    setDept(e.target.value)
  };
  const OnchangeLevel = (e) => {
    setLevel(e.target.value)
  }
console.log(Name, Level, Department)
  const [getcomments, setgetcomments] =useState([])
  console.log(getcomments)
  const getComments = async ()=> {
    axios.get("https://test-backend-seven.vercel.app/api/comment/")
    .then((res)=> setgetcomments(res.data) )
    .catch((err)=> console.log(err))
    
  }

  useEffect(()=>{
    getComments()
  },[])
  return (
    <div className='bg-gradient-to-t min-h-screen from-white to-[#fffadd]'>
      <h1 className='font-semibold text-center pt-3 text-base text-[#7f030d] '>Kindly drop your comments about the lectures</h1>
      <form onSubmit={submit} encType="multipart/form-data"
       className="flex flex-col px-5 text-[#7f030d] justify-center  sm:items-center items-start " >
      
      <label className=" font-semibold  pt-3 text-xl py-1 ">Name </label>
       <input placeholder="Name"  value={Name} onChange={OnchangeName}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
     <label className=" font-semibold  pt-3 text-xl py-1 ">School </label>
       <input placeholder="School"  value={School} onChange={OnchangeSchool}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                <label className=" font-semibold  pt-3 text-xl py-1 ">Department </label>
       <input placeholder="Department"  value={Department} onChange={OnchangeDept}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/> 
                <label className=" font-semibold  pt-3 text-xl py-1 ">Level </label>
       <input placeholder="Level"  value={Level} onChange={OnchangeLevel}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
      
      <textarea placeholder=" Your Comment ... " value={Comment} onChange={OnchangeComment} 
     className= " border-[#130e0e] mt-3 focus:outline w-[300px] h-[100px] border-2 rounded-lg px-3 text-[#594545]"/>

         <button className='bg-[#7f030d] px-2 mt-3 py-2 rounded-md text-white'>Post</button>
      </form>
     
                  
                  <h1 className='text-xl text-[#7f030d] pt-[50px] font-bold text-center'>Comments </h1>

                  {
        getcomments.map((comment)=>(
          <div key={comment._id} className=" w-full pt-5 flex flex-col justify-center items-center">
          <div key={comment._id} className=" w-[400px] text-[#221a1a] border border-[#4e4344] mb-3 rounded-md px-3 py-3 shadow-2xl flex flex-col justify-center items-center">
      <h1 className='font-bold text-base px-3 '>{comment.Name}</h1>
      <h1 className='font-semibold text-base px-3 '>{comment.School}</h1>
      <h1 className='font-semibold text-base px-3 '>{comment.Department} {comment.Level}</h1>
      <h1 className=' text-base italic px-3 '>{comment.Comment}</h1>

          </div>
          </div>
        ))
      }
    </div>
  )
}

export default Comment