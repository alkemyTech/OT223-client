import React from 'react';
import logo from '../../assets/images/logo.png';

function Logo({ size = '100', alt, ...props }) {
  const styles = {
    width: `${size}px`,
  };

  return (
    <img
      style={styles}
      src={logo}
      alt={alt}
      {...props}
    />
  );
}

export default Logo;
