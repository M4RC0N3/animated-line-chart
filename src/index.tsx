import React from 'react';
import ReactDOM from 'react-dom/client';
import ChartLine from './pages/chart/index';
import reportWebVitals from './reportWebVitals';
import './styles/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChartLine/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
