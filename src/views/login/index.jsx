import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
/* ---- Imports to Components ---- */
import TextForm from '../../components/TextForm/index';
import { loginStart } from '../../store/slicing/auth/authSlice';
import loginScheme from '../../utils/loginValidation';

function LoginScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginScheme),
  });
  
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  const onSubmit = async (values) => {
    dispatch(loginStart(values));
  };

  useEffect(() => {
    console.log(user);
  }, [user])

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
        type='password'
        error={errors.password}
      />
      <Button>Submit</Button>
    </Form>
  );
}

export default LoginScreen;
