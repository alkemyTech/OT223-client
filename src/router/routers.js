import React from 'react';
import Contact from '../views/contact';

const Routers = [
  {
    path: '/',
    element: <h1>FIRST PAGE</h1>,
    id: 0,
  },
  {
    path: '/page2',
    element: <h1>SECOND PAGE</h1>,
    id: 1,
  },
  {
    path: '/contact',
    element: <Contact />,
    id: 2,
  },
];

export default Routers;
