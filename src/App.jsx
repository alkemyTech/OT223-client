import React from 'react';
import './App.css';
import Footer from './components/Footer';
import RouteHandler from './Routing/RouteHandler';

function App() {
  return (

    <div className='App'>
      <RouteHandler />
      <Footer />
    </div>
  );
}

export default App;
