import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Routers from './routers';

function RouteHandler() {
  return (
      <Routes>
        {Routers.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.id}
          />
        ))}
      </Routes>
  );
}

export default RouteHandler;
