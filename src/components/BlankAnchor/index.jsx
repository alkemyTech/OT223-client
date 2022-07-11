import React from 'react';

const AnchorBlank = ({ href = '/', children, ...props }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  >
    {children}
  </a>
);

export default AnchorBlank;
