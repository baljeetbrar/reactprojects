import React, { useEffect, useState } from 'react'
import TopCities from './TopCities'
import Inputs from './Inputs'
import Forecast from './Forecast'
import GetWeatherData from './WeatherData'


const WeatherApp = () => {
   // State to store the user's selected city
  const [userCity, setUserCity] = useState(''); // Initialize with a default city if needed
  const [oldCity, setoldCity] = useState(''); // Initialize with a default city if needed
  const [coordinates, setCoordinates] = useState(null);
  const [hit, sethit] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState('C');
 

   // Function to update the user's selected city
   const handleCityChange = (newCity) => {
        console.log('18 city change')
        console.log(newCity);
        if(newCity != oldCity){
            setoldCity(newCity);
            setUserCity(newCity);
            setCoordinates(null);
            sethit(true);
        }
   };
   // Function to handle Geolocation Success
   const handleGeolocationSuccess = (latitude, longitude)=>{
    console.log('25 geo location success');
    setUserCity('');
    setCoordinates({lat : latitude, lon : longitude});
    sethit(true);
   }

   const handleGeolocationError = (error) => {
    console.error(error);
    // Handle the error, e.g., display an error message to the user
  };
  return (
    <>
            <div className='flex-container  weather-app-wrapper' >
                    <TopCities/>
                     
                    <Inputs 
                         onCityChange={handleCityChange}
                         onGeolocationSuccess={handleGeolocationSuccess}
                         onGeolocationError={handleGeolocationError}
                         setTemperatureUnit={setTemperatureUnit}
                         
                    />
                    <GetWeatherData 
                        userCity={userCity} 
                        hit={hit} 
                        sethit={sethit} 
                        coordinates={coordinates}
                       
                    />
                      
                    
          <Forecast title="Hourly Forecast"  />
          <Forecast title="Daily Forecast"  />
       
     
                     
            </div>
    </>
  )
}

export default WeatherApp