import React from 'react';
import { motion } from 'framer-motion';
/* eslint-disable */
const AnimationView = (Component) => (props) => {
  return <motion.div intial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Component {...props} /></motion.div>
}
/* eslint-enable */
export default AnimationView;