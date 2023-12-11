import React , {useState , useEffect} from 'react';
import LoadingApi from './LoadingApi';
import ErrorHandle from './ErrorHandle';
import ApiDataContext from './ApiDataContext';

const ApiHandler = ({children}) => {
    const [newsApiData, setNewsApiData] = useState([]);
    const [newsApiLoading, setNewsApiLoading] = useState(true);
    const [newsApiError, setNewsApiError] = useState('');
    const [countryCode, setCountryCode] = useState('us');
    const [newsCategory, setNewsCategory] = useState('');

    const [weatherData, setWeatherData] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherError, setWeatherError] = useState('');
    const [city, setCity] = useState('canada');
 
    useEffect (()=>{
        const fetchApiData = async () => {
            try {

                const NEWSAPI = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${newsCategory}&apiKey=ae32d9ebf0f54a83b808c6ce84ede2ca`;

                const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbabfe07ba4b6a1e9223c73658fddf01`;

                const [newsResponse, weatherResponse] = await Promise.all([
                    fetch(NEWSAPI),
                    fetch(WEATHER_API)
                ])

                const newsResult = await newsResponse.json();
                const weatherResult = await weatherResponse.json();

                setNewsApiData(newsResult.articles);
                setWeatherData(weatherResult);

                console.log('Api News Data', newsResult.articles);
                
            } catch (error) {
                setNewsApiError(error.message);
                setWeatherError(error.message);
            }finally{
                setNewsApiLoading(false);
                setWeatherLoading(false);
            }
        };
        fetchApiData();
        console.log(`Showing Data is of ${countryCode} and with ${newsCategory} category`);
        
    },[countryCode, newsCategory,city]);

    useEffect(() => {
        console.log('Weather API Data hellloooooooo ', JSON.stringify(weatherData));

      }, [weatherData]); 
    
    if (newsApiLoading || weatherLoading) {
            return <LoadingApi />
    }
    if(newsApiError || weatherError){
        const errorMessage = newsApiError || weatherError;
        return <ErrorHandle errorMessage={errorMessage} />
    }

    const updateCountryCode = (newCountryCode) =>{
        setCountryCode(newCountryCode)
    }
    const updateCategory = (newUpdateCategory) =>{
        setNewsCategory(newUpdateCategory);   
    }
    const updateCity = (newCity) => {
        setCity(newCity);
    }
    return(
        <ApiDataContext.Provider 
            value={{ 
                newsApiData, 
                newsApiLoading, 
                newsApiError, 
                updateCategory,
                updateCountryCode,
                weatherData,
                weatherError,
                weatherLoading,
                updateCity
                 }}>
        {children}
      </ApiDataContext.Provider>
    )
}
export default ApiHandler;