import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Routers from './Routers';

function RouteHandler() {
  return (
    <Routes>
      {Routers.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RouteHandler;
