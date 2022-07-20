import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationStart } from './store/slicing/organizationSlice';
import CustomAlert from './components/alert';
import Header from './components/header';
import Routing from './router';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { isAlertViewed, alert } = useSelector((store) => store.alert);
  const { title, text, icon } = alert
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrganizationStart());
  }, []);

  return (
    <>
     {isAlertViewed &&
        <CustomAlert
        state={isAlertViewed}
        title={title}
        text={text}
        icon={icon}
        />
      }
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
