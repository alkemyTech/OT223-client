import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Routers from './Routers';

function RouteHandler() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Routers.map((route) => (<Route path={route.path} element={route.element} />))}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteHandler;
