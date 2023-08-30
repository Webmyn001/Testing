import React, { useEffect } from 'react'
import image3 from "./Images/image3.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from "swiper/react"
import { BsFillArrowRightCircleFill} from "react-icons/bs"
import {Autoplay} from "swiper"
import "swiper/css"
import "swiper/css/navigation"






function Home2() {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])
 


 const Courses = 
      [
           {
          courseTitle : "Agriculturtral economics",
          Image : image3,
          Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
           },
            {
            courseTitle : "Agriculturtral economics",
            Image : image3,
            Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
              courseTitle : "Agriculturtral economics",
              Image : image3,
              Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
                courseTitle : "Agriculturtral economics",
                Image : image3,
                Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
                  courseTitle : "Agriculturtral economics",
                  Image : image3,
                  Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
             },

      ]


  return (
    <div className='bg-[#f5f5f5] text-gray-900 w-full min-h-screen '>
  
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-indigo-800 to-cyan-600 py-[2px]'>Home Page</h1>

     {/* container */}
     <div className=' flex flex-col justify-center bg-white  items-center pt-4 md:flex-row md:justify-between md:px-9 md:py-4
      rounded-b-[50px] shadow-lg shadow-indigo-800/40'>
      {/* image */}
        <div>
          <img src={image3} className="rounded-full h-[300px] w-[300px] object-cover " data-aos="fade-right" alt='ef'/>
          </div>
       {/* text */}
        <div className='max-w-[300px] px-3 py-4 font-josefins sm:max-w-[500px]'>
      <h3>
          <Typewriter 
          options={{
            autoStart:true,
            loop:false,
            delay:50,
            strings:"jhiooi  eifh eiufei f eufh efh  aF  kgf a a FYAF A FB A  SUGF  fiug af  fag fdah afg  asfg fa  fasgf afga fjg s  jg aghf  ay f  sfg h a  shg fr g fasgfg fs f hsgfsf g sgfgdsyf fvffsgf a sdfhafiu fahywhrh aui fgffhv  fgdfgg ahf g gsafhfgLHF V AIVBSAhhv"
          }}
          />
            
      </h3>
        </div>
          
     </div>
     {/* recent leture uploaded */}
              <div>
                <Swiper 
                spaceBetween={10}
                centeredSlides={true}
                autoplay= {
                            {
                            delay:3000,
                            disableOnInteraction:false,
                            }
                          }
                modules={[Autoplay]}>

                     {Courses.map((course,i) => (
                      <SwiperSlide key={i} className='flex justify-center text-indigo-800 items-center font-jost font-medium  h-fit'>
                        <div className=' flex flex-col pb-3 items-center max-w-[300px] transition-all duration-300 sm:max-w-[400px] justify-center shadow-md shadow-indigo-800/40 mt-[30px] rounded-xl bg-white'>
                          <img src={course.Image} alt="em" className='w-[300px] rounded-t-xl sm:w-[400px] h-[200px] object-cover'/>
                          <h1 className='px-3 font-bold'>{course.courseTitle}</h1>
                          <h1 className='px-3'>{course.Description}</h1>
                        </div>
                      </SwiperSlide>
                     ))}
                     
                     </Swiper>
               </div>
      {/* for more info. */}
      <div className='p-4 text-center flex items-center justify-center bg-white mt-[30px] h-[50px] rounded-t-[50px] shadow-lg'>
        <div className='text-indigo-800 font-jost font-medium '>For more information, 
             <Link to="/contact">
               <button className='py-1 mb-2 focus:outline-0 px-1 hover:border-indigo-800 text-indigo-800 text-center duration-300 hover:border-[0.2px] rounded-lg bg-transparent'> 
                click here
               </button>
            </Link> 
          </div>
        </div>
              
      
    </div>
  )
}

export default Home2