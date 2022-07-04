import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers from './Routers';
import Slider from '../components/slider';

function RouteHandler() {
  return (
    <BrowserRouter>
      <Slider />
      <Routes>
        {Routers.map((route) => (<Route path={route.path} element={route.element} />))}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteHandler;
