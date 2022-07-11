import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Icon from '../Icon'
import styles from './backofficecard.module.css'

function BackOfficeCard({ name, path }) {
  return (
    <Link
      to={`/backoffice/${path}`}
      key={name}
      className={`${styles.card} text-decoration-none text-primary`}
    >
        <Card
          outline
          color='light'
          className='h-100'
        >
          <CardBody>
            <CardTitle
              className='text-center'
              tag='h5'
            >
              {name}
            </CardTitle>
            <Icon
              className={`${styles.icon} position-absolute start-50 translate-middle`}
              type={path}
              size={120}
            />
          </CardBody>
        </Card>
      </Link>
    )
  }
  
  export default BackOfficeCard