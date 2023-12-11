import React, {useEffect, useState}from 'react';
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";  

const Inputs = () => {
 
  return (
    <>
      <div className='inputs-elements flex-container'>
          <div className='search-bar'>
            <input 
                type="search" 
                className='input-search-bar'
                placeholder='Search for city......'
                id='searchbar'
                name='searchbar'
                
            />
          </div>
          <div className='location-finder'>
                <span className='search-icon' >
                  <CiSearch />
                </span> 
                <span className='location-icon' >
                  <IoLocationOutline />
                </span>

          </div>
                <div className='temp-change'>
                <button
                    className='temp-button' >
                    °C
                  </button>
                  <span className="temp-span">|</span>
                  <button
                    className='temp-button'>
                    °F
                  </button>

                </div>
      </div>
    </>
  )
}

export default Inputs