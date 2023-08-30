import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import {React,useState,useEffect} from "react";
 import Notfound from "./Notfound";
 

import axios from "axios";
import Fulldetails from "./Fulldetails";
import Update from "./Update";
import Header from "./Header";


    function DashboardApp() {

     const [data, setData] = useState([{
      Name : "",
      School : "",
      BankName : "",
      AcctName : "",
      AcctNo : "",
      IDcardimage : "",
      Jambimage : "",
      Whatsapp : "",
      Shortnote : "",
     }])

     
        useEffect( ()=> {
        axios.get(" https://newsdata.io/api/1/news?apikey=pub_1019792a45786f3efcd5e3b091fdedb601397&country=ng")
        .then(res => {
          console.log(res)
          setData(res.data.results)
        }).catch(err => {
          console.log(err)
        })
    },[])

    



       return (
               <div>

             <Router>
                     <Header/>
                
                  <Routes>
                        <Route path = "/" exact element= {<DashboardApp data = {data}/>}></Route>
                         <Route path = "/update" exact element= {<Update/>}></Route>
                        
                         

        
                       <Route path = "/sportnews/:id" exact element= {<Fulldetails/>}></Route>
                       <Route path = "*"  element= {<Notfound/>}></Route>
                  </Routes>
                  </Router> 


                  
               </div>
              )
                   }

     export default DashboardApp;
