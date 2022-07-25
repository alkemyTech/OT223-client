import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Container, Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/* ---- Imports to Components ---- */
import TextForm from '../../components/TextForm';
import CustomButton from '../../components/button';
import validationScheme from '../../utils/validation';
import { registerStart } from '../../store/slicing/auth/authSlice';
import AnimationView from '../../utils/AnimationView';

function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(validationScheme),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  const onSubmit = async (values) => {
    await dispatch(registerStart(values));
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Container>
      <Card
        className='border-0 my-3'
      >
        <CardHeader
          className='border-0 bg-transparent'
        >
          <CardTitle>
            <p className='fs-2 fw-bolder'>
              Crea una cuenta :D
            </p>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextForm
              title='Nombre'
              name='firstName'
              control={control}
              error={errors.firstName}
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
            <CustomButton
              variant='danger'
              type='submit'
              texto='Registrarse'
            />
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default AnimationView(RegisterScreen);
