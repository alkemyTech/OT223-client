import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers from "./Routers.js"

const RouteHandler = () =>{

    return (
            <BrowserRouter>
            <Routes>
                {Routers.map((route) =>{return(<Route path={route.path} element={route.element}/>);})}
            </Routes>
           </BrowserRouter>
    )
}

export default RouteHandler;