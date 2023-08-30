
import {React,useState,useEffect} from "react";
 

import axios from "axios";
import Header from "./Header";
import Homepage from "./Homepage";


    function DashboardApp() {

     const [data, setData] = useState([])

     const getList = async  () => {
      axios.get("https://gold-busy-beaver.cyclic.app/api/lessons/get")
      .then(res => {
        console.log(res)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
     }
        useEffect(()=> {
       getList()
    },[])

    
console.log(data)


       return (
               <div>
                    <Header/>
                     <Homepage data = {data} getList={getList}/>
                      
                
                        
                         

              </div>
              )
                   }

     export default DashboardApp;
