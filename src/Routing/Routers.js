import React from 'react';
import Contact from '../views/contact';

const Routers = [
  {
    path: '/page1',
    element: <h1>FIRST PAGE</h1>,
  },
  {
    path: '/page2',
    element: <h1>SECOND PAGE</h1>,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];

export default Routers;
