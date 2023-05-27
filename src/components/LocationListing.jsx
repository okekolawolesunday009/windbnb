import React from 'react';
import {  ImLocation2 } from 'react-icons/im';


export default function LocationListing({onSelect, location}) {


    const handleSelect = () => {
        onSelect(location);
        
      }
  return (

   <div onClick={handleSelect}>
              <div className='space-y-2'>
                
                  <div className='flex space-x-2'>
                    <ImLocation2/>
                    <p className='text-base'> {location.name}</p>
                  </div>
              
                </div>
    </div>
  

  )
}
