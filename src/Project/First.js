import {IoIosArrowBack} from "react-icons/io"

function First () {
    return(
        <div className="bg-[#fff8f5] pt-[50px]">
           
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




        <div className="flex justify-center items-center bg-black w- screen h-[100px]">

        <div className="bg-[#EB5E28] rounded-full h-[40px] w-[40px]">
                    <h1 className="text-[#1D1D1D] items-center justify-center flex ">20</h1>
         </div>

         <h1 className="text-white md:text-3xl text-2xl">Kinno<span className=" text-2xl text-[#eb5e28]">play</span></h1>

        </div>


      {/* text */}

      <div className="pt-5 ml-5 md:flex md:flex-col md:justify-center items-center">
        <h1 className="font-semibold md:font-semibold text-xl">Welcome to your 14-day trial!</h1>
        <h2 className="mt-5 font-semibold">Hi,</h2>
        <p className="font-semibold ">You're ready to enjoy the best series and movies on your mobile device.</p>
        <p className="mt-3 font-semibold">You will not be charged untill after your free trial ends on 13/09/2021. No commitment, cancel anytime.</p>
      </div>


      {/* button */}



      <div className="flex items-center justify-center mt-10 mb-7">
        <button className="bg-[#EB5E28] text-white px-7 py-3 rounded-[35px]">Start watching</button>
      </div>
        


        {/*  */}
         <div className="bg-[#ECECEC] md:flex md:flex-col md:justify-center md:items-center mx-2 pl-5 rounded-[10px]">
            <h2 className="pt-2">Your Account Details</h2>

            <h2 className="pt-3 text-[#979797]">Plan</h2>
            <h2 className="pt-3 pb-7">Kinnoplay Mobile: $4.49 per month</h2>

         </div>
       
       
       
       
        </div>
    )
}

export default First