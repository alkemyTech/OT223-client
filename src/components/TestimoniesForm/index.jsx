/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5/build/ckeditor';
import { useSelector } from 'react-redux';
import Floating from '../../Floating';

const TestimoniesForm = ({ method, content, setContent, data = {}, handleSubmit }) => {
  const isUpdating = method === 'update';
  const isLoading = useSelector(state => state.testimonials.isLoading)
  const newTestimony = useSelector(state => state.testimonials.newTestimony)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='name'>Nombre</Label>
          <Input
            id='name'
            name='name'
            defaultValue={isUpdating ? data?.name : ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for='file'>Imagen</Label>
          <Input type='file' id='file' name='file' />
        </FormGroup>
        <FormGroup>
          <Label>Contenido</Label>
          <CKEditor
            editor={ Editor }
            data={isUpdating ? data?.content : '<p>El contenido acá!</p>'}
            onReady={ editor => setContent(editor.getData()) }
            onChange={ ( event, editor ) => setContent(editor.getData())}
          />
        </FormGroup>
        <Button>Submit</Button>
        {isLoading && <Floating />}
      </Form>
      <div>
        {Object.entries(newTestimony).map(([key, value]) => (
          <p key={key}>{key}:{value}</p>
        ))}
      </div>
    </>
  )
}

export default TestimoniesForm