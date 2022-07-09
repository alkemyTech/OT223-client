import React from "react";
import Register from "../views/register";
import Login from "../views/login/index";

const Routers = [
  {
    path: "/",
    element: <h1>FIRST PAGE</h1>,
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
];

export default Routers;
