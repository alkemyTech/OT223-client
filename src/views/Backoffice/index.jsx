import React from 'react'

import BackofficeRouter from './backOfficeRouter'
import AnimationView from '../../utils/AnimationView';

function BackOffice() {
  return (
    <div style={{backgroundColor: '#EDF2F7', minHeight: '100vh'}}>
      <BackofficeRouter />
    </div>
  )
}

export default AnimationView(BackOffice);