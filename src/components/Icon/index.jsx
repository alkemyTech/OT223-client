import React from 'react';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Triangle } from '../../assets/images/triangle.svg';

const types = {
  triangle: (props) => <Triangle {...props} />,
  instagram: (props) => <Instagram {...props} />,
  facebook: (props) => <Facebook {...props} />,
  mail: (props) => <Mail {...props} />,
};

const Icon = ({ type = 'triangle', size = 40, ...props }) => {
  const px = `${Number(size) ? size : 40}px`;
  const styles = {
    width: px,
    height: px,
  };

  props.style = styles;

  return (
    <>
      {
        types[type](props)
      }
    </>
  );
};

export default Icon;
