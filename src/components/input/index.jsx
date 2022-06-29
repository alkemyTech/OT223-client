import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function CustomInput({
  type, name, id, isRequired, placeholder,
}) {
  return (
    <FormGroup floating>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required={isRequired}
      />
      <Label for={id}>
        {placeholder}
      </Label>
    </FormGroup>
  );
}

export default CustomInput;
