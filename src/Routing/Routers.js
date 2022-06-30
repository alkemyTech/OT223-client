import React from 'react';
import Header from '../components/header';
import Home from '../views/home';

const Routers = [
  {
    path: '/',
    element: <Header />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

export default Routers;
