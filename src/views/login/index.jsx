import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
/* ---- Imports to Components ---- */
import TextForm from '../../components/TextForm/index';
import AnimationView from '../../utils/AnimationView';
import authValidationSchema from '../../utils/authValidation';

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(authValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextForm
        title='Correo Electrónico'
        name='email'
        control={control}
        error={errors.email}
      />
      <TextForm
        title='Contraseña'
        name='password'
        control={control}
        error={errors.password}
        type='password'
      />
      <Button>Submit</Button>
    </Form>
  );
}

export default AnimationView(LoginForm);
