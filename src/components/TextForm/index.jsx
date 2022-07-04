import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useController } from 'react-hook-form';
/* eslint react/jsx-props-no-spreading: "off", curly: "error" */

function TextForm({ title, name, control, error, ...props }) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <FormGroup>
      <Label style={{ width: '100%', textAlign: 'start' }}>{title}</Label>
      <Input invalid={error} {...field} {...props} />
      <FormFeedback>{error?.message}</FormFeedback>
    </FormGroup>
  );
}

export default TextForm;
