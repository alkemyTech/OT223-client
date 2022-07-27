/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5/build/ckeditor';

const ActivitiesForm = ({ data = {}, method, name }) => {
  const entries = Object.entries(data);
  const isUpdating = method === 'update';
  const [content, setContent] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append('content', content);
    console.log({name: form.get('name'), content: form.get('content')});
  }

  return (
    <Container className='p-5'>
      <Form onSubmit={onSubmit}>
        {
          entries.map(([key, value]) => (
            <FormGroup key={key}>
              <Label for={key}>{key}</Label>
              <Input name={key} value={isUpdating ? value : ''} />
            </FormGroup>
          ))
        }
        
        {/* <Input
          placeholder='Nombre de la actividad'
          name='name'
          required
        /> */}
        <FormGroup>
          <Label>Contenido</Label>
          <CKEditor
            editor={ Editor }
            data='<p>Tu contenido acá!</p>'
            onReady={ editor => setContent(editor.getData()) }
            onChange={ ( event, editor ) => setContent(editor.getData())}
          />  
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default ActivitiesForm