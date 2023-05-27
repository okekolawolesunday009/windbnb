import React, { useState } from 'react';
import "./Nav.css";
import {Button}  from "./button.css.js";
import {  ImLocation2 } from 'react-icons/im';



export default function ActiveGuest({adult, children, setFormsData}) {
  // const [adult, setAdult] = useState(props.adult);
  // const [children, setChildren] = useState(props.children);


  const handleIncrement = (e) => {
    if (e.target.name === 'adult') {
      // setAdult((prevValue) => prevValue + 1);
      setFormsData((prev) => ({
        ...prev,
        guest: {
          ...prev.guest,
          adult: prev.guest.adult + 1
        }
      }));
    } else if (e.target.name === 'children') {
      // setChildren((prevValue) => prevValue + 1);
      setFormsData((prev) => ({
        ...prev,
        guest: {
          ...prev.guest,
          children: prev.guest.children + 1
        }
      }));
   
    
    }
   
  };



  const handleDecrement = (e) => {
    
    if (e.target.name === 'adult' && adult > 0) {
      console.log("clicked adult")
      setFormsData((prev) => ({
        ...prev,
        guest: {
          ...prev.guest,
          adult: prev.guest.adult - 1
        }
      }))
    } else if (e.target.name === 'children' && children > 0) {
      console.log("clicked childred")
      setFormsData((prev) => ({
        ...prev,
        guest: {
          ...prev.guest,
          children: prev.guest.children - 1
        }
      }));
    }
  };
 

   
  return (
    <div>
     
        <div 
                   
                   className={`sub-item input  h-10 w-[130px] lg:w-full  lg:text-xl text-sm`}>
                    <div className='space-y-2'>
                    <p className='font-bold text-base'>Adult</p>
                    <p className='text-base'>Age 13 or above</p>
                    <div className='flex w-autospace-x-2'>
                    <Button 
                      onClick = {handleDecrement}
                      name = "adult"
                      className='minus border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      -
                    </Button>
                    <input className='w-6 text-center font-bold text-base' value = {adult}/>
                    <Button 
                    onClick = {handleIncrement}
                    name = 'adult'
                    className=' plus border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      +
                    </Button>
                    </div>

                    
                    </div>
                    <div className='mt-2 space-y-2'>
                    <p className='font-bold text-base'>Children</p>
                    <p className='text-base'>Age 2 - 12</p>
                    <div className='flex'>
                    <Button 
                    onClick = {handleDecrement}
                    name = "children"
                    className='minus border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      -
                    </Button>
                    <input className='w-6 text-center font-bold text-base ' value={children}/>
                    <Button 
                    onClick = {handleIncrement}
                    name = "children"
                    className='plus border-2 w-6 lg:w-8 px-1 rounded-sm' >
                      +
                    </Button>
                    </div>

                    
                    </div>
                   
                   
                    </div>
    
      
    </div>
  )
}
