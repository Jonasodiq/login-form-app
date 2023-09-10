import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Creating a root using ReactDOM.createRoot and targeting the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);// Rendering the 'App' component within the 'root' using React Concurrent Mode

