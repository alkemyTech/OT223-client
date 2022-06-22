import React from 'react';
import SweetAlert from 'sweetalert2';

const CustomAlert = ({ title= 'Hola', text = '', icon ='info', state, setState}) => {
  return (
     <SweetAlert
        show={state}
        title={title}
        text={text}
        icon={icon}
        onConfirm={() => setState(!state)}
      />
  )
}
export default CustomAlert;