import React from 'react';
import Register from '../views/register';

const Routers = [
  {
    path: '/',
    element: <h1>FIRST PAGE</h1>,
    id: 0,
  },
  {
    path: '/register',
    element: <Register />,
    id: 1,
  },
];

export default Routers;
