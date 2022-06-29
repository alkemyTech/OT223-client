import React from 'react';
import {
  Col,
  Container,
  Form,
  Row,
} from 'reactstrap';

import CustomInput from '../../components/input';
import CustomButton from '../../components/button';

function ScreenContact() {
  return (
    <Container>
      <Row>
        <Col
          sm='6'
        >
          <p className='fs-2 fw-bolder mb-3'>¿Queres contribuir?</p>
          <CustomButton
            className='fw-bolder text-light mb-4 rounded-3'
            texto='Contribuir'
            color='#FF0000'
            variant='danger'
          />
          <p className='fs-3 fw-bolder mb-3'>¡Contactate con nosotros!</p>
          <Form>
            <CustomInput
              type='text'
              name='names'
              id='names'
              placeholder='Nombre y Apellido'
              isRequired
            />
            <CustomInput
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              isRequired
            />
            <CustomInput
              type='textarea'
              name='consult'
              id='consult'
              placeholder='Escribe tu consulta...'
              isRequired={false}
            />
            <CustomButton
              type='submit'
              className='fw-bolder text-light float-start'
              texto='Enviar consulta'
              color='#0038FF'
              variant='primary'
            />
            <CustomButton
              className='border border-dark fw-bolder float-end text-dark'
              texto='Ir al inicio'
              color='#FFFFFF'
              variant='ligth'
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ScreenContact;
