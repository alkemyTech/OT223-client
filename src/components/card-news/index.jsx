import React from 'react';
import { Card,
	Col,
	Row,
} from 'reactstrap';
import CustomButton from '../button/index';

function CustomCard({
  urlImage, alt
}) {
  return (
    <Card
      style={{ backgroundColor: '#7e9afd' , borderColor: '#0038ff'}}
    >
			<Row>
				<Col
					xs='6'
					sm='6'
					md='10'
					lg='6'
					xl='5'
				>
					<img
						className='img-fluid rounded mx-auto d-block my-3 ms-3'
						src={urlImage}
						alt={alt}
					/>
				</Col>
				<Col
					xs='6'
					sm='6'
					md='10'
					lg='6'
					xl='7'
				>
					<div
						style={{
							fontSize: '1em',
							position: 'relative',
							margin: 0,
							padding: '1rem .5rem',
							border: 'none',
							boxShadow: 'none'
						}}
					>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum veritatis quos explicabo cupiditate, natus non officiis tempore animi maiores placeat, accusamus quae omnis velit sequi quia atque, minus repudiandae.</p>
							<div className='d-flex justify-content-center'>
							<CustomButton
								texto='Ver Novedad'
								color='#0038FF'
								variant='primary'
							/>
							</div>
					</div>
				</Col>
			</Row>
    </Card>
  )
}

export default CustomCard;
