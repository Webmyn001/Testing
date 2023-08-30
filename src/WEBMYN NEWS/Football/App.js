import Header from "./WEBMYN NEWS/Football/Header";
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import {React,useState,useEffect} from "react";
 import Home from "./WEBMYN NEWS/Football/Home";
 import Notfound from "./WEBMYN NEWS/Football/Notfound";
 

import Newsdetails from "./WEBMYN NEWS/Football/Newsdetails";
import axios from "axios";
import Health from "./WEBMYN NEWS/Football/Health";
import Nigeria from "./WEBMYN NEWS/Football/Nigeria";
import Politics from "./WEBMYN NEWS/Football/Politics";
import Technology from "./WEBMYN NEWS/Football/Technology";

import ReactGA from "react-ga" ;

const TRACKING_ID = "UA-268146908-1"
ReactGA.initialize(TRACKING_ID)

function App() {

   
  useEffect( ()=> {
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);
  

  

     const [data, setData] = useState([ ])
     const [sport, setSport] = useState([])
     const [health, setHealth] = useState([])
     const [international, setInternational] = useState([])
     const [technology, setTechnolgy] = useState([])

     
        useEffect( ()=> {
        axios.get(" https://newsdata.io/api/1/news?apikey=pub_1019792a45786f3efcd5e3b091fdedb601397&country=ng").
        then(res => {
          console.log(res)
          setData(res.data.results)
        }).catch(err => {
          console.log(err)
        })
    },[])

    useEffect( ()=> {
      axios.get(" https://newsdata.io/api/1/news?apikey=pub_10279def0d4c8db51100c60ae4fe5f357aee0&category=sports&country=gb,es").
      then(res => {
        console.log(res)
        setSport(res.data.results)
      }).catch(err => {
        console.log(err)
      })
  },[])

  useEffect( ()=> {
    axios.get(" https://newsdata.io/api/1/news?apikey=pub_10285af28aa22d771c84d12cf1b1d6d78383f&category=health&language=en").
    then(res => {
      console.log(res)
      setHealth(res.data.results)
    }).catch(err => {
      console.log(err)
    })
},[])

useEffect( ()=> {
  axios.get(" https://newsdata.io/api/1/news?apikey=pub_102837d1b78d2917ef58d60ac1f4e2b93c323&&category=science,top,world,tourism,technology&language=en").
  then(res => {
    console.log(res)
    setInternational(res.data.results)
  }).catch(err => {
    console.log(err)
  })
},[])


useEffect( ()=> {
  axios.get(" https://newsdata.io/api/1/news?apikey=pub_10281a75a5008eedf1c2ba33e6b3f0706d78b&category=technology&language=en").
  then(res => {
    console.log(res)
    setTechnolgy(res.data.results)
  }).catch(err => {
    console.log(err)
  })
},[])

       return (
               <div>

             <Router>
                     <Header/>
                
                  <Routes>
                        <Route path = "/" exact element= {<Nigeria data = {data}/>}></Route>
                         <Route path = "/sport" exact element= {<Home sport = {sport}/>}></Route>
                         <Route path = "/health" exact element= {<Health health = {health}/>}></Route>
                         <Route path = "/technology" exact element= {<Technology technology = {technology}/>}></Route>
                         <Route path = "/international" exact element= {<Politics international = {international}/>}></Route>

                         

        
                       <Route path = "/sportnews/:id" exact element= {<Newsdetails/>}></Route>
                       <Route path = "*"  element= {<Notfound/>}></Route>
                  </Routes>
                  </Router> 


                  
               </div>
              )
                   }

     export default App;
