import React, { useState, useEffect } from 'react';
import LoadingApi from './LoadingApi';
import ErrorHandle from './ErrorHandle';
import { NewsDataContext} from './ApiDataContext';

const NewsApiHandler = ({children}) => {
    const [newsApiData, setNewsApiData] = useState([]);
    const [newsApiLoading, setNewsApiLoading] = useState(true);
    const [newsApiError, setNewsApiError] = useState('');
    const [countryCode, setCountryCode] = useState('us');
    const [newsCategory, setNewsCategory] = useState('');

    const fetchNewsApiData = async () => {
        try {
          const NEWSAPI = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${newsCategory}&apiKey=ae32d9ebf0f54a83b808c6ce84ede2ca`;
          const newsResponse = await fetch(NEWSAPI);
          const newsResult = await newsResponse.json();
          setNewsApiData(newsResult.articles);
        } catch (error) {
          setNewsApiError(error.message);
        } finally {
          setNewsApiLoading(false);
        }
      };

      useEffect(() => {
        fetchNewsApiData();
        console.log(`Showing News API Data for ${countryCode} and with ${newsCategory} category`);
      }, [countryCode, newsCategory]);

      const updateCountryCode = (newCountryCode) => {
        setCountryCode(newCountryCode);
      };
    
      const updateCategory = (newUpdateCategory) => {
        setNewsCategory(newUpdateCategory);
      };

  return (
    <NewsDataContext.Provider 
        value={{ 
            newsApiData, 
            newsApiLoading, 
            newsApiError, 
            updateCategory,
            updateCountryCode,
            }}>
     {children}
</NewsDataContext.Provider>
  )
}

export default NewsApiHandler