import React, { useState } from 'react';
import {
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import CustomInput from '../../components/input';
import CustomButton from '../../components/button';

function ScreenContact() {
  const [data, setData] = useState({
    names: '', email: '', consult: '',
  });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <Container className='pt-4 pb-5'>
      <Row>
        <Col
          lg='6'
        >
          <p className='fs-2 fw-bolder mb-3'>¿Queres contribuir?</p>
          <CustomButton
            className='fw-bolder text-light mb-4 rounded-3'
            texto='Contribuir'
            color='#FF0000'
            variant='danger'
          />
          <p className='fs-3 fw-bolder mb-3'>¡Contactate con nosotros!</p>
          <Form onSubmit={onSubmit}>
            <FormGroup floating>
              <CustomInput
                type='text'
                name='names'
                id='names'
                placeholder='Nombre y Apellido'
                value={data.names}
                onChange={handleChange}
                isRequired
              />
              <Label for='names'>
                Nombre y Apellido
              </Label>
            </FormGroup>
            <FormGroup floating>
              <CustomInput
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={data.email}
                onChange={handleChange}
                isRequired
              />
              <Label for='email'>
                Email
              </Label>
            </FormGroup>
            <FormGroup floating>
              <CustomInput
                type='textarea'
                name='consult'
                id='consult'
                placeholder='Escribe tu consulta...'
                value={data.consult}
                onChange={handleChange}
                isRequired
                style={{height: '140px'}}
              />
              <Label for='consult'>
                Escribe tu consulta...
              </Label>
            </FormGroup>
            <FormGroup className='pt-2'>
              <CustomButton
                type='submit'
                className='fw-bolder text-light float-start'
                texto='Enviar consulta'
                color='#0038FF'
                variant='primary'
                />
                <Link to='/'>
                <CustomButton
                  className='border border-dark fw-bolder float-end text-dark'
                  texto='Ir al inicio'
                  color='#FFFFFF'
                  variant='light'
                  />
                </Link>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ScreenContact;
