import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrganizationStart } from './store/slicing/organizationSlice';
import Routing from './router';
import Footer from './components/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrganizationStart());
  }, []);

  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default App;
