import React from 'react';
import SweetAlert from 'sweetalert2-react';
import { useDispatch } from 'react-redux';
import { closeAlert } from '../../store/slicing/controller/alertSlice';

function CustomAlert({
  title ='', text = '', icon = '', state, setState,
}) {
  const dispatch = useDispatch();

  return(
    <SweetAlert
      show={state}
      title={title}
      text={text}
      icon={icon}
      onConfirm={() => setState(!state)}
      onClick={dispatch(closeAlert())}
    />
  );
};
export default CustomAlert;
