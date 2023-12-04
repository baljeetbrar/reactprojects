import React, { useEffect, useState } from 'react'
import {fetchWeatherData} from './Api/WeatherAPI';
import Errorhandle from '../components/Fetchapi/Errorhandle';
import TimeAndLocation from './TimeAndLocation';
import TempratureAndDetails from './TempratureAndDetails';
import {DateTime} from 'luxon';

const GetWeatherData = ({userCity,hit, sethit, coordinates}) => {
    // const API_KEY =`cbabfe07ba4b6a1e9223c73658fddf01`;
    const API_KEY = `6a85e3714f19f05e9cf3d82401337f20`;
    
    const searchParams = coordinates
    ? {}
    :{
        q : userCity,   
     
    };
   
const formatWeatherData= (data)=>{
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise, sunset, timezone},
        weather,
        wind:{speed}
    } = data;

    const {main: details,description ,icon}= weather[0];

    return{
        latitude: lat,
        longitude: lon,
        temperature: temp,
        feelsLike:feels_like,
        minTemperature: temp_min,
        maxTemperature:temp_max,
        humidity,
        cityName:name,
        country,
        sunriseTime: new Date(sunrise * 1000).toLocaleTimeString(),
        sunsetTime: new Date(sunset * 1000).toLocaleTimeString(),
        weatherDetails: details,
        weatherDescription: description,
        weatherIcon: icon,
        windSpeed:speed,
        timestamp: new Date(dt * 1000).toLocaleString(),
    };
};
const formatForecastWeather = (data) => {
    const { timezone, daily, hourly } = data;

    const formatToLocalTime = (secs, zone, format) =>
      DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

    const formattedDaily = daily.slice(1, 6).map((d) => ({
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }));

    const formattedHourly = hourly.slice(1, 6).map((d) => ({
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon,
    }));

    return { timezone, daily: formattedDaily, hourly: formattedHourly };
  };

const [wd, setwd]= useState('');
const [error, seterror]= useState('');
const [loading, setloading]= useState('');
const [formattedData, setFormattedData]     = useState(null);

  useEffect(()=>{
  //       console.log('line no 58', userCity);
  //       const fetchData = async () =>{
  //           try {
  //             const ApiUrl = coordinates
  //             ? `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`
  //             : `https://api.openweathermap.org/data/2.5/onecall?q=${userCity}&appid=${API_KEY}&units=metric`;
  
  //             if(ApiUrl && hit){
  //               const oneCallData = await fetchWeatherData(ApiUrl, searchParams);
  //               const formattedData = formatWeatherData(oneCallData.data);
  //               setFormattedData(formattedData)
  //               sethit(false)
  //               seterror('')
  //             }
  //           } catch (error) {
  //             seterror(error.message);
  //           }
  //       };
  //       fetchData();
  //     },[userCity, coordinates, hit])

        const apiUrl = coordinates
            ? `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`
            : `https://api.openweathermap.org/data/2.5/onecall?q=${userCity}&appid=${API_KEY}&units=metric`;

        if(apiUrl != undefined & apiUrl != '' && hit == true){
            fetchWeatherData(apiUrl, searchParams).then((data) => {
                // Handle successful data retrieval
               
                const wd  = data.data;
                //   console.log(formattedData);/
                console.log(hit);
                    const formattedData = formatWeatherData(wd);
                    sethit(false)
                    setFormattedData(formattedData)
                    seterror('')
              })
              .catch((error) => {
                // Handle errors
                console.log(error);
              });
        }
}, [userCity, coordinates, hit]);


// useEffect(() => {
//     // Make the One Call API request here
//     if (formattedData && hit == false) {
//       const oneCallApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${formattedData.latitude}&lon=${formattedData.longitude}&exclude=current,minutely,alerts&appid=${API_KEY}&units=metric`;

//       fetchWeatherData(oneCallApiUrl, {})
//         .then((oneCallData) => {
//           const formattedForecastData = formatForecastWeather(oneCallData.data);

//           // Combine the main data with the forecast data
//           const combinedData = { ...formattedData, ...formattedForecastData };
//           setFormattedData(combinedData);
//           console.log(setFormattedData);
//         })
//         .catch((error) => {
//           // Handle errors
//           console.log(error);
//         });
//     }
//   }, [formattedData, hit]);
    return (
        <>
    {error && <p>{error}</p>}
    {loading && <Errorhandle/>}   
      {formattedData && (
            <div>
            <TimeAndLocation {...formattedData} />
            <TempratureAndDetails {...formattedData}  />
        </div>
      )}
   </>
  )
}

export default GetWeatherData;