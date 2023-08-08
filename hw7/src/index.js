import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterProvider from './Components/CounterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
