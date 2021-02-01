import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import './styles/bookform.css';

const EditForm = ({ book: { title, price, category, description, id } }) => {
  const bookValues = {
    title,
    price,
    category,
    description,
  };
  const { register, getValues } = useForm({
    defaultValues: bookValues,
  });
  const dispatch = useDispatch();

  const toggleEdit = () => {
    dispatch({
      type: 'TOGGLE_EDIT',
    });
  };

  const editBook = () => {
    const values = getValues();
    dispatch({
      type: 'EDIT_BOOK',
      payload: { ...values, id },
    });
    toggleEdit();
  };

  return (
    <div className='modal'>
      <div className='bookform'>
        <div className='input__title'>
          <p>Title: </p>
          <input type='text' name='title' placeholder='' ref={register} />
        </div>
        <div className='input__price'>
          <p>Price: </p>
          <input type='text' name='price' placeholder='' ref={register} />
        </div>
        <div className='input__category'>
          <p>Category: </p>
          <input type='text' name='category' placeholder='' ref={register} />
        </div>
        <div className='description'>
          <p>Description: </p>
          <textarea
            type='text'
            name='description'
            placeholder='Type a description'
            ref={register}
          />
        </div>
        <div className='button-wrapper'>
          <button onClick={editBook}>Save</button>
          <button onClick={toggleEdit}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
