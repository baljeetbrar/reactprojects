import React,{useContext,useState, useEffect} from 'react'
import axios from 'axios';
import ErrorHandle from './ErrorHandle'
import LoadingApi from './LoadingApi'
import { WeatherDataContext} from './ApiDataContext';

const WeatherApiHandler = ({children}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState('');
  const [city, setCity] = useState('canada');
  const [unitType, setUnitType] = useState('metric');
  const [oneCallData, setOneCallData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  

  const fetchWeatherApiData = async () => {
    try {
      const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
      const weatherResponse = await axios.get(WEATHER_API, {
        params: {
          q: city,
          appid: 'cbabfe07ba4b6a1e9223c73658fddf01', 
          units: unitType,
        },
      });
      const weatherResult = weatherResponse.data;
      setWeatherData(weatherResult);
    } catch (error) {
      setWeatherError(error.message);
    } finally {
      setWeatherLoading(false);
    }
  };

  const fetchOneCallApiData = async () => {
    try {
      if (weatherData && weatherData.coord) {
        const ONE_CALL_API = `https://api.openweathermap.org/data/2.5/onecall`;
        const oneCallResponse = await axios.get(ONE_CALL_API, {
          params: {
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
            appid: 'cbabfe07ba4b6a1e9223c73658fddf01',
            units: unitType,
          },
        });
        const oneCallResult = oneCallResponse.data;
        console.log('One Call API Result:', oneCallResult);
        setOneCallData(oneCallResult);
      }
    } catch (error) {
      console.error('Error fetching One Call API data:', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherApiData();
    console.log('Showing Weather API Data:', weatherData);
  }, [city,unitType]);

  useEffect(() => {
    if (weatherData) {
      fetchOneCallApiData();
    }
  }, [weatherData, unitType]);

  useEffect(()=>{
    if (oneCallData && oneCallData.hourly && oneCallData.daily) {
      const hourlySlicedData = oneCallData.hourly.slice(0,6);
      setHourlyData(hourlySlicedData); 

      const dailySlicedData = oneCallData.daily.slice(0, 6);
      setDailyData(dailySlicedData)
      console.log('Hourly Data Api Page:', hourlySlicedData);
      console.log('Daily Data Api Page:', dailySlicedData);
    }
  },[oneCallData])
 
  const updateCity = (newCity) => {
    setCity(newCity);
  };

  const updateUnitType = (newUnitType) =>{
    setUnitType(newUnitType);
  }
  return (
    <WeatherDataContext.Provider 
            value={{ 
                weatherData,
                weatherError,
                weatherLoading,
                updateCity,
                updateUnitType,
                hourlyData,
                dailyData,
                 }}>
        {children}
      </WeatherDataContext.Provider>
  )
}

export default WeatherApiHandler