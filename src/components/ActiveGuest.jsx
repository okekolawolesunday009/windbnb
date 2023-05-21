import React from 'react';
import "./Nav.css";
import {Button}  from "./button.css.js";
import {  ImLocation2 } from 'react-icons/im';



export default function ActiveGuest() {
  return (
    <div>
        <div 
                   
                   className={`sub-item input  h-10 w-[130px] lg:w-full  lg:text-xl text-sm`}>
                    <div className='space-y-2'>
                    <p className='font-bold text-base'>Adult</p>
                    <p className='text-base'>Age 13 or above</p>
                    <div className='flex w-autospace-x-2'>
                    <Button className='border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      -
                    </Button>
                    <input className='w-4 text-center font-bold ' value='0'/>
                    <Button className='border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      +
                    </Button>
                    </div>

                    
                    </div>
                    <div className='mt-2 space-y-2'>
                    <p className='font-bold text-base'>Children</p>
                    <p className='text-base'>Age 2 - 12</p>
                    <div className='flex'>
                    <Button className='border-2 px-1 w-6 lg:w-8 rounded-sm' >
                      -
                    </Button>
                    <input className='w-4 text-center font-bold ' value='0'/>
                    <Button className='border-2w-6 lg:w-8 px-1 rounded-sm' >
                      +
                    </Button>
                    </div>

                    
                    </div>
                   
                   
                    </div>
      
    </div>
  )
}
