import React from 'react';
import {Row, Col} from 'react-bootstrap'

const TimeAndLocation = ({ cityName, country, formattedPublishedAt, timezoneOffset }) => {
  return (
    <>
      <Row className='localtime-information justify-content-center'>
        <div className='date-time'>
          <span>{formattedPublishedAt}</span>,
        </div>
        <div className='date-time'>
          <h2 className='text-bold'>{`${cityName}, ${country}`}</h2>
        </div>
      </Row>
    </>
  );
};

export default TimeAndLocation;