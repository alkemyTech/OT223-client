import React from 'react';
import { Card,
	CardBody,
} from 'reactstrap';

function CustomCard({
    urlImage, names, testimonial
}) {
  return (
    <Card
      style={{
        borderRadius: '20px',
        width: '11rem',
        height: '11rem',
        margin: '.5rem .1rem',
        backgroundColor: '#fdffa4',
        borderColor: '#f9fe00'
      }}
    >
			<CardBody>
				<img
          src={urlImage}
          alt={names}
          className='rounded-circle mb-1'
          style={{width: 40, height: 40}}
        />
        <p
          className='fw-bolder text-dark mb-0'
          style={{fontSize:'.8rem'}}
        >
          {names}
        </p>
        <small
          className='mb-5'
          style={{fontSize:'.8rem'}}
        >
          {testimonial}
        </small>
			</CardBody>
    </Card>
  )
}

export default CustomCard;
