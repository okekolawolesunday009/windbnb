import React from 'react';
import {  ImLocation2 } from 'react-icons/im';
import { ListItem } from './Exports';


export default function LocationListing({onSelect, location}) {


    const handleSelect = () => {
        onSelect(location);
        
      }
  return (

  <ListItem
   className='focus:bg-red-300'
   onClick={handleSelect} >
              <div className='space-y-4'>
                
                  <div className='flex space-x-2'>
                    <ImLocation2/>
                    <p className='text-base'> {location.name}</p>
                  </div>
              
                </div>
   </ListItem>
  

  )
}
