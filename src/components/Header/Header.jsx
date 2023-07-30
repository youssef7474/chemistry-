import React from 'react';
import "./Header.css"
import {  NavLink } from 'react-router-dom';
//import logo from "../../assets/logo.jpg"


const Header = () => {
  /*<NavLink to={"/Login"}>
  <h1 >Login</h1>
</NavLink>
            <img src={logo} alt='p' style={{width:"50px",borderRadius:"50%"}}></img>

*/
  return (
    <div className='py-5 text-white md:bg-white' style={{backgroundColor:"var(--Header)"}}>

      <div className='container m-auto'>



        <div className='flex items-center justify-between responav '>

          <div className='respoLogo'>
          logo
          </div>
         
          
        
          <div className='flex gap-14 respolinks' >

            <NavLink to={"/Home"} end>
              <h1 >Home</h1>
            </NavLink>
              
           
            <NavLink to={"/AboutUs"}>
              <h1 >About us</h1>
            </NavLink>


        

          <NavLink to={"/JoinUs"}>
            <h1 >Join us</h1>
          </NavLink>


   



          </div>
        
        
        </div>
    
    
      </div>
    
    </div>
  );
}

export default Header;
