import React, {useEffect, useState}from 'react'


const Inputs = ({ onCityChange, onGeolocationSuccess, onGeolocationError}) => {
  const [city, setCity] = useState('');


    const handleSearch = ()=>{
      onCityChange(city);
    }

    const handleInputChange =(e)=>{
      setCity(e.target.value);
    }

    const handleKeyPress =(e)=>{
      if(e.key === 'Enter'){
        handleSearch();
      }
}


const handleGeolocationClick = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onGeolocationSuccess(latitude, longitude);
      },
      (error) => {
        onGeolocationError(error.message);
      }
    );
  } else {
    onGeolocationError("Geolocation is not supported in this browser.");
  }
}

useEffect(() => {
  // Request geolocation access as soon as the component loads
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onGeolocationSuccess(latitude, longitude);
      },
      (error) => {
        onGeolocationError(error.message);
      }
    );
  } else {
    onGeolocationError("Geolocation is not supported in this browser.");
  }
}, []);


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
                value={city}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
          </div>
          <div className='location-finder'>
                <span className='search-icon' onClick={handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </span> 
                <span className='location-icon' onClick={handleGeolocationClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
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