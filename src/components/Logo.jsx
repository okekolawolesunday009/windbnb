
import React from 'react';
import triangleLogo from "../assets/triangleLogo.png";
import "./Nav.css"

export default function Logo() {
  return (
    <div>
        <div className='flex space-x-2 items-center h-7 w-fit'>
            <img className='h-5 fill' src={triangleLogo} alt="windbnb logo" />
            <span className='h-3.5  font-bold logo'>windbnb</span>
        </div>

      
    </div>
  )
}
