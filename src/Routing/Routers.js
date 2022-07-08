import React from 'react';
import Login from '../views/login/Login';

const Routers = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/page2',
    element: <h1>SECOND PAGE</h1>,
  },
];

export default Routers;
