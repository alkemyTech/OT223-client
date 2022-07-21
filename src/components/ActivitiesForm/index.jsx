import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Form, FormGroup } from 'reactstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextForm from '../TextForm';
import activityValidationSchema from '../../utils/activitiesValidation';

const ActivitiesForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      content: '',
    },
    resolver: yupResolver(activityValidationSchema),
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-debugger
    debugger
    console.log(data)
  }

  return (
    <Container className='p-5'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextForm 
          title='Nombre de la actividad'
          name='name'
          error={errors.name}
          control={control}
         />
         <FormGroup>
            <p>Contenido de la actividad</p>
            <CKEditor
              name='content'
              editor={ ClassicEditor }
              data='<p>Hello from CKEditor 5!</p>'
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor.element );
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
              onInstanceCreated={ (event, editor) => {
                console.log( 'Instance created', editor )
              }}
            />  
          </FormGroup>
          <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default ActivitiesForm