import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Formdetails() {
  
  const [Name, setName] = useState("")
  const [School, setSchool] = useState("")
  const [BankName, setBankname] = useState("")
  const [AcctName, setAcctName] = useState("")
  const [AcctNo, setAcctNo] = useState("")
  const [Shortnote, setShortnote] = useState("")
  const [Whatsapp, setWhatsapp] = useState("")
  const [filenameID, setFileNameID]= useState("")
  const [filenameJamb, setFileNameJamb]= useState("")

  const navigate = useNavigate();
  

  const saveForm = async (e) => {
    e.preventDefault();
     
    const formData = new FormData()

    formData.append("Name",Name);
    formData.append("School",School);
    formData.append("BankName",BankName);
    formData.append("AcctName",AcctName);
    formData.append("AcctNo",AcctNo);
    formData.append("Whatsapp",Whatsapp);
    formData.append("Shortnote",Shortnote);
    formData.append("IDcardimage",filenameID);
    formData.append("Jambimage",filenameJamb);


    axios.post("http://localhost:4000/api/lessons/add", formData)
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    alert("form submitted succesfully")
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form")
    })
    
     
  }
  
    useEffect(()=>{
       axios.get("http://localhost:4000/api/lessons/").then((res)=>{
       }).catch((err) => {
        console.log(err)
       })

    },[])

    
    useEffect(()=>{
      axios.get("http://localhost:4000/api/lessons/").then((res)=>{
      }).catch((err) => {
       console.log(err)
      })

   },[])


const Onchangename =(e)=> {
        setName(e.target.value)
    }

    const Onchangeschool =(e)=> {
      setSchool(e.target.value)
  }
  const OnchangeBankname =(e)=> {
    setBankname(e.target.value)
}

const OnchangeAcctName =(e)=> {
  setAcctName(e.target.value)
}

const OnchangeAcctNo =(e)=> {
  setAcctNo(e.target.value)
}

const Onchangewhatsapp =(e)=> {
  setWhatsapp(e.target.value)
}
const OnchangeShortnote =(e)=> {
  setShortnote(e.target.value)
}

 const OnchangefileID = e => { 
  setFileNameID(e.target.files[0]);
 }

 const OnchangefileJamb = e => { 
  setFileNameJamb(e.target.files[0]);
 }
console.log(Name,School,BankName,AcctName,AcctNo,Whatsapp,Shortnote)
  return (
    <div>
       
       <form className="flex flex-col justify-center items-start sm:flex sm:items-center px-7  pb-5"
       onSubmit={saveForm} enctype="multipart/form-data">
                
                <label className=" font-semibold text-[#fff8ea] pt-3 text-xl py-1 ">Name </label>
                <input placeholder="Abdul-rahman faruq"  value={Name} onChange={Onchangename}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className="font-semibold pt-3 text-[#fff8ea] text-xl py-1 ">School</label>
                <input placeholder="University Of Ibadan" value={School} onChange={Onchangeschool}
                className=" border-[#0b0f11] focus:outline-0 border-2 mb-3 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>

                <h1 className='pt-5 font-semibold text-[#fff8ea] text-xl'>Accounts Details</h1>
                <label className="  text-[#1b1810] pt-3 py-1 ">Bank Name</label>
                <input placeholder="First Bank" value={BankName} onChange={OnchangeBankname}
                className=" border-[#0b0f11] text-[#20201f] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 "/>
                <label className=" text-[#fff8ea]  py-1 ">Account Name</label>
                <input  value={AcctName} onChange={OnchangeAcctName}
                className=" border-[#0b0f11] focus:outline-0 border-2
                 sm:w-[400px] rounded-lg px-3 text-[#0e0d0c]"/>
                <label className=" text-[#fff8ea] py-1 ">Account Number</label>
                <input  value={AcctNo} onChange={OnchangeAcctNo} type="Number"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] rounded-lg px-3 text-[#141311]"/>



          


                <h1 className='pt-5 text-[#fff8ea] font-semibold text-xl'>Proof of Studentship</h1>
               <label htmlFor='file'  className=" text-[#fff8ea] py-1 ">Student ID card</label>
                <input  type='file'  name='IDcardimage' onChange={OnchangefileID}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] border-2 rounded-lg px-3 text-[#0f0e0c]"/>
                    
                     
                   
                <label className=" text-[#fff8ea]  pt-5 py-1 ">Jamb Admissioon Letter</label>
                <input  htmlFor="file" type="file" onChange={OnchangefileJamb} name="Jambimage"
                className=" border-[#0b0f11] focus:outline-0 sm:w-[400px]
                 border-2 rounded-lg px-3 text-[#0a0a08]"/>
                
          
                <label className=" text-[#fff8ea] pt-5 text-xl font-semibold py-1 ">Whatsapp Number</label>
                <input value={Whatsapp} onChange={Onchangewhatsapp} type="Number"
                className=" border-[#0b0f11] focus:outline-0 border-2 
                sm:w-[400px] rounded-lg px-3 text-[#0f0f0d]"/>

                

                <label className="italic text-[#fff8ea] pt-5 font-semibold py-1 ">Write a short note to proof that you truely need it.</label>
                <textarea placeholder="Write a short note ... "  value={Shortnote} onChange={OnchangeShortnote} 
                className= " border-[#0b0f11] focus:outline-0 w-[300px] h-[100px] border-2 rounded-lg px-3 text-[#594545]"/>
                
                
                <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div >
                     <button className="bg-[#1048a9] rounded-md px-3 py-2">Submit</button>
                 </div>
               </div>  

         </form>
      



    </div>
  )
  }

  export default Formdetails