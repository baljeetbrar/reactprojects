import React,{useContext} from 'react'
import {Row, Col} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { WeatherDataContext } from '../ApiHandler/ApiDataContext';


const TopCities = () => {
    const {updateCity} = useContext(WeatherDataContext);

    const cities = [
        { id: 1, title: 'London' },
        { id: 2, title: 'Delhi' },
        { id: 3, title: 'Toronto' },
        { id: 4, title: 'Melbourne' },
        { id: 5, title: 'Punjab' },
      ];

    const handleCityChange = (title) => {
        updateCity(title);
    }

  return (
    <>  
        <Row className='top-cities-wrapper text-center justify-content-center'>
                {cities.map((city)=>(             
                    <Col key={city.id} xs={12} md={2} className='top-cities-buttons-col'>
                    <button
                      rounded
                      className='top-cities-buttons'
                      onClick={() => handleCityChange(city.title)}
                    >
                      {city.title}
                    </button>
                  </Col>
                ))}   
        </Row>    
    </>
  )
}

export default TopCities