import {IoIosArrowBack} from "react-icons/io"
import image from "../Project/Image/back.jpg"

function Second () {
    return(
        <div className='bg-[#fff8f5] pt-[50px]'>

       <div className="h-[50px] flex  items-center justify-center w-screen text-white bg-[#EB5E28]">
                 <button className="text-xl"><IoIosArrowBack/></button>
                <h1 className="pl-7 md:text-xl">Thanks For joining Kinnoplay</h1>
            </div>

     
     {/*  */}

     <div className="flex ml-5 mt-5 mb-5 md:flex md:text-2xl md:items-center md:justify-center items-center gap-x-5">
           <div className="bg-[#1d1d1d]  flex items-center justify-center rounded-full h-[70px] w-[70px]">
                <div className="bg-[#EB5E28] rounded-full h-[40px] w-[40px]">
                    <h1 className="text-[#1D1D1D] items-center justify-center flex ">20</h1>
                </div>
            </div>

            <div>
                <h2>Kinnoplay</h2>
                <h1 className="text-[#7E7E7E]">To </h1> <h5 className="text-[#3D7DC4]">lawrenceatthoh@ymail.com</h5>
                <h3 className="text-[#7E7E7E]">30 Aug at 13:29</h3>
            </div>
        </div>

        {/*  */}
<div className="bg-white mx-5 rounded-[10px] shadow-[0px_11px_26px_#0000000d]">
  
  
  <div className="flex justify-center items-center  h-[100px]">

<div className="bg-[#EB5E28] rounded-full h-[40px] w-[40px]">
            <h1 className="text-[#1D1D1D] items-center justify-center flex ">20</h1>
 </div>

 <h1 className="text-black md:text-3xl text-2xl">Kinno<span className=" text-2xl text-[#eb5e28]">play</span></h1>
</div>

<div className="border-b border-[#1D1D1D]"></div>
 

 <div>
    <h1 className="text-[#EB5E28] text-2xl md:text-3xl flex justify-center items-center pt-[30px] ">Enjoy Kinnoplay</h1>
    <p className="px-3 md:text-center pt-[30px]">
        
        We're always adding more TV shows & movies for you to enjoy,
         Drama, Comedy, Documentaries, Family and more - there's something for everyone.
          Catch up from the beginning and enjoy full seasons of hit TV
         shows including Kinnoplay original series,
          plus movies, comedy specials and more</p>
   </div>


   <div className="flex items-center justify-center mt-[50px] mb-[30px]">
        <button className="bg-[#EB5E28] text-white px-7 py-3 rounded-[35px]">Start watching</button>
      </div>
        
        <div className="flex  items-center">
            <div className="flex-grow h-px bg-[#1d1d1d]  "></div>
            <h1 className="flex-shrink font-semibold text-xl px-4">Now on Kinnoplay</h1>
            <div className="flex-grow h-px bg-[#1d1d1d]   " ></div>
        </div>


        <div>
            <div className="grid gap-5 px-5 mt-[35px] grid-cols-3">
                {/* individual cards */}
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>
                <div>
                    <img src={image} className="rounded-[6px]" alt="others"/>
                </div>

            </div>
        </div>


        <div className="flex items-center justify-center gap-x-5 pt-[30px]">
            <div>
               <img src={image} className="rounded-lg h-[50px] w-[150px]" alt="others"/> 
            </div>
            <div>
               <img src={image} className="rounded-lg h-[50px] w-[150px]" alt="others"/> 
            </div>
        </div>

</div>








        </div>
    )
}

export default Second 