import React from 'react';
//import img from "../../assets/png-transparent-chemistry-atom-atomic-nucleus-symbol-atomsymbol-atommodell-line-circle.png"
//import {PiAtom} from "react-icons/pi"
import {SlChemistry} from "react-icons/sl"
import "./Description.css"
const Description = () => {
//  <p  className='mr-20 text-white '>more text more text more text more text more textmore textmore text more text more text more text more text more textmore textmore text more text more text</p>

  return (
    <div>
      <div className='container m-auto py-10' >
        <div className='flex items-center justify-between descriptionmobile flex-col	' >
          <SlChemistry className='text-white font  ml-20 animationicon lastHomeMobile' style={{fontSize:"300px"}} ></SlChemistry>
          <p className='mr-20 text-white '>DR. Salma Reda teaches the chemistry Course for the1st and 2nd secondary Students offline .Her background in medicine and chemistry made her unique and very talented one to explain the course with the most interesting and different ways to touch all students’ different mindset. In addition, not only the strong educational background as she graduated from Helwan university , her major is Medical informatics class 2023,  DR. Salma owes, but also long experience over more than 5 years teaching adding the advantage of the Psychological support Dr. Salma provides her students during the year, the strong team available to give you the right support at the right time and still there are more and more. with DR. Salma, really you decide your way of Excellence</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
