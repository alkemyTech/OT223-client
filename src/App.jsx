import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import RouteHandler from './router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteHandler />
    </BrowserRouter>
  );
}

export default App;
