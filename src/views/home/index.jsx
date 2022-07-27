import React from 'react';
import { useSelector } from 'react-redux';
import { Container,
	Col,
	Row,
} from 'reactstrap';

import CustomButton from '../../components/button';
import CardStaff from '../../components/card-staff'
import CardTestimonial from '../../components/card-testimonials';
import CardNew from '../../components/card-news';
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

function Home() {
  const welcomeText = useSelector((state) => state.organization.organization.welcomeText)
  return(
      <Container>
        <Row>
          <Col
            xs='12'
            sm='12'
            md='5'
            lg='6'
            xc='5'
            className='mt-5'
          >
            <p className='fs-2 fw-bolder'>Hola! Bienvenidx</p>
            <p>
              { welcomeText }
            </p>
            <CustomButton
              texto='Contactanos'
              color='#FF0000'
              variant='danger'
            />
          </Col>
          <Col
            xs='12'
            sm='12'
            md='5'
            lg='6'
            xc='5'
            className='mt-4'
          >
            <img
              src='https://s3-alpha-sig.figma.com/img/3780/a422/929e599bbabdfcf50b1a611f32d08436?Expires=1658707200&Signature=PXG~AaxTnmqV18kCWqzJfWDbVsw6WF1VPJksjj8jo5NCUUSNEuZAC5q6SkwYah9MeOb6~vIT7zmiC8T-To2VeTJl5ywI7vET0IRhz-jegnxQ-G-nsy3FOHA8LucKEfTg3m9jXDiEHJLktMFjPflBZjraZBRD1KFSfe3JjZBeTBLbCcdWBXW7VAPUISLvErj4BMCGE3vFLIctQUyF-fsLQ5XrsWqPvKnkM4ooTRf1Z~BDp-vZgkLXObU627zrb5Irx~ryR2589MhjaaTUCMVe2lQwPPX0ThTrMmj2UewgwTWcJH26r8XHeHe0ISK5RughxlpIoT-YKcdD5LiQq6NrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              className='img-fluid'
              alt='...'
            />
          </Col>
        </Row>
        <Row>
          <Col
            xl='12'
            className='mt-3'
          >
            <h3 className='float-start'>Nuestro Staff</h3>
            <a href='/nosotros' className='text-dark text-decoration-none float-end mt-2'>Ver todos</a>
          </Col>
        </Row>
        <Row>
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
          >
            <CardStaff
              urlImage='https://s3-alpha-sig.figma.com/img/032c/bda0/d4bf4f7c13f1f38ae7b226e726fb1132?Expires=1658707200&Signature=Hc29-uhQu6C-dgGg6ABYNW9mAwGHTKKBi8KJ-kDS7q61JNnbUvdWwiqOi0ZMaZbwQU4VNzPoYG79W77z3yH4JfeSNJT~TAMSa7CIptUS42yCsJbFqJBfDAHvZYRIS~6A-U6lBx86TNUbhz434y~0f4wT~~yFvwU2F7f9XAWO5QrD4Bn~qKDFHcBEPoxlNElux84e8WcDNkwyi5DZ7wdjv9AEqLTfK~Z6uXTk6p95zt4MSrQbnQhOB3TwkB01LF7RpPea9IJmnd1WC1ZkPuaQohxK5ewNX0SFFZMZxFEENSP1XqEZQ7ogyzapNqhgv7qaJRTsVtlTJNbjyyHsC~Q~lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              name='Julian Fernandez'
              job='Ceo / CoFounder'
            />
          </Col>
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
          >
            <CardStaff
              urlImage='https://i.imgur.com/Uwdc6N2.jpg'
              name='Maria Irola'
              job='Voluntaria'
            />
          </Col>
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
          >
            <CardStaff
              urlImage='https://i.imgur.com/ZJ1ijlk.jpg'
              name='Marco Fernandez'
              job='Voluntario'
            />
          </Col>
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
          >
            <CardStaff
              urlImage='https://i.imgur.com/rqhuRSt.jpg'
              name='Miriam Rodriguez'
              job='Voluntaria'
            />
          </Col>
          <Col
            xs='6'
            sm='4'
            md='4'
            ld='3'
            xl='2'
          >
            <CardStaff
              urlImage='https://i.imgur.com/XXI0Qgw.jpg'
              name='Marita Gomez'
              job='CoFounder'
            />
          </Col>
        </Row>
        <Row>
          <Col
            xl='12'
            className='mt-3'
          >
            <h3 className='float-start'>Testimonios</h3>
            <a href='/nosotros' className='text-dark text-decoration-none float-end mt-2'>Ver todos</a>
          </Col>
        </Row>
        <Row>
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
            className='mt-3'
          >
            <h3 className='float-start'>Últimas novedades</h3>
            <a href='/nosotros' className='text-dark text-decoration-none float-end mt-2'>Ver todos</a>
          </Col>
        </Row>
      <Row
        className='mb-5'
      >
        <Col
          xs='12'
          sm='12'
          md='12'
          lg='6'
          xl='6'
          className='my-2'
        >
          <CardNew
            urlImage='https://s3-alpha-sig.figma.com/img/3780/a422/929e599bbabdfcf50b1a611f32d08436?Expires=1658707200&Signature=PXG~AaxTnmqV18kCWqzJfWDbVsw6WF1VPJksjj8jo5NCUUSNEuZAC5q6SkwYah9MeOb6~vIT7zmiC8T-To2VeTJl5ywI7vET0IRhz-jegnxQ-G-nsy3FOHA8LucKEfTg3m9jXDiEHJLktMFjPflBZjraZBRD1KFSfe3JjZBeTBLbCcdWBXW7VAPUISLvErj4BMCGE3vFLIctQUyF-fsLQ5XrsWqPvKnkM4ooTRf1Z~BDp-vZgkLXObU627zrb5Irx~ryR2589MhjaaTUCMVe2lQwPPX0ThTrMmj2UewgwTWcJH26r8XHeHe0ISK5RughxlpIoT-YKcdD5LiQq6NrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt='demo'
          />
        </Col>
        <Col
          xs='12'
          sm='12'
          md='5'
          lg='6'
          xl='6'
          className='my-2'
        >
          <CardNew
            urlImage='https://s3-alpha-sig.figma.com/img/3780/a422/929e599bbabdfcf50b1a611f32d08436?Expires=1658707200&Signature=PXG~AaxTnmqV18kCWqzJfWDbVsw6WF1VPJksjj8jo5NCUUSNEuZAC5q6SkwYah9MeOb6~vIT7zmiC8T-To2VeTJl5ywI7vET0IRhz-jegnxQ-G-nsy3FOHA8LucKEfTg3m9jXDiEHJLktMFjPflBZjraZBRD1KFSfe3JjZBeTBLbCcdWBXW7VAPUISLvErj4BMCGE3vFLIctQUyF-fsLQ5XrsWqPvKnkM4ooTRf1Z~BDp-vZgkLXObU627zrb5Irx~ryR2589MhjaaTUCMVe2lQwPPX0ThTrMmj2UewgwTWcJH26r8XHeHe0ISK5RughxlpIoT-YKcdD5LiQq6NrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt='demo'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AnimationView(Home);
