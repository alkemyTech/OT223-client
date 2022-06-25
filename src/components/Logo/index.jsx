import React from 'react';
import logo from '../../assets/images/logo.png';

function Logo({ size = '100', ...props }) {
  const styles = {
    width: `${size}px`,
  };

  return (
    <img
      style={styles}
      src={logo}
      alt='Somos Más Logo'
      {...props}
    />
  );
}

export default Logo;
