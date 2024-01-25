import React from 'react'
import "./Card.css"
import data from "../../utils/data.js";

const Card = () => {
 
  return (
    <div className="container">
    
     {
      data.map((val,index)=>(
        <div className='card-container' >
             <img src={val.img} alt="not" />
        <div className="avatar">
          <img src= {val.avatar} alt="" />
        </div>

        <div className="para">
          <p>
            {val.content}
          </p>
        </div>
    </div>
      ))
     } 
       
    </div>
   
  );
}

export default Card;
