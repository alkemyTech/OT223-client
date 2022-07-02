import React from 'react';
import Login from '../components/views/Login';

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
