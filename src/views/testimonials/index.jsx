import React from 'react';
import { Container,
	Col,
	Row,
} from 'reactstrap';

import CustomButton from '../../components/button';
import CardTestimonial from '../../components/card-testimonials';
import AnimationView from '../../utils/AnimationView';

function Home() {
  return(
      <Container>
        <div className='d-flex justify-content-center mt-4'>
            <h1 className='fw-bolder'>Testimonios</h1>
        </div>
        <Row
        className='mb-4'
        >
        {/** data.map(data => Col)  */}
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
            className='mt-4'
          >
            <CardTestimonial
              urlImage='https://s3-alpha-sig.figma.com/img/032c/bda0/d4bf4f7c13f1f38ae7b226e726fb1132?Expires=1658707200&Signature=Hc29-uhQu6C-dgGg6ABYNW9mAwGHTKKBi8KJ-kDS7q61JNnbUvdWwiqOi0ZMaZbwQU4VNzPoYG79W77z3yH4JfeSNJT~TAMSa7CIptUS42yCsJbFqJBfDAHvZYRIS~6A-U6lBx86TNUbhz434y~0f4wT~~yFvwU2F7f9XAWO5QrD4Bn~qKDFHcBEPoxlNElux84e8WcDNkwyi5DZ7wdjv9AEqLTfK~Z6uXTk6p95zt4MSrQbnQhOB3TwkB01LF7RpPea9IJmnd1WC1ZkPuaQohxK5ewNX0SFFZMZxFEENSP1XqEZQ7ogyzapNqhgv7qaJRTsVtlTJNbjyyHsC~Q~lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              names='Nombre y Apellido'
              testimonial='testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio'
            />
          </Col>
        </Row>
        <Row>
          <Col
            xl='12'
            className='my-3'
          >
            <CustomButton
              texto='¡Agregar mi testimonio!'
              color='#FF0000'
              variant='danger'
              className='float-start'
            />
            <CustomButton
              className='border border-dark fw-bolder float-end text-dark'
              texto='Ir al inicio'
              color='#FFFFFF'
              variant='ligth'
            />
          </Col>
        </Row>
      </Container>
  );
};

export default AnimationView(Home);
