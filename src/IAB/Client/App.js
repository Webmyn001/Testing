import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './IAB/Client/header/Navbar'
import axios from 'axios'
import Footer from './IAB/Client/Footer/Footer'
import Homepage from './IAB/Client/Homepage'
import Image from "./IAB/Client/Images/ajadi-logo.jpg"
import Contact from './IAB/Client/Contact'


function App() {

     const [Lecture, setLecture] =useState([])
     
     const getLecture = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp305/")
        .then(res => {
          console.log(res.data)
          setLecture(res.data)
        }).catch(err => {
          console.log(err)
        })
       }

   useEffect(() => {
        getLecture()
        }, [])

 const list = [
    { 
      image : Image,
      Title : "kduf euof eouvf oeufv ouievf ",
      Content1 : "DSIGH DG ADHUUDFU  uh dgoh ghgu uaih a ihf isuh  seiuhga vbiuhghskfkg afrgfs h",
      Content2 : "dfjh sgbho s o gbh su siuhb ug guhg os gikug h sdi guhg gg  ilsihfgi  sfgh ius fi fsghsihg  u  fgh",
      Conclusion :"djk difgiuf iudfhg uhfuhfg dfuhguhg guhfug ufhufhiuhfiufyygfyf iufiuagf g usfgu hufruruigaiu fgafgfg fgfygfu fgfga g fgyggrwlf fgfgll fg fgufgfh fhdfhfy ."
    },

    { 
      image : Image,
      Title : "kduf euof eouvf oeufv ouievf1 ",
      Content1 : "DSIGH DG ADHUUDFU  uh dgoh ghgu uaih a ihf isuh  seiuhga vbiuhghskfkg afrgfs h1",
      Content2 : "dfjh sgbho s o gbh su siuhb ug guhg os gikug h sdi guhg gg  ilsihfgi  sfgh ius fi fsghsihg  u  fgh 1",
      Conclusion :"djk difgiuf iudfhg uhfuhfg dfuhguhg guhfug ufhufhiuhfiufyygfyf iufiuagf g usfgu hufruruigaiu fgafgfg fgfygfu fgfga g fgyggrwlf fgfgll fg fgufgfh fhdfhfy ."

    }
    
  ]
  return (
    <div className='font-josefins bg-[#f5f5f5]'>

    <Router>
            <Navbar/>
       
         <Routes>

           {/* Client */}
               <Route path = "/" exact element= {<Homepage list={list}/>}></Route>
               <Route path = "/contact" exact element= {<Contact/>}></Route>


         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App