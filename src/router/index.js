import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, Outlet, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Routers from './routers';


const PrivateRoutes = ({ user }) => {
  if (user && user.length > 0) return <Outlet />
  return <Navigate to='/' />
};

const PublicRoutes = ({ user }) => {
  if (user && user.length > 0) return <Navigate to='/' />
  return <Outlet />
};

function RouteHandler() {
  const location = useLocation();
  const { user } = useSelector((store) => store.auth)

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route>
          {Routers.map((route) =>
            route.type === "shared" && (
              <Route
                path={route.path}
                element={route.element}
                key={route.id}
              />
            ))}
        </Route>
        <Route element={<PublicRoutes user={user} />}>
          {Routers.map((route) =>
            route.type === "public" && (
              <Route
                path={route.path}
                element={route.element}
                key={route.id}
              />
            ))}
        </Route>
        <Route element={<PrivateRoutes user={user} />}>
          {Routers.map((route) =>
            route.type === "private" && (
              <Route
                path={route.path}
                element={route.element}
                key={route.id}
              />
            ))}
        </Route>
        <Route path='*' element={<div>NotFoundPage</div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default RouteHandler;
