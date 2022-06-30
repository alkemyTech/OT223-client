import React from 'react';
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
  ];

  return (
    <nav className={`${styles.navbarContainer} navbar navbar-expand-lg`}>
      <div className='container-fluid'>
        <LinkRouter to='/inicio'><img src={logo} alt='logo-somos-mas' className={`${styles.logo}`} /></LinkRouter>
        <button className={`${styles.menuButton}`} type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className={`${styles.toggleIcon}`}>Menu</span>
        </button>
        <div className={`${styles.navigationMenu} collapse navbar-collapse`} id='navbarSupportedContent'>
          {
            pages?.map((page) => <LinkRouter to={page.route} key={page.text} className={`${styles.menuItems}`}>{page.text}</LinkRouter>)
          }
          <div className={`${styles.divButtons} d-flex`}>
            <LinkRouter to='/login' className={`${styles.linksButtons}`}><button className={`${styles.logInButton}`} type='button'>Log in</button></LinkRouter>
            <LinkRouter to='/registro' className={`${styles.linksButtons}`}><button className={`${styles.registerButton}`} type='button'>Registrate</button></LinkRouter>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
