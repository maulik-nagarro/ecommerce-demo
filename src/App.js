// @ts-nocheck
/* eslint-disable */
import { useEffect } from 'react';
import './App.css';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

function App() {
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: process.env.REACT_APP_AZURE_APPLICATION_INSIGHT_STRING, 
      enableAutoRouteTracking: true
    }
  });

  useEffect(() => {
    appInsights.loadAppInsights();

    document.title = "Azure Trainig | Home"
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        <b>Azure Training</b>
        <img src="https://msngrazuretraining.blob.core.windows.net/azure-training-demo/nagarro-logo.gif" className="App-logo" alt="logo" />
      </header>
      <button onClick={() => {
        appInsights.trackEvent({ name: 'CustomEventName' });
      }}>
        Trigger Application Insight
      </button>
    </div>
  );
}

export default App;
