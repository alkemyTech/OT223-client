import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers from './routers';

function RouteHandler() {
  return (
    <BrowserRouter>
      <Routes>
        {Routers.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteHandler;
