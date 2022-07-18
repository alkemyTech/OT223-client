import React from "react";
import Home from '../views/home';
import Register from "../views/register";
import LoginScreen from "../views/login";
import Contact from '../views/contact';
import BackOffice from "../views/Backoffice";
import News from '../views/news';

const Routers = [
  {
    path: "/",
    element: <Home />,
    id: 0,
  },
  {
    path: "/login",
    element: <LoginScreen />,
    id: 1,
  },
  {
    path: "/registro",
    element: <Register />,
    id: 2,
  },
  {
    path: '/inicio',
    element: <Home />,
    id: 3,
  },
  {
    path: '/contacto',
    element: <Contact />,
    id: 4,
  },
  {
    path: '/backoffice/*',
    element: <BackOffice />,
    id: 5,
  },
  {
    path: '/novedades',
    element: <News />,
    id: 6,
  }
];

export default Routers;
