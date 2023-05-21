import React, {  useEffect, useState } from 'react'
import Logo from './Logo';
import "./Nav.css";
import {  AiOutlineSearch } from 'react-icons/ai';
import {  ImLocation2 } from 'react-icons/im';
import {  MdCancel } from 'react-icons/md';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';
import {Button}  from "./button.css.js";


export default function Nav() {
    const [showNavPage, setShowNavPage] = useState(false);
    const [formsData, setFormsData] = useState({
      site : "Helsinki, Finland",
      guest: ""
    });
    const [isActive, setIsActive] = useState(true);
    const handleItemOver= () =>{
      setIsActive(true);
      console.log("enter");
    }
    
    const handleChange = (e) => {
      setFormsData(e.target.value);
      e.preventDefault()
    }
  
    const handleSearchInputClick = () => {
      setShowNavPage(!showNavPage);
      console.log("click");
    };

    // const handleBack = () => {
    //  window.history.back();
    //   console.log("back");
    // };

  return (
    <div className='flex md:space-y-6 lg:justify-between lg:flex-row flex-col lg:items-center Nav'>
        <Logo/>
        <div
         onClick={handleSearchInputClick}
          className='flex items-center lg:mx-[100px] mx-auto mt-7 lg:mt-0 bg-white  justify-between h-14 w-[290px] lg:w-[350px]  drop-shadow search'>
          <div className="input-land">
           <input 
            className='input  h-10 w-[130px] lg:w-40 text-center lg:text-xl text-sm'
            type="text"
            value={formsData.site}
            onChange={handleChange}/>

          </div>
            <input  
            onChange={handleChange}
            className='input input-guest h-10 w-20 lg:w-[130px] text-center lg:text-xl text-sm' 
            type='text'
            value = {formsData.guest}
             placeholder='Add guest'/>
           
           <button className='button px-4 w-20 lg:w-[60px] '>
                <div 
               
                className='text-2xl md:text-xl search-icon'>< AiOutlineSearch/></div>
           </button>

          
        </div>

       
                {showNavPage && (
                  <div className={` "show wider-nav p-2" `}>
                  <div className='lg:flex '>
                     <div className='flex justify-between lg:hidden '>
                       <p className="font-bold text-base">Edit your search</p>
                       <div 
                       onClick={handleSearchInputClick}
                       className='text-2xl md:text-xl lg:hidden '><MdCancel/></div> 
                     </div>
                     <div className='lg:flex lg:justify-between space-x-2 lg:w-full lg:items-center'>
                     <div className="flex flex-col lg:w-full lg:flex-row mt-5 drop-shadow bg-white rounded-lg py-2">
                       <div  onClick={handleItemOver}
                       className="flex flex-col border_bottom lg:flex-1">
                         <label className="font-bold text-sm px-4">LOCATION</label>
                         <input className='input  h-10 w-[130px] lg:w-full text-center lg:text-xl text-sm' type="text" value="Helsinki Finland"/>
                       </div>
                       <div  onClick={handleItemOver}
                       className="flex flex-col lg:flex-1">
                         <label className="font-bold text-sm px-4">GUEST</label>
                         <input className='input  h-10 w-[130px] lg:w-[100%] text-center lg:text-xl text-sm' type="text" placeholder="add Guest"/>
                       </div>
                     </div>
                     <div>
 
                    <div className='m-auto flex justify-center lg:flex-1 '>
                    <button 
                           
                           className='flex justify-center p-3  w-[100px] lg:w-[100px] edit-button rounded-lg text-white'>
                           <div className='text-2xl md:text-xl text-white'>< AiOutlineSearch/></div>
                           Search
                     </button>
                    </div>
 
                     </div>
                     </div>
                   
                  </div>

                 <div className='flex'>
                 <div 
                     className={`${isActive ? "active" : "guest"} guest sub-container flex flex-col lg:w-full lg:flex-row mt-5  bg-white rounded-lg py-2`}>
                    <div 
                    
                     className={`sub-item input  h-10 w-[130px] lg:w-full  lg:text-xl text-sm`}>
                      <div className='space-y-2'>
                      <p className='font-bold text-base'>Adult</p>
                      <p className='text-base'>Age 13 or above</p>
                      <div className='flex w-autospace-x-2'>
                      <Button className='border-2 px-1 rounded-sm' >
                        -
                      </Button>
                      <input className='w-4 text-center font-bold ' value='0'/>
                      <Button className='border-2 px-1 rounded-sm' >
                        +
                      </Button>
                      </div>

                      
                      </div>
                      <div className='mt-2 space-y-2'>
                      <p className='font-bold text-base'>Children</p>
                      <p className='text-base'>Age 2 - 12</p>
                      <div className='flex'>
                      <Button className='border-2 px-1 rounded-sm' >
                        -
                      </Button>
                      <input className='w-4 text-center font-bold ' value='0'/>
                      <Button className='border-2 px-1 rounded-sm' >
                        +
                      </Button>
                      </div>

                      
                      </div>
                     
                     
                      </div>
                      
                      
                    </div>
                    <div 
                    
                    className={`${isActive ? "active" : "location"} location  sub-container flex flex-col lg:w-full lg:flex-row mt-5  bg-white rounded-lg py-2`}>
                    
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
                  </div>
             </div> 
              )}
                



    </div>
  )
}
