import React from 'react';
import { Card,
	CardImgOverlay,
	CardFooter,
} from 'reactstrap';

function CustomCard({
  urlImage, name, job
}) {
  return (
    <Card
      className='text-white border-0 m-1'
      style={{
        borderRadius: '20px',
        width: '11rem',
        height: '11rem',
        margin: '.5rem .1rem',
        backgroundImage : `url("${urlImage}")`,
        backgroundSize: '100%'
      }}
    >
			<CardImgOverlay
				className='d-flex p-0'
			>
				<CardFooter
					className='align-self-end'
          style={{background: 'none' , borderTop : 'none'}}
				>
					<small className='fw-bolder d-block'>{name}</small>
          <small>{job}</small>
				</CardFooter>
			</CardImgOverlay>
    </Card>
  )
}

export default CustomCard;
