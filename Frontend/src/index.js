import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { DataProvider } from './getdata/data-provider';
import { UpdateFlagProvider } from './UpdateFlagContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UpdateFlagProvider>
    <App />
  </UpdateFlagProvider>
  </React.StrictMode>
);

reportWebVitals();
