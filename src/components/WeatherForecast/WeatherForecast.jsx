import React from "react";
import {Container} from 'react-bootstrap'
import WeatherGetData from "./WeatherGetData";

const WeatherForecast = () => {
  return (
    <Container className=" weather-app-wrapper">
       <WeatherGetData />
    </Container>
  );
};

export default WeatherForecast;
