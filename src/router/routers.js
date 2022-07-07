import React from 'react';
import Home from '../views/home';
import Register from '../views/register';

const Routers = [
  {
    path: '/',
    element: <Home />,
    id: 0,
  },
  {
    path: '/register',
    element: <Register />,
    id: 1,
  },
];

export default Routers;
