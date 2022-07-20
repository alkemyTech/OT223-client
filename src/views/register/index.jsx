import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
/* ---- Imports to Components ---- */
import TextForm from '../../components/TextForm';
import validationScheme from '../../utils/validation';
import AnimationView from '../../utils/AnimationView';

function RegistrationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(validationScheme),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextForm
        title='Nombre'
        name='name'
        control={control}
        error={errors.name}
      />
      <TextForm
        title='Apellido'
        name='lastName'
        control={control}
        error={errors.lastName}
      />
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
      <TextForm
        title='Repetir Contraseña'
        name='repeatPassword'
        control={control}
        error={errors.repeatPassword}
        type='password'
      />
      <Button>Submit</Button>
    </Form>
  );
}

export default AnimationView(RegistrationForm);
