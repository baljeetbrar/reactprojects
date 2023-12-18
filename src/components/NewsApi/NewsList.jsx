import React from 'react';
import { NewsDataHandler } from '../ApiHandler/ApiDataContext';
import NewsData from './NewsData';
import { Container, Row, Col } from 'react-bootstrap';

const NewsList = () => {
  const { newsApiData, newsApiLoading, newsApiError } = NewsDataHandler();

  if (newsApiLoading) {
    return <p>Loading......</p>;
  }
  if (newsApiError) {
    return <p>Error: {newsApiError.message}</p>;
  }

  return (
    <Container fluid>
    {/* <Row className='justify-content-md-center'>
      {newsApiData.map((data, index) => (
        <Col key={data.id || index} md={4} xs={6} className='mb-4'>
          <NewsData article={data} />
        </Col>
      ))}
    </Row> */}
  </Container>
  );
};

export default NewsList;
