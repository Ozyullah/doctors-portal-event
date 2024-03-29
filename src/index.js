import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel/lib/styles.css';
import 'react-day-picker/dist/style.css';
import ContextPages from './ContextPages/ContextPages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ContextPages>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextPages>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
