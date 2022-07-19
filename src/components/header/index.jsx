import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { Link as LinkRouter } from 'react-router-dom';
import Logo from '../Logo';
import styles from './header.module.css';

function Header() {
  const [navbar, setNavbar] = useState({
    activeItem: null,
    pages: [
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
      {
        text: 'Log out',
        route: '/login'
      },
    ],
  });
  const [toggle, setToggle] = useState(false);

  function activeItem(index) {
    setNavbar({ ...navbar, activeItem: navbar.pages[index] });
  }

  function activeItemStyles(index) {
    if (navbar.pages[index] === navbar.activeItem) {
      return `${styles.active}`;
    }
    return `${styles.menuItems}`;
  }
  
  return (
    <Navbar
      color='light'
      expand='lg'
      light
      className={`${styles.navbarContainer}`}
    >
      <LinkRouter to='/inicio'>
        <Logo size='100'/>
      </LinkRouter>
      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse navbar className={`${styles.navigationMenu}`} id={toggle ? `${styles.hidden}` : ''}>
        {
          navbar.pages?.map((page, index) => (
            <LinkRouter
              to={page.route}
              key={page.text}
              className={activeItemStyles(index)}
              onClick={() => { activeItem(index); }}
            >
              {page.text}
            </LinkRouter>
          ))
        }
      </Collapse>
    </Navbar>
  );
}

export default Header;
