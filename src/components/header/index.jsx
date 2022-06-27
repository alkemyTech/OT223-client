import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as LinkRouter } from 'react-router-dom';
import logo from '../../assets/LOGO-SOMOS-MAS.png';
import styles from './header.module.css';

function Header() {
  const pages = [
    {
      text: 'Inicio',
      route: '/inicio',
    },
    {
      text: 'Nosotros',
      route: '/nosotros',
    },
    {
      text: 'Novedades',
      route: '/novedades',
    },
    {
      text: 'Testimonios',
      route: '/testimonios',
    },
    {
      text: 'Contacto',
      route: '/contacto',
    },
    {
      text: 'Contribuye',
      route: '/contribuciones',
    },
    {
      text: 'Log in',
      route: '/login',
    },
    {
      text: 'Registrate',
      route: '/registro',
    },
  ];

  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <img src={logo} alt='logo-somos-mas' className={`${styles.logo}`} />
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {
            pages && pages?.map((page) => <LinkRouter to='/'>{page.text}</LinkRouter>)
          }
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
