import { useEffect } from 'react';
import './App.css';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

function App() {
  useEffect(() => {
    appInsights.loadAppInsights();

    document.title = "Azure Trainig | Home"
  }, [appInsights]);

  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: process.env.REACT_APP_AZURE_APPLICATION_INSIGHT_STRING // Replace with your actual key
    }
  });

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
