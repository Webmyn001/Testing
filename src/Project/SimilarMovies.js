import image from "../Project/Image/back.jpg"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineCopyright} from "react-icons/ai"



function SimilarMovies (){

    const Movies = 
    [
        {    id: 1,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 2,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 3,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 4,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 5,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 6,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 7,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 8,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 9,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 10,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 11,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        }, {    id: 12,
            img: image,
            title : "Godzilla:",
            text: "King of the...",
            topic : "Sci-fi/Action ",
            hours : ".2h 12m"
        },

    ]
    return(
        <div>
            <h1 className="text-3xl pl-10  font-semibold">Similar Movies</h1>

            {/* similar movies */}
        <div className=" px-[100px] ">
             <div className=" grid   mt-10 gap-5 px-5 sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                
                {/* movies */}
     
                  {
                    Movies.map((movie) => (
                        <div id={movie.id}>
                     <div className="relative">
             <img src={movie.img} className="h-[150px] sm:h-[200px]  rounded-lg w-[200px] sm:w-[150px] object-cover" alt="similar movies"/>
                  <div className="absolute bottom-0 right-0 ">
                       <button className="bg-[#EB5E28]  text-white px-3 py-1 rounded-tl-lg rounded-br-lg">PLAY</button>
                  </div>
         </div>
             <h3 className="pt-3">{movie.title}</h3>
             <h3>{movie.text}</h3>
             <p className="text-xs text-[#1D1D1D]">{movie.topic} <span className="pl-[2px]">{movie.hours}</span></p>
                            
                        </div>
                        
                    ))
                  }
             </div>
        </div>

             {/* footer */}

             <div className="border-2 mt-[50px] border-[#EB5E28]"></div>

             
<div className="text-xl px-10 flex flex-col items-between justify-center mt-8 md:justify-between md:items-enter md:flex-row">
           
           <div>
                  <h1 className="pb-5">Follow Us</h1>
                  <div className="flex justify-between w-[150px] items-center ">
                     <BsFacebook className="text-[#252422]"/>
                     <BsInstagram/>
                     <BsTwitter/>
                  </div>
               
             </div>


             <div>
                <h1 className="pt-5 md:pt-0">Resources</h1>

                <h3 className="md:py-5">About Us</h3>
                <h3 className="md:pb-5">filmaker login</h3>
                <h3>Help</h3>

             </div>

             <div>
             <h1 className="pt-5 md:pt-0">Legal</h1>

                <h3 className="md:py-5">Terms of Use</h3>
               <h3 className="md:pb-5">Privacy Policy</h3>
               <h3>Security</h3>
             </div>

             <div>
                <h1 className="pt-5 md:pt-0">Contact</h1>
              <h3 className="md:py-5">+1 800 234-5678</h3>
                <h3>Support@Kinnoplay.com</h3>
             </div>
  </div> 

      <div className="border-[1px] mt-10 mb-5 mx-10 border-[#1D1D1D]"></div>

          <div className="flex items-center pb-5 justify-center ">
          <AiOutlineCopyright/> 
            <h3>2020 Kinnoplay. All rights reserved.</h3>

          </div>
          

             </div>
     
    )
}

export default SimilarMovies