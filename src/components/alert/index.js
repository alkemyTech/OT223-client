import React from 'react';
import SweetAlert from 'sweetalert2-react';

function CustomAlert({
  title = '', text = '', icon = 'info', state, setState,
}) {
  return (
    <SweetAlert
      show={state}
      title={title}
      text={text}
      icon={icon}
      onConfirm={() => setState(!state)}
    />
  );
}
export default CustomAlert;
