import React from 'react'
import Logo from './Logo';
import "./Nav.css";
import {  AiOutlineSearch } from 'react-icons/ai';
export default function Nav() {
  return (
    <div className='flex md:space-y-6 lg:justify-between lg:flex-row flex-col lg:items-center'>
        <Logo/>
        <div className='flex items-center lg:mx-[100px] mx-auto mt-7 lg:mt-0 bg-white justify-between h-14 w-[290px] lg:w-[350px]  drop-shadow search'>
            <input className='input input-land h-10 w-[130px] lg:w-40 text-center lg:text-xl text-sm' type="text" value="Helsinki Finland"/>
            <input  className='input input-guest h-10 w-20 lg:w-[130px] text-center lg:text-xl text-sm' type='text' placeholder='Add guest'/>
            {/* <SearchIcon/> */}
           <button className='button px-4 w-20 lg:w-[60px] '>
                <div className='text-2xl md:text-xl search-icon'>< AiOutlineSearch/></div>
           </button>
        </div>



    </div>
  )
}
