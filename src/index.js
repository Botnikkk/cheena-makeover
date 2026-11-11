import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap first, so our own stylesheets win any ties with its reboot rules.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
