import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNewsView from './views/News/Add/Add-news.view';
import HeaderView from './views/Header/Header.view';
import ListNewsView from './views/News/List/List-news.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HeaderView></HeaderView>
      <ListNewsView></ListNewsView>
    </ChakraProvider>
  </React.StrictMode>
);

