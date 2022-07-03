import React from 'react';
import { Input } from 'reactstrap';

function CustomInput({
  type, name, id, placeholder, onChange, isRequired,
}) {
  return (
    <Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      required={isRequired}
    />
  );
}

export default CustomInput;
