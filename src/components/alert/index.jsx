import React from 'react';
import SweetAlert from 'sweetalert2-react';

const CustomAlert = ({
  title = '', text = '', icon = 'info', state, setState,
}) => {
  <SweetAlert
    show={state}
    title={title}
    text={text}
    icon={icon}
    onConfirm={() => setState(!state)}
  />;
};
export default CustomAlert;
