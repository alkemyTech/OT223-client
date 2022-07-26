import React from 'react';
import { Link } from 'react-router-dom';
import { Container,
	Col,
	Row,
} from 'reactstrap';
import styles from './staff.module.css'

import CustomButton from '../../components/button';
import CardStaff from '../../components/card-staff';
import AnimationView from '../../utils/AnimationView';

const staffMembers = [
  {
    id: 0,
    name: 'Julian Fernandez',
    job: 'Job / CEO',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/032c/bda0/d4bf4f7c13f1f38ae7b226e726fb1132?Expires=1658707200&Signature=Hc29-uhQu6C-dgGg6ABYNW9mAwGHTKKBi8KJ-kDS7q61JNnbUvdWwiqOi0ZMaZbwQU4VNzPoYG79W77z3yH4JfeSNJT~TAMSa7CIptUS42yCsJbFqJBfDAHvZYRIS~6A-U6lBx86TNUbhz434y~0f4wT~~yFvwU2F7f9XAWO5QrD4Bn~qKDFHcBEPoxlNElux84e8WcDNkwyi5DZ7wdjv9AEqLTfK~Z6uXTk6p95zt4MSrQbnQhOB3TwkB01LF7RpPea9IJmnd1WC1ZkPuaQohxK5ewNX0SFFZMZxFEENSP1XqEZQ7ogyzapNqhgv7qaJRTsVtlTJNbjyyHsC~Q~lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  }
]

function Staff() {
  return(
      <Container>
        <div className='d-flex justify-content-center mt-4'>
            <h1 className='fw-bolder'>¡Nuestro staff!</h1>
        </div>
        <Row className='pt-3'>
          <Col
            xs='12'
            sm='12'
            md='8'
            lg='8'
            xl='8'
            className='mt-2'
          >
            <p className='fs-2 fw-bolder d-block mb-0'>Roberto Martinez</p>
            <p className='fs-4'>Rol que desempeña</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, fugiat rerum maxime laudantium et voluptate maiores tempora quae eligendi molestiae recusandae quibusdam magni incidunt odio itaque eaque voluptates veniam illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque omnis nemo impedit deserunt.
            </p>
            <Link to='/contact'>
              <CustomButton
                texto='¡Quiero ser parte!'
                color='#FF0000'
                variant='danger'
                className='fs-4 mt-4 mb-4'
              />
            </Link>
          </Col>
          <Col
            xs='10'
            sm='6'
            md='4'
            lg='4'
            xl='4'
            className='mt-3 mt-md-0'
          >
            <img
              src='https://s3-alpha-sig.figma.com/img/032c/bda0/d4bf4f7c13f1f38ae7b226e726fb1132?Expires=1658707200&Signature=Hc29-uhQu6C-dgGg6ABYNW9mAwGHTKKBi8KJ-kDS7q61JNnbUvdWwiqOi0ZMaZbwQU4VNzPoYG79W77z3yH4JfeSNJT~TAMSa7CIptUS42yCsJbFqJBfDAHvZYRIS~6A-U6lBx86TNUbhz434y~0f4wT~~yFvwU2F7f9XAWO5QrD4Bn~qKDFHcBEPoxlNElux84e8WcDNkwyi5DZ7wdjv9AEqLTfK~Z6uXTk6p95zt4MSrQbnQhOB3TwkB01LF7RpPea9IJmnd1WC1ZkPuaQohxK5ewNX0SFFZMZxFEENSP1XqEZQ7ogyzapNqhgv7qaJRTsVtlTJNbjyyHsC~Q~lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              className={styles.staff_img}
              alt='work leader'
            />
          </Col>
        </Row>
        <Row className='mt-4 mb-4'>
          {
            staffMembers.map(member => (
              <CardStaff
                key={member.id}
                urlImage={member.imageUrl}
                name={member.name}
                job={member.job}
              />
            ))
          }
        </Row>
      </Container>
  );
};

export default AnimationView(Staff);
