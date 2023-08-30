import Counter from "./Counter/Components/Counter";
import Screen from "./Counter/Components/Screen";
import {useState,useEffect} from "react"
import Header from "./Counter/Components/Header";
import Footer from "./Counter/Components/Footer";

function App() {

  const [initial, setInitial]= useState(0)

  const [date, setDate] = useState(new Date())
   
  useEffect(()=> {
   var timer = setInterval(()=>setDate(new Date()), 1000)

   return function cleanup() {
      clearInterval(timer)
   }
  })

    return(
      <div className='bg-[#fff8f5] min-h-screen'>
        <Header/>

        <div className="md:flex md:flex-col mt-[50px] mb-6 flex flex-col justify-center items-center md:justify-center md:items-center mx-2 pl-5 py-3 my-2 rounded-[10px] bg-[#ECECEC]">
        <h1 className="text-3xl font-bold pb-2 text-[#3f3e3e] font-serif">  {date.toLocaleDateString()}</h1>
        <h1 className="text-3xl font-bold text-[#EB5E28]"> {date.toLocaleTimeString()}</h1>
          </div>
         
        <Screen initial={initial}/>
        <Counter setInitial={setInitial} initial={initial}/>
        <Footer/>

      </div>
      )
  }

 export default App;