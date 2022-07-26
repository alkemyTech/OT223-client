import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../Icon';
import AnchorBlank from '../BlankAnchor';
import Logo from '../Logo';
import styles from './footer.module.css';

// TODO: navbar component
function Footer() {
  const socialMedia = useSelector((state) => state.organization.organization.social_media);
  const socialMediaEntries = Object.entries(socialMedia)

  return (
    <footer className={`${styles.footer} text-center position-relative pt-5`}>
      <div className={`${styles.footer__logo} position-absolute start-50 translate-middle`}>
        <Logo size='140' />
      </div>
      <div className={`${styles.footer_navbar} pt-5`}>
        <nav className='container'>
          <ul>
            {/* This is hard coded, when there's a navbar component, it'll be replaced */}
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Inicio</a>
            </li>
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Nosotros</a>
            </li>
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Novedades</a>
            </li>
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Testimonios</a>
            </li>
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Contacto</a>
            </li>
            <li className='d-inline-block mx-3'>
              <a href='/' className='text-decoration-none text-dark'>Contribuye</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='footer__social-media container mt-5'>
        <div className='row g-0 justify-content-center'>
          {
            socialMediaEntries.map(([name, url]) => (
              <div className={`${styles.social_media_item} mx-2`} key={name}>
                <AnchorBlank className='d-inline-block' href={url}>
                  <Icon type={name} size={45} />
                </AnchorBlank>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p className='mt-3'>2022 by Alkemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
