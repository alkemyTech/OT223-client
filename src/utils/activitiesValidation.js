import * as yup from 'yup';

const activityValidationSchema = yup.object({
  name: yup.string().required('La actividad debe tener un nombre'),
  content: yup.string().required('La actividad necesita un contenido')
});

export default activityValidationSchema;
