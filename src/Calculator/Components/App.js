import './App.css';
import { useEffect } from 'react';

import Header from './Calculator/Components/Navbar/Header';
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Home from './Calculator/Components/Home';

import Getstarted from './Calculator/Components/Getstarted';
import Gpcalc4 from './Calculator/Components/Gpcalc4';
import Result from './Calculator/Components/Results';
import {  useState } from 'react';
import Finalresult from './Calculator/Components/Finalrsult';

import Docs from './Calculator/Components/Docs';
import About from './Calculator/Components/About';
import Gpcalc5 from './Calculator/Components/Gpcalc5';
import Gpcalc7 from './Calculator/Components/Gpcalc7';
import ReactGA from "react-ga" ;
 


const TRACKING_ID = "UA-235873888-3"
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
    <div className='font-josefins'>
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
