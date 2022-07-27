import React from "react";
import Home from '../views/home';
import RegisterScreen from '../views/register';
import LoginScreen from '../views/login';
import Contact from '../views/contact';
import BackOffice from "../views/Backoffice";
import News from '../views/news';
import Staff from "../views/staff";
import Testimonials from "../views/testimonials";

const Routers = [
  {
    path: "/",
    element: <Home />,
    id: 0,
    type: "shared"
  },
  {
    path: "/login",
    element: <LoginScreen />,
    id: 1,
    type: "public"
  },
  {
    path: "/registro",
    element: <RegisterScreen />,
    id: 2,
    type: "public"
  },
  {
    path: '/inicio',
    element: <Home />,
    id: 3,
    type: "shared"
  },
  {
    path: '/contacto',
    element: <Contact />,
    id: 4,
    type: "shared"
  },
  {
    path: '/backoffice/*',
    element: <BackOffice />,
    id: 5,
    type: "private"
  },
  {
    path: '/staff',
    element: <Staff />,
    id: 6,
    type: "shared"
  },
  {
    path: '/testimonials',
    element: <Testimonials />,
    id: 7,
    type: "shared"
  },
  {
    path: '/novedades',
    element: <News />,
    id: 8,
    type: "shared"
  }
];

export default Routers;
