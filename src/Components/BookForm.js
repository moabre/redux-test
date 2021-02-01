import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookForm = () => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const toggleAdd = () => {
    dispatch({
      type: 'TOGGLE_ADD',
    });
  };

  const addBook = () => {
    dispatch({
      type: 'ADD_BOOK',
      payload: input,
    });
    toggleAdd();
  };

  const handleChange = (e) => {
    e.persist();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='modal'>
      <div className='bookform'>
        <div className='input__title'>
          <p>Title: </p>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='title'
            placeholder='Title of book'
          />
        </div>
        <div className='input__price'>
          <p>Price: </p>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='price'
            placeholder='$50.00'
          />
        </div>
        <div className='input__category'>
          <p>Category: </p>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='category'
            placeholder='Fiction'
          />
        </div>
        <div className='description'>
          <p>Description: </p>
          <textarea
            onChange={(e) => handleChange(e)}
            type='text'
            name='description'
            placeholder='Enter Description Here'
            className='description'
          />
        </div>
        <div className='button-wrapper'>
          <button onClick={addBook}>Save</button>
          <button onClick={toggleAdd}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
