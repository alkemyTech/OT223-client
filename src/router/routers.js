import React from "react";
import Home from '../views/home';
import Register from "../views/register";
import Login from "../views/login";
import Contact from '../views/contact';
import BackOffice from "../views/Backoffice";

const Routers = [
  {
    path: "/",
    element: <Home />,
    id: 0,
  },
  {
    path: "/login",
    element: <Login />,
    id: 1,
  },
  {
    path: "/register",
    element: <Register />,
    id: 2,
  },
  {
    path: '/inicio',
    element: <Home />,
    id: 3,
  },
  {
    path: '/contact',
    element: <Contact />,
    id: 4,
  },
  {
    path: '/backoffice/*',
    element: <BackOffice />,
    id: 5,
  }
];

export default Routers;
