import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card,
  CardBody,
  CardTitle,
  Container,
  Col,
  Form,
  Row,
  CardFooter
} from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
/* ---- Imports to Components ---- */
import TextForm from '../../components/TextForm/index';
import CustomButton from '../../components/button';
import { loginStart } from '../../store/slicing/auth/authSlice';
import loginScheme from '../../utils/loginValidation';
import AnimationView from '../../utils/AnimationView';
/* ---- Import image ----- */
import Hands from '../../assets/hands.png';
/* ---- Import styles ----- */
import styles from './login.module.css';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  const onSubmit = async (values) => {
    dispatch(loginStart(values));
    navigate('/inicio', { replace: true });
  };

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Container
      className='m-0'
    >
      <Row>
        <Col
          md='12'
          lg='8'
          xl='7'
        >
          <Card
            className='px-5 border-0 mt-5'
          >
            <CardBody>
              <CardTitle>
                Bienvenido
                <p
                  className='fs-1 fw-bolder'
                >
                  Inicia sesión en tu cuenta!
                </p>
              </CardTitle>
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
                <CustomButton
                  variant='danger'
                  type='submit'
                  texto='Inicia sesión'
                />
              </Form>
            </CardBody>
            <CardFooter
              className='border-0 bg-transparent d-flex justify-content-center'
            >
              <p>
                ¿No tienes una cuenta? 
                <Link to='/registro' className='text-decoration-none text-danger'> Registrate</Link>
              </p>
            </CardFooter>
          </Card>
        </Col>
        <Col
          lg='4'
          xl='5'
        >
          <img
            src={Hands}
            alt='hands'
            className={styles.imgResponsive}
          />
        </Col>
      </Row>
    </Container>
    
  );
}

export default AnimationView(LoginScreen);
