import React from 'react';
import "./JoinUsCompo.css"

const JoinUsCompo = () => {


  /*
        <input class="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required=""></input>
<div class="flex gap-3">
        <input class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required=""></input>
        <input class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required=""></input>
      </div>

            <div class="grid gap-6 w-full">
        <input class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="drop" placeholder="date" id="Email" name="email"></input>
      </div>

*/
  return (
    <div>
      






 
   
    <form class="px-7 h-screen grid justify-center items-center">
    <div class="grid gap-6" id="form">

    <h1 className='text-white text-center text-2xl hover:text-white cursor-default'>fill the form below and we will contact you soon...</h1>

    <div class="w-full flex gap-3">
      <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder="First Name" id="First-Name" name="First-Name" required=""></input>
      <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name"></input>
    </div>
     
      <div class="grid gap-6 w-full">
        <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="Email" placeholder="Email" id="Email" name="email"></input>
      </div>
      
      <div class="grid gap-6 w-full">
        <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder="phone number" id="Email" name="email"></input>
      </div>


      <div class="grid gap-6 w-full">
            <select id="center" name="center"  class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" >
              <option  disabled selected>center name </option>
              <option value="1">center 1</option>
              <option value="2">center 2</option>
              <option value="3">center 3  </option>
              <option value="4">center 4</option>
            </select>
      </div>



      <div class="w-full flex gap-3">
        <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder="parent First Name" id="First-Name" name="First-Name" required=""></input>
        <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder=" parent Last Name" id="Last-Name" name="Last-Name"></input>
      </div>

      <div class="grid gap-6 w-full">
        <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px]  placeholder:text-black rounded-xl" type="text" placeholder="parent phone number" id="Email" name="email"></input>
      </div>


      <button>
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <span >Send</span>
    </button>


    </div>
  </form>













    </div>
  );
}

export default JoinUsCompo;
