import React from 'react';
import "../components/Nav.css";
import CardBox from '../components/CardBox';
import { data } from '../components/data';
import "../styles/section.css"

// flex card-container bg-red-500 md:flex-col lg:flex-row  flex-wrap
export default function Section() {
  return (
    <div>
        <div className='flex justify-between mt-10'>
            <div className='text-2xl lg:text-3xl font-bold transition '>Stays in Finland</div>
            <div className='text-base lg:text-2xl stays'>12+ stays</div>

        </div>
       <div className='mt-5 flex flex-wrap justify-between card-container transition ease-in-out delay-75'>
         {data.map((house, index) =>
          (<CardBox key={index} house={house}/> ))}
       </div>
      
    </div>
  )
}
