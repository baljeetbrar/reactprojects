import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherApiHandler from './components/ApiHandler/WeatherApiHandler';
import NewsApiHandler from './components/ApiHandler/NewsApiHandler';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewsApiHandler>
    <WeatherApiHandler> 
          <App />
    </WeatherApiHandler>
    </NewsApiHandler>
  </React.StrictMode>
);

reportWebVitals();
