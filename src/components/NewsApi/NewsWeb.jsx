import React,{useState} from 'react'
import NewsList from './NewsList'
import { useApiData } from '../ApiHandler/ApiDataContext';
import { Countries, Categories, searchCountry ,filterCountriesByName} from '../NewsApi/NewsCountries';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NewsWeb = () => {
  const [outputCountry, setOutputCountry] = useState(' ');
  const [showSuggestions, setShowSuggestions] = useState(false); 
  const { newsApiLoading, updateCountryCode, updateCategory } = useApiData();

  const selectedCountries = [
    { countryCode: 'us', countryName: 'United States' },
    { countryCode: 'in', countryName: 'India' },
    { countryCode: 'cn', countryName: 'China' },
    { countryCode: 'gb', countryName: 'United Kingdom' },
    { countryCode: 'ae', countryName: 'United Arab Emirates' },
  ]
  
  const handleCountryChange = (userSelectedCountry)=> {
      updateCountryCode(userSelectedCountry);
  }
  const handleCategoryChange = (userCategoryChange) => {
    updateCategory(userCategoryChange);
  }
  const  handleUserSearch  = () => {
    console.log('User Input:', outputCountry);  
    
      const foundCountry = searchCountry(outputCountry);

      console.log('Found Country:', foundCountry);
      if (foundCountry) {
        updateCountryCode(foundCountry.countryCode);
      }else{
        console.log('Country Not Found');
      }
      setOutputCountry('');
  };

  const suggestionList = filterCountriesByName(Countries, outputCountry);

  return (
    <Container fluid className="news-web">
      <Row>
        <Col className="d-flex flex-row justify-content-around">
          <div className='countries-list '>
            {selectedCountries.map(({ countryCode, countryName }) => (
              <Button key={countryCode} onClick={() => handleCountryChange(countryCode)}>
                {countryName}
              </Button>
            ))}
          </div>
          <div className='searchquery-wrapper'>
            <Form className='search-box-form'>
              <Form.Group controlId="searchQuery" className="d-flex">
                <Form.Control
                  className='search-box'
                  type="text"
                  placeholder='Search Country....'
                  value={outputCountry}
                  onChange={(e) => {
                    setOutputCountry(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
                <Button variant="success" onClick={handleUserSearch} type='submit'>
                  Search
                </Button>
              </Form.Group>
              {showSuggestions && outputCountry && suggestionList.length > 0 && (
                <ul className='suggestion-list'>
                  {suggestionList.map((relatedCountry) => (
                    <li
                      key={relatedCountry.countryCode}
                      onClick={() => handleCountryChange(relatedCountry.countryCode)}
                    >
                      {relatedCountry.countryName}
                    </li>
                  ))}
                </ul>
              )}
            </Form>
            </div>
        </Col>
      </Row>
      <Row>
        <Col xs={9} >
          <div className='news-list-wrapper'>
                  <h1>Latest News</h1>
                  <NewsList />
          </div>
        </Col>
        <Col xs={3}>
          <div className='category-list-wrapper'>
            <h1>Categories</h1>
            <div className='d-flex flex-column'>
              {Categories.map((newCategory) => (
                <Button key={newCategory} className='uppercase' onClick={()=> handleCategoryChange(newCategory)}>
                  {newCategory}
                </Button>
              ))}
            </div>
          </div>
        </Col>
      
      </Row>
    </Container>
  );
};

export default NewsWeb;
