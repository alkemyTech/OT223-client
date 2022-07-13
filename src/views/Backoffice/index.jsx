import React from 'react'
import { Container} from 'reactstrap'


import BackofficeRouter from './backOfficeRouter'


function BackOffice() {
  return (
    <div style={{backgroundColor: '#EDF2F7', minHeight: '100vh'}}>
      <Container className='p-5'>
        <BackofficeRouter />
      </Container>
    </div>
  )
}

export default BackOffice