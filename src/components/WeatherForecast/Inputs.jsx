import React, {useContext, useEffect, useState}from 'react';
import {Row, Col} from 'react-bootstrap';
import { WeatherDataContext } from '../ApiHandler/ApiDataContext';

const Inputs = () => {
  const {updateUnitType,updateCity} = useContext(WeatherDataContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery =(search) =>{
      setSearchQuery(search.target.value);
  }

  const handleSearchSubmit = (search) =>{
      search.preventDefault();
      updateCity(searchQuery);
      setSearchQuery('');
  }

  const handleTempUnitChange = (unitType) => {
    updateUnitType(unitType);
    console.log(`Data updated in ${unitType} unit`)
  };
 
  return (
    <>
      <Row className='inputs-elements justify-content-center container-padding'>
        <Col>
          <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="input-search-bar"
                placeholder="Search for city......"
                id="searchbar"
                name="searchbar"
                value={searchQuery}
                onChange={handleSearchQuery}
              />
            </form>
        </Col>
        <Col>
            <div className='temp-change'>
                <button active
                    className='temp-button'
                    onClick={() => handleTempUnitChange('metric')}
                    >
                    °C
                  </button>
                  <span className="temp-span">|</span>
                  <button
                    className='temp-button'
                    onClick={() => handleTempUnitChange('imperial')}
                  >
                    °F
                  </button>
              </div>
        </Col>
        
         
                
      </Row>
    </>
  )
}

export default Inputs