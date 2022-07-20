import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { Link as LinkRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slicing/auth/authSlice'
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
    ],
  });
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth)

  function activeItem(index) {
    setNavbar({ ...navbar, activeItem: navbar.pages[index] });
  }

  function activeItemStyles(index) {
    if (navbar.pages[index] === navbar.activeItem) {
      return `${styles.active}`;
    }
    return `${styles.menuItems}`;
  }
  
  const onLogOut = () => {
    dispatch(logout());
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
        {
          user ? (
            <LinkRouter
              to='/login'
              className={`${styles.logInButton}`}
              onClick={onLogOut}
            >
              Log out
            </LinkRouter>
          ) : (
            <>
              <LinkRouter
                to='/login'
                className={`${styles.logInButton}`}
              >
                Log in
              </LinkRouter>
              <LinkRouter
                to='/registro'
                className={`${styles.registerButton}`}
              >
                Registrate
              </LinkRouter>
            </>
          ) 
        }
      </Collapse>
    </Navbar>
  );
}

export default Header;
