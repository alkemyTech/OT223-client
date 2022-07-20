import React from 'react';
import { Button } from 'reactstrap';

function CustomButton({
  variant, className, type = 'button', texto, onClick, color = '#FF0000', styles = {}
}) {
  styles.backgroundColor = color;
  return (
    <Button
      color={variant}
      className={className}
      type={type}
      style={styles}
      onClick={onClick}
    >
      {texto}
    </Button>
  );
}

export default CustomButton;
