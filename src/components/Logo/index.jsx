import React from 'react';
import { useSelector } from 'react-redux';

function Logo({ size = '100', alt, ...props }) {
  const imageURL = useSelector((state) => state.organization.organization.image);
  const styles = {
    width: `${size}px`,
  };

  return (
    <img
      style={styles}
      src={imageURL}
      alt={alt}
      {...props}
    />
  );
}

export default Logo;
