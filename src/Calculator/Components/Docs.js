import React from "react";
import Back from "./Back";
import Footer from "./Footer";
import {MdEmail} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineCopyright} from "react-icons/ai"
import logo from './../images/Mylogo.jpg'

const Docs = () => {
    return (

        <div className=" text-xl font-light bg-gradient-to-tr from-[#815b5b] to-[#9e7676]
        text-[#fff8ea] pt-[30px] ">
      
        <h2 className="font-bold p-3 text-2xl text-center"> Basic things you need 
        to know about G.P.A in Tertiary Institutions.  </h2>
        <h2 className="font-bold text-2xl underline text-center" > G.P.A & C.G.P.A</h2>
        <h3 className="p-5 pt-1"> G.P.A (Grade Point Average) This is a measure that is used
         to determine Academic performance of  students
             in Tertiary Institutions per Semester, and it is calculated by dividing the total number of Grade points by 
             the total number of Course Units in a Semester while C.G.P.A (Cumulative Grade Point Average ) is a measure of student's 
             overall Academic performance.
             </h3>
        <h3 className="px-5">  This calculator is designed to Calculate G.P.A for a specific Semester, it could also 
              be used to compute overall C.G.P.A by adding all the courses done by the student and the corresponding results
             i.e if the student is in 200 level to calculate his/her C.G.P.A he/she will add the courses and the results for the four(4) semesters consecutively,
             however  this mode is not efficient  in calculating C.G.P.A , this approach will be improved in the
              subsequent version of this calculator.
        </h3> 
        <h3 className="p-5">
            It is essential that all students need to study and understand how to calculate their G.P.A every semester doing this will
            help to evaluate Academic performance from time to time and improve.
        </h3>
        
         <h2 className="font-bold text-2xl underline text-center">How to compute G.P.A</h2>
         <h3 className="px-5 py-2">The Grading system implemented across Tertiary Institutions in the Country have not been uniform
            there is 4.00 , 5.00 and 7.0 Grading System, but 5.00 Grading system is the common  System  adopted 
            by most Institutions i.e O.A.U, UNILAG , UNILORIN , FUTA e.t.c. 
        </h3>


         <h1 className="p-3 text-center font-bold text-2xl underline">4.00 Grading System</h1>
       <div className="flex items-center justify-center">
         <table className="text-center  table-auto ">
            <tbody className="border">
            <tr className="border ">
                <th className="border">Letter Grade</th>
                <th>Grade point</th>
            </tr>

            <tr>
                <td className="border">A</td>
                <td className="border">4.0</td>
            </tr>
            <tr>
                <td className="border">AB</td>
                <td className="border">3.5</td>
            </tr>
            <tr>
                <td className="border">B</td>
                <td className="border">3.0</td>
            </tr>
            <tr>
                <td className="border">BC</td>
                <td className="border">2.5</td>
            </tr>
            <tr>
                <td className="border">C</td>
                <td className="border">2.0</td>
            </tr>
            <tr>
                <td className="border">CD</td>
                <td className="border">1.5</td>
            </tr>
            <tr>
                <td className="border">D</td>
                <td className="border">1.0</td>
            </tr>
            <tr>
                <td className="border">E</td>
                <td className="border">0.0</td>
            </tr>
            </tbody>
         </table>
         </div>
           <h2 className="font-bold text-xl p-5 italic">Note: The precentage score is not included as it varies across institutions but the Grade point is still similar.</h2>
             <h3 className=" p-5 "> Every subject has a number of Credit Unit (C.U). To obtain the Quality point (Q.P),the Credit unit will be multiplied
                by the Grade point for a particular Course. <br className="pt-5"/> For example if a student score "C" 50% in a 3 credit unit course
                the quality point will be equal to 3 x 2 = 6 ( where C = 2) and the G.P.A is calculatd by dividing the total number of Grade points by 
             the total number of Course Units in a Semester.

             </h3>
              
              <h1 className="font-bold text-2xl underline text-center">The 4.0 Grading System Degrees's Classification</h1>
            <div>
                      <h2 className="font-semibold px-10">3.5 - 4.0 :  Distinction/First Class</h2>
                      <h2 className="font-semibold px-10">3.0 - 3.49 : Upper Credit/Second Class Upper Division</h2>
                      <h2 className="font-semibold px-10">2.5 - 2.99 : Lower Credit/Second Class Lower Division</h2>
                      <h2 className="font-semibold px-10">2.0 - 2.49 : Pass/Second Class Lower Division</h2>
                      <h2 className="font-semibold px-10">1.0 - 1.99 : Third Class Honors </h2>
                      
            </div>
             
               {/* 5.0 gpa */}

               <h1 className="font-bold text-2xl underline text-center p-4">5.0 Grading System</h1>
           <div className="flex justify-center items-center ">
               <table className="text-center">
                <tbody className="border">
            <tr>
                <th className="border">Letter Grade</th>
                <th className="border">Grade point</th>
            </tr>

            <tr>
                <td className="border">A</td>
                <td className="border">5.00</td>
            </tr>
            <tr>
                <td className="border">B</td>
                <td className="border">4.00</td>
            </tr>
            <tr>
                <td className="border">C</td>
                <td className="border">3.00</td>
            </tr>
            <tr>
                <td className="border">D</td>
                <td className="border">2.00</td>
            </tr>
            <tr>
                <td className="border">E</td>
                <td className="border">1.00</td>
            </tr>
            <tr>
                <td className="border">F</td>
                <td className="border">0.00</td>
            </tr>
            </tbody>
         </table>
         </div>
         <h1 className="font-bold text-2xl underline text-center p-4">The 5.0 Grading System Degrees's Classification</h1>
            <div>
                      <h2 className="font-semibold px-10"> 4.5 - 5.0 : First Class</h2>
                      <h2 className="font-semibold px-10">3.50 - 4.49 : Second Class Upper Division</h2>
                      <h2 className="font-semibold px-10">2.50 - 3.49 : Second Class Lower Division</h2>
                      <h2 className="font-semibold px-10">1.50 - 2.49 : Third Class Honors </h2>
                      <h2 className="font-semibold px-10">1.00 - 1.49 : Pass Degree</h2>
            </div>

             
             {/* 7.0 gpa */}

             <h1 className="font-bold text-2xl underline text-center p-4">7.0 Grading System</h1>
<div className="flex justify-center items-center">
<table className="text-center">
    <tbody className="border">
<tr className="border">
    <th className="border">Percntage score</th>
 <th className="border">Letter Grade</th>
 <th className="border">Grade point</th>
</tr>

<tr>
    <td className="border">70%- 100%</td>
 <td className="border">A</td>
 <td className="border">7</td>
</tr>
<tr>
    <td className="border">65%-69%</td>
 <td className="border">B</td>
 <td className="border">6</td>
</tr>
<tr>
<td className="border">60%-64%</td>
 <td className="border">C</td>
 <td className="border">5</td>
</tr>
<tr>
<td className="border">55%-59%</td>
 <td className="border">D+</td>
 <td className="border">4</td>
</tr>
<tr>
<td className="border">50%-54%</td>
 <td className="border">D-</td>
 <td className="border">3</td>
</tr>
<tr>
<td className="border">45%-49%</td>
 <td className="border">E+</td>
 <td className="border">2</td>
</tr>
<tr>
<td className="border">40%-44%</td>
 <td className="border">E-</td>
 <td className="border">1</td>
</tr>
<tr>
<td className="border">0-39%</td>
 <td className="border">F</td>
 <td className="border">0</td>
</tr>
</tbody>
</table>
</div>
<h1 className="font-bold text-2xl underline text-center p-4">The 7.0 Grading System Degrees's Classification</h1>
<div className="font-semibold pb-10 px-10">
       <h2>6.0 and above: First Class</h2>
       <h2>4.6 - 5.99 : Second Class Upper Division</h2>
       <h2>2.6 - 4.59 : Second Class Lower Division</h2>
       <h2>1.6  - 2.59 : Third Class Honors </h2>
       <h2>0.0 - 1.59 : Pass</h2>
       
</div>

    <Back/>

           {/* footer */}
         
           <div>
            <Footer/>
           </div>

        </div>
    )
}

export default Docs