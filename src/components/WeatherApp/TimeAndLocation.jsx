import React from 'react'


const TimeAndLocation = ({ cityName, country , timestamp}) => {
 
  return (
    <>
      <div className=' localtime-information'>
        <div className='date-time'> 
            <span>{`${timestamp}`}</span>,
        </div>
        <div className='date-time'> 
            <h2 className='font-bold'>{`${cityName}, ${country}`}</h2>
        </div>
       
      </div>
    
    </>
  )
}

export default TimeAndLocation