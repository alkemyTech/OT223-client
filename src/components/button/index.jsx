import React from 'react';
import { Button } from 'reactstrap';

function CustomButton({
  className, type = 'button', texto, color = '#FF0000', variant,
}) {
  const style = {
    backgroundColor: color,
  };
  return (
    <Button
      color={variant}
      className={className}
      type={type}
      style={style}
    >
      {texto}
    </Button>
  );
}

export default CustomButton;
