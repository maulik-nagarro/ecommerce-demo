import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router";
import About from './About';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

console.log("Connection String:", process.env);

const appInsights = new ApplicationInsights({
  config: {
    connectionString: process.env.REACT_APP_AZURE_APPLICATION_INSIGHT_STRING, 
    enableAutoRouteTracking: true // optional but useful for SPAs like React
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call to track first page


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      
        <Route path='/' Component={() => <App />} />
        <Route path='/about' Component={() => <About />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
