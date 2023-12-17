import { createContext, useContext } from 'react';

const WeatherDataContext = createContext();
const NewsDataContext = createContext();

export const WeatherApiData = () => {
  return useContext(WeatherDataContext);
};

export const NewsDataHandler = () =>{
  return useContext(NewsDataContext);
}

export { WeatherDataContext, NewsDataContext};