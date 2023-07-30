import React from 'react';
import "./GradeCompo.css"

const GradeCompo = ({type}) => {


    /*<div class="card">
    <div class="content">
        <div class="front">
            <h3 class="title">Secondry 1</h3>
            <p class="subtitle">click me :)</p>
        </div>

        <div class="back">
            <p class="description">
                Cool description so you can read it too my friend
            </p>
        </div>
    </div>
</div>*/


/*<div class="card" style={{display:"flex",flexDirection:"column" }} >
<h1>Secondary one</h1>
</div>*/







let data;


switch(type)
    {
        case"typeone":
            data={
                title:"How to register",
                paragraph:"Easy to regestar and use the website"
            };
            break;
            case"typetwo":
            data={
                title:"Follow up ",
                paragraph1:"1- weekly assessments",
                pargraph2:"2- Weakly Homework",
                pargraph3:"3- monthly exam ",
                pargraph4:"4- Check with guardians weekly to ensure every thing is fine there",
                pargraph5:"5- Sharing our experience and provides mental support",
           
            };
            break;
            case"typethree":
            data={
                title:"Find us at",
                paragraph:"Maadi , 15 may , Helwan , Hadayek helwan , Nasr city , Hadayek elmaadi"
            };
            break;
        default:
            break;
            
    }




    

  return (
    <div>
      




    <div class="card">
      <p class="card-title"> {data.title}</p>
      <p class="small-desc">
        {data.paragraph}
      </p>
      <p class="small-desc">
        {data.paragraph1}
      </p>
      <p class="small-desc">
        {data.pargraph2}
      </p>
      <p class="small-desc">
        {data.pargraph3}
      </p>
      <p class="small-desc">
        {data.pargraph4}
      </p>
      <p class="small-desc">
        {data.pargraph5}
      </p>
    <div class="go-corner">
      <div class="go-arrow">→</div>
    </div>
  </div>




    </div>
  );
}

export default GradeCompo;
