import React from 'react'

const TempratureAndDetails = ({weatherDescription,temperature,feelsLike, humidity, windSpeed,sunriseTime,sunsetTime ,minTemperature,maxTemperature,weatherIcon}) => {

  return (
    <>
        <div className='flex-container temprature-wrapper'>
            <div className='city-name'>
                <h5 className='capitalize-font '>{`${weatherDescription}`}</h5>
            </div>
            <div className='temp-details flex-container'>
              <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" />
              <h1 className='font-bold temp-header'>{`${temperature}`}°</h1>
              <div className='real-feel flex-vertical' >
                  <p>Real Feels : <span>{`${feelsLike}°`}</span></p>
                  <p>Humidity : <span>{`${humidity}`}%</span></p>
                  <p>Wind : <span>{`${windSpeed}km/h`}</span></p>
              </div>
              <div className='sunrise-wrapper flex-container'>
                  <p className='sunrise-temp'>
                      <i></i>SunRise: <span className='sun-time'>{`${sunriseTime}`}</span>
                  </p>
                  <p className='sunrise-temp'>|</p>
                  <p className='sunrise-temp'>
                      <i></i>SunSet: <span className='sun-time'>{`${sunsetTime}`}</span>
                  </p>
                  <p className='sunrise-temp'>|</p>
                  <p className='sunrise-temp'>
                      <i></i>High: <span className='sun-time'>{`${maxTemperature}`}°</span>
                  </p>
                  <p className='sunrise-temp'>|</p>
                  <p className='sunrise-temp'>
                      <i></i>Low: <span className='sun-time'>{`${minTemperature}°`}</span>
                  </p>
                 
              </div>
            </div>
        </div> 
    </>
  )
}

export default TempratureAndDetails