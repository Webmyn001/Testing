import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Formdetails() {
  
  const [Title, setTitle] = useState("")
  const [Subtitle, setSubtitle] = useState("")
  const [Body1, setBody1] = useState("")
  const [Body2, setBody2] = useState("")
  const [Body3, setBody3] = useState("")
  const [image1, setimage1] = useState("")
  const [image2, setimage2] = useState("")
  const [image3, setimage3]= useState("")
  const [Body4, setBody4]= useState("")

  const navigate = useNavigate();
  

  const saveForm = async (e) => {
    e.preventDefault();
     
    const formData = new FormData()

    formData.append("Title",Title);
    formData.append("Subtitle",Subtitle);
    formData.append("Body1",Body1);
    formData.append("Body2",Body2);
    formData.append("Body3",Body3);
    formData.append("image1",image1);
    formData.append("image2",image2);
    formData.append("image3",image3);
    formData.append("Body4",Body4);


    axios.post("https://test-backend-seven.vercel.app/api/lessons/", formData)
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
  
   


const Onchangetitle =(e)=> {
        setTitle(e.target.value)
    }

    const Onchangesubtitle =(e)=> {
      setSubtitle(e.target.value)
  }
  const OnchangeBody1 =(e)=> {
    setBody1(e.target.value)
}

const OnchangeBody2 =(e)=> {
  setBody2(e.target.value)
}

const OnchangeBody3 =(e)=> {
  setBody3(e.target.value)
}

const OnchangeBody4 =(e)=> {
  setBody4(e.target.value)
}

 const Onchangeimage1 = e => { 
  setimage1(e.target.files[0]);
 }

 const Onchangeimage2 = e => { 
  setimage2(e.target.files[0]);
 }
 const Onchangeimage3 = e => { 
  setimage3(e.target.files[0]);
 }
console.log(Title, Subtitle, Body1, Body2, Body3,Body4)
  return (
    <div className='bg-gradient-to-t min-h-screen  from-white to-[#fffadd] '>
       <h1 className='text-xl text-center py-2 font-bold text-[#7f030d] px-7'>Post New Lectures.</h1>
       <form className="flex flex-col justify-center
       items-start sm:flex sm:items-center px-7  pb-5"
       onSubmit={saveForm} encType="multipart/form-data">
                
                <label className=" font-semibold text-[#7f030d] pt-3 text-xl py-1 ">Title </label>
                <input placeholder="Topic"  value={Title} onChange={Onchangetitle}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className="font-semibold pt-3 text-[#7f030d] text-xl py-1 ">Subtitle</label>
                <input placeholder="Sub-title" value={Subtitle} onChange={Onchangesubtitle}
                className=" border-[#0b0f11]  focus:outline-0 border-2 mb-3 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>

                <label className="  text-[#7f030d] font-semibold pt-3 py-1 ">first body</label>
                <textarea placeholder="First paragraph" value={Body1} onChange={OnchangeBody1}
                className=" border-[#0b0f11] h-[100px] w-[350px] text-[#20201f] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 "/>

                <label className=" text-[#7f030d]  font-semibold py-1 ">Second body</label>
                <textarea  value={Body2} onChange={OnchangeBody2}  placeholder="Second paragraph"
                className=" border-[#0b0f11] focus:outline-0 border-2
                 sm:w-[400px] w-[350px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                <label className=" text-[#7f030d] py-1 font-semibold">Third body</label>
                <textarea  value={Body3} onChange={OnchangeBody3}  placeholder="Third paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[350px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                

                <h1 className='pt-5 text-[#7f030d] pb-1 font-semibold text-xl'>Images</h1>
               <label htmlFor='file'  className=" text-[#7f030d] py-1 font-semibold ">First image</label>
                <input  type='file'  name='image1' onChange={Onchangeimage1}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] border-2 rounded-lg px-3 text-[#20201f]"/>

              <label htmlFor='file'  className=" text-[#7f030d] py-2 font-semibold">Second image</label>
                <input  type='file'  name='image2' onChange={Onchangeimage2}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] border-2  rounded-lg px-3 text-[#20201f]"/>

             <label htmlFor='file'  className=" text-[#7f030d] py-2 font-semibold ">Third image</label>
                <input  type='file'  name='image3' onChange={Onchangeimage3}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] border-2 rounded-lg px-3 text-[#0f0e0c]"/>
                    
               <label className=" text-[#7f030d] py-1 font-semibold pt-7">Conclusion</label>
                <textarea  value={Body4} onChange={OnchangeBody4} 
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[350px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                
                
                <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div >
                     <button className="bg-[#7f030d] text-white rounded-md px-3 py-2">Submit</button>
                 </div>
               </div>  

         </form>
      



    </div>
  )
  }

  export default Formdetails