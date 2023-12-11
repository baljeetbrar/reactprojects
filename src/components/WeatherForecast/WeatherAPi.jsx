import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingApi from '../ApiHandler/LoadingApi';
import ErrorHandle from '../ApiHandler/ErrorHandle';

const WeatherApi = ({ children, city  }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbabfe07ba4b6a1e9223c73658fddf01`;
        const response = await axios.get(WEATHER_API);
        setWeatherData(response.data);
      } catch (error) {
        setWeatherError(error.message);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  useEffect(() => {
    console.log('Weather API Data fafafaf ', response.data);
  }, [weatherData]);

  if (weatherLoading) {
    return <LoadingApi />;
  }

  if (weatherError) {
    return <ErrorHandle errorMessage={weatherError} />;
  }

  return <>{children}</>;
};

export default WeatherApi;
