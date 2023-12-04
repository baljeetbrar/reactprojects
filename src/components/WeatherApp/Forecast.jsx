import React from 'react'

const Forecast = ( {title,} ) => {
  return (
    <>
        <div className='forecast-wrapper'>
           <div className='forecast-heading'>
                <p className='font-bold'>{ title }</p>
                <hr className='font-bold'/>
            </div> 
            <div className='forecast-time flex-container'>
                <div className='flex-vertical'>
                    <p>01:00PM</p>
                    <p>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    </p>
                    <p>19°</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Forecast