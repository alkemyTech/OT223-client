import React from 'react'
import SetupLoader from '../components/setupLoader'
import styles from './floating.module.css'

const Floating = () => (
    <div className={styles.floating}>
      <SetupLoader color='red' secondaryColor='pink'  />
    </div>
  )

export default Floating