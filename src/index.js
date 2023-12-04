import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiHandler from './components/ApiHandler/ApiHandler';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ApiHandler>
      <App />
   </ApiHandler>
  </React.StrictMode>
);

reportWebVitals();
