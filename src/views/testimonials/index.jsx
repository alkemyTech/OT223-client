import React from 'react';
import { Container,
	Col,
	Row,
} from 'reactstrap';

import CustomButton from '../../components/button';
import CardTestimonial from '../../components/card-testimonials';
import AnimationView from '../../utils/AnimationView';

const testimonies = [
  {
    name: 'Steven Booth',
    image: 'https://i.imgur.com/i4JgWS7.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..'
  },
  {
    name: 'Harold Clark',
    image: 'https://i.imgur.com/eq0IyTj.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..',
  },
  {
    name: 'Theresa Thomas',
    image: 'https://i.imgur.com/Wkc0sE5.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..',
  },
  {
    name: 'Kimberly Kennedy',
    image: 'https://i.imgur.com/1IOv9gU.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..',
  },
]

function Testimonies() {
  return(
      <Container>
        <div className='d-flex justify-content-center mt-4'>
            <h1 className='fw-bolder'>Testimonios</h1>
        </div>
        <Row
        className='mb-4'
        >
        {
            testimonies.map(testimony => (
              <Col
                key={testimony.name}
                xs='6'
                sm='4'
                md='4'
                lg='3'
                xl='2'
              >
                <CardTestimonial
                  urlImage={testimony.image}
                  names={testimony.name}
                  testimonial={testimony.content}
                />
              </Col>
            ))
          }
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
        <br /><br /><br /><br />
      </Container>
  );
};

export default AnimationView(Testimonies);
