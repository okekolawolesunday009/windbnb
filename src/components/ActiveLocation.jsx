import React from 'react';
import "./Nav.css";
import {Locations}  from "./Exports.js";
import LocationListing  from "./LocationListing";


export default function ActiveLocation({site, setFormsData}) {
  
  function handleSelect (location) {
    setFormsData((prev) => ({
    ...prev,
    site : location.name
  }));

  }
  return (
   <div
    className={`sub-item  input  h-10 w-[160px] lg:w-full  lg:text-xl text-sm`}>
       {Locations.map((location) => 
       <LocationListing 
          key = {location.id} 
          location = {location}
          onSelect= {() => handleSelect(location)}/>)}

    </div>
    
  )
}
