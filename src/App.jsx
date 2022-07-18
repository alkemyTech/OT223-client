import React, { useEffect } from 'react';
import { useDispatch, /* useSelector */ } from 'react-redux';
import { getOrganizationStart } from './store/slicing/organizationSlice';
/* import CustomAlert from './components/alert'; */
import Header from './components/header';
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
      {/* <CustomAlert /> */}
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
