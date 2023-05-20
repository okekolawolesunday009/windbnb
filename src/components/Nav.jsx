import React, { useState } from 'react'
import Logo from './Logo';
import "./Nav.css";
import {  AiOutlineSearch } from 'react-icons/ai';
import {  MdCancel } from 'react-icons/md';


export default function Nav() {
    const [showNavPage, setShowNavPage] = useState(false);
    const [formsData, setFormsData] = useState({
      site : "Helsinki, Finland",
      guest: ""
    });

    const handleChange = (e) => {
      setFormsData(e.target.value);
      e.preventDefault()
    }
  
    const handleSearchInputClick = () => {
      setShowNavPage(!showNavPage);
      console.log("click");
    };
    window.addEventListener('click', handleSearchInputClick);

   
    
  
  return (
    <div className='flex md:space-y-6 lg:justify-between lg:flex-row flex-col lg:items-center Nav'>
        <Logo/>
        <div onClick={handleSearchInputClick}
        className='flex items-center lg:mx-[100px] mx-auto mt-7 lg:mt-0 bg-white justify-between h-14 w-[290px] lg:w-[350px]  drop-shadow search'>
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
                onClick={handleSearchInputClick}
                className='text-2xl md:text-xl search-icon'>< AiOutlineSearch/></div>
           </button>

          
        </div>

       
                {showNavPage && (
                  <div className={` "show wider-nav p-2" `}>
                  <div className='lg:flex '>
                     <div className='flex justify-between lg:hidden '>
                       <p className="font-bold text-base">Edit your search</p>
                       <div className='text-2xl md:text-xl lg:hidden '><MdCancel/></div> 
                     </div>
                     <div className='lg:flex lg:justify-between space-x-2 lg:w-full lg:items-center'>
                     <div className="flex flex-col lg:w-full lg:flex-row mt-5 drop-shadow bg-white rounded-lg py-2">
                       <div className="flex flex-col border_bottom lg:flex-1">
                         <label className="font-bold text-sm px-4">LOCATION</label>
                         <input className='input  h-10 w-[130px] lg:w-full text-center lg:text-xl text-sm' type="text" value="Helsinki Finland"/>
                       </div>
                       <div className="flex flex-col lg:flex-1">
                         <label className="font-bold text-sm px-4">GUEST</label>
                         <input className='input  h-10 w-[130px] lg:w-[100%] text-center lg:text-xl text-sm' type="text" placeholder="add Guest"/>
                       </div>
                     </div>
                     <div>
 
                    <div className='m-auto flex justify-center lg:flex-1 '>
                    <button className='flex justify-center p-3  w-[100px] lg:w-[100px] edit-button rounded-lg text-white'>
                           <div className='text-2xl md:text-xl text-white'>< AiOutlineSearch/></div>
                           Search
                     </button>
                    </div>
 
                     </div>
                     </div>
                   
                  </div>
             </div> 
              )}
                



    </div>
  )
}
