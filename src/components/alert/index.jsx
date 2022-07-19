import React from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import Swal from 'sweetalert2';

const SweetAlert = withSwalInstance(Swal);

function CustomAlert({
  title = '', text = '', icon = '', state, setState,
}) {
  return(
    <SweetAlert
      show={state}
      title={title}
      text={text}
      icon={icon}
      onConfirm={() => setState(!state)}
    />
  );
};
export default CustomAlert;
