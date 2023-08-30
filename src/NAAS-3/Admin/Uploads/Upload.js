

import {React,useEffect} from "react";
import {Link} from "react-router-dom";
import image1 from "../Images/genetics.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"


import AOS from "aos";
import "aos/dist/aos.css";





function Upload (props) {

    
  
    const UploadList = [
        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "AEC 301",
            Link : "upload-AEC301",
            image  : image1,
        },
        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "AEC 303",
            Link : "upload-AEC303",
            image  : image2,
        },

        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "ANS 301",
            Link : "upload-ANS301",
            image  : image3,
        },

        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "AXD 301",
            Link : "upload-AXD301",
            image  : image1,
        },

        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "CPP 301",
            Link : "upload-CPP301",
            image  : image2,
        },

        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "CPP 303",
            Link : "upload-CPP303",
            image  : image3,
        },
        {
            CourseTitle : "Statistics and Biometrics",
            CourseCode: "SLM 303",
            Link : "upload-SLM303",
            image  : image3,
        },
       
       ]
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className=" text-center font-bold w-full pb-1 font-montserat text-white bg-gradient-to-r from-indigo-800 to-cyan-600 pt-1 px-2  sm:text-xl" data-aos="fade-left"> Kindly select any of the courses below to upload new lecture.</h1>
                    {
                        UploadList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center font-josefins justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col focus:outline-0 rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 text-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/upload/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full   ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }

                    
               </div>  
                
              </>
              );
                   }

     export default Upload;
