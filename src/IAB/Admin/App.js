import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './IAB/Client/header/Navbar'
import axios from 'axios'
import Footer from './IAB/Client/Footer/Footer'
import Homepage1 from './IAB/Admin/Homepage'


function App() {

     
  return (
    <div className='font-josefins bg-[#f5f5f5]'>

    <Router>
            <Navbar/>
       
         <Routes>

           {/* Admin */}
           
               <Route path = "/admin" exact element= {<Homepage1 />}></Route>


         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App