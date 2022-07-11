import React from "react";
import Home from '../views/home';
import Register from "../views/register";
import Login from "../views/login/index";

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
    id: 1,
  },
  {
    path: '/inicio',
    element: <Home />,
    id: 2,
  },
];

export default Routers;
