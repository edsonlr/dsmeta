import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//window.React = React

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
