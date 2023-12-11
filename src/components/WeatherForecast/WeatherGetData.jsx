import React, { useContext, useEffect, useState } from "react";
import ApiDataContext from "../ApiHandler/ApiDataContext";

import WeatherForecast from "./WeatherForecast";
import WeatherApi from "./WeatherAPi";
import TopCities from "./TopCities";
import Inputs from "./Inputs";
import Forecast from "./Forecast";
import TimeAndLocation from "./TimeAndLocation";
import TempratureAndDetails from "./TempratureAndDetails";

const WeatherGetData = () => {
  const { weatherData } = useContext(ApiDataContext);
  const [formattedData, setFormattedData] = useState("");
  const city = "canada";

  const formattedWeatherData = (weatherDetails) => {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      sys: { country, sunrise, sunset },
      weather: [{ main: details, description, icon }],
      wind: { speed },
    } = weatherDetails;

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
      sunriseTime: sunrise,
      sunsetTime: sunset,
      weatherDetails: details,
      weatherDescription: description,
      weatherIcon: icon,
      windSpeed: speed,
    };
  };

  useEffect(() => {
    const data = formattedWeatherData(weatherData);
    setFormattedData(data);
    console.log("my data", data);
  });

  return (
    <>
      <div className="flex-container ">
        {formattedData && (
          <>
            <TopCities />
            <Inputs />
            <TimeAndLocation {...formattedData} />
            <TempratureAndDetails />
            <Forecast title="Hourly Forecast" />
            <Forecast title="Daily Forecast" />
          </>
        )}
      </div>
    </>
  );
};

export default WeatherGetData;
