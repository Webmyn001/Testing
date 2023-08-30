

import {React,useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";





function Politics (props) {

   
useEffect(()=> {
  AOS.init({duration:2000})

},[])

       return (
               <>
          <div className="min-h-screen bg-[#fde2f3]">
          <h1 className="font-bold text-center text-[#212f4f] pt-4 text-2xl" data-aos="fade-left"> International News</h1>
                    {
                        props.international.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center" data-aos="zoom-in">
                            <div  className="flex flex-col items-center justify-center w-[300px] md:w-[400px]  shadow-2xl my-8 ">
                                <img src={info.image_url} alt="Sorry! Not Found" className={`"rounded-sm 
                              text-2xl h-[300px] shadow-sm m-3 ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              
                               <h1 className="text-xl font-bold p-8  text-[#2a2f4f] pt-1 pb-0 mt-1">  {info.title} </h1>
                              
                              
                              
                              <div className="flex px-8 py-1 text-xs text-[#2a2f4f] font-semibold w-full justify-between">
                              <div>
                              <p>Source: {info.source_id}</p>
                              <p>Date: { info.pubDate}</p>
                              </div>
                              
                              
                             <Link to={ {pathname:`/sportnews/${info.pubDate}`}}  state={info}>
                              <h1 className="text-xs text-[#2a2f4f] hover:text-red-500 font-semibold pt-0 ">Read more...</h1>
                              </Link>
                            </div>   
                            </div>
                        </div>
                        ))
                    }

                  </div>
                    <Footer/>
                    
              </>
              );
                   }

     export default Politics;
