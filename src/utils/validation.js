import * as yup from 'yup';

const validationScheme = yup.object({
  firstName: yup.string().required('Debe introducir un Nombre'),
  lastName: yup.string().required('Debe introducir un Apellido'),
  email: yup
    .string()
    .email('Debe introducir un Correo Electrónico valido')
    .required('Debe introducir un Correo Electrónico'),
  password: yup
    .string()
    .min(5, 'La Contraseña debe tener un minimo de 5 caracteres')
    .required('Debe introducir una Contraseña'),
  repeatPassword: yup
    .string()
    .required('Debe confirmar su Contraseña')
    .oneOf([yup.ref('password'), null], 'Las Contraseñas tienen que coincidir'),
});

export default validationScheme;
