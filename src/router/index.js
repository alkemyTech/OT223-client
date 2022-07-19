import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Routers from './routers';

function RouteHandler() {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {Routers.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.id}
            />
          ))}
        </Routes>
      </AnimatePresence>
  );
}

export default RouteHandler;
