import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationStart } from './store/slicing/organizationSlice';
import CustomAlert from './components/alert';
import Header from './components/header';
import Routing from './router';
import Footer from './components/Footer';
import './App.css';
import { autoLogin } from './store/slicing/auth/authSlice';

function App() {
  const { isAlertViewed, alert } = useSelector((store) => store.alert);
  const { title, text, icon } = alert
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)


  useEffect(() => {
    console.log(user)
  })

  useEffect(() => {
    dispatch(getOrganizationStart());
    const token = localStorage.getItem('token')
    if(token)
      dispatch(autoLogin({token, isAdmin: true}))
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
