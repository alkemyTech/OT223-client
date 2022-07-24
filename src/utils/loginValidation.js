import * as yup from 'yup';

const loginScheme = yup.object({
  email: yup
    .string()
    .email('Debe introducir un Correo Electrónico valido')
    .required('Debe introducir un Correo Electrónico'),
  password: yup
    .string()
    .min(5, 'La Contraseña debe tener un minimo de 5 caracteres')
    .required('Debe introducir una Contraseña'),
});

export default loginScheme;