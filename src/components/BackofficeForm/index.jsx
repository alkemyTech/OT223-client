/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'reactstrap'
import { postTestimonyStart } from '../../store/slicing/testimonialsSlice';
import TestimoniesForm from '../TestimoniesForm';

const BackofficeForm = ({ method = 'create', name, data }) => {
  const [content, setContent] = useState(null);
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append('content', content);
    
    dispatch(postTestimonyStart(form))
  }

  return (
    <Container className='p-5 position-relative'>
      <TestimoniesForm
        method={method}
        content={content}
        setContent={setContent}
        handleSubmit={onSubmit}
      />
    </Container>
  )
}

export default BackofficeForm