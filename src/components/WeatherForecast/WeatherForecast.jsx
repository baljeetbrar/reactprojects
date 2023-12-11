import React from "react";

import WeatherGetData from "./WeatherGetData";

const WeatherForecast = () => {
  return (
    <div className="flex-container  weather-app-wrapper">
      <WeatherGetData />
    </div>
  );
};

export default WeatherForecast;
