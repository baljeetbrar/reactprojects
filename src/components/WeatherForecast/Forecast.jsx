import React from 'react';
import { format } from 'date-fns';
import {Container, Row, Col } from 'react-bootstrap';

const Forecast = ({ title, forecastData }) => {
  return (
    <>
      <Container className='forecast-wrapper text-center container-padding'>
        <div className='forecast-heading'>
          <p className='text-bold text-left'>{title}</p>
          <hr className='text-bold' />
        </div>
        <Row className='forecast-time '>
          {forecastData.map((value, index) => (
            <Col key={index} className='flex-vertical'>
              {/* For Hourly Forecast */}
              {title === 'Hourly Forecast' && (
                <>
                  <p>{format(new Date(value.dt * 1000), 'h:mm a')}</p>
                  <p>
                    <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`} alt={value.weather[0].description} />
                  </p>
                  <p>{value.temp}°</p>
                </>
              )}

              {/* For Daily Forecast */}
              {title === 'Daily Forecast' && (
                <>
                  <p>{format(new Date(value.dt * 1000), 'EEEE')}</p>
                  <p>
                    <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`} alt={value.weather[0].description} />
                  </p>
                  <p>{value.temp.day}°</p>
                </>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Forecast;
