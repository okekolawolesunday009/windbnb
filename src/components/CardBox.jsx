import React from 'react';
import "../styles/section.css";

export default function CardBox({house}) {
  return (
    <div className=''>
      
        {house.superHost === "superHost" ?
             <div className='card-items lg:h-[350px]  space-y-2'>
                <div>
                    {house.image}
                </div>
             <div className="flex justify-between ">
                <span className='superhost font-bold text-sm'>{house.superHost}</span>
                <div className='tertiaryColor'>
                    <p>{house.type} <span> {house.bed}</span></p>
                </div>
                
                <div className='tertiaryColor flex text-base'>
                    {house.star}
                    <p>{house.rating}</p>
                </div>
             
                </div>
                <div className='text-lg font-bold'>{house.title}</div>
        
             </div>
             :
             <div className='card-items lg:h-[269px]  space-y-2 '>
             <div>
                 {house.image}
             </div>
          <div className="flex justify-between ">
          
             <div className='tertiaryColor'>
                 <p>{house.type} <span> {house.bed}</span></p>
             </div>
             
             <div className='tertiaryColor flex text-base'>
                 {house.star}
                 <p>{house.rating}</p>
             </div>
          
             </div>
             <div className='text-lg font-bold'>{house.title}</div>
     
          </div>
             
           
           
           } 

       
        
        
    </div>
  )
}
