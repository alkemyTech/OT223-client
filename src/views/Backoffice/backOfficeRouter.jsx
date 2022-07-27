import React from "react";
import { Route, Routes } from "react-router-dom";
import BackofficeForm from "../../components/BackofficeForm";
import ListOfBackofficeCards from "../../components/ListOfBackofficeCards";

const routers = [
  {
    path: '/',
    element: <ListOfBackofficeCards />,
    id: 0
  },
  {
    path: '/news',
    element: <h2>Novedades</h2>,
    id: 1
  },
  {
    path: '/activities',
    element: <BackofficeForm method='create' />,
    id: 2
  },
  {
    path: '/categories',
    element: <h2>Categorias</h2>,
    id: 3
  },
  {
    path: '/testimonies',
    element: <h2>Testimonios</h2>,
    id: 4
  },
  {
    path: '/organization',
    element: <h2>Organización</h2>,
    id: 5
  },
  {
    path: '/slides',
    element: <h2>Slides</h2>,
    id: 6
  },
  {
    path: '/users',
    element: <h2>Usuarios</h2>,
    id: 7
  },
  {
    path: '/members',
    element: <h2>Miembros</h2>,
    id: 8
  }
]

const BackofficeRouter = () => (
    <Routes>
      {
        routers.map(({path, element, id}) => (
          <Route
            key={id}
            path={path}
            element={element}
          />
        ))
      }
    </Routes>
  )

export default BackofficeRouter;
