import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeaderView from './views/Header/Header.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
  <React.StrictMode>
    <Router>
      <HeaderView />
      <App /> 
    </Router>
  </React.StrictMode>
);

