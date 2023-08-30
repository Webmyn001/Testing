import './App.css';
import ReactGA from "react-ga" ;



import Header from './Calculator/components/Navbar/Header';
import Home from './Calculator/components/Home';
import Getstarted from './Calculator/components/Getstarted';
import Gpcalc4 from './Calculator/components/Gpcalc4';
import Result from './Calculator/components/Results';
import { useEffect, useState } from 'react';
import Finalresult from './Calculator/components/Finalrsult';

import Docs from './Calculator/components/Docs';
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"
import About from './Calculator/components/About';
import Gpcalc5 from './Calculator/components/Gpcalc5';
import Gpcalc7 from './Calculator/components/Gpcalc7';

 const TRACKING_ID = "UA-235873888-1"
 ReactGA.initialize(TRACKING_ID)

function App() {

   useEffect( ()=> {
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);
  const [master , setMaster] = useState([])
   
  
const [calc, setcalc] = useState([])
const [calc2, setcalc2] = useState([])
         

console.log(master) 
  const getinfo =(info) => {
     console.log(info)
     setMaster([...master , info ])
     
    }
   
    
 console.log(master)
   
    console.log(master)
     
    
  

    
    
    
    
       
    
    

  const calculate = (every, totalpoint) => {
    console.log(calc)
    console.log(calc2)
     
    
    
    setcalc(every)
    setcalc2(totalpoint)
 
    
    
    
  }
  const finalresult = (calc2 / calc)
  console.log(finalresult)
  console.log(master)
   
  

  
  return (
    <div>
       
       
       
      <Router>
      <Header/>
           <Routes>
             <Route exact path="/" element = {<Home/>}></Route>
             <Route  exact path="/docs" element = {<Docs/>}></Route>
             <Route exact path="/getstarted"  element = {<Getstarted/>}></Route>
             <Route exact path='/about' element={<About/>}></Route>
             <Route exact path="/result5"  element = 
             {
               <> 
             <Gpcalc4    getinfo={getinfo} calculate={calculate}/>
             <Result   master={master} calc={calc} calc2= {calc2} />
              <Finalresult   finalresult={finalresult} />
              
              </>
             }> 
             
             </Route>
            
             <Route exact path="/result4"  element = 
             {
               <> 
             <Gpcalc5   getinfo={getinfo} calculate={calculate}/>
             <Result   master={master} calc={calc} calc2= {calc2} />
              <Finalresult   finalresult={finalresult} />
              
              </>
             }> 
             
             </Route>
             
             <Route exact path="/result7"  element = 
             {
               <> 
             <Gpcalc7  getinfo={getinfo} calculate={calculate}/>
             <Result   master={master} calc={calc} calc2= {calc2} />
              <Finalresult   finalresult={finalresult} />
              
              </>
             }> 
             
             </Route>
           
           </Routes>

          
      </Router>
       
     
    
    
    </div>
  );
}

export default App;




const formData = new FormData()

    formData.append("Title",Title);
    formData.append("Subtitle",Subtitle);
    formData.append("Body1",Body1);
    formData.append("Body2",Body2);
    formData.append("Body3",Body3);
    formData.append("image1",image1);
    
    formData.append("Body4",Body4);