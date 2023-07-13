import React from 'react';
import './style/index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

let docRoot = document.getElementById('root')
if (docRoot !== null) {
  const root = createRoot(docRoot);

  root.render(<React.StrictMode>
    <App />
  </React.StrictMode>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

