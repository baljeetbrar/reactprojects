import React, { useContext, useEffect, useState } from "react";
import {WeatherDataContext} from "../ApiHandler/ApiDataContext";
import TopCities from "./TopCities";
import Inputs from "./Inputs";
import Forecast from "./Forecast";
import TimeAndLocation from "./TimeAndLocation";
import TempratureAndDetails from "./TempratureAndDetails";

const WeatherGetData = () => {
  const { weatherData, hourlyData, dailyData } = useContext(WeatherDataContext);
  const [formattedData, setFormattedData] = useState("");
  
  const formattedWeatherData = (weatherDetails) => {
    if (!weatherDetails) {
      return null; // or handle it in a way that makes sense for your application
    }
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      sys: { country, sunrise, sunset },
      weather: [{ main: details, description, icon }],
      wind: { speed },
      dt,
      timezone,
    } = weatherDetails;

    const timestampInSeconds = dt + timezone;
    const dateObj = new Date(timestampInSeconds * 1000);
    const formattedPublishedAt = dateObj.toUTCString();
    
    const sunriseTimeInSec = sunrise + timezone;
    const sunriseObj = new Date(sunriseTimeInSec * 1000);
    const sunriseUtcTime = sunriseObj.toUTCString();
    const sunriseDate = new Date(sunriseUtcTime); 
    const formattedSunrise = sunriseDate.toISOString().split("T")[1].split(".")[0];

    const sunsetTimeInSec = sunset + timezone;
    const sunsetObj = new Date(sunsetTimeInSec * 1000);
    const  sunsetUtcTime = sunsetObj.toUTCString();
    const sunsetDate = new Date(sunsetUtcTime); 
    const formattedSunset = sunsetDate.toISOString().split("T")[1].split(".")[0];

    return {
      latitude: lat,
      longitude: lon,
      temperature: temp,
      feelsLike: feels_like,
      minTemperature: temp_min,
      maxTemperature: temp_max,
      humidity,
      cityName: name,
      country,
      sunriseTime: formattedSunrise,
      sunsetTime: formattedSunset,
      weatherDetails: details,
      weatherDescription: description,
      weatherIcon: icon,
      windSpeed: speed,
      formattedPublishedAt,
    };
  };

  useEffect(() => {
    const data = formattedWeatherData(weatherData);
    setFormattedData(data);
  },[weatherData]);


  return (
    <>
      <div className="flex-container ">
        {formattedData && (
          <>
            <TopCities {...formattedData}/>
            <Inputs {...formattedData}/>
            <TimeAndLocation {...formattedData}/>
            <TempratureAndDetails {...formattedData}/>
            <Forecast title="Hourly Forecast" forecastData={hourlyData} {...formattedData}/>
            <Forecast title="Daily Forecast" forecastData={dailyData} {...formattedData}/>
            
          </>
        )}
      </div>
    </>
  );
};

export default WeatherGetData;
