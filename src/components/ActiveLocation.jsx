import React from 'react';
import "./Nav.css";
import {Button}  from "./button.css.js";
import {  ImLocation2 } from 'react-icons/im';


export default function ActiveLocation() {
  return (
    <div>
        <div  
                    
                    className={`sub-item  input  h-10 w-[160px] lg:w-full  lg:text-xl text-sm`}>
                  <ul className='space-y-2'>
                    <li>
                      <div className='flex space-x-2'>
                        <ImLocation2/>
                        <p className='text-base'> helsinki Finland</p>
                      </div>
                  </li>
                    <li>
                      <div className='flex space-x-2'>
                        <ImLocation2/>
                        <p className='text-base'> helsinki Finland</p>
                      </div>
                  </li>
                    <li>
                      <div className='flex space-x-2'>
                        <ImLocation2/>
                        <p className='text-base'> helsinki Finland</p>
                      </div>
                  </li>
                    <li>
                      <div className='flex space-x-2'>
                        <ImLocation2/>
                        <p className='text-base'> helsinki Finland</p>
                      </div>
                  </li>
                    
                  </ul>
                  </div>
      
    </div>
  )
}
