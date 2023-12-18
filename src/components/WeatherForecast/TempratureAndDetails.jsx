import React from "react";
import { MdOutlineWindPower } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FiSunrise,FiSunset } from "react-icons/fi";
import { FaTemperatureHigh,FaTemperatureLow } from "react-icons/fa6";
import {Container, Row, Col} from 'react-bootstrap';

const TempratureAndDetails = ({
  weatherDescription,
  temperature,
  feelsLike,
  humidity,
  windSpeed,
  sunriseTime,
  sunsetTime,
  minTemperature,
  maxTemperature,
  weatherIcon,
}) => {


  return (
    <>
    <Container className="text-center">
      <Row className=" temprature-wrapper ">
        <Col xs={12} className="city-name text-center">
          <h5 className="capitalize-font">{`${weatherDescription}`}</h5>
        </Col>
      </Row>
      <Row className="temp-details flex-row">
        <Col xs={4}>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt=""
            />
        </Col>
        <Col>
          <h1 className="font-bold temp-header">{`${temperature}`}°</h1>
        </Col>
        <Col className="real-feel flex-vertical">
            <p>
              <span className="temp-icon">
                <PiFinnTheHumanFill />
              </span>
              Real Feels : <span>{`${feelsLike}°`}</span>
            </p>
            <p>
              <span className="temp-icon">
                <WiHumidity />
              </span>
              Humidity : <span>{`${humidity}%`}</span>
            </p>
            <p>
              <span className="temp-icon">
                <MdOutlineWindPower />
              </span>
              Wind : <span>{`${windSpeed}km/h`}</span>
            </p>
        </Col>

        </Row>
        <Row className="sunrise-wrapper d-flex flex-row justify-content-evenly">
          <Col xs="auto" className="sunrise-temp">
            <i className="sun-info-icon text-bold"><FiSunrise/></i>
            <span className="sun-info-head text-bold">SunRise:</span>
            <span className="sun-info-time">{`${sunriseTime}`}</span>
          </Col>
          <Col xs="auto" className="sunrise-temp">
            <i className="suntime-icon"><FiSunset /></i>
            <span className="sun-info-head text-bold">SunSet:</span>             
            <span className="sun-info-time">{`${sunsetTime}`}</span>
            
          </Col>
          <Col xs="auto" className="sunrise-temp">
            <i className="suntime-icon"><FaTemperatureHigh/></i>
            <span className="sun-info-head text-bold">High:</span>  
             <span className="sun-info-time">{`${maxTemperature}`}°</span>
          </Col>
          <Col xs="auto" className="sunrise-temp">
            <i className="suntime-icon"><FaTemperatureLow /></i>
            <span className="sun-info-head text-bold">Low:</span>  
            <span className="sun-info-time">{`${minTemperature}°`}</span>
          </Col>
        </Row>
    </Container>
    </>
  );
};

export default TempratureAndDetails;
