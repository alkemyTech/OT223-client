import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routesdb from "./Routesdb.js";


const RouteHandler = () =>{

    return (
        <div>
            <BrowserRouter>
            <Routes>
                {Routesdb.map((r) =>{return(<Route path={r.path} element={r.element}/>);})}
            </Routes>
           </BrowserRouter>
        </div>
    )
}

export default RouteHandler;