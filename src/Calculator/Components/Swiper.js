import React from "react";

import ABU from './../Schools/ABU.jpg';
import oau1 from './../Schools/OAU.jpg';
import oau2 from './../Schools/oau1.jpg';
import polyibadan from './../Schools/polyibadan.jpg';
import ui from './../Schools/ui1.jpeg';
import ui1 from './../Schools/ui.jpg';
import unilag from './../Schools/unilag.jpg';
import unilorin from './../Schools/Unilorin.jpg';
import unilorin1 from './../Schools/University-of-Ilorin.jpg';
import Alloverpoly from './../Schools/Alloverpoly.jpg';











import {Swiper, SwiperSlide } from "swiper/react";



import {Autoplay } from "swiper";

import "swiper/css";

import "swiper/css/navigation";


   const data = [
     {
      id : 1,
      name : "OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE",
      image : oau1,
     },
     {
      id : 2,
      name : "AHMADU BELLO UNIVERSITY, ZARIA",
      image : ABU,
     },
     {
      id : 3,
      name : "ALLOVER CENTRAL POLYTECHNIC, SANGO-OTA ,OGUN STATE",
      image : Alloverpoly,
     },
     {
      id : 4,
      name : "UNIVERSITY OF IBADAN, IBADAN",
      image : ui ,
     },
     {
      id : 5,
      name : "UNIVERSITY OF ILORIN, ILORIN",
      image : unilorin1 ,
     },
    
     {
      id : 6,
      name : "OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE",
      image : oau2 ,
     },
     {
      id : 7,
      name : "THE POLYTECHNIC IBADAN, IBADAN",
      image : polyibadan,
     },
     
     {
      id : 8,
      name : "UNIVERSITY OF LAGOS, AKOKA",
      image : unilag,
     },
     
     {
      id : 9,
      name : "UNIVERSITY OF IBADAN, IBADAN",
      image : ui1,
     },
     {
      id : 10,
      name : "UNIVERSITY OF ILORIN, ILORIN",
      image : unilorin,
     },
   ]


const Swipercomponent = () => {
    
    return(
    
    <div className="pt-6 ">
            <Swiper
   
   spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
  

  
  modules={[Autoplay]}
  >
     
      {
        data.map(({name,id,image})=>{
          return (
            <SwiperSlide key={id} className="flex justify-center w-full items-center  ">
           <div className="flex flex-col">
            <img  src={image} className="w-screen h-[400px] object-cover rounded-lg px-1" alt={name}/>
            <h1 className="text-2xl text-center text-[#fff8ea] ">{name}</h1>
           </div>
         </SwiperSlide>
          )
        })
      }

    </Swiper>
         
        </div>
    )
}

export default Swipercomponent