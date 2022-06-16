import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const RouteHandler = () =>{

    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/page1" element={<h1>FIRST PAGE</h1>}/> 
                <Route path="/page2" element={<h1>SECOND PAGE</h1>}/> 
            </Routes>
           </BrowserRouter>
        </div>
    )
}

export default RouteHandler;