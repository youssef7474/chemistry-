import React from 'react';
import "./LastHome.css"
import GradeCompo from '../GradeCompo/GradeCompo';
const LastHome = () => {
 
  return (
    <div className='container m-auto py-10'>
    <div className='ml-20 lastHomeMobile'>    

    <div className='flex items-center justify-center lastHomeMobile gap-10  ' style={{flexWrap:"wrap" , flexBasis:"700px"}}>
    
    <GradeCompo type='typeone' ></GradeCompo>
   <GradeCompo type='typetwo'></GradeCompo>
   <GradeCompo type='typethree'></GradeCompo>
    
    </div>
   

    </div>  
    </div>
  );
}

export default LastHome;
